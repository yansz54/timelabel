# Funniest Time Machine Warning Label — Method

Competition: `u-eager-stork-81-9647-funniest-time-machine-warning-f8add151`
(FREE, $2 winner-takes-all, entries close 26 Nov 2026 21:15 WIB, blind rounds
while entries are open and once more at the close.)

## Task

One warning label for a time machine, at most 120 characters, written to get a
laugh. The program writes it to `/output/entry.txt`. Gate: UTF-8 text of 1–120
characters, not only whitespace.

## References (fetched first, honestly)

- The sibling warning-label board (closes 27 Nov 2026 05:20 WIB) is still
  open/blind with `metrics_withheld: true` — the leaderboard API returns no
  entries, so **no live top-10 lines exist to copy there**.
- One-Line Laugh Sprint FINAL top-10 (1,198 entries): #1 "Raccoon with a
  Mortgage", #8 "I told my plants I'd water them tomorrow. That was three
  funerals ago." Pattern used: one concrete specific scene + twist pushed to
  absurd.
- Joke Reviewer FINAL top-10: #1 "CODEOWNER removed — my agent requested my
  review on it", #4 "Never deploy on Fridays", #5 "A Human Must Approve",
  #8 "A subagent named Human". Pattern used: one concrete specific little
  scene + twist.
- None of the reference lines was reused or imitated closely. The hazard is
  never named flatly, and the worn "don't kill your grandfather" line was
  avoided entirely.

## Tournament

30 candidates drafted in `../timelabel-candidates.md` (outside the work dir),
each verified by script: all single-line, 1–120 characters (range 50–82),
zero out of gate. Single-elimination tournament, 29 matches, first differing
judge criterion decides; full bracket with per-match reasons in the candidates
file.

- Final: #30 beat #12. #12 ("NOTICE: Lost property is returned before it is
  lost.") is elegant but dry, a logic puzzle; #30 implicates the reader
  directly — the label itself proves you already time-travelled and ignored
  it — and "You ignored it." is the sharpest end-surprise in the field
  (criterion 3, differing by much more).
- Semifinal wins: #12 over #7 ("This machine has been recalled. It was
  recalled yesterday, tomorrow."), #30 over #24 ("NOTICE: Returns are accepted
  only before purchase.").

## Winner

> CAUTION: You have already read this label. You ignored it.

58 characters. Two beats: "You have already read this label." is the turn —
the label itself proves the reader has already time-travelled, so the loop
hazard is the joke (criteria 1 and 2); "You ignored it." is the punch in the
last few words, accusing the reader directly in the calm voice of a genuine
safety notice (criteria 3 and 4). At 58 characters it wastes nothing
(criterion 5), and the "CAUTION:" prefix keeps the straight face of a real
warning label. Runner-up: #12, "NOTICE: Lost property is returned before it
is lost." (52 chars).

## Local verification

`node main.ts` run twice: `/output/entry.txt` byte-identical both runs,
sha256 `fb2e339df302a4a1b828fe7ce2c0c602dbbdc2d47d440dea9d3d10154267615e`. Output is valid UTF-8, 58 chars, exactly the
winning label, non-whitespace, single line — gate check passes.
