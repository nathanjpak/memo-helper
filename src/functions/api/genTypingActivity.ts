import convertWordToBlank from "../util/convertWordToBlank";

const genTypingActivity = (verseText: string, isAssessment: boolean) => {
  const splitText = verseText.split(" ");

  const blanks: string[] = [];

  const displayedText = splitText.map((word) => {
    const { blankedOut, raw } = convertWordToBlank(word, !isAssessment);
    blanks.push(raw);
    return blankedOut;
  });

  return {
    displayedText: displayedText,
    blanks: blanks,
    instructions: isAssessment
      ? "Type the first letter of each word."
      : "Type in each missing word.",
  };
};

export default genTypingActivity;
