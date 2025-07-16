---
title: Global hotkey for focusing Min browser & other frequently used apps
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Global hotkey for focusing Min browser & other frequently used apps
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I wanted to quickly focus on specific apps with a global hotkey.
{% /callout %}

## Use Automator

### AppleScript

```applescript
on run {input, parameters}

	tell application "Min" to activate

	return input
end run
```

But it has 0.5s delay.

### Shell script

```sh
#!/bin/bash
open /Applications/Min.app
```

Okay that's better:

![Automator](/images/example-note_config-and-tips-4_automator.png)

The file is saved in `/Users/nora/Library/Services`.

## Try Keyboard Maestro

- [Keyboard Maestro 10.2: Work Faster with Macros for macOS](http://www.keyboardmaestro.com/main/)

This worked pretty well! No delays!

![This worked](/images/example-note_config-and-tips-4_keyboard-maestro.png)
I love it so far. Maybe I'll buy it tomorrow.
