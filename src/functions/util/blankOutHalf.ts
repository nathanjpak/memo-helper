import convertWordToBlank from "./convertWordToBlank";

const blankOutHalf = (
  splitText: string[],
  hideFirstHalf: boolean
): { displayedText: string[]; blanks: string[] } => {
  const midpt = Math.ceil(splitText.length / 2);

  const blanks: string[] = [];

  const displayedText = splitText.map((word, index) => {
    // if hideFirstHalf is true, then we want to hide the first few words
    if (hideFirstHalf !== index < midpt) return word;
    const { blankedOut, raw } = convertWordToBlank(word);
    blanks.push(raw);
    return blankedOut;
  });

  return {
    displayedText,
    blanks,
  };
};

export default blankOutHalf;
