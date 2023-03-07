import { expect } from "chai";
import { parsePeopleCsvData } from "../src/untestable3Refactored.mjs";

describe("Untestable 3: CSV file parsing", () => {
  it("todo", () => {
    expect(parsePeopleCsvData("Loid,Forger,,Male\nAnya,Forger,6,Female\nYor,Forger,27,Female")).to.deep.equal([]);
  });
});
