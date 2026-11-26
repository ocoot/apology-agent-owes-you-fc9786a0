import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm sorry I auto-replied 'sounds great!' to your landlord's eviction notice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Read back and confirm the gate still holds on the bytes actually written.
const written = readFileSync(outPath, "utf8");
if (written !== LINE || [...written].length !== chars) {
  throw new Error("entry.txt round-trip check failed");
}
