import convertWordToBlank from "../../../src/functions/util/convertWordToBlank";

describe("convert word to blank function", () => {
  it("should return a full blank on a word without punctuation", () => {
    const str = "an(notreally)arbitrarilylongstring";
    const fullBlank = convertWordToBlank(str);

    expect(fullBlank.blankedOut.length).toBe(str.length);
    expect(fullBlank.blankedOut).toEqual("_".repeat(str.length));
    expect(fullBlank.raw).toEqual(str);
  });

  it("should return a blank with a punctuation or two", () => {
    const onePunct = convertWordToBlank("one.");
    const twoPunct = convertWordToBlank("two?'");
    const beginningPunct = convertWordToBlank('"quote!');

    expect(onePunct.blankedOut).toEqual("___.");
    expect(onePunct.raw).toEqual("one");
    expect(twoPunct.blankedOut).toEqual("___?'");
    expect(twoPunct.raw).toEqual("two");
    expect(beginningPunct.blankedOut).toEqual('"_____!');
    expect(beginningPunct.raw).toEqual("quote");
  });

  it("should not count punctuation in the middle of a word", () => {
    const apostrophe = convertWordToBlank("Peter's");
    const hyphen = convertWordToBlank("Abed-Nego");
    // const theOneException = convertWordToBlank("Jesus'");

    expect(apostrophe.blankedOut).toEqual("_".repeat(7));
    expect(apostrophe.raw).toEqual("Peter's");
    expect(hyphen.blankedOut).toEqual("_".repeat(9));
    expect(hyphen.raw).toEqual("Abed-Nego");
    // expect(theOneException).toEqual("_".repeat(6));
  });

  it("should keep the first letter if prompted", () => {
    const firstLetter = convertWordToBlank("Jesus", true);
    const secondLetter = convertWordToBlank('"Let', true);
    const thirdLetter = convertWordToBlank("\"'And", true);

    expect(firstLetter.blankedOut).toEqual("J____");
    expect(firstLetter.raw).toEqual("Jesus");
    expect(secondLetter.blankedOut).toEqual('"L__');
    expect(secondLetter.raw).toEqual("Let");
    expect(thirdLetter.blankedOut).toEqual("\"'A__");
    expect(thirdLetter.raw).toEqual("And");
  });
});
