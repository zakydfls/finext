import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
// import * as schema from "./schema";

config({ path: ".env.local" });

export const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
// export const db = drizzle(sql, { schema }); this is like prisma query
