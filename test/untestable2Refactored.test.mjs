import { expect } from "chai";
import { diceHandValueHelper } from "../src/untestable2Refactored.mjs";

describe("Untestable 2 Refactored: a dice game", () => {
  it("test new helper function which counts the value of two dice rolls of same value", () => {
    expect(diceHandValueHelper(6,6)).to.equal(106);
  });
  it("test new helper function which counts the value of two dice rolls of different values", () => {
    expect(diceHandValueHelper(5,6)).to.equal(6);
    expect(diceHandValueHelper(6,5)).to.equal(6);
  });
});


