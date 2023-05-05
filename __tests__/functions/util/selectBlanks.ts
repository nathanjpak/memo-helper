import selectBlanks from "../../../src/functions/util/selectBlanks";

describe("select blank from text function", () => {
  const twoWordArray = ["one", "two"];
  const fourWordArray = ["one", "two", "three", "four"];

  it("should select the second word in a two word array if not random", () => {
    const twoWords = selectBlanks(twoWordArray);

    expect(twoWords.blanks).toEqual(["two"]);
    expect(twoWords.displayedText.length).toBe(2);
    expect(twoWords.displayedText[1]).toEqual("___");
  });

  it("should always return one blank from a two word array", () => {
    const twoWordsRandom = selectBlanks(twoWordArray, {
      random: true,
      removalPercentage: 0.1,
    });

    expect(twoWordsRandom.blanks.length).toBe(1);
  });

  it("should never return an empty array of blanks nor should remove every word", () => {
    const lowRemoval = selectBlanks(fourWordArray, {
      random: true,
      removalPercentage: 0.1,
    });

    const halfRemoval = selectBlanks(fourWordArray, {
      random: true,
      removalPercentage: 0.5,
    });

    const highRemoval = selectBlanks(fourWordArray, {
      random: true,
      removalPercentage: 0.9,
    });

    expect(lowRemoval.blanks.length).toEqual(1);
    expect(halfRemoval.blanks.length).toEqual(2);
    expect(highRemoval.blanks.length).toEqual(3);
  });

  // it("should not remove adjacent words if provided the option", () => {
  //   const neverAdjacent = selectBlanks(fourWordArray, {
  //     random: true,
  //     removalPercentage: 0.9,
  //     strictNoAdjacent: true,
  //   });

  //   expect(neverAdjacent.blanks.length).toEqual(2);
  // });

  it("should properly account for punctuation", () => {
    const twoWordsPunct = selectBlanks(["one", "two."]);

    expect(twoWordsPunct.blanks).toStrictEqual(["two"]);
    expect(twoWordsPunct.displayedText.length).toBe(2);
    expect(twoWordsPunct.displayedText[1]).toEqual("___.");
  });

  it("should properly account for consecutive punctuation", () => {
    const twoWordsPunct = selectBlanks(["one", 'two".']);

    expect(twoWordsPunct.blanks).toStrictEqual(["two"]);
    expect(twoWordsPunct.displayedText.length).toBe(2);
    expect(twoWordsPunct.displayedText[1]).toEqual('___".');
  });

  it("should return blanks with first letter if prompted", () => {
    const firstLetter = selectBlanks(fourWordArray, {
      random: false,
      removalPercentage: 0.5,
      keepFirstLetter: true,
    });

    expect(firstLetter.blanks.length).toEqual(2);
    expect(firstLetter.displayedText).toStrictEqual([
      "one",
      "t__",
      "three",
      "f___",
    ]);
  });

  // it("should not remove articles if rand", () => {
  //   const noArticles = selectBlanks(["one", "the", "three", "an"]);
  //   const noArticlesRand = selectBlanks(["one", "the", "three", "an"], {
  //     random: true,
  //     removalPercentage: 0.9,
  //   });

  //   expect(noArticles.blanks.length).toEqual(2);
  //   expect(noArticlesRand.blanks.length).toBeLessThanOrEqual(2);
  // });
});
