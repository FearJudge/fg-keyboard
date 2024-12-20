import "../Output/SVGImport";
import InputParser from '../Input/InputParser';
import StreetFighter2 from '../GameProfiles/Games/StreetFighter2';
import Persona4AU from "../GameProfiles/Games/Persona4ArenaUltimax";

test('Try to form a Hadouken in SF2', () =>
{
  expect(InputParser.ParseComboWithGame("d df f cr.lp", StreetFighter2)).toStrictEqual<
  {buttons: number[], extra: string[]}>(
    {
      buttons: [2, 3, 6, 201, 10],
      extra: ["", "", "", "Cr.", ""]
    }
  )
});

test('Try numbers on P4AU', () =>
  {
    // Note that 5 is not a valid direction, so it should not show in the inputs.
    expect(InputParser.ParseComboWithGame("1379 -> 2468 -> 5", Persona4AU)).toStrictEqual<
    {buttons: number[], extra: string[]}>(
      {
        buttons: [1, 3, 7, 9, 0, 2, 4, 6, 8, 0],
        extra: ["", "", "", "", "", "", "", "", "", ""]
      }
    )
  });