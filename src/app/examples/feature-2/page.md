---
title: Remember the sort option for search results
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Remember the sort option for search results
---

{% callout title="This is an example note" %}
I took this note when I tried to improve the existing feature for remembering the sort option for search results.

First, I tried to understand the current implementation and which part should be refactored because I didn't remember them.
Then, I found the parts that need to be updated and refactored them.
{% /callout %}

## Query Context should store the sort order

Currently, it doesn't store the sort order param but it directly refers to the config.

- `getSortOrderForQueryPath` in `redux-store/src/utils/notes.ts`.

It is called in `note-list-header-sort-dropdown.tsx`, for example.
So, if you want to refer to the current sort order, you should call `getSortOrderForQueryPath` in `redux-store/src/utils/notes.ts` instead of reading the redux state, which is not good.

In `QueryContextState`, some modes have a property `filterSort`.
The `search` mode has `searchSort` property.
It'd be nice to merge them into just the one prooperty `sort`.

## Why are there two states: `queryContext` and `notes`?

It is not intuitive to have two separate states for managing queries.
...It is mainly for getting fast UI responsibility.

But eventually the notes actions call `getQueryContextPath` → `getQueryOptions` → `getSortOrderForQueryPath`, which looks redundant.
The app should always call `notes.loadWithQueryContext` after calling `queryContext` actions.

## Remove some `notes.load*` actions

The following actions should be removed:

- `loadAll`
- `loadPinned`
- `loadInBook`
- `loadWithTag`
- `loadWithStatus`
- `loadInTrash`
- `loadWithKeyword`
- `filterWithKeyword`

No! `loadWithQueryContext` calls them internally 😂
...well, the app should stop calling `load**` directly, then.

Okay, cleaned up! - https://github.com/inkdropapp/desktop/commit/7e1bcd0159a8ce265e67258ac093db9a1ff5efb7
Now, the app calls like so:

```js
dispatch(actions.queryContext.setFilterKeyword(qc, keyword, qc.filterSort))
await dispatch(actions.notes.reloadWithQueryContext())
```

- Desktop: https://github.com/inkdropapp/desktop/commit/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- Mobile: https://github.com/inkdropapp/mobile/commit/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## Refer to `queryContext.sort` for loading notes

Now, it should be ready to rename `filterSort` and `searchSort` to just `sort` in `queryContext`.
The `queryContext` actions should set this value by checking `getSortOrderForQueryPath`.
And the `notes` actions should refer to `queryContext.sort` instead of calling `getSortOrderForQueryPath`.

## PR

### Desktop

- {% check v=true /%} https://github.com/inkdropapp/redux-store/pull/xxx
- Update note list header sort dropdown:
  - [feat(note-list): refer to query context for the current sort order](https://github.com/inkdropapp/desktop/commit/c11a97a7aab90c669e28396a3c79c0a53a05e6ed)
- Preserve sort order when filtering by a tag
  - https://github.com/inkdropapp/desktop/commit/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Mobile

- {% check v=true /%} [feat(search): preserve sort order when filtering by a tag](https://github.com/inkdropapp/mobile/commit/b0a96a63f40534518d9762917df903b6a647ca98)
