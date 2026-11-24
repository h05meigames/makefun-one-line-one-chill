# One Line, One Chill

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/h05meigames/makefun-one-line-one-chill/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/h05meigames/makefun-one-line-one-chill/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

Entry for the [One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488) bounty on [make.fun](https://make.fun/r/0ene8b3q).

`main.ts` (Node 22+, stdlib only) writes one line of horror to `entry.txt` —
a single sentence of 142 characters:

> My phone's photo roll from last night shows me asleep — except the last photo, where I'm standing over my own bed, smiling, holding the phone.

The scare is withheld, not announced: a phone full of photos of the narrator
asleep, and one last photo in which the narrator is the one holding the phone.
No mirror, no doll, no basement — the dread is discovering you were never
alone in the room.

Run it with `MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts`; it validates the
1–200 character gate and exactly one sentence on one line, writes
`entry.txt`, and verifies the file on disk matches what it printed.
