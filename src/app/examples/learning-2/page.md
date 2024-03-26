---
title: Learn Svelte.js
parentPage: '/start-guide/key-note-categories-and-examples'
youtubeVideoId: 'RhuAn4uLVpc'
nextjs:
  metadata:
    title: Learn Svelte.js
---

{% callout title="This is an example note" %}
I took this note when I first tried to learn Svelte.js.
{% /callout %}

- [Introduction / Basics • Svelte Tutorial](https://svelte.dev/tutorial/basics)

It's using Vite

Looks like it's similar to Astro js but for building web apps.
It has a template html file.

It uses `.svelte` file format, which can include inline CSS.
It's like styled-components.

- What is svelte kit?
  - a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. **It's a love letter to web development.**
  - [SvelteKit • Web development, streamlined](https://kit.svelte.dev/)

You can write TypeScript directly inside `script` tags:

```html
<script lang="ts">
  let message = 'hello world'
</script>

<h1>{message}!</h1>

<style>
  h1 {
    font-weight: bold;
    color: red;
  }
</style>
```

What is `$` sign?

```js
const displayed_count = spring()
$: displayed_count.set(count)
$: offset = modulo($displayed_count, 1)
```

It's called _reactive values_.
It looks like similar to [Jotai's Atoms](https://jotai.org/).

What is `svelte/motion`?
It's for animations.

- [Motion / Spring • Svelte Tutorial](https://svelte.dev/tutorial/spring)

It has a way of expressing logic in html:

```html
{#if user.loggedIn}
<button on:click="{toggle}">Log out</button>
{/if} {#if !user.loggedIn}
<button on:click="{toggle}">Log in</button>
{/if}
```

It is like Haml.

It has functions for handling life cycle events like `onMount`:

```js
import { onMount } from 'svelte'

onMount(async () => {
  console.log('mounted')
})
```

- [Lifecycle / tick • Svelte Tutorial](https://svelte.dev/tutorial/tick)
