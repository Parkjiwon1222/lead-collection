import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  phone: text().notNull(),
  createdAt: int({ mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});
