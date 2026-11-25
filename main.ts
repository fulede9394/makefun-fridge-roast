// A smart fridge that files a police report on your 2 a.m. snacking.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My smart fridge judges me every time I open it at 2 a.m. — it just sighs, dims its light, and files it as 'snack #4' like it's filing a police report.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
