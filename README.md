# NC Math 3 — CDM Phase 2 Problem Set (Quiz Site)

A static, single-page quiz with all 62 problems from the NC Math 3 CDM Phase 2
problem set, aligned to the NC Math 3 Standard Course of Study (NCDPI Math 3
Unpacking, revised June 2022).

## Files

| File | What it is |
|---|---|
| `index.html` | The quiz app (layout, navigation, strand filters, progress tracking) |
| `problems.js` | The original 62 problems: problem text, NC.M3 standard codes, expected evidence, reviewer notes. **No answers.** |
| `solutions.js` | Worked solutions for the original 62. Loaded **only** when a student clicks "Show worked solution." |
| `sets.js` | 600 additional problems (originally written as ten themed sets of 60). **No answers.** |
| `sets_solutions.js` | Worked solutions for the 600 additional problems, loaded on demand like `solutions.js`. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## One complete set of 662 problems

The quiz presents **one complete set**: the original 62 problems first
(numbered 1–62), then the 600 additional problems (63–662), each tagged
with the set it came from. There are no daily unlocks and no separate
tabs — students can work through everything in order, or filter by
strand (Number & Algebra, Functions, Trigonometry/Proof/Circles,
Geometry Modeling & Statistics) using the buttons at the top.

All 662 problems are distinct — no duplicates across the whole set,
verified by an automated duplicate audit. Student work and "mark
complete" progress are saved in the browser's localStorage — nothing is
sent anywhere.

## Host it on GitHub Pages

1. Create a new GitHub repository (e.g. `math3-cdm-quiz`).
2. Upload these four files to the repository root (Add file → Upload files),
   or push them with git.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set Source to **Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
5. After a minute or so, your site is live at
   `https://<your-username>.github.io/math3-cdm-quiz/`

## Student-only mode (hide the answers)

If students should not be able to see worked solutions, simply **do not
upload `solutions.js` and `sets_solutions.js`**. The quiz works fully
without them; the "Show worked solution" button will just report that
solutions aren't published. Keep your own copies (and the Word document)
for review.

Note: on a public GitHub Pages site, anything you upload is viewable —
including file source. Never upload `solutions.js` to the public repo if the
solutions must stay private.

## Running it locally instead

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

Math formulas render with MathJax from a CDN, so the page needs an internet
connection for typeset equations; everything else works offline.
