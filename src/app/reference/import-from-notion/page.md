---
title: Import notes from Notion
nextjs:
  metadata:
    title: Import notes from Notion
    description: How to import your notes from Notion
---

You can import notes from Markdown files.
It comes in handy when you would migrate your notes from Notion.
Notion can export your pages as Markdown, which Inkdrop imports directly — including their images.

## Export Pages as Markdown from Notion

### A single page (and its subpages)

Open the page you want to export, click the **•••** icon at the top right, then choose **Export** from the menu.

In the export dialog, set the export format to **Markdown & CSV**. Turn on **Include subpages** to export nested pages as well, then click **Export**. Notion downloads a `.zip` file.

Unzip it. Each page becomes its own `.md` file, and the images and other assets on your pages are saved into folders next to them. Keep this whole unzipped folder together — you will point Inkdrop at it in the next step so the images come across with your notes.

### Your entire workspace

In the sidebar, go to **Settings -> Workspace -> General**, then select **Export all workspace content**. Choose **Markdown & CSV** as the format and turn on **Include subpages**.

For a large workspace, Notion prepares the export in the background and emails you a download link when it is ready (the link expires after 7 days). Download and unzip it as above.

{% callout type="note" %}
Notion exports standard Markdown, but some blocks do not have a Markdown equivalent — callouts are exported as HTML, and databases become a CSV file with a Markdown file for each row. Review those notes after importing.
{% /callout %}

For more information, see [Export your content](https://www.notion.com/help/export-your-content) in the Notion Help Center.

## Import Notes from Markdown Files

Now let’s import them. Select **File -> Import -> from Markdown files…** from the menu.

A dialog shows up, which asks you to select which notebook to be the destination. Once you have chosen a notebook, click ‘OK’. You will see the open file dialog — select the unzipped folder you exported from Notion (the one containing your `.md` files and their asset folders). That’s it!

{% callout type="note" %}
Select the exported **folder** rather than the individual `.md` files. Inkdrop resolves the relative links to the asset folders so your images are imported along with the notes, and any subfolders are re-created as nested notebooks.
{% /callout %}
