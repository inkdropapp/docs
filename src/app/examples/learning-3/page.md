---
title: Try pnpm
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Try pnpm
---

{% callout title="This is an example note" %}
I took this note when I first tried to learn pnpm.
Tech notes can be short and simple. They don't always have to cover everything.
{% /callout %}

- [Fast, disk space efficient package manager | pnpm](https://pnpm.io/)

```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

or

```
brew install pnpm
```

## Set alias

```
alias pn=pnpm
```

## Try it out

The output is so clean!

```
❯ pn install
Downloading registry.npmjs.org/typescript/4.9.5: 11.6 MB/11.6 MB, done
Packages: +371
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/nora/Library/pnpm/store/v3
  Virtual store is at:             node_modules/.pnpm

devDependencies:
+ @types/dedent 0.7.0
+ @types/jest 29.4.0
+ @typescript-eslint/eslint-plugin 5.49.0
+ @typescript-eslint/parser 5.49.0
+ dedent 0.7.0
+ eslint 8.33.0
+ eslint-config-prettier 8.6.0
+ jest 29.4.1
+ prettier 2.8.3
+ ts-jest 29.0.5
+ typescript 4.9.5

Progress: resolved 370, reused 0, downloaded 370, added 371, done
Done in 46.5s
```
