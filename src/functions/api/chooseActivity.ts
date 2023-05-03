import activitiesList from "../../assets/activities";

import { IListedActivity } from "../../assets/activities";
import { TActivityDifficulty } from "./genLesson";

export interface IActivity {
  isActive: boolean;
  type: TPassiveActivity | TActiveActivity;
}

// TO ADD: "Listening"
export type TPassiveActivity =
  | "Reading"
  | "FillingInBlank"
  | "FillingInHalf"
  | "Reciting";

export type TActiveActivity =
  | "Rearranging"
  | "FillingInBlank"
  | "TypingFirstLetter";

const chooseActivity = (
  difficulty: TActivityDifficulty,
  isAssessment: boolean,
  prevActivity?: TPassiveActivity | TActiveActivity
): IListedActivity | null => {
  const validActivities = activitiesList.filter((activity) => {
    const checkAssessment = isAssessment
      ? activity.isAssessment === isAssessment
      : true;

    return (
      activity[`is${difficulty}`] &&
      checkAssessment &&
      prevActivity !== activity.name
    );
  });

  return (
    validActivities[Math.floor(Math.random() * validActivities.length)] || null
  );
};

export default chooseActivity;
