import { drizzle } from "drizzle-orm/postgres-js";
import postgres, { Sql } from "postgres";

let connection: Sql<{}>;

if (!process.env.DATABASE_URL) {
  throw new Error("Database URL is missing");
}

const connectionString = process.env.DATABASE_URL;

const client = postgres(connectionString);
const db = drizzle(client);

export default db;
