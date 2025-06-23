import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

console.log("PGHOST:", PGHOST);
console.log("PGUSER:", PGUSER);
console.log("PGPASSWORD:", PGPASSWORD);
console.log("PGDATABASE:", PGDATABASE);

export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);