import { Key } from "react";
import { MotionReplacements, GeneralButtons } from "../GameProfiles/ButtonMapping";
import { Games } from "../GameProfiles/Games";

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
        console.log("Found: " + i);
        results.push(i);
        i++;
      }
    }
    console.log("Results: " + results);
    return results;
  }

  // Uses a game profile to match inputs
  public static ParseComboWithGame(Input:string){
    // Split the input by common delimiters
    const commands = Input.split(/([\s]*-+[\s>]+|[\s.,:>]+)/);
    console.log(commands);
    const commandArray: number[] = [];
    // Loop over the split input
    for (const command of commands)
    {
      // Recursively search for instances of buttons within each block,
      // in case the notation does not delimit each button everytime
      const foundBtn: number[] = this.FindButtonCorrespondingToInput(command, []);
      // If there are any buttons found, push them to an array.
      if (foundBtn.length >= 1) {
        for (const button of foundBtn)
        {
            commandArray.push(button);
        }
      }
    }
    return commandArray;
  }

  public static FindButtonCorrespondingToInput(Input:string, InputArray:number[])
  {
    // This needs to be fetched from some variable or state later on.
    const game = Games.StreetFighter2;
    if (Input.length <= 0) {return InputArray; }
    for (const [, [regex, button]] of Object.entries(game.buttonRegexes))
    {
      const fnd = Input.match(regex as RegExp);
      if (fnd && regex != undefined) {
        // If the game has the flag replaceMotions, it will take general motion inputs
        // (such as qcf (quarter circle forward) and expand it to the buttons
        // required to press when using the directional keys.
        // Otherwise uses the id for that motion, which can typically be
        // represented on a single image. 
          if (game.replaceMotions && (button as number).toString() in MotionReplacements) {
            // This type forcing is still ugly, I found a way to make this prettier, but will push it for later.
            const key: keyof typeof MotionReplacements = 
              (button as number) as keyof typeof MotionReplacements;
            const pushable: number[] = MotionReplacements[key];
            for (const motionPart of pushable)
            {
              InputArray.push(motionPart);
            }
          } else {
            InputArray.push(button as number);
          }
          
          Input = Input.replace(fnd[0], "");
          if (Input.length <= 0) {return InputArray; }
          InputArray = InputParser.FindButtonCorrespondingToInput(Input, InputArray);
          return InputArray;
      }
    }
    return InputArray;
  }
}

export default InputParser;