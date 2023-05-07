import selectBlanks from "../util/selectBlanks";

const genRecitingActivity = (verseText: string) => {
  const splitText = verseText.split(" ");

  const { displayedText, blanks } = selectBlanks(splitText, {
    random: false,
    removalPercentage: 1,
    keepFirstLetter: true,
  });

  return {
    displayedText: displayedText,
    blanks: blanks,
    instructions: "Please recite the verse from memory.",
  };
};

export default genRecitingActivity;
