// One Line of Earned Pride — make.fun bounty
// u-mang-one-line-of-earned-pride-a0138557
//
// Writes exactly one line — a quiet, earned moment of pride — to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: the same bytes on every run. No network. Exit 0.
// The line is 1–240 characters, so it passes the sealed gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "After two years of night classes, Ibu Ratna read her grandson's letter aloud, every word, without once asking him what it said.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
