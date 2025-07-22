---
title: Clip web pages from browser
nextjs:
  metadata:
    title: Clip web pages from browser
    description: Use a browser extension to clip web pages as Markdown
---

## Desktop

Inkdrop can clip web pages as Markdown via a browser extension.
It allows you to grab the web page's main article or selection.

### Prerequisites: Set up a local Inkdrop server

The browser extension stores the clipped data to the Inkdrop app **locally**, not to the Inkdrop server directly
because the app syncs data securely via the end-to-end encryption.
To accomplish that, you have to set up a local Inkdrop server beforehand so that the browser extension can access your local database.
Please check out the following guide:

- [Inkdrop API Reference: Integrate with External Programs](https://developers.inkdrop.app/guides/integrate-with-external-programs)

### Install Web Clipper

- [Chrome Extension](https://chrome.google.com/webstore/detail/inkdrop-web-clipper/foeipofmnkjhlbojckgiecdffbfnnofj)
- [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/inkdrop-web-clipper/)

### Set up Web Clipper

The web clipper needs to know how to access your local database server.
Open the extension options by right-clicking the extension toolbar icon and selecting "Options":

{%img src="/images/clipping-web-pages-from-browser_open-options.png" width="300" height="300" alt="Options menu" className="inline-block" /%}

Then, fill in the following fields:

- **Inkdrop Local Database URL** (Optional) - The URL to the local database as you configured in `core.server.port`. Default is `http://localhost:19840`
- **Username** (Required) - The Basic auth username as you configured in `core.server.auth.username`.
- **Password** (Required) - The Basic auth password as you configured in `core.server.auth.password`.

### Steps to Clip a Web Page

First, click the Inkdrop toolbar button on the top right corner of the browser:

![Inkdrop extension toolbar button](/images/clipping-web-pages-from-browser_toolbar.png)

Then, a web clipper window opens up, displaying the main content converted as Markdown, as following:

![Inkdrop Web Clipper window](/images/clipping-web-pages-from-browser_window.png)

You can choose a notebook and add tags if you want.

Click the "**Save Clip**" button, then the window will close and the clipped page will be saved.

## Mobile

Inkdrop allows you to save links or clip web pages on mobile using the system share functionality on iOS and Android.

### Steps to Save a Link

First, open a web page in your mobile browser and tap the share button.
Then, select the "Inkdrop" icon from the share sheet.

On iOS:

{%img src="/images/web-clipper-ios_01.png" width="300" height="300" alt="Inkdrop share action" className="inline-block" /%}
{%img src="/images/web-clipper-ios_02.png" width="300" height="300" alt="Inkdrop share action" className="inline-block" /%}

On Android:

{%img src="/images/web-clipper-android_01.png" width="300" height="300" alt="Inkdrop share action" className="inline-block" /%}
{%img src="/images/web-clipper-android_02.png" width="300" height="300" alt="Inkdrop share action" className="inline-block" /%}

The "Save or Insert Link" screen will open:

{%img src="/images/web-clipper-ios_03.png" width="300" height="300" alt="Inkdrop share action" className="inline-block" /%}

It provides the following options:

- **Notebook**: Choose the notebook where you want to save the web clip.
- **Include Page Content**: Toggle this option to extract and save the main content as Markdown. Otherwise, it only includes the page description.
- **Save as a Web Clip**: Converts the web page into a note with the extracted content.
- **Insert a Link into the Editor**: If you have a note open, you can insert the shared URL into it.
- **Copy Link as Markdown**: Copies the link in Markdown format to your clipboard.

Tap "**Save as a Web Clip**" to save the extracted content into Inkdrop. If you only need the link, choose "**Copy Link as Markdown**" or "**Insert a Link into the Editor**."

### Bonus Tip: Use a Custom URI Scheme to Save a Link

If you would like to programmatically save a link to Inkdrop, you can trigger the web clipper screen using the app's URI scheme:

- `inkdrop://actions/save-link?url=<URL>`

You can invoke it via Shortcuts on iOS or Tasker on Android.
