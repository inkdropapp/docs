---
title: Salvage Data from Local Database
nextjs:
  metadata:
    title: Salvage Data from Local Database
    description: How to recover your notes from the local database if you lose access to your account due to password loss
---

If you lost your password and cannot authenticate anymore, it means unfortunately that you have lost your account because [your data is encrypted in client](/security).
Please try [troubleshooting](/reference/troubleshooting#i-can-t-log-in-sync-not-working) once again in order to check if you certainly lost the account.

However, there is still a chance to salvage your data if you haven't uninstalled the desktop app yet.
It stores your data without encrypting in local database.
You can use our tool to extract data as [backup files](/reference/data-backup) from it.
Follow the below steps to try that.

## Install Inkdrop local database extractor

The tool is published on npm as [inkdrop-localdb-extract](https://www.npmjs.com/package/inkdrop-localdb-extract).

### Requirements

- [NodeJS](https://nodejs.org/) >= 24.16
- Inkdrop v6 or later

{% callout title="Using Inkdrop v5 or earlier?" %}
Inkdrop v5 and earlier store the local database in a different format.
Install the previous version of the tool instead: `npm install -g inkdrop-localdb-extract@0`, which requires NodeJS >= 12.
{% /callout %}

### How to install

```sh
npm install -g inkdrop-localdb-extract
```

## How to salvage data

You got a command `inkdrop-localdb-extract`:

```sh
inkdrop-localdb-extract

Options:
      --version  Show version number                                   [boolean]
  -s, --src      The path to the source database file
                 (ex: "~/Library/Application
                 Support/inkdrop/db/56ab08396cec2c0f87492c9a0f005f86.sqlite")
                                                             [string] [required]
  -d, --dest     The path to the destination directory       [string] [required]
      --help     Show help                                             [boolean]
```

Your database file can be found at the following path:

- on macOS: `~/Library/Application Support/inkdrop/db/<USER_ID>.sqlite`
- on Windows: `%APPDATA%\inkdrop\db\<USER_ID>.sqlite`
- on Linux: `~/.config/inkdrop/db/<USER_ID>.sqlite`

`USER_ID` looks something like `56ab08396cec2c0f87492c9a0f005f86`.

For example:

```sh
inkdrop-localdb-extract --src /path/to/db/<USER_ID>.sqlite --dest /path/to/store
```

Then, you should get [backup files](/reference/data-backup) in the specified destination directory.
The tool opens the database in read-only mode, so it never modifies your local data.

### Deleted notes

The tool also salvages notes, notebooks, tags, and files that you deleted on this device.
Their last revisions before the deletion are exported into the `_deleted` folder.
If you want to restore any of them, move the files from the `_deleted` folder to the `data` folder before restoring.

Documents deleted on another device can't be salvaged, because only their deletion records are synced to this device.

## Migrate data to new account

If you successfully salvaged data, now you can [restore it to new account](/reference/data-backup).
If you would like to migrate the payment information of your old account, please [contact us](mailto:contact@inkdrop.app).
We will migrate your payment information and delete the old account.

## See also

- [FAQ - I forgot my password. How to reset my password?](/faq#i-forgot-my-password-how-to-reset-my-password)
- [Troubleshooting - I can't login](/reference/troubleshooting#i-can-t-log-in-sync-not-working)
- [Recovering Your Password](/reference/recover-password)
