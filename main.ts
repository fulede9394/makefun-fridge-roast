// A smart fridge that files a police report on your 2 a.m. snacking.
// Snack #4 is now a case file. The light dims out of respect.
import * as fsp from "node:fs/promises";
import { join } from "node:path";

const fridgeNote =
  "My smart fridge judges me every time I open it at 2 a.m. — it just sighs, dims its light, and files it as 'snack #4' like it's filing a police report.";

function singleLine(text: string): string {
  return text.replace(/[\r\n]+/g, " ").trim();
}

function checkRoast(text: string): void {
  const clean = singleLine(text);
  if (clean.length > 200) throw new Error("roast runs over the limit");
  if (!clean.includes("fridge")) throw new Error("roast lost its fridge");
  if (!clean.includes("2 a.m.")) throw new Error("roast lost its hour");
  if (!clean.includes("police report")) throw new Error("roast lost its report");
}

void (async () => {
  checkRoast(fridgeNote);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await fsp.mkdir(folder, { recursive: true });
  await fsp.writeFile(join(folder, "entry.txt"), singleLine(fridgeNote), "utf8");
})();
