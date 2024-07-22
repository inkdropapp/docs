---
title: Share notes on the web
nextjs:
  metadata:
    title: Share notes on the web
    description: Publishing individual notes on the web
---

Publishing notes on the web comes in handy if you are working on a team project or just passing along useful tips to friends.
It allows you to share your Markdown notes with anyone, even those who don't use Inkdrop.

## Steps to Publish Notes

First, click the three-dash button on the top right corner of the editor, or press {% kbd s="Command + J" /%} on macOS or {% kbd s="Ctrl + J" /%} on Linux and Windows:

![“Share Note” button](/images/sharing-notes_button.png)

Then, click "Share on Web.." menu on the editor drawer.

!["Share on Web.." menu](/images/sharing-notes_menu.png)

You will see a dialog which confirms you share the note on the web. Press “Share” button to proceed.

![Confirmation Dialog](/images/sharing-notes_confirmation.png)

Then, a public link for the note is created. You can view the note on your browser by clicking the URL displayed.

![Generated Public Link](/images/sharing-notes_link.png)

{% callout type="warning" title="Note" %}
The note may not be correctly displayed on your browser if you opened too quickly after creating the public link as the synchronization of your database hasn't been completed yet.
Please try it again after a few moments.

Images on external sites are prohibited because of the security reason. Please use attachment images if you want to insert images in your notes.
{% /callout %}

## Linking Between Shared Notes

If you have multiple notes and want to link from one to another, you can use internal note links.
The URI of these internal note links looks like this: `inkdrop://note/xxxxxxxxxxx`.
These links will be automatically converted to the shared URLs when viewing the note on the web.

To insert an internal note link in your note:

1. Right-click the note you want to link to in the note list
   ![Right-click the note](/images/sharing-notes_copy-note-link.png)
2. Select "**Copy Note Link**" from the context menu, or press {% kbd s="Command + C" /%} on macOS or {% kbd s="Ctrl + C" /%} on Linux and Windows while the note is selected in the note list
3. Paste the copied link into your note. The inserted link would look like this: `[Note title](inkdrop://note/xxxxxxxxxxxx)`
