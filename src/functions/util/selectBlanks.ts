// import { articles } from "../../assets/whiteLists";
import convertWordToBlank from "./convertWordToBlank";

export interface ISelectBlanksOptions {
  removalPercentage: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  random: boolean;
  strictNoAdjacent?: boolean;
  keepFirstLetter?: boolean;
}

// What to do with articles? Pronouns?
// What to do with apostrophes? Esp ones at the end (e.g. disciples' or Jesus')

const selectBlanks = (
  splitText: string[],
  options: ISelectBlanksOptions = { removalPercentage: 0.5, random: false }
): { displayedText: string[]; blanks: string[] } => {
  // initialize displayedText and blanks?
  // cloning would be slower than pushing to new array
  let displayedText: string[] = [];
  const blanks: string[] = [];

  // if random, split randomly
  if (options.random) {
    // Create an array of indexes
    const indexes = Array.from(Array(splitText.length).keys());
    // Shuffle with Fischer-Yates
    for (let index = indexes.length - 1; index > 0; index--) {
      let indexToSwitch = Math.floor(Math.random() * (index + 1));
      [indexes[index], indexes[indexToSwitch]] = [
        indexes[indexToSwitch],
        indexes[index],
      ];
    }

    // select first n indexes
    let numToRemove = Math.floor(splitText.length * options.removalPercentage);
    if (!numToRemove) numToRemove++;
    const indexesToRemove = new Set(indexes.slice(0, numToRemove));

    for (let index = 0; index < splitText.length; index++) {
      if (!indexesToRemove.has(index)) {
        displayedText.push(splitText[index]);
        continue;
      }
      const { blankedOut, raw } = convertWordToBlank(splitText[index]);

      blanks.push(raw);
      displayedText.push(blankedOut);
    }
  } else {
    /* if not random, split every other
    removalPercentage and strictNoAdjacent would be irrelevant*/

    for (let index = 0; index < splitText.length; index++) {
      if (!(index % 2)) {
        displayedText.push(splitText[index]);
        continue;
      }
      const { blankedOut, raw } = convertWordToBlank(
        splitText[index],
        options.keepFirstLetter
      );

      blanks.push(raw);
      displayedText.push(blankedOut);
    }
  }
  return { displayedText, blanks };
};

export default selectBlanks;
