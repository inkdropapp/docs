---
title: Restore previous revisions of note
nextjs:
  metadata:
    title: Restore previous revisions of note
    description: Inkdrop automatically creates a new revision each time you stop writing a note, allowing you to quickly restore any previous version with ease
---

Inkdrop keeps a history of changes made in your notes. Whenever you stop writing a note, Inkdrop automatically creates a new revision. You can quickly restore any previous revision.

## Which revisions can be restored

Inkdrop synchronizes only the latest revision of a note across multiple devices. For example, if you have older revisions made in a mobile app, you can't access them in the desktop app. Only the latest revision is available in the desktop app. Inkdrop's database deletes old revisions automatically to save the storage capacity.

## Restore previous revisions of note

### Desktop

1. Select a note.
2. In the upper-right corner of the editor, click menu {% icon name="navigation-menu-vertical" /%}.  
   Alternatively, select <kbd>Command+J</kbd> or <kbd>Ctrl+J</kbd> on Windows/Linux.
3. Select {% icon name="history" /%} **Revision History..**.
4. Select a revision you want to restore.
   {% callout type="warning" %}
   To see which exact lines were added and removed in a revision, select the _Show as Patch_ checkbox. The added lines are highlighted with green, and the removed lines — with red.
   {% /callout %}
5. Click **Restore**.  
   The selected revision is restored.

#### Undo restoring

To undo restoring:

- Select <kbd>Command+Z</kbd> (or <kbd>Ctrl+Z</kbd> on Windows/Linux).  
  Alternatively, in the menu bar, select **Edit** > **Undo**.

### Mobile

1. Select a note.
2. In the upper right corner, select info {% icon name="info-circle" /%}.
3. Select &nbsp;{% icon name="history" /%} **Revision History**.
4. On the **Note Revisions** screen, select a revision you want to restore.
   <div class="ui info message">
      To see the difference between the revision and the current version of the note, switch on the <b>Compare with the latest</b> toggle.
   </div>
5. Select &nbsp;{% icon name="archive-restore" /%} **Restore This Revision**.
6. Confirm the action.  
   The selected note revision is restored.
