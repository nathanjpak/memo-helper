import { IListedActivity } from "../../assets/activities";
import chooseActivity from "./chooseActivity";
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

  for (const activity of activities) {
    switch (activity.name) {
      default: // "Reading"
        const { instructions, displayedText } = genReadingActivity(verseText);
        activity.instructions = instructions;
        activity.displayedText = displayedText;
    }
  }
};

export default genLesson;
