import {
  pgTable,
  integer,
  varchar,
  serial,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const inventoryItem = pgTable("items", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  price: integer("price"),
  location: varchar("location"),
  category: varchar("category"),
  created_at: timestamp("created_at", { mode: "string" })
    .notNull()
    .defaultNow(),
  updated_at: timestamp("updated_at", { mode: "string" })
    .notNull()
    .defaultNow(),
  rebuy: boolean("rebuy").notNull().default(false),
});
