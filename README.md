# alexwick.co

My personal site. Built with [Astro](https://astro.build) and deployed on Vercel.

## Develop

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # static output in dist/
```

Requires Node 22.12 or later.

## Writing

Posts are Markdown files in `src/content/writing/`. The file name becomes the URL, so
`src/content/writing/on-evals.md` is published at `/writing/on-evals`.

```md
---
title: On evals
date: 2026-10-01
description: One sentence for link previews and the RSS feed.
draft: true
---

The post starts here.
```

- `draft: true` posts show up in `npm run dev` but are left out of production builds.
- The Writing section on the home page, the RSS feed link, and the post pages only appear once there's at
  least one published post. Until then the build warns that the `writing` collection is empty, which is
  expected.
- Footnotes (`[^1]`), tables, and fenced code blocks all work.

## Deploying

Vercel builds and deploys every push to `main`, and every other branch gets a preview URL. `vercel.json`
sets the framework, redirects for old URLs, cache headers, and a Content-Security-Policy that blocks inline
styles and scripts. Astro is configured not to inline anything, so put new CSS in `src/styles/global.css`.
