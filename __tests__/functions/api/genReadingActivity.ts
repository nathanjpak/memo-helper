import genReadingActivity from "../../../src/functions/api/genReadingActivity";

describe("chooseActivity", () => {
  it("should return a valid object with verse and instructions", () => {
    const verseText =
      "For God so loved the world that he gave his only begotten son, and whoever believes in him will not perish but have eternal life.";
    const { displayedText, instructions } = genReadingActivity(verseText);

    expect(displayedText.length === 1);
    expect(displayedText[0]).toEqual(verseText);
    expect(instructions).toEqual(
      "Please read through the verse carefully three times."
    );
  });
});
