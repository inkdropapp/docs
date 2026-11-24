---
title: Widgets, Siri and Spotlight
nextjs:
  metadata:
    title: Widgets, Siri and Spotlight
    description: Put your notes on the home screen, find them with Siri and Spotlight, and keep them up to date with background sync
---

The mobile app lets the system reach your notes without opening the app: on the home screen, in Spotlight, and through Siri.{% .lead %}

{% video src="https://site-cdn.inkdrop.app/docs/manual/mobile-widgets-siri-spotlight.mp4" poster="https://site-cdn.inkdrop.app/docs/manual/mobile-widgets-siri-spotlight.jpg" /%}

## Home screen widgets

{%img src="/images/mobile-widgets_example.png" width="300" height="652" alt="A Notebook widget on the home screen" className="inline-block" /%}

Widgets are available on both iOS and Android. There are two of them:

- **Notebook**: Lists the notes of a notebook you pick.
- **Pinned Notes**: Lists your [pinned notes](/reference/pin-notes-to-top).

Each row shows the status, the title, when the note was updated, the task progress and the tags, like the note list in the app. Tap a note to open it in the app. The widgets use the colors of your app theme, including the themes you installed.

### Add a widget

1. Long-press the home screen.
2. Open the widget list and select **Inkdrop**.
3. Select the **Notebook** or the **Pinned Notes** widget and add it.

{%img src="/images/mobile-widgets_add.png" width="300" height="652" alt="Adding the Notebook widget" className="inline-block" /%}

### Pick the notebook to show

1. Open the settings of the **Notebook** widget.
2. Select the notebook.
3. To list the notes of its sub-notebooks as well, turn on **Include Sub Notebooks**. It is off by default.

{%img src="/images/mobile-widgets_settings.png" width="300" height="652" alt="The settings of the Notebook widget" className="inline-block" /%}

## Spotlight (iOS) {% #spotlight %}

Your notes show up in Spotlight.

1. Swipe down on the home screen.
2. Search by a note's title, its tags or its text.
3. Tap a result to open the note in Inkdrop.

## Siri (iOS) {% #siri %}

On iOS 27 or later, Siri can use your notes. Ask it to find notes about a topic, to summarize a note, or to open one.

{% video src="https://site-cdn.inkdrop.app/release-notes/mobile_v6.2.0-siri_demo.mp4" /%}

{% callout title="Privacy" %}
The search index for Spotlight and Siri stays on your device. It can't be read while the device is locked, and it is cleared when you log out. If you don't want your notes in Spotlight or Siri, turn it off for Inkdrop in the iOS Settings.
{% /callout %}

## Background sync

The app syncs from time to time while it is closed, on iOS and Android. Your notes are already up to date when you open the app, and the widgets and Spotlight stay fresh as well.

The system decides when an app may run in the background, based on how often you use it, the battery and the network. So the sync doesn't happen at fixed times.

## Create a note from the app icon

Long-press the app icon and select **New Note** to start writing right away.

{%img src="/images/mobile-widgets_app-icon-menu-ios.png" width="300" height="262" alt="The app icon menu on iOS" className="inline-block" /%}
{%img src="/images/mobile-widgets_app-icon-menu-android.png" width="300" height="360" alt="The app icon menu on Android" className="inline-block" /%}
