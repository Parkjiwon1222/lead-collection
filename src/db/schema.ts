import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  phone: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});
