import chooseActivity from "./chooseActivity";

export type TActivityDifficulty = "Beginner" | "Intermediate" | "Advanced";

const genLesson = (
  verseText: string,
  difficulty: TActivityDifficulty,
  isAssessment = false
) => {
  // choose activities
  chooseActivity(difficulty, isAssessment);

  // call function that corresponds to activity
};

export default genLesson;
