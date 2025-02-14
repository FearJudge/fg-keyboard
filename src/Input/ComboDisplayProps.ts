export type ComboDisplayProps = {
  ButtonsToDisplay: number[];
  ExtraButtonDataToDisplay: string[];
  CleanedInputPerButton: string[];
  GameToUse: string;
  Character: string;
  AdditionalComboInputs: ExtraUserData;
};

type ExtraUserData = {
  ComboDamage: number;
  ComboName: string;
  ComboNotes: string;
  ComboRequirements: string;
};
