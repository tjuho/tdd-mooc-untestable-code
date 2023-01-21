import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  it("todo", () => {
    // TODO: write proper tests
    expect(daysUntilChristmas()).to.be.a("number");
  });
  
  it("challenge: test with the original code. test the date diff to another date which can be obtained with the same code", () => {
    const millisPerDay = 24 * 60 * 60 * 1000;
    expect(daysUntilChristmas()).to.be.a("number");
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const someDay = new Date(now.getFullYear(), 12 - 1, 1);
    if (today.getTime() > someDay.getTime()) {
      someDay.setFullYear(new Date().getFullYear() + 1);
    }
    const diffMillis = someDay.getTime() - today.getTime();
    expect(daysUntilChristmas() - Math.floor(diffMillis / millisPerDay)).to.equal(24);
  });
});
