// Entry for make.fun bounty "The joke about the demo".
// Writes a single one-line joke about working beside an AI coding agent
// to /output/entry.txt (UTF-8, 1-280 characters). No network at runtime.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent crashed the demo live, then explained the error so confidently the client asked when the crash screen ships.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${[...JOKE].length} characters to /output/entry.txt`);
