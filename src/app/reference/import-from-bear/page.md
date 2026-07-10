---
title: Import notes from Bear
nextjs:
  metadata:
    title: Import notes from Bear
    description: How to import your notes from Bear
---

You can import notes from Markdown files.
It comes in handy when you would migrate your notes from Bear.
Bear can export your notes as Markdown, which Inkdrop imports directly — including their images.

## Export Notes as Markdown from Bear

### A single note

Click the **…** button in the upper-right corner of the note, then choose **Markdown (.md)** as the export format.

### Multiple notes (Mac)

Hold ⌘ and click to select the notes you want in the note list, then choose **File -> Export notes…** from the menu bar. Pick **Markdown (.md)** as the format and export.

### All notes (Mac)

Click **Notes** in the sidebar, press ⌘A to select every note, then choose **File -> Export notes…** and pick **Markdown (.md)**.

Bear saves each note as its own `.md` file, and any images and attachments are exported into an assets folder next to them. Keep this whole exported folder together — you will point Inkdrop at it in the next step so the images come across with your notes.

{% callout type="note" %}
Bear’s `#hashtag` tags are exported as plain text, and some Bear-specific styling has no Markdown equivalent, so review your notes after importing. If you want images bundled with each note in a single file, Bear can also export as **Text Bundle (.textbundle)**.
{% /callout %}

For more information, see [Export your notes](https://bear.app/faq/export-your-notes/) in the Bear FAQ.

## Import Notes from Markdown Files

Now let’s import them. Select **File -> Import -> from Markdown files…** from the menu.

A dialog shows up, which asks you to select which notebook to be the destination. Once you have chosen a notebook, click ‘OK’. You will see the open file dialog — select the folder you exported from Bear (the one containing your `.md` files and their assets). That’s it!

{% callout type="note" %}
Select the exported **folder** rather than the individual `.md` files. Inkdrop resolves the relative links to the assets folder so your images are imported along with the notes, and any subfolders are re-created as nested notebooks.
{% /callout %}
