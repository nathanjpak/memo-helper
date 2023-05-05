import { IListedActivity } from "../../assets/activities";
import chooseActivity from "./chooseActivity";
import genFillingInBlankActivity from "./genFillingInBlankActivity";
import genReadingActivity from "./genReadingActivity";

export type TActivityDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface IForClientActivity extends IListedActivity {
  instructions?: string;
  displayedText?: string[];
  blanks?: string[];
}

const genLesson = (verseText: string, difficulty: TActivityDifficulty) => {
  // create array of activities
  const activities: Array<IForClientActivity> = [];
  for (let iteration = 0; iteration < 3; iteration++) {
    const prevActivity = activities[activities.length - 1];
    activities.push(
      prevActivity
        ? chooseActivity(difficulty, false, prevActivity.name)
        : chooseActivity(difficulty, false)
    );
  }

  activities.push(chooseActivity(difficulty, true));

  // call function that corresponds to activity

  for (const [index, activity] of activities.entries()) {
    const isAssessment = index === activities.length - 1;
    switch (activity.name) {
      case "FillingInBlank":
        const isActive =
          isAssessment || [true, false][Math.round(Math.random())];
        const {} = genFillingInBlankActivity(
          verseText,
          difficulty,
          isActive,
          isAssessment
        );
        break;
      default: // "Reading"
        const { instructions, displayedText } = genReadingActivity(verseText);
        activity.instructions = instructions;
        activity.displayedText = displayedText;
        break;
    }
  }
};

export default genLesson;
