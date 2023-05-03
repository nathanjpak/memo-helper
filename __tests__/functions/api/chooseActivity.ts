import chooseActivity from "../../../src/functions/api/chooseActivity";

describe("chooseActivity", () => {
  it("should return an activity of correct difficulty", () => {
    const beginner = chooseActivity("Beginner", false);
    const intermediate = chooseActivity("Intermediate", false);
    const advanced = chooseActivity("Advanced", false);

    expect(beginner && intermediate && advanced);
    expect(beginner!.isBeginner);
    expect(intermediate!.isIntermediate);
    expect(advanced!.isAdvanced);
  });

  it("should return an assessment", () => {
    const assessment = chooseActivity("Intermediate", true);

    expect(assessment);
    expect(assessment!.isIntermediate);
    expect(assessment!.isAssessment);
  });

  it("should return a different activity if provided the prior", () => {
    const different = chooseActivity("Beginner", false, "Reading");

    expect(different);
    expect(different!.isBeginner);
    expect(different!.name !== "Reading");
  });
});
