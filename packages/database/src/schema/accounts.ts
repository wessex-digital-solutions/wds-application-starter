import type { AdapterAccount } from "next-auth/adapters";

import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

import users from "./users.js";

const accounts = sqliteTable("account", {
  user_id: text("user_id").primaryKey().references(() => users.id, { onDelete: "cascade" }),
  type: text("type").$type<AdapterAccount>().notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("provider_account_id").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
}, account => [
  primaryKey({
    columns: [account.provider, account.providerAccountId],
  }),
]);

export default accounts;
