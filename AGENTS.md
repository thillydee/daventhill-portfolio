## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Keeping the downloadable CV in sync

The site offers a one-click CV download (`public/cv/Daven-Thill-CV-{EN,DE}.pdf`, linked from `Header.astro` and `ContactView.astro`). These PDFs are generated from a separate project, `~/Documents/cv-builder` (its own git repo — contains PII like home address and birthdate, so it must never be merged into or pushed alongside this repo).

**Whenever `src/data/profile.ts` or `src/data/profile.de.ts` changes** (new experience bullets, skills, etc.), mirror the same facts into `~/Documents/cv-builder/data/master/data_en.js` and `data_de.js` (adapted to the CV's punchier bullet style — see existing bullets there for the tone), then regenerate and re-copy the PDFs:

```bash
cd ~/Documents/cv-builder/scripts
node run_cv.js ../data/master/data_en ../output/Daven_Thill_CV_EN.docx
node run_cv.js ../data/master/data_de ../output/Daven_Thill_CV_DE.docx
soffice --headless --convert-to pdf --outdir ../output ../output/Daven_Thill_CV_EN.docx
soffice --headless --convert-to pdf --outdir ../output ../output/Daven_Thill_CV_DE.docx
cp ../output/Daven_Thill_CV_EN.pdf ~/Documents/daventhill-portfolio/public/cv/Daven-Thill-CV-EN.pdf
cp ../output/Daven_Thill_CV_DE.pdf ~/Documents/daventhill-portfolio/public/cv/Daven-Thill-CV-DE.pdf
```

Commit both repos separately after.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
