import convertWordToBlank from "../../../src/functions/util/convertWordToBlank";

describe("convert word to blank function", () => {
  it("should return a full blank on a word without punctuation", () => {
    const str = "an(notreally)arbitrarilylongstring";
    const fullBlank = convertWordToBlank(str);

    expect(fullBlank.length).toBe(str.length);
    expect(fullBlank).toEqual("_".repeat(str.length));
  });

  it("should return a blank with a punctuation or two", () => {
    const onePunct = convertWordToBlank("one.");
    const twoPunct = convertWordToBlank("two?'");
    const beginningPunct = convertWordToBlank('"quote!');

    expect(onePunct).toEqual("___.");
    expect(twoPunct).toEqual("___?'");
    expect(beginningPunct).toEqual('"_____!');
  });

  it("should not count punctuation in the middle of a word", () => {
    const apostrophe = convertWordToBlank("Peter's");
    const hyphen = convertWordToBlank("Abed-Nego");
    // const theOneException = convertWordToBlank("Jesus'");

    expect(apostrophe).toEqual("_".repeat(7));
    expect(hyphen).toEqual("_".repeat(9));
    // expect(theOneException).toEqual("_".repeat(6));
  });

  it("should keep the first letter if prompted", () => {
    const firstLetter = convertWordToBlank("Jesus", true);
    const secondLetter = convertWordToBlank('"Let', true);
    const thirdLetter = convertWordToBlank("\"'And", true);

    expect(firstLetter).toEqual("J____");
    expect(secondLetter).toEqual('"L__');
    expect(thirdLetter).toEqual("\"'A__");
  });
});
