---
title: Integrate with Alfred
nextjs:
  metadata:
    title: Integrate with Alfred
    description: How to integrate with Alfred
---

[Alfred](https://www.alfredapp.com/) is the powerful alternative to Spotlight.
By integrating Inkdrop and Alfred, you can instantly search your notes from Alfred.

## Download the Alfred Workflow

Go to [the Releases page](https://github.com/inkdropapp/inkdrop-alfred-workflow/releases) and click the file `Inkdrop.alfredworkflow`.

## Configuration

### 1. Set up the local http server

The workflow accesses your notes via HTTP locally.
You have to configure the app to open a HTTP endpoint.
See [the instruction](https://developers.inkdrop.app/guides/access-the-local-database#accessing-via-http-advanced) for more detail.

### 2. Set up the workflow

Click `[x]` button to configure environment variables of the workflow.

![configure workflow][configure-1]

Specify your server configuration.

![configure server][configure-2]

## Usage

### Searching notes

You can search using `ink {query}` in Alfred. You can use [the same qualifiers](https://docs.inkdrop.app/manual/searching-notes/#filter-notes-with-special-qualifiers) for filtering notes.

![screenshot][workflow]

### Creating a new note

You can also use `ink+ {title}:{body}` to create a new note. For this to work you need to set a `defaultNotebook` on the workflow config.

`defaultTags` is optional and takes a comma separated list of tag IDs.

{% callout title="Hint" %}
You can use the [dev tools plugin](https://my.inkdrop.app/plugins/dev-tools) to get the ID of notebooks and tags.
{% /callout %}

![screenshot][workflow-ink+]

[workflow]: /images/integrating-with-alfred_screenshot.png 'Sample Inkdrop result'
[workflow-ink+]: /images/integrating-with-alfred_create-new-note.png 'Sample Inkdrop new note'
[configure-1]: /images/integrating-with-alfred_configure-workflow-1.png 'Configure workflow 01'
[configure-2]: /images/integrating-with-alfred_configure-workflow-2.png 'Configure workflow 02'
