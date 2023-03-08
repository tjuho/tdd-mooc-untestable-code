import { PasswordService, PostgresUserDao } from "../src/untestable4Refactored.mjs";
import { expect } from "chai";

describe("Untestable 4: enterprise application", () => {
  let service;
  let db;
  beforeEach(async () => {
    db = new PostgresUserDao();
    await db.save({userId: 1, password: "secret"});
    service = new PasswordService(db);
  });

  afterEach(() => {
    db.close();
  });

  it("change password without error", async () => {
    service.changePassword(1,"secret","easy");
  });
  it("get user by id", async () => {
    const user = await db.getById(1);
    expect(user.userId).to.equal(1);
  });
});
