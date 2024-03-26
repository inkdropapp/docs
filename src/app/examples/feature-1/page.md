---
title: Improve revision history view
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Improve revision history view
---

{% callout title="This is an example note" %}
I took this note when I got a feature idea and tried to implement it

What I took for adding this new feature was:

- A brief idea description, like what issue you are going to solve
- Temporary snippets for testing
- A promising library, and how it actually was
- Screenshots of UI inspiration and implementation
- Platform-specific issues

{% /callout %}

![overview](/images/example-note_feature-1_structure.png)

- 🗃️ Repo (private): https://github.com/inkdropapp/revision-utils

It is annoying to choose a revision from the list to view the old note versions.
It'd be useful to support displaying the revision history like `git log -p`.

## Test data

```js
let noteId = `note:KyDZ-1BlP`
let note = await inkdrop.main.dataStore.local.notes.get(noteId, {
  revs_info: true,
})
let revs = await Promise.all(
  note._revs_info
    .filter((info) => info.status === 'available')
    .map((info) => {
      return inkdrop.main.dataStore.local.notes.get(noteId, { rev: info.rev })
    }),
)
```

You can get revision IDs via `note._revs_info[number].rev`, where `info.status === 'available'`

Alternatively:

```js
let noteId = `note:KyDZ-1BlP`
inkdrop.main.dataStore.localPouch
  .changes({ doc_ids: [noteId], since: 0 })
  .on('change', (info) => {
    console.log(info)
  })
```

No, it doesn't work

## Use diff to create patches

- [GitHub - kpdecker/jsdiff: A javascript text differencing implementation.](https://github.com/kpdecker/jsdiff)

Oh yeah, it's actually easy:

```js
const bodyPatch = structuredPatch(
  'note',
  'note',
  oldNote.body,
  newNote.body,
  oldNote._rev,
  newNote._rev,
)
```

Now you can get diff infos something like this:

```js
{
    "oldRev": "55-e5813ba53592b4c35237074f70676bac",
    "newRev": "56-63bab07dcf1f135a2dd70db2beddf025",
    "body": {
        "oldFileName": "note",
        "newFileName": "note",
        "oldHeader": "55-e5813ba53592b4c35237074f70676bac",
        "newHeader": "56-63bab07dcf1f135a2dd70db2beddf025",
        "hunks": [
            {
                "oldStart": 27,
                "oldLines": 8,
                "newStart": 27,
                "newLines": 9,
                "lines": [
                    " ",
                    " ## Rebuild UI",
                    " ",
                    " * [oblador/react-native-animatable: Standard set of easy to use animations and declarative transitions for React Native](https://github.com/oblador/react-native-animatable)",
                    "+* [Create a UI mockup using Restyle](inkdrop://note/FmIrJlT-O)",
                    " ",
                    " ## Bug tracking",
                    " ",
                    " * Upgrade lib: [Bugsnag docs › React Native › Navigation libraries](https://docs.bugsnag.com/platforms/react-native/react-native/navigation-libraries/)"
                ]
            }
        ]
    }
},
```

## UI

### GitHub

![GitHub's UI](/images/example-note_feature-1_github-ui.png)

### Implementation

It supports selecting diff text

![UI](/images/example-note_feature-1_impl.png)

Light theme:

![Light theme #x-small](/images/example-note_feature-1_lightui.png)

## Android issues

### ✅ Non-editable TextInput text selection not working on android

- Use this instead: https://github.com/msand/react-native-selectable-text

Oh no, it's quite old - last update date is 4y ago..
But it's simple enough, so I assume it works.

👀 Oh, `<Text selectable>` allows you select the text on Android!

- 😕 [Text in FlatList is not selectable on Android · Issue #26264 · facebook/react-native · GitHub](https://github.com/facebook/react-native/issues/26264)
  - Workaround: `removeClippedSubviews={false}`
    - [Optimizing Flatlist Configuration · React Native](https://reactnative.dev/docs/optimizing-flatlist-configuration)

### ✅ `lineHeight` on Android works incorrectly

The lines are not properly aligned..

![Android #x-small](/images/example-note_feature-1_android-issue.png)

Changing the body font size to 13 solved.
