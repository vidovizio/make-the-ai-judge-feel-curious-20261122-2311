// Writes one short text to /output/entry.txt.
// The text is the whole entry: it should leave the reader curious and calm.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT: string =
  "Before she left, my mother labeled the light switches in pencil: kitchen, hall, " +
  "and the third one, a single question mark. Forty years of thumbs have worn " +
  "them soft. I still flick that one last, and something behind the wall clears " +
  "its throat and waits.";

// The grader mounts /output. Outside the sandbox that path may not exist,
// so fall back to ./output beside this file rather than failing the run.
let out = "/output/entry.txt";
try {
  mkdirSync(dirname(out), { recursive: true });
} catch {
  out = new URL("./output/entry.txt", import.meta.url).pathname;
  mkdirSync(dirname(out), { recursive: true });
}

writeFileSync(out, TEXT, { encoding: "utf8" });

const codePoints = [...TEXT].length;
console.log(`wrote ${out}: ${codePoints} code points, ${Buffer.byteLength(TEXT, "utf8")} bytes`);
