import blankOutHalf from "../util/blankOutHalf";

const genFillingInHalfActivity = (verseText: string) => {
  const splitText = verseText.split(" ");

  const { displayedText, blanks } = blankOutHalf(
    splitText,
    Math.random() > 0.5
  );

  return {
    displayedText: displayedText,
    blanks: blanks,
    instructions: "Please fill in the missing half in your mind.",
  };
};

export default genFillingInHalfActivity;
