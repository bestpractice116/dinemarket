import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartTable = pgTable("cartdata", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id").notNull(),
    product_id:varchar("product_id").notNull(),
    product_title:varchar("product_title").notNull(),
    image_url:varchar("image_url").notNull(),
    product_price:integer("product_price").notNull(),
    product_quantity:integer("product_quantity").notNull(),
});

export const db = drizzle(sql)