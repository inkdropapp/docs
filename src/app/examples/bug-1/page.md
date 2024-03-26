---
title: 'Keybindings with numbers and the shift modifier together do not work'
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Keybindings with numbers and the shift modifier together do not work
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I get a bug report on the user forum, which is about keybindings of Inkdrop.
{% /callout %}

- bug report: <https://forum.inkdrop.app/t/keybindings-with-numbers-and-the-shift-modifier-together-do-not-work/4482>

> ## Bug report
>
> Currently keybindings cannot contain numbers with the shift modifier together in one keybinding (eg. `ctrl-shift-2`)
>
> Therefore the default keybindings for changing the note status also dont work.
>
> I have tried to use the character in the keybinding that appears when using shift and the number (eg. `shift-1` → `!` - german keyboard layout) as this is the case when using the shift modifier with an alphabetic character (eg. `shift-K`)
>
> ### Environment
>
> - Platform: Windows, Ubuntu
> - Platform version: 11, 22.04
> - App Version: v5.8.0-beta.1
>
> ### How to reproduce
>
> These are a few keybindings that i have used for some testing.
>
> not working keybindings:
>
> ```plaintext
> "alt-shift-2"
> "ctrl-shift-2"
> "shift-ctrl-2"
> "ctrl-shift-!"
> "shift-ctrl-!"
> ```

It can be reproduced on macOS as well.
I looked into the source code of the Atom's keymap module and found that it is intended:

- [inkdrop-keymap/src/helpers.js at e7bdc852a554a7e18d01610b67fa6bbced917f95 · inkdropapp/inkdrop-keymap · GitHub](https://github.com/inkdropapp/inkdrop-keymap/blob/e7bdc852a554a7e18d01610b67fa6bbced917f95/src/helpers.js#L347)

```js
        // fetch the shifted version to maintain our former keystroke output
      } else if (!isAltModifiedKey) {
        return __guard__(
          KeyboardLayout.getCurrentKeymap(),
          x1 => x1[event.code]
        )
      }
    })()
  if (characters) {
    if (event.shiftKey) {
      key = characters.withShift
    } else if (characters.unmodified != null) {
      key = characters.unmodified
    }
  }
}
```

It converts characters to the 'with-shift' ones if the shift key is held down.

But I guess it could be resolved by converting characters when normalizing a keystroke here:

- [inkdrop-keymap/src/helpers.js at e7bdc852a554a7e18d01610b67fa6bbced917f95 · inkdropapp/inkdrop-keymap · GitHub](https://github.com/inkdropapp/inkdrop-keymap/blob/e7bdc852a554a7e18d01610b67fa6bbced917f95/src/helpers.js#L146)

## test

Modified the code in `helpers.js`:

```js
console.log(key, 'isNonCharacterKey:', isNonCharacterKey)
console.log(key, 'isLatinCharacter:', isLatinCharacter(key))
console.log(key, 'isUpperCaseCharacter:', isUpperCaseCharacter(key))
if (
  key === 'shift' ||
  (shiftKey &&
    event.type !== 'keyup' &&
    (isNonCharacterKey || (isLatinCharacter(key) && isUpperCaseCharacter(key))))
) {
  if (keystroke) {
    keystroke += '-'
  }
  console.log('add shift')
  keystroke += 'shift'
}
```

When pressing <kbd>Cmd-Shift-1</kbd>:

```
! isNonCharacterKey: false
! isLatinCharacter: true
! isUpperCaseCharacter: false
```

I don't know it is a bug or not..

- Created a PR: [Keybindings with numbers and the shift modifier together do not work by craftzdog · Pull Request #1 · inkdropapp/inkdrop-keymap · GitHub](https://github.com/inkdropapp/inkdrop-keymap/pull/1)
