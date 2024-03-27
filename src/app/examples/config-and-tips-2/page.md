---
title: Toggle autoformat on nvim
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Toggle autoformat on nvim
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I wanted to toggle autoformat manually on nvim.
{% /callout %}

Lspconfig:

- <https://github.com/LazyVim/LazyVim/blob/879e29504d43e9f178d967ecc34d482f902e5a91/lua/lazyvim/plugins/lsp/init.lua#L87C7-L88C1>

```lua
      -- options for vim.lsp.buf.format
      -- `bufnr` and `filter` is handled by the LazyVim formatter,
      -- but can be also overridden when specified
      format = {
        formatting_options = nil,
        timeout_ms = nil,
      },

...

      -- setup autoformat
      Util.format.register(Util.lsp.formatter())

      -- deprectaed options
      if opts.autoformat ~= nil then
        vim.g.autoformat = opts.autoformat
        Util.deprecate("nvim-lspconfig.opts.autoformat", "vim.g.autoformat")
      end
```

`Util.lsp.formatter`: <https://github.com/LazyVim/LazyVim/blob/879e29504d43e9f178d967ecc34d482f902e5a91/lua/lazyvim/util/lsp.lua#L79>

## Found `Util.formatter.toggle` function!

- <https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/util/format.lua#L101C14-L101C14>

Let's try:

```lua
local Util = require("lazyvim.util")
Util.format.toggle()
```

It works!

Let's make a command:

```lua
local M = {}
local LazyvimUtil = require("lazyvim.util")

function M.toggleAutoformat()
  LazyvimUtil.format.toggle()
end
```
