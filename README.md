# sheflutter.com

The author site for Tamica M. Roberson and SEASONS. Every change saved to the `main` branch publishes the site automatically in about a minute (watch it under the **Actions** tab).

You can make every everyday change below right here on github.com: open the file, click the pencil icon, edit, then **Commit changes**.

## Everyday changes

| To change | Edit this file | What to look for |
| --- | --- | --- |
| Tagline, "Coming spring 2027" line, contact email | `src/_data/site.json` | `tagline`, `bookOneStatus`, `contactEmail` |
| Social links | `src/_data/site.json` | the `social` list |
| A book's blurb, status or store links | `src/_data/books.js` | find the book by its title |
| Her Story page | `src/her-story.njk` | the text between the `<p>` tags |

**Store links.** When a book goes on sale, paste its Amazon or Books2Read link into that book's `links` in `src/_data/books.js`, for example `links: { amazon: "https://www.amazon.com/dp/..." }`. The page's button changes to "Get the book" by itself.

## Writing a Journal post

1. Open the `src/journal` folder and click **Add file → Create new file**.
2. Name it with the date and a few words, like `2026-11-20-christmas-markets.md`.
3. Paste this at the top, fill it in, then write the post underneath in plain text:

```markdown
---
title: The Christmas markets Imani loved
date: 2026-11-20
summary: One sentence that shows on the Journal page.
book: Xavier's Story
image: /assets/img/journal/christmas-markets.jpg
imageAlt: Wooden market stalls lit up at dusk
---

Write the post here. Leave a blank line between paragraphs.

## A heading looks like this
```

To add a photo, upload it into `src/assets/img/journal/` first and use its name in `image:`. `book`, `image` and `imageAlt` are optional. To hide a post without deleting it, add `draft: true` under `title`.

## Email signups (Kit)

Until Kit is connected, the signup forms show a thank-you note and send nothing. To connect them:

1. In Kit, create a form, choose **Publish → HTML**, and find the address after `action="` (it looks like `https://app.kit.com/forms/1234567/subscriptions`).
2. Paste it into `kitFormAction` in `src/_data/site.json`.

## Optional: visitor statistics

Create a free Cloudflare Web Analytics site for sheflutter.com and paste its token into `cloudflareAnalyticsToken` in `src/_data/site.json`. It counts visits without cookies, so no cookie banner is needed.

## For developers

- Built with [Eleventy](https://www.11ty.dev/) 3. `npm install`, then `npm start` serves it at http://localhost:8340.
- `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. Pages must be set to **Source: GitHub Actions**.
- Fonts (Cormorant Garamond, Jost) are self-hosted in `src/assets/fonts`, so visitors' browsers never contact Google.
