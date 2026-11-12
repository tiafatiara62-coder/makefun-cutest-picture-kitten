// Cutest picture entry: copies the entry image to the output directory.
// Deterministic: same input bytes produce the same output bytes every run.
// No network, no randomness, stdlib only (Node 22).
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const source = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const target = join(outDir, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
