import argon2 from "@node-rs/argon2";
import pg from "pg";

export class PostgresUserDao {

  db = new pg.Pool({
    user: "untestable",
    host: "0.0.0.0",
    database: "untestable",
    password: "secret",
    port: 5432,
  });

  close() {
    this.db.end();
  }

  #rowToUser(row) {
    return { userId: row.user_id, passwordHash: row.password_hash };
  }

  async getById(userId) {
    const { rows } = await this.db.query(
      `select user_id, password_hash
       from users
       where user_id = $1`,
      [userId]
    );
    return rows.map(this.#rowToUser)[0] || null;
  }

  async save(user) {
    const hash = argon2.hashSync(user.password);
    await this.db.query(
      `insert into users (user_id, password_hash)
       values ($1, $2)
       on conflict (user_id) do update
           set password_hash = excluded.password_hash`,
      [user.userId, hash]
    );
  }
}

export class PasswordService {
  constructor(dbinstance){
    this.users = dbinstance;
  }

  async changePassword(userId, oldPassword, newPassword) {
    const user = await this.users.getById(userId);
    if (!argon2.verifySync(user.passwordHash, oldPassword)) {
      throw new Error("wrong old password");
    }
    user.passwordHash = argon2.hashSync(newPassword);
    await this.users.save(user);
  }
}
