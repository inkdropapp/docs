---
title: Note statuses
nextjs:
  metadata:
    title: Note statuses
    description: Keep track of issues with note statuses
---

{% video src="https://site-cdn.inkdrop.app/docs/manual/managing-tasks-with-status.mp4" /%}

Inkdrop can have several statuses for your notes, including 'Active', 'On Hold', 'Completed', and 'Dropped'.
And the notes with 'Completed' and 'Dropped' statuses are hidden in the note list by default when you view them via a notebook so you can focus on the active issues.
You can view them by clicking the **Completed** and **Dropped** tabs on the sidebar.{% .lead %}

![Note status](/images/issue-driven-note-taking_note_status.png)

## How to assign a status to a note

To add a status to a note:

1. Open the note that you want to mark with status.
2. Under the note's title, click **Status**.
3. Select a status from the list:
   - **Active**: You’re currently working on this task
   - **On Hold**: You’ve paused work on this task.
   - **Completed**: You’ve finished this task.
   - **Dropped**: You’re no longer pursuing this task.
   - **None**: Initial status for all notes. Set this status if you don't want to track progress of a note.

### Keyboard shortcuts

There are useful keyboard shortcuts to let you quickly change note statuses:

| macOS                                                                       | Windows/Linux                                                            | Note status |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| {% kbd %}Command{% /kbd %} + {% kbd %}Ctrl{% /kbd %} + {% kbd %}1{% /kbd %} | {% kbd %}Shift{% /kbd %} + {% kbd %}Alt{% /kbd %} + {% kbd %}1{% /kbd %} | `None`      |
| {% kbd %}Command{% /kbd %} + {% kbd %}Ctrl{% /kbd %} + {% kbd %}2{% /kbd %} | {% kbd %}Shift{% /kbd %} + {% kbd %}Alt{% /kbd %} + {% kbd %}2{% /kbd %} | `Active`    |
| {% kbd %}Command{% /kbd %} + {% kbd %}Ctrl{% /kbd %} + {% kbd %}3{% /kbd %} | {% kbd %}Shift{% /kbd %} + {% kbd %}Alt{% /kbd %} + {% kbd %}3{% /kbd %} | `On Hold`   |
| {% kbd %}Command{% /kbd %} + {% kbd %}Ctrl{% /kbd %} + {% kbd %}4{% /kbd %} | {% kbd %}Shift{% /kbd %} + {% kbd %}Alt{% /kbd %} + {% kbd %}4{% /kbd %} | `Completed` |
| {% kbd %}Command{% /kbd %} + {% kbd %}Ctrl{% /kbd %} + {% kbd %}5{% /kbd %} | {% kbd %}Shift{% /kbd %} + {% kbd %}Alt{% /kbd %} + {% kbd %}5{% /kbd %} | `Dropped`   |

## See also

- [Start guide: Issue-driven tech note-taking](/start-guide/issue-driven-note-taking)
