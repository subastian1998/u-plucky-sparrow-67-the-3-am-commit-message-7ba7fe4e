import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'fix: reverted my 3 AM cleanup — the "unused" table I dropped was load-bearing, and so was my confidence';

if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error("entry fails the gate: must be 1-200 non-blank chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
