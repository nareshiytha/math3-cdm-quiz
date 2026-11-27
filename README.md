# NC Math 3 — CDM Phase 2 Problem Set (Quiz Site)

A static, single-page quiz with all 62 problems from the NC Math 3 CDM Phase 2
problem set, aligned to the NC Math 3 Standard Course of Study (NCDPI Math 3
Unpacking, revised June 2022).

## Files

| File | What it is |
|---|---|
| `index.html` | The quiz app (layout, navigation, filters, progress tracking, daily-set date logic) |
| `problems.js` | The 62-problem bank: problem text, NC.M3 standard codes, expected evidence, reviewer notes. **No answers.** |
| `solutions.js` | Worked solutions for the bank. Loaded **only** when a student clicks "Show worked solution." |
| `sets.js` | The 10 daily sets (600 problems — 60 per day, Nov 27 – Dec 6, 2026) with their unlock dates. **No answers.** |
| `sets_solutions.js` | Worked solutions for the daily sets, loaded on demand like `solutions.js`. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Daily sets — no redeployment needed

All 10 daily sets (60 problems each) are already inside `sets.js`. The page
reads the current date in the America/New_York time zone and unlocks that
day's set automatically:

- Day 1 (Fri Nov 27) is open from the start as a preview; each later set
  unlocks on its date (Day 10 on Sun Dec 6).
- Earlier sets stay open for review; future sets show as locked.
- The 10 sets share **no problems with each other or with the 62-problem
  bank** — 662 distinct problems in total, verified by an automated
  duplicate audit.

Upload the files once and the site runs the whole 10-day schedule by
itself. Student work and "mark complete" progress are saved per mode in
the browser's localStorage — nothing is sent anywhere.

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
