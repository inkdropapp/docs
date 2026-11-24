---
title: Use a hardware keyboard on mobile
nextjs:
  metadata:
    title: Use a hardware keyboard on mobile
    description: Keyboard shortcuts, Vim keybindings and multiple cursors in the Inkdrop mobile app
---

With a hardware keyboard connected to your iPad, iPhone or Android device, you can use the same shortcuts as the desktop app.{% .lead %}

## Keyboard shortcuts

The shortcuts work on any screen of the app. The ones marked "tablet" are for tablets only.

| Shortcut                                                              | Action                                    |
| --------------------------------------------------------------------- | ----------------------------------------- |
| {% kbd s="Command+N" /%}                                              | New note                                  |
| {% kbd s="Command+S" /%}                                              | Save the note                             |
| {% kbd s="Command+/" /%}                                              | Toggle the sidebar                        |
| {% kbd s="Command+E" /%}                                              | Toggle the preview                        |
| {% kbd s="Command+P" /%}                                              | Toggle side-by-side mode (tablet)         |
| {% kbd s="Shift+Command+D" /%}                                        | Toggle Distraction Free Mode (tablet)     |
| {% kbd s="Shift+Command+]" /%} / {% kbd s="Shift+Command+[" /%}       | Open the next / previous note in the list |
| {% kbd s="Shift+Command+F" /%}                                        | Search notes                              |
| {% kbd s="Shift+Command+P" /%}                                        | Print the note                            |

- **iPad**: The shortcuts are listed in the menu bar, and in the overlay that appears when you hold {% kbd s="Command" /%}.
- **Android**: Use {% kbd s="Ctrl" /%} in place of {% kbd s="Command" /%}. Android reserves the Windows / Command key for system shortcuts.

## Vim keybindings

{%img src="/images/mobile-hardware-keyboard_vim.png" width="300" height="478" alt="The Vim Keybindings option in Editor Settings" className="inline-block" /%}

1. Open a note and close the software keyboard.
2. Tap the **Settings** button on the toolbar to open **Editor Settings**.
3. Turn on **Vim Keybindings**.

Vim keybindings are active only while a hardware keyboard is connected. With the software keyboard, the editor works as usual.

## Multiple cursors

Multiple cursors are supported with a hardware keyboard, as in the desktop editor. Formatting such as bold and italic applies to every selection at once.
