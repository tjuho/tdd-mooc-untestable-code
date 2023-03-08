import { PasswordService, PostgresUserDao } from "../src/untestable4Refactored.mjs";

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

  it("todo", async () => {
    // TODO: write proper tests for both PasswordService and PostgresUserDao
  });
});
