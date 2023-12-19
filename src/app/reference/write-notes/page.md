---
title: Write notes
nextjs:
  metadata:
    title: Write notes
    description: How to write notes in Inkdrop
---

Notes are the central piece in the Inkdrop universe. You can perform all CRUD operations (create, read, update, and delete) with them, duplicate, and export notes in various formats.
Inkdrop supports both standard Markdown syntax and the
[GitHub Flavored Markdown (GFM)](/writing/basic-writing-and-formatting-syntax) with inline formatting.{% .lead %}

## Create notes

To create a note:

- Click {% icon name="pencil-write" /%} in the upper-right corner of the note list.  
  You can also use the {% kbd s="Command+N" /%} / {% kbd s="Ctrl+N" /%} shortcut.

An untitled empty note is created. Name the note, so it'll be easier to look for later.

## Delete notes

To delete a note, right-click the note and select the **Move to trash** option. Alternatively, you can select a note with a left-click and use the {% kbd s="Command+Del" /%} / {% kbd s="Delete" /%} shortcut.

Inkdrop also lets you delete multiple notes at once. To do this:

1. Holding the {% kbd s="Command" /%} / {% kbd s="Ctrl" /%} key, select the notes you want to delete.  
   Inkdrop shows the number of selected notes in the rightmost area.
2. On the right screen, click **{% icon name="bin-1" /%} Move to Trash**.

### Restore deleted notes

Inkdrop lets you restore the deleted notes.

To restore notes:

1. In the sidebar, click **{% icon name="bin-1" /%} Trash**.
2. Select the notes you want to restore and click **{% icon name="book-close-2" /%} Move to Notebook** in the rightmost area.  
   ![Restore multiple notes in Inkdrop](/images/writing-note-select-multiple.png)
3. In the **Move to Notebook** dialog, select a notebook where you want to restore the notes.  
   The notes are restored to the selected notebook.

### Delete notes permanently

{% callout title="Warning" type="warning" %}
If you delete your notes permanently, there's no way to restore them.
{% /callout %}

To delete notes permanently:

1. In the sidebar, click **{% icon name="bin-1" /%} Trash**.
2. Select the notes you want to delete permanently and click **{% icon name="bin-1" /%} Delete Permanently** in the rightmost area.  
   The notes are deleted forever.

## Copy notes

Inkdrop lets you make a complete copy of notes. The copy has title, content, and tags of its original note.

To duplicate notes:

- Right-click the note to copy and select **Duplicate**.  
  Alternatively, select the note and use the {% kbd s="Command+D" /%} shortcut.

The copy is created in the current notebook.

## Tag notes

Tags are keywords that you can add to notes, so they're easier to group and find. For example, you can add the `react` tag to all notes related to the technology. Tags help you organize and browse your notes a lot easier.

{% callout title="Note" %}
You can use emojis to name tags. For example, if you learn a new language, you can tag the language-related notes with the corresponding country flag 🇮🇹
{% /callout %}

To tag a note:

1. Open the note you want to tag.
2. Under the note's title, enter the tag name in the **Add Tags** field.  
   Inkdrop suggests already existing tags as you enter.
3. Press {% kbd s="Enter" /%} to add the tag to the note.

![Tag image in Inkdrop](/images/add_tag.png)

If it's a new tag, Inkdrop automatically adds it to the **{% icon name="tags-double" / %} Tags** list. You can find the list in the sidebar.

## Live preview

Inkdrop lets you preview notes to see what they eventually look like.

To preview a note:

- Open a note and use {% kbd s="Command+P" /%} / {% kbd s="Ctrl+P" /%}.  
   The note and its preview are displayed side-by-side.  
  ![SideBySide](/images/writing-note_sidebyside.png)

There are 2 more ways to toggle preview. In the lower right corner of the editor:

- Click {% icon name="view-1" / %} to switch between the note and its preview.
- Click {% icon name="layout-two-columns" / %} to toggle note and its preview side-by-side.

![Toggle buttons](/images/writing-note_toggle_buttons.png)

{% callout title="Notice" type="warning" %}
Note that the icons are hidden by default. Hover the mouse cursor over the editor and icons will appear in the lower right corner of the editor.
{% /callout %}

## Distraction Free Mode

'Distraction Free Mode' lets you focus on the writing process by hiding the sidebar and note list.

To toggle the 'Distraction Free Mode':

- Use {% kbd s="Command+Shift+D" /%} / {% kbd s="Ctrl+Shift+D" /%}.

You can even hide the toolbar with controls for quick formatting. For this, take the following steps:

1. Open **Preferences** by clicking the {% icon name="cog" /%} icon in the upper right corner of the sidebar.  
   You can also use {% kbd s="Command+," /%} / {% kbd s="Ctrl+," /%}.
2. Go to **Editing** and clear the **Toolbar** checkbox.  
   The toolbar is hidden.
