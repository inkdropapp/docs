---
title: Import notes from Apple Notes
nextjs:
  metadata:
    title: Import notes from Apple Notes
    description: How to import your notes from Apple Notes
---

You can import notes from Markdown files.
It comes in handy when you would migrate your notes from Apple Notes.
Apple Notes can export your notes as Markdown, which Inkdrop imports directly — including their images.

## Export Notes as Markdown from Apple Notes

### On a Mac (macOS 26 Tahoe or later)

Apple Notes has a built-in feature to export notes as Markdown. Select a note — or hold ⌘ and select multiple notes — that you wish to export, then choose **File -> Export as -> Markdown** from the menu.

Choose a destination folder, then click ‘Save’.

When you export multiple notes, each note becomes its own `.md` file and every embedded image is collected into a single `Attachments` folder next to them. Keep this whole folder together — you will point Inkdrop at it in the next step so the images come across with your notes.

### On older macOS, or for a large migration

If you are on a macOS version older than 26 (Tahoe) that has no built-in Markdown export, or you want to bulk-export your entire library at once, use a third-party tool such as the open-source [Apple Notes Exporter](https://github.com/kzaremski/apple-notes-exporter). Export your notes to Markdown, then import them into Inkdrop as described below.

## Import Notes from Markdown Files

Now let’s import them. Select **File -> Import -> from Markdown files…** from the menu.

A dialog shows up, which asks you to select which notebook to be the destination. Once you have chosen a notebook, click ‘OK’. You will see the open file dialog — select the folder that Apple Notes created (the one containing your `.md` files and the `Attachments` folder). That’s it!

{% callout type="note" %}
Select the exported **folder** rather than the individual `.md` files. Inkdrop resolves the relative links to the `Attachments` folder so your images are imported along with the notes, and any subfolders are re-created as nested notebooks.
{% /callout %}
