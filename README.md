# Inkdrop User Manual

<https://docs.inkdrop.app/>

The old documentation is [available here](https://github.com/inkdropapp/docs-old).

## Stack

- [Tailwind CSS](https://tailwindcss.com)
- [Next.js](https://nextjs.org)
- [Headless UI](https://headlessui.dev)
- [Markdoc](https://markdoc.io)
- [Algolia Autocomplete](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/)
- [FlexSearch](https://github.com/nextapps-de/flexsearch)

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Global search

This template includes a global search that's powered by the [FlexSearch](https://github.com/nextapps-de/flexsearch) library. It's available by clicking the search input or by using the `⌘K` shortcut.

This feature requires no configuration, and works out of the box by automatically scanning your documentation pages to build its index. You can adjust the search parameters by editing the `/src/markdoc/search.mjs` file.
