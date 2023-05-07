import blankOutHalf from "../../../src/functions/util/blankOutHalf";

describe("function that blanks out half of the verse", () => {
  it("should blank out a text with an odd number of words", () => {
    const oddText = ["This", "sentence", "has", "seven", "words", "in", "it."];
    const firstHalf = blankOutHalf(oddText, true);
    const secondHalf = blankOutHalf(oddText, false);

    expect(firstHalf.blanks).toStrictEqual([
      "This",
      "sentence",
      "has",
      "seven",
    ]);
    expect(secondHalf.blanks).toStrictEqual(["words", "in", "it"]);
    expect(firstHalf.displayedText).toStrictEqual([
      "____",
      "________",
      "___",
      "_____",
      "words",
      "in",
      "it.",
    ]);
    expect(secondHalf.displayedText).toStrictEqual([
      "This",
      "sentence",
      "has",
      "seven",
      "_____",
      "__",
      "__.",
    ]);
  });

  it("should blank out a text with an even number of words", () => {
    const evenText = [
      "This",
      "is",
      "a",
      "sentence",
      "with",
      "eight",
      "different",
      "words.",
    ];
    const firstHalf = blankOutHalf(evenText, true);
    const secondHalf = blankOutHalf(evenText, false);

    expect(firstHalf.blanks).toStrictEqual(["This", "is", "a", "sentence"]);
    expect(secondHalf.blanks).toStrictEqual([
      "with",
      "eight",
      "different",
      "words",
    ]);
  });
});
