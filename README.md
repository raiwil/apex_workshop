# APEX Hands-On Workshop - MkDocs

This repository is a Markdown/MkDocs conversion of the uploaded APEX workshop guide.

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```

## Languages

The site uses `mkdocs-static-i18n` with suffix-based translations:

- English/default pages use the normal file name, for example `docs/03-authentication.md`.
- German pages use `.de.md`, for example `docs/03-authentication.de.md`.

All current workshop pages include German counterparts. If a future German page does not exist yet, the German build falls back to the English default page.

## GitHub Pages

Use **Settings -> Pages -> Source: GitHub Actions** and commit the workflow in `.github/workflows/pages.yml`.

## Files

- `docs/` contains the workshop pages.
- `mkdocs.yml` defines the navigation and theme.
