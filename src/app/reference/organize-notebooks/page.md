---
title: Organize notebooks
nextjs:
  metadata:
    title: Organize notebooks
    description: How to organize notebooks in Inkdrop
---

One of the ways to think about notebooks is like separate projects. Every notebook covers a specific topic and can be divided into sub-notebooks. Every (sub)notebook has a list of notes, and every note can have [tags](/reference/write-notes#tag-notes) and [statuses](/reference/note-statuses). When the number of notebooks or their content grows, notebooks management can become a nightmare.
Inkdrop lets you gracefully organize the notebooks, declutter your workspace, and display the information that belongs to a specific notebook.{% .lead %}

## View notebook-specific notes

To view the notes belonging to a specific notebook:

- Click {% icon name="arrow-down-1" /%} next to the notebook's title.

When a notebook is expanded, the note list shows the notebook's direct notes. The **Project** notebook in the image below has only one note.

![Expanded notebook](/images/navigating-notes_notebook_expanded.png)

When a notebook is collapsed, the note list shows direct notes from the collapsed notebook and all of its sub-notebooks.

![Collapsed notebook](/images/navigating-notes_notebook_collapsed.png)

## View notebook-specific statuses and tags

By default, the sidebar shows all notebooks, statuses, and tags fetched from the database.
They're mixed together, and it can be challenging to understand which entity belongs to which notebook.

To display entities of a specific notebook:

- Hover over the notebook and click **Detail** next to its name. You can also open a notebook and press {% kbd s="Enter" /%}.  
  The sidebar only shows sub-notebooks, statuses, and tags of the selected notebook so you can focus on specific information.

![Disclosure button on sidebar](/images/notebook_detail.png)

### Mobile

To display notebook-specific entities on a mobile device:

- Select the {% icon name="arrow-circle-right" /%} icon next to the notebook.  
  The sidebar shows entities specific to the selected notebook.

![Disclosure Button on Notebook List on Mobile](/images/navigating-notes_sidebar-mobile.png)
