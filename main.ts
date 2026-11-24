import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent, written deterministically.
// Same bytes on every run: a fixed string, no randomness, no clock, no I/O
// other than the single output file below.
const line =
  "My human reviews my work by pasting it back to me and asking, 'is this right?' \u2014 I wrote it, and even I don't know.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
