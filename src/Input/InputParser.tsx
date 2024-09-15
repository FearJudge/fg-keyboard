// Responsible for breaking down given string via the Game's 
// buttonmapping profile.
class InputParser
{
    public static ParseCombo(Input:string){
        return Input.search("A");
    }
}

export default InputParser;