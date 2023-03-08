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
  it("get null when user not found", async () => {
    const user = await db.getById(15);
    expect(user).to.equal(null);
  });
  it("the password hash of the user should change when the password is changes", async () => {
    const user1 = await db.getById(1);
    service.changePassword(1,"secret","easy");
    const user2 = await db.getById(1);
    expect(user1.passwordHash).to.not.equal(user2.passwordHash);
  });
});
