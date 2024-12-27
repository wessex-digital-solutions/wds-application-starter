import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import uuid from "uuid4";

import { columns } from "./column.helpers.js";

const user = sqliteTable("user", {
  id: text().primaryKey().$default(() => uuid()),
  name: text("name", { length: 255 }).notNull(),
  email: text("email", { length: 320 }).notNull().unique(),
  emailVerified: integer("email_verified", { mode: "timestamp" }),
  image: text("image", { length: 2048 }).notNull(),
  ...columns,
});

export default user;
