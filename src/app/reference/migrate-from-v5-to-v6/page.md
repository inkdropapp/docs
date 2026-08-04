---
title: Migrate from v5 to v6
nextjs:
  metadata:
    title: Migrate from v5 to v6
    description: What happens to your init.js, custom styles, plugins, and themes when you upgrade to Inkdrop v6, and how to bring them back.
---

Inkdrop v6 rebuilds the editor and the theming system, and drops a number of APIs along the way.{% .lead %}

If you never customized the app, there's nothing to do—just upgrade.
If you did, some of your customizations may no longer work.
Inkdrop disables the incompatible ones on first launch rather than letting them break the app, and flags them in the preferences so you can migrate them at your own pace.

Everything described here lives in your [user data directory](/reference/user-data-directory).

## Custom `init.js`

On launch, Inkdrop scans your `init.js` for APIs that were removed in v6:

- `@electron/remote`
- CodeMirror 5 imports (`codemirror/mode`, `codemirror/addon`, `codemirror/keymap`, `codemirror/lib`)
- The CodeMirror 5 mode API (`defineMode`, `defineSimpleMode`)
- Electron's `clipboard` module

If any of them turn up, the file is renamed to `init.js.bak` and never loaded, and Inkdrop starts you off with a fresh, empty `init.js`.
Your original code is left intact in the backup—nothing is deleted.
If a backup already exists from an earlier launch, the new one is numbered (`init.js.2.bak`, `init.js.3.bak`, and so on).

While a backup is present, **Preferences > General > Hacking** shows a warning.

To bring your customizations back, open the `.bak` file, rewrite the affected parts against the v6 APIs (see [the migration guide](https://developers.inkdrop.app/appendix/plugin-migration-from-v5-to-v6) for the replacements), and paste the result into the new `init.js`.

{% callout type="note" %}
Only APIs that would throw or silently misbehave trigger the rename.
APIs that still work in v6 but are on their way out—like `inkdrop.window.on()` or `inkdrop.main.dataStore.getLocalDB()`—leave your `init.js` running as-is.
{% /callout %}

## Custom styles

v6 no longer supports LESS, so `styles.less` is never loaded.
Only `styles.css` is.
The file itself is left untouched on disk, and **Preferences > Themes > Custom Styles** shows a warning while it's there.

To migrate, copy your styles into `styles.css`—select **Open user stylesheet** in the same preferences pane—and replace LESS variables with CSS custom properties.
Nesting needs no changes; CSS supports it natively now.

Before:

```less
@primary-color: #ff0000;
.my-plugin {
  .component {
    color: @primary-color;
  }
}
```

After:

```css
:root {
  --primary-color: #ff0000;
}
.my-plugin {
  .component {
    color: var(--primary-color);
  }
}
```

## Plugins

A plugin has to declare support for v6 in its `engines` field to load.
Ones that don't are skipped silently, and a few that claim support but still rely on removed APIs are blocked with a warning notification—update or uninstall those.

Check **Preferences > Plugins** for updated versions of the plugins you rely on.
If one hasn't been updated yet, it's worth letting its author know that [the migration guide](https://developers.inkdrop.app/appendix/plugin-migration-from-v5-to-v6) exists.

## Themes

In v5 a theme was up to three separate packages—a UI theme, a syntax theme, and a preview theme—each picked from its own drop-down.
v6 merges them into a single theme package, and **Preferences > Themes** now shows one **Theme** drop-down instead of three.

Themes built for v5 aren't loaded, so you'll need a version updated for v6.

## For plugin authors

If you maintain a plugin or a theme, the full list of breaking changes—with before/after examples for each one—is in the [Plugin Migration Guide from v5 to v6](https://developers.inkdrop.app/appendix/plugin-migration-from-v5-to-v6).
