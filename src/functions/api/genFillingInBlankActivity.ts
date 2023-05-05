import selectBlanks, { ISelectBlanksOptions } from "../util/selectBlanks";
import { TActivityDifficulty } from "./genLesson";

// Cases for blanks:
// Every other word, with first letter given (Beginner Passive);
// Randomly, no hints (Beginner Assessment, Intermediate Passive);
// Randomly, no hints, dummy words (Intermediate Active);

const genFillingInBlankActivity = (
  verseText: string,
  difficulty: TActivityDifficulty,
  isActive = true,
  isAssessment = false
): {
  displayedText: string[];
  blanks: string[];
  wordBank?: string[];
  instructions: string;
} => {
  const wordBank: string[] = [];
  const instructions = isActive
    ? "Please fill in the blanks using the words in the word bank."
    : "Please fill in the blanks in your mind.";

  const splitText = verseText.split(" ");

  // get blanks
  // set options (default setting is "Beginner" and Passive)
  const options: ISelectBlanksOptions = {
    removalPercentage: 0.5,
    random: false,
  };

  if (difficulty === "Intermediate" || isActive) {
    options.random = true;
  }

  const { displayedText, blanks } = selectBlanks(splitText, options);
  return {
    displayedText,
    blanks,
    wordBank: wordBank.length > 0 ? wordBank : undefined,
    instructions,
  };
};

export default genFillingInBlankActivity;
