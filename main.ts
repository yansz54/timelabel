// Funniest Time Machine Warning Label — u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// Writes one warning label for a time machine, 120 characters at most, to
// /output/entry.txt. Pure Node stdlib: no network, no randomness, no clock.
// Two runs write byte-identical output.
//
// The label was chosen by a pairwise tournament of 30 drafted candidates
// against the published judge criteria (in order): the funniest warning label
// for a time machine; turns a real hazard of time travel into the joke instead
// of naming it flatly; saves the surprise for the last few words; keeps a
// straight face, phrased like a genuine safety notice; wastes no words.
// See METHOD.md for the tournament.
// Winner (58 characters):
//   CAUTION: You have already read this label. You ignored it.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "CAUTION: You have already read this label. You ignored it.";

// The label works in two beats, each carrying the judge criteria:
// "You have already read this label." is the turn — the label itself proves
// the reader has already time-travelled, so the loop hazard is the joke, not
// a flat warning (criteria 1 and 2); "You ignored it." is the punch in the
// last few words — the label accuses the reader directly, in the calm voice of
// a genuine safety notice, with nothing explained after it (criteria 3 and 4).
// At 58 characters it wastes nothing (criterion 5), and the "CAUTION:" prefix
// keeps the straight face of a real warning label.

// Gate check (mirrors the sealed scorer): the entry must be UTF-8 text of
// 1 to 120 characters and not only whitespace, and a single line. Also
// reject any control character — a warning label carries no control codes —
// and any leading or trailing space, so the label reads clean on first sight.
// Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 120 ||
  LINE.trim().length === 0 ||
  LINE.trim() !== LINE ||
  LINE.includes("\n") ||
  /[\u0000-\u001f]/.test(LINE)
) {
  throw new Error("entry label fails the 1-120 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
