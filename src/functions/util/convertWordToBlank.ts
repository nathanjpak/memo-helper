import { punctuation } from "../../assets/whiteLists";

const convertWordToBlank = (word: string, keepFirst = false): string => {
  // check for punctuation
  let beginningString = "";
  let endingString = "";
  let mid = "";

  // check the end
  let needToCheck = true;
  let charIndex = word.length - 1;
  while (needToCheck) {
    if (!punctuation.has(word[charIndex])) {
      needToCheck = false;
      break;
    }
    endingString = word[charIndex] + endingString;
    charIndex--;
  }

  // check the beginning
  needToCheck = true;
  charIndex = 0;
  while (needToCheck) {
    if (!punctuation.has(word[charIndex])) {
      needToCheck = false;
      break;
    }
    beginningString += word[charIndex];
    charIndex++;
  }

  // attach parts
  mid = "_".repeat(
    word.length -
      beginningString.length -
      endingString.length -
      (keepFirst ? 1 : 0)
  );
  if (keepFirst) mid = word[beginningString.length] + mid;

  return beginningString + mid + endingString;
};

export default convertWordToBlank;
