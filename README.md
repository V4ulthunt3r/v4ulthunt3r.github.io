# v4ulthunt3r.github.io

GitHub Pages **user site** — served at the domain root `https://v4ulthunt3r.github.io/`.
It is the hub above the individual app landing pages, which live in their own repos and
are served as project pages underneath this domain:

| App | Repo | Path |
| --- | --- | --- |
| Kids Bucket List | `KidsBucketList` | `/KidsBucketList/` |
| Games Bucket List | `GamesBucketList` | `/GamesBucketList/` |
| KanToDo | `KanToDoWeb` | `/KanToDoWeb/` |
| Weed Radar | `Weed-Radar` | `/Weed-Radar/` |
| Pulse Orbit | `pulse-orbit` | `/pulse-orbit/` |
| OrgOS | `Org-OS` | `/Org-OS/` |

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
```

The icon sprite is inlined per page on purpose: Safari does not support `<use>` references
into an external SVG file.
