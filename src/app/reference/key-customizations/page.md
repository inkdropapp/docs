---
title: Customize keybindings
nextjs:
  metadata:
    title: Customize keybindings
    description: How to customize keybindings
---

Inkdrop keymaps work similarly to stylesheets.
Just as stylesheets use selectors to apply styles to elements, Inkdrop keymaps use selectors to associate key combinations with events in specific contexts.
Here's a small example, excerpted from Inkdrop's built-in keymap:

```js
{
  ".CodeMirror textarea": {
    "enter": "editor:new-line"
  },
  "body .native-key-bindings": {
    "enter": "native!"
  }
}
```

This keymap defines the meaning of `Enter` in two different contexts.
In a normal editor, pressing `Enter` triggers the `editor:new-line` command, which causes the editor to insert a newline.
But if the same keystroke occurs outside the editor, it instead triggers the native behavior.

By default, `keymap.json` is loaded when Inkdrop is started.
It will always be loaded last, giving you the chance to override bindings that are defined by Inkdrop's core keymaps or third-party packages.

Available commands can be found [here](https://developers.inkdrop.app/guides/list-of-commands).
You can also see all the keybindings that are currently configured in your installation of Inkdrop in _Keybindings_ section on _Preferences_ window:

![Preferences](/images/customizing-keybindings_preferences.png)

By clicking **your keymap file** on the top of this section, you can open up the file.

There are a few special commands that you can use in your keymap:

- `native!`: This command will trigger the default behavior of the key event.
- `unset!`: This command will unbind the existing keybinding.
- `abort!`: This command will prevent the default behavior of the key event. It calls `preventDefault` on the event object.

## Multi-stroke keybindings

Inkdrop also supports multi-stroke keybindings — sequences of keys typed one after another (similar to key chords in Vim and Emacs).
You can configure them like this:

```js
{
  ".mde-preview": {
    "s h": "core:focus-note-list-bar",
    "s k": "editor:title:focus",
    "space k": "editor:title:focus",
    "space e": "core:find",
    "space i": "core:find-global",
    "space o": "core:find"
  }
}
```

This feature is especially useful for Vimmers who are comfortable with modal editing and mnemonic key sequences.

## Global keybindings

There is a special selector called `global` which lets you configure global keybindings.
You can run a command when the app does not have keyboard focus.

### Show and focus Inkdrop main window

![Bring window into focus](/images/customizing-keybindings_globalshortcuts.gif)

```js
{
  "global": {
    "cmd-shift-x": "application:show-and-focus-main-window",
    "cmd-shift-c": "application:quick-note"
  }
}
```

### Toggle Inkdrop main window

```js
{
  "global": {
    "cmd-shift-x": "application:toggle-main-window"
  }
}
```

### Create a note and show it in a separate window

Quickly open up a new note with a shortcut:

```js
{
  "global": {
    "cmd-shift-c": "application:quick-note"
  }
}
```
