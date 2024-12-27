import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import users from "./users.js";

const sessions = sqliteTable("session", {
  session_token: text("session_token").primaryKey(),
  user_id: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expires_at: integer("expires_at", { mode: "timestamp" }).notNull(),
});

export default sessions;
