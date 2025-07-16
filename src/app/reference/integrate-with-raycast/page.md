---
title: Integrate with Raycast
nextjs:
  metadata:
    title: Integrate with Raycast
    description: How to integrate with Raycast
---

[Raycast](https://www.raycast.com/) is a powerful productivity tool for macOS that allows you to control your apps and workflows with a simple command palette.
By integrating Inkdrop and Raycast, you can instantly search your notes from Alfred.

## Install the Raycast extension

Go to [the Raycast Store](https://www.raycast.com/yaeda/inkdrop) and install the Inkdrop extension.

## Configuration

### 1. Set up the local http server

The workflow accesses your notes via HTTP locally.
You have to configure the app to open a HTTP endpoint.
See [the instruction](https://developers.inkdrop.app/guides/access-the-local-database#accessing-via-http-advanced) for more detail.

### 2. Set up the extension

Open the Raycast preferences and navigate to the Extensions section. Find the Inkdrop extension and click on it to specify your server configuration.

![configure workflow][configure-1]

## Usage

### Searching notes

You can use [the same qualifiers](https://docs.inkdrop.app/reference/search-and-filter-notes#filter-notes-with-special-qualifiers) for filtering notes.

Set an alias like `ink` to the command so you can quickly search your notes by typing `ink {query}` in Raycast.

![screenshot][search]

### Creating a new note

{% kbd %}Command + Enter{% /kbd %} to create a new note.

## Credit

Thank you so much for creating the extension, [Yaeda-san](https://www.raycast.com/yaeda)!

[configure-1]: /images/integrating-with-raycast_configuration.png 'Configure extension 01'
[search]: /images/integrating-with-raycast_search.png 'Search notes'
