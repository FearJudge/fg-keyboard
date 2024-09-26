import { MotionReplacements, UserLabels } from "../GameProfiles/ButtonMapping";
import { Games, GameFormat } from "../GameProfiles/Games";

export type InputData = {
  buttons: number[],
  extra: string[]
}

// Responsible for breaking down given string via the Game's
// buttonmapping profile.
class InputParser
{
  // Gives mock results (index of "A" at the inputText string) as an Array of id numbers.
  public static ParseCombo(inputText:string){
    const results: number[] = [];
    let i = 0;
    while (i < inputText.length && i > -1) {
      i = inputText.indexOf("A", i);
      if (i > -1) {
        results.push(i);
        i++;
      }
    }
    return results;
  }

  // Uses a game profile to match inputs
  public static ParseComboWithGame( Input: string ){

    // Split the input by common delimiters,
    // but not delimiters inside parenthesis or brackets.
    const commands = Input.split(/([\s]*-+[\s>]+|[\s]*[,;>]+)(?![^[(]*[\])])[\s]*/);
    const commandArray: number[] = [];
    const extraArray: string[] = [];
    // Loop over the split input
    for (const command of commands)
    {
      // Recursively search for instances of buttons within each block,
      // in case the notation does not delimit each button everytime
      const foundBtn: InputData = this.FindButtonCorrespondingToInput(command, [], []);
      // If there are any buttons found, push them to an array.
      if (foundBtn.buttons.length >= 1) {
        for (const button of foundBtn.buttons)
        {
            commandArray.push(button);
            extraArray.push("");
        }
      } else if (command != "" && command.match(/[,;>]+/) != null) {
        commandArray.push(0);
        extraArray.push("");
      }
    }
    return { 
      buttons: commandArray,
      extra: extraArray
    };
  }

  public static FindButtonCorrespondingToInput(Input: string, InputArray: number[], ExtraArray: string[])
  {
    function SetRegexRuleAndPropagate(button: number, fnd: string)
    {
      function SetButtonAndExtraData(button: number, input: string)
      {
          InputArray.push(button);
          ExtraArray.push(input);
      }

      // If the game has the flag replaceMotions, it will take general motion inputs
      // (such as qcf (quarter circle forward) and expand it to the buttons
      // required to press when using the directional keys.
      // Otherwise uses the id for that motion, which can typically be
      // represented on a single image. 
      if (game.replaceMotions && (button as number) in MotionReplacements) {
        const key: number = (button as number);
        const pushable: number[] = MotionReplacements[key];
        for (const motionPart of pushable)
        {
          SetButtonAndExtraData(motionPart, "");
        }
      } else {
        SetButtonAndExtraData(button, fnd);
      }
      Input = Input.replace(fnd, "");
      if (Input.length <= 0) {return InputArray; }
      returnVal = InputParser.FindButtonCorrespondingToInput(Input, InputArray, ExtraArray);
      return;
    }
    let returnVal: InputData = { buttons: InputArray, extra: ExtraArray }
    // This needs to be fetched from some variable or state later on.
    const game: GameFormat = Games.StreetFighter2;
    let lowestIndex: number = 9999;
    let bestString: string | undefined;
    let bestButton: number | undefined;

    if (Input.length <= 0) {return returnVal; }
    // Iterate over game rules and generic rules for our program.
    for (const [, [regex, button]] of 
      Object.entries(game.buttonRegexes).concat(Object.entries(UserLabels)))
    {
      // Search for the first match that starts from the 
      // leftmost of the input block.
      const fnd = Input.match(regex as RegExp);
      if (fnd && regex != undefined) {
        const index = Input.indexOf(fnd[0]);
        if (index < lowestIndex)
        {
          lowestIndex = index
          bestString = fnd[0]; 
          bestButton = button;
        }
      }
    }
    // Consume the found input and try to find more.
    if (bestButton && bestString) { SetRegexRuleAndPropagate(bestButton, bestString) }
    return returnVal;
  }

  public static GetCleanedInputCommand(InputArray: number[])
  {
    const game: GameFormat = Games.StreetFighter2;
    const cleanedInput: string[] = [];
    let flagForAddition: boolean = false;
    for (let i = 0; i < InputArray.length; i++)
    {
      let input: string = "";
      // Get the string expression of the regex or ">" if not found.a
      if (InputArray[i] == 0) { cleanedInput.push(" > "); flagForAddition = false; continue; }
      const data: [RegExp, number, string?, number?] | undefined = Object.entries(game.buttonRegexes).find((a) => a[1][1] == InputArray[i])?.[1];
      if (data != undefined && data[3] == 1) {
        if (flagForAddition) { input += "+"; }
        else { flagForAddition = true; }
      } else { flagForAddition = false; }
      if (data == undefined) { input += "?" }
      else { input += data[2]?? "!!!"; }
      if (!flagForAddition) { input += " "; }
      cleanedInput.push(input);
    }
    return cleanedInput;
  }
}

export default InputParser;