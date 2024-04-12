---
title: App hangs when caps lock enabled on Sonoma
parentPage: '/start-guide/key-note-categories-and-examples'
youtubeVideoId: '9lrEc8joc8g?start=390'
nextjs:
  metadata:
    title: App hangs when caps lock enabled on Sonoma
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I get a bug report on the user forum, which is about a platform-specific issue of Inkdrop.

What I took for fixing this bug was:

- A brief issue description
- A link to the bug report
- A suspicious error message
- My thoughts
- The process to find the reproduction
  - What I've done, what I've checked, and what I've thought on them
- Documented some code snippets and diffs for reproducing the issue
- Expressed my confused feelings
- A culprit
- A workaround
- Whether it worked or not after testing it in the user environment

{% /callout %}

- bug report: [Inkdrop hangs on MacOS Sonoma with caps lock active - 💁🏻‍♂️Support - Inkdrop Forum](https://forum.inkdrop.app/t/inkdrop-hangs-on-macos-sonoma-with-caps-lock-active/4347)

Errors output on the main process like so:

```
Attempting to call a function in a renderer window that has been closed or released.
Function provided here: undefined
```

No, that was not anything to the bug.

## It often hangs when handling onChange event on `input`

So, React might cause the issue??
I guess `inkdrop-keymap` is not a culprit.

## 🤔 It is highly likely an Electron's bug

It doesn't hang while recording a performance profiling of Developer Tools!!

## 👀 Try upgrading Electron to the latest

- [Bump up Electron to 28](inkdrop://note/w_9nD08LC)

## Reproduction

### Redux causes it?

```js
const Tester = () => {
  const [text, setText] = useState < string > ''
  const dispatch = useDispatch()
  const handleTextChange = (e) => {
    setText(e.target.value)
    dispatch(actions.searchBar.setQuery(e.target.value))
  }
  return (
    <div style={{ margin: 50 }}>
      <input
        type="text"
        className="native-key-bindings"
        value={text}
        onChange={handleTextChange}
      />
    </div>
  )
}
```

### Title input

In `EditorHeaderTitleInputBase`, it doesn't hung when avoiding calling `dispatch`.

This code causes the freeze:

```ts
dispatch(
  actions.editingNote.update({
    title: value,
  }),
)
```

But! if `EditorLayout` is hidden, it doesn't happen.

## `WindowControlButtons` is culprit?!

Using `memo` solved it 🤯

```diff
diff --git a/src/browser/components/window-control-buttons.tsx b/src/browser/components/window-control-buttons.tsx
index 278dd540..7c4d6dfb 100644
--- a/src/browser/components/window-control-buttons.tsx
+++ b/src/browser/components/window-control-buttons.tsx
@@ -1,9 +1,9 @@
-import React, { useCallback, useState, useEffect } from 'react'
+import React, { useCallback, useState, useEffect, memo } from 'react'
 import './window-control-buttons.less'
 import AppMenuButton from './app-menu-button'
 import getApp from '../utils/get-global-app'

-const WindowControlButtons = () => {
+const WindowControlButtons = memo(() => {
   const app = getApp()
   const [isMaximized, setMaximized] = useState(app.window.isMaximized())
   const handleMinimizeClick = useCallback(() => {
@@ -19,7 +19,6 @@ const WindowControlButtons = () => {

   useEffect(() => {
     const handleMaximized = () => setMaximized(true)
-
     const handleRestored = () => setMaximized(false)

     app.window.on('maximize', handleMaximized)
@@ -52,6 +51,6 @@ const WindowControlButtons = () => {
       </i>
     </div>
   )
-}
+})

 export default WindowControlButtons
```

`app.window.isMaximized()` may have a bug, but I don't know.

## But it still happens randomely

It is now way less frequent, but it still happens.

The debounced function???

`MDEPreview`?

## 🐞 Accessing remote object on key input causes the issue

It can be avoided by using `structuredClone`!
Now it makes sense why `WindowControlButtons` causes the issue since it accesses a Window remote object.

### Searching notes

When searching notes, it also randomly happens.

In `@inkdropapp/redux-store/src/utils/notes.ts`:

```ts
   6   export function loadWithKeyword(
   5   │ searchKeyword: string,
   4   │ queryOptions: FTSQueryOptions
   3   ): ThunkAction<Promise<void>> {
   2   │ return loadNotes(async (dispatch, _getState, getContext) => {
   1   │ │ try {
 403   │ │ │ const { db } = getContext()
```

Getting a reference of `db` also causes the hung...
So, it is hard to solve at the moment.

### Avoid accessing remote objects when editing a note

- {% check v=true /%} Commit: [fix(app): avoid using remote objects in `useNote`](https://github.com/inkdropapp/desktop/commit/3d3d0e63562bbfafefc31be0e97d4897605a23f3)

## Test it on the user's environment

It looks like it's working fine:

- {% check v=true /%} [Inkdrop hangs on MacOS Sonoma with caps lock active - #10 by Alessandro_Baldoni - 💁🏻‍♂️Support - Inkdrop Forum](https://forum.inkdrop.app/t/inkdrop-hangs-on-macos-sonoma-with-caps-lock-active/4347/10?u=craftzdog)
