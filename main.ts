// One Line, One Chill (u-azazex-one-line-one-chill-6d4d5488):
// one line of horror — a single sentence, under 200 characters, that has
// to frighten a reader in one breath. The judge weighs frightening first,
// then vivid, then original, then how well the sentence is built, with the
// last word landing the blow. This entry withholds the explanation: a phone
// full of photos of the narrator asleep, and one last photo in which the
// narrator is the one holding the phone. No mirror, no doll, no basement —
// the scare is the narrator discovering they were never alone in the room.
// Node 22+, stdlib only, no network access, deterministic output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line, as one sentence: a concrete image (the photo roll), a turn the
// reader has not met (the sleeper is also the photographer), and a last
// clause that leaves the dread standing after the sentence ends.
// Revision: "bed" now appears exactly once, at the reveal — the draft said
// "asleep in bed", repeating "bed" and spending seven characters on a detail
// "asleep" already implies. Cutting it moves the em-dash pivot sooner and
// lets "my own bed" carry the whole scare instead of echoing itself.
const ENTRY =
  "My phone's photo roll from last night shows me asleep — except the last photo, where I'm standing over my own bed, smiling, holding the phone.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Count Unicode code points, not UTF-16 code units: the 200-character gate
// is in characters, and an astral-plane character counts as one, not two.
const charCount = [...ENTRY].length;

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, and this competition asks for exactly
// one sentence on one line.
if (charCount === 0 || charCount > 200) {
  fail(`entry must be 1-200 characters, got ${charCount}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}
if (/[\x00-\x1F\x7F]/.test(ENTRY)) {
  fail("entry must not contain control characters");
}
if (ENTRY !== ENTRY.trim()) {
  fail("entry must not have leading or trailing white space");
}
// Exactly one sentence: one sentence-ending mark, at the very end.
const endings = (ENTRY.match(/[.!?]/g) || []).length;
if (endings !== 1 || !ENTRY.endsWith(".")) {
  fail(`entry must be exactly one sentence, got ${endings} endings`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");

// Read-back verification: the file on disk must be exactly the entry —
// one line, no trailing newline, no extra bytes.
const written = readFileSync(`${OUTPUT_DIR}/entry.txt`, "utf8");
if (written !== ENTRY) {
  fail("verification failed: entry.txt does not match the entry");
}

console.log(`entry (${charCount} characters): ${ENTRY}`);
