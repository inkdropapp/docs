---
title: User data directory
nextjs:
  metadata:
    title: User data directory
    description: Where the note data is stored
---

Inkdrop stores your data and config locally at the following path:

- on macOS: `~/Library/Application Support/inkdrop/`
- on Windows: `%APPDATA%\inkdrop\`
- on Linux:
  - deb/rpm: `~/.config/inkdrop/`
  - Snap: `~/snap/inkdrop/current/.config/inkdrop/`

To open it in a file manager, go to **Preferences** > **General** and select **Open Config Folder**.

The config folder has the following files and folders:

- `config.json` — app config file in the [JSON format](https://www.json.org/json-en.html)
- `keymap.json` — keybindings config file in the [JSON format](https://www.json.org/json-en.html)
- `styles.css` - custom CSS file for styling the app. See [Style tweaks](https://developers.inkdrop.app/guides/style-tweaks) for details.
- `init.js` - custom JavaScript file for advanced customization. See [the init file](https://developers.inkdrop.app/guides/the-init-file) for details.
- `packages/` — installed plugins
- `dev/packages/` — linked plugins for development
- `db/` — local database
- `state-cache/` - cached app state for faster startup
