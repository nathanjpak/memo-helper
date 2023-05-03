import {
  TActiveActivity,
  TPassiveActivity,
} from "../functions/api/chooseActivity";

export interface IListedActivity {
  name: TPassiveActivity | TActiveActivity;
  isActive: boolean | "mixed";
  isBeginner: boolean;
  isIntermediate: boolean;
  isAdvanced: boolean;
  isAssessment?: boolean;
}

const activitiesList: IListedActivity[] = [
  {
    name: "Reading",
    isActive: false,
    isBeginner: true,
    isIntermediate: false,
    isAdvanced: false,
  },
  {
    name: "FillingInBlank",
    isActive: "mixed",
    isBeginner: true,
    isIntermediate: true,
    isAdvanced: true,
    isAssessment: true,
  },
  {
    name: "Rearranging",
    isActive: true,
    isBeginner: true,
    isIntermediate: true,
    isAdvanced: false,
  },
  {
    name: "FillingInHalf",
    isActive: "mixed",
    isBeginner: false,
    isIntermediate: true,
    isAdvanced: false,
    isAssessment: true,
  },
  {
    name: "Reciting",
    isActive: false,
    isBeginner: false,
    isIntermediate: false,
    isAdvanced: true,
  },
  {
    name: "TypingFirstLetter",
    isActive: true,
    isBeginner: false,
    isIntermediate: false,
    isAdvanced: true,
  },
];

export default activitiesList;
