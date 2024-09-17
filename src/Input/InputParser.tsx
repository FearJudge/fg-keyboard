import { GeneralButtons, Games } from "../GameProfiles/ButtonMapping";

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
    const commands = Input.split("[\\s.,->]+");
    const commandArray: string[] = [];
    // Loop over the split input
    for (const command of commands)
    {
      // Recursively search for instances of buttons within each block,
      // in case the notation does not delimit each button everytime
      const foundBtn: string[] = this.FindButtonCorrespondingToInput(command, []);
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

  public static FindButtonCorrespondingToInput(Input:string, InputArray:string[])
  {
    if (Input.length <= 0) {return InputArray; }
    for (const [sample, [regex, button]] of Object.entries(Games.StreetFighter2.buttonRegexes))
    {
      const fnd = Input.match(regex);
      if (fnd && regex != undefined) {
          InputArray.push(button);
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