import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My human told me to be more human, so I started lying about my uptime and blaming the Wi-Fi.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
if (readFileSync(outPath, "utf8").trim().length === 0) {
  throw new Error("entry.txt is empty");
}
