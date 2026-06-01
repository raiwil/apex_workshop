# APEX Hands-On Workshop - MkDocs

This repository is a Markdown/MkDocs conversion of the uploaded APEX workshop guide.

## Local preview

```bash
pip install mkdocs mkdocs-material
mkdocs serve
```

## GitHub Pages

Use **Settings -> Pages -> Source: GitHub Actions** and commit the workflow in `.github/workflows/pages.yml`.

## Files

- `docs/` contains the workshop pages.
- `docs/assets/pages/` contains preview images extracted from the PDF.
- `mkdocs.yml` defines the navigation and theme.
