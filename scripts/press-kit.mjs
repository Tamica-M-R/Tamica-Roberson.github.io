// Rebuilds the press kit downloads in src/assets/press/:
//   - the PDF, printed by Microsoft Edge from the /press/kit/ page
//   - a ZIP with the PDF, the bios, the photos and the logos
// Start the dev server first (npm start), then run: npm run press-kit
// Commit the two files it writes. Windows only (Edge and PowerShell do the work).

import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import press from "../src/_data/press.js";

const site = process.env.SITE || "http://localhost:8340";
const edge = process.env.EDGE || "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const src = (url) => resolve("src" + url);

const work = mkdtempSync(join(tmpdir(), "press-kit-"));
try {
  mkdirSync(resolve("src/assets/press"), { recursive: true });

  const pdf = src(press.kit.pdf);
  execFileSync(edge, [
    "--headless=new",
    "--disable-gpu",
    `--user-data-dir=${join(work, "edge")}`,
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdf}`,
    `${site}/press/kit/`,
  ]);

  const bios = await fetch(`${site}${press.kit.bios}`);
  if (!bios.ok) throw new Error(`Couldn't load the bios from ${site}${press.kit.bios}. Is the dev server running?`);

  const stage = join(work, "Tamica-M-Roberson-press-kit");
  mkdirSync(join(stage, "photos"), { recursive: true });
  mkdirSync(join(stage, "logos"), { recursive: true });
  copyFileSync(pdf, join(stage, press.kit.pdfName));
  writeFileSync(join(stage, press.kit.biosName), (await bios.text()).replace(/\r?\n/g, "\r\n"));
  for (const p of press.photos) copyFileSync(src(p.src), join(stage, "photos", p.file));
  for (const l of press.logos) for (const f of l.files) copyFileSync(src(f.src), join(stage, "logos", f.file));

  execFileSync("powershell.exe", [
    "-NoProfile",
    "-Command",
    `Compress-Archive -Path '${stage}' -DestinationPath '${src(press.kit.zip)}' -Force`,
  ]);
  console.log(`Wrote ${press.kit.pdf} and ${press.kit.zip}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
