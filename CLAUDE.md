# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Inkdrop documentation website built with Next.js 16 App Router, Markdoc, and Tailwind CSS v4. The site serves as the official documentation for Inkdrop, a Markdown note-taking application.

## Essential Commands

```bash
# Development
npm run dev           # Start development server at http://localhost:3000

# Build & Production
npm run build         # Generate routes JSON and build for production
npm start            # Run production server

# Code Quality
npm run lint         # Run ESLint with Next.js rules
```

## Architecture & Structure

### Content Organization
- Documentation pages live in `/src/app/` using Next.js App Router structure
- Each page is a `page.md` file in its own directory (e.g., `/src/app/start-guide/creating-notebook/page.md`)
- Pages are organized into logical sections: `start-guide/`, `reference/`, `writing/`, `examples/`

### Key Components
- **Navigation**: Centrally managed in `/src/lib/navigation.ts` - all navigation changes should be made here
- **Route Generation**: Running `npm run build` automatically generates `/public/routes.json` from navigation.ts
- **Markdown Processing**: Uses Markdoc with custom tags defined in `/src/markdoc/`
- **Search**: FlexSearch implementation with Algolia Autocomplete UI in `/src/components/Search.tsx`

### Important Files
- `/src/lib/navigation.ts`: Central navigation structure - edit this to add/remove/reorder pages
- `/src/markdoc/tags.js`: Custom Markdoc components (Callout, Figure, etc.)
- `/next.config.mjs`: Markdoc + search wiring, plus a webpack patch that tags generated `page.md` modules with the RSC layer (see Page Metadata below)
- `/vercel.json`: Extensive redirect configuration for legacy URLs
- `/public/images/`: All documentation images and screenshots

## Development Guidelines

### Adding New Documentation
1. Create a new directory under the appropriate section in `/src/app/`
2. Add a `page.md` file with frontmatter. Set both the top-level `title:` (used by the in-page header) and a `nextjs.metadata` block for the HTML `<title>`/description:
   ```yaml
   ---
   title: Basic usage
   nextjs:
     metadata:
       title: Basic usage
       description: How to interact with Inkdrop
   ---
   ```
3. Update `/src/lib/navigation.ts` to include the new page in navigation
4. Place any images in `/public/images/` with descriptive names

### Page Metadata (do not regress)
The HTML `<title>` and `<meta name="description">` for each page come from the
`nextjs.metadata` frontmatter, surfaced via `@markdoc/next.js`'s
`nextjsExports: ['metadata', 'revalidate']` in `next.config.mjs`.

On Next 16, the RSC transform rejects a `metadata` export unless the generated
page module compiles in the server layer, and `@markdoc/next.js` registers its
loader without one. `next.config.mjs` therefore patches the markdoc webpack rule
to tag it with the `'rsc'` layer (`bundleLayer`). **Do not remove `metadata`
from `nextjsExports` or the RSC-layer webpack patch** — doing so makes every page
title silently fall back to the root-layout default `Inkdrop User Manual`, even
though the build still passes. Re-verify the patch after major Next upgrades
(`'rsc'` is a Next internal).

### Code Style
- TypeScript with strict mode enabled
- Prettier configured: single quotes, no semicolons
- Tailwind CSS for styling with Typography plugin
- Path alias: `@/*` maps to `./src/*`

### Common Patterns
- Use `<Callout>` component for important notes/warnings
- Use `<Figure>` for images with captions
- Code blocks automatically get syntax highlighting via Prism.js
- Internal links should use relative paths from docs root

### CI/CD
- GitHub Actions configured for Claude AI code reviews on PRs
- Vercel handles automatic deployments on push to main
- No formal test suite - rely on TypeScript, ESLint, and build validation

## Tech Stack Reference
- **Framework**: Next.js 16 (App Router)
- **Markdown**: Markdoc (`@markdoc/next.js`)
- **Styling**: Tailwind CSS v4 + Typography plugin
- **Search**: FlexSearch + Algolia Autocomplete
- **Deployment**: Vercel
- **Analytics**: Fathom