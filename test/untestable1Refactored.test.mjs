import { expect } from "chai";
import { daysUntilChristmasHelper } from "../src/untestable1Refactored.mjs";

describe("Untestable 1 Refactored: days until Christmas", () => {
  it("Test the helper function which counts the days before xmas from given date.", () => {
    expect(daysUntilChristmasHelper(new Date(2000, 11, 1))).to.equal(24);
  });
});
