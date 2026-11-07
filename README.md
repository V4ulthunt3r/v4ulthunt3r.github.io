# v4ulthunt3r.github.io

GitHub Pages **user site** — served at the domain root `https://v4ulthunt3r.github.io/`.
It is the hub above the individual app landing pages, which live in their own repos and
are served as project pages underneath this domain:

| App | Repo | Path | German hub → | English hub → |
| --- | --- | --- | --- | --- |
| Kids Bucket List | `KidsBucketList` | `/KidsBucketList/` | `index.html` | `index-en.html` |
| Games Bucket List | `GamesBucketList` | `/GamesBucketList/` | `index-de.html` | `index.html` |
| KanToDo | `KanToDoWeb` | `/KanToDoWeb/` | `index.html` | `index.html` (German only) |
| Weed Radar | `Weed-Radar` | `/Weed-Radar/` | `index.html` | `index.html` (German only) |
| Pulse Orbit | `pulse-orbit` | `/pulse-orbit/` | `index.html` | `index-en.html` |
| iFoldy | `iFoldy` | `https://ifoldy.app` | `index-de.html` | `index.html` |
| Duo-Chess | `DuoChess` | `/DuoChess/` | `index-de.html` | `index.html` |
| LidShift | `lidshift-website` | `/lidshift-website/` | `index-de.html` | `index.html` |
| ShotForge | — | `https://shotforge.studio` | same URL, the site picks the language | |

iFoldy has its own domain (`CNAME` in the `iFoldy` repo), so it is linked absolutely
rather than as a path under this site.
| OrgOS | `Org-OS` | `/Org-OS/` | `index.html` | `index.html` (German only) |

**Check the landing page's default language before linking it.** The older pages
are German-first (`index.html` + `index-en.html`), the newer ones English-first
(`index.html` + `index-de.html`). Linking `index.html` from both hubs sends one of
them to the wrong language.

## Adding an app

1. Add a card to **both** `index.html` and `index-en.html`, in the right group
   (apps or web), and bump the `--i` stagger index of the cards after it.
2. Add its icon to the hero `.dock` in both files, in the same order as the cards.
3. Drop the app icon into `assets/icons/` as a 192×192 WebP (shown at 56px, so
   that covers 3× displays). Use the dark variant where an app has one; the page
   adds the rounded corners and the hairline ring itself.
4. List it in the `description` and `og:description` meta tags.

## Domain verification

`/.well-known/kickstart-exchange.txt` proves app ownership to Kickstart. Verification
always happens against the **origin root**, never against an app's sub-path — which is why
this repo has to exist at all.

**One code per line**, so further apps just get appended:

```
KX-CSRX62
```

Codes expire, and once an app is verified its line can be removed again.

## `.nojekyll`

Do not delete it. GitHub Pages builds this repo with Jekyll, and Jekyll silently drops
files and directories whose name starts with a dot — including `.well-known/`. The empty
`.nojekyll` file switches the build to a plain file copy so the verification file is
actually published.

## Structure

```
index.html          hub, German
index-en.html       hub, English
impressum.html      legal notice, German
impressum-en.html   legal notice, English
assets/site.css     shared stylesheet (design tokens, light + dark)
assets/theme.js     dark-mode toggle
assets/icons/       app icons, 192px WebP
```

The palette stays neutral slate on purpose: the hub sits above all the apps, so its
colour comes from the app icons alone, never from one app's brand.

The icon sprite is inlined per page on purpose: Safari does not support `<use>` references
into an external SVG file.
