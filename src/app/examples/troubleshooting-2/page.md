---
title: Nvim memory usage is too high
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Nvim memory usage is too high
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I encountered an issue where Nvim's memory usage was too high with my setup.
I documented my process of the investigation to find what was causing the issue and to find a fix.
{% /callout %}

Hmmmm this looks not normal:

![clipboard.png](/images/example-note_troubleshooting-2_memusage.png)

## Inspect

Checking the processes doesn't help

![btop](/images/example-note_troubleshooting-2_btop.png)

It even happens on the processes that don't open TypeScript files. So, LSP is not a problem.

Found a similar report on LazyVim:

- [Almost stock config : Regularly consuming 3 to 7 gb of RAM · Issue #806 · LazyVim/LazyVim · GitHub](https://github.com/LazyVim/LazyVim/issues/806)

folke shared a snippet to inspect the momory usages:

```lua
local nsn = vim.api.nvim_get_namespaces()

local counts = {}

for name, ns in pairs(nsn) do
  for _, buf in ipairs(vim.api.nvim_list_bufs()) do
    local count = #vim.api.nvim_buf_get_extmarks(buf, ns, 0, -1, {})
    if count > 0 then
      counts[#counts + 1] = {
        name = name,
        buf = buf,
        count = count,
        ft = vim.bo[buf].ft,
      }
    end
  end
end
table.sort(counts, function(a, b)
  return a.count > b.count
end)
vim.print(counts)
```

Ran it on one of the huge nvim process:

```lua
{
  count = 2235,
  name = "MiniHipatterns-hex_color"
}, {
  count = 1072,
  name = "indent_blankline"
}, {
  count = 203,
  name = "nvim-treesitter-context"
}, {
  count = 17,
  name = "nui.nvim"
}, {
  count = 8,
  name = "illuminate.highlight"
}, {
  count = 6,
  name = "MiniHipatterns-tailwind"
}, {
  count = 3,
  name = "incline"
}, {
  count = 3,
  name = "noice"
}, {
  count = 1,
  name = "MiniIndentscope"
}, {
...
```

Gotcha!

My custom lua extension for MiniHipatterns is mainly causing the problem.
Looks like `indent-blankline` also has the problem..

- [GitHub - lukas-reineke/indent-blankline.nvim: Indent guides for Neovim](https://github.com/lukas-reineke/indent-blankline.nvim)

## Fix

But why does my customization cause it? Is there a memory leak?

```lua
{
  "echasnovski/mini.hipatterns",
  event = "BufReadPre",
  opts = {
    highlighters = {
      hsl_color = {
        pattern = "hsl%(%d+,? %d+%%?,? %d+%%?%)",
        group = function(_, match)
          local utils = require("solarized-osaka.hsl")
          --- @type string, string, string
          local nh, ns, nl = match:match("hsl%((%d+),? (%d+)%%?,? (%d+)%%?%)")
          --- @type number?, number?, number?
          local h, s, l = tonumber(nh), tonumber(ns), tonumber(nl)
          --- @type string
          local hex_color = utils.hslToHex(h, s, l)
          return MiniHipatterns.compute_hex_color_group(hex_color, "bg")
        end,
      },
    },
  }
```

Here is a similar customization for Tailwind without the memory issue, implemented in LazyVim:

```lua
M.plugin = {
  "echasnovski/mini.hipatterns",
  event = "LazyFile",
  opts = function()
    local hi = require("mini.hipatterns")
    return {
      -- custom LazyVim option to enable the tailwind integration
      tailwind = {
        enabled = true,
        ft = { "typescriptreact", "javascriptreact", "css", "javascript", "typescript", "html" },
        -- full: the whole css class will be highlighted
        -- compact: only the color will be highlighted
        style = "full",
      },
      highlighters = {
        hex_color = hi.gen_highlighter.hex_color({ priority = 2000 }),
        shorthand = {
          pattern = "()#%x%x%x()%f[^%x%w]",
          group = function(_, _, data)
            ---@type string
            local match = data.full_match
            local r, g, b = match:sub(2, 2), match:sub(3, 3), match:sub(4, 4)
            local hex_color = "#" .. r .. r .. g .. g .. b .. b

            return MiniHipatterns.compute_hex_color_group(hex_color, "bg")
          end,
          extmark_opts = { priority = 2000 },
        },
      },
    }

    ...

      opts.highlighters.tailwind = {
        pattern = function()
          if not vim.tbl_contains(opts.tailwind.ft, vim.bo.filetype) then
            return
          end
          if opts.tailwind.style == "full" then
            return "%f[%w:-]()[%w:-]+%-[a-z%-]+%-%d+()%f[^%w:-]"
          elseif opts.tailwind.style == "compact" then
            return "%f[%w:-][%w:-]+%-()[a-z%-]+%-%d+()%f[^%w:-]"
          end
        end,
        group = function(_, _, m)
          ---@type string
          local match = m.full_match
          ---@type string, number
          local color, shade = match:match("[%w-]+%-([a-z%-]+)%-(%d+)")
          shade = tonumber(shade)
          local bg = vim.tbl_get(M.colors, color, shade)
          if bg then
            local hl = "MiniHipatternsTailwind" .. color .. shade
            if not M.hl[hl] then
              M.hl[hl] = true
              local bg_shade = shade == 500 and 950 or shade < 500 and 900 or 100
              local fg = vim.tbl_get(M.colors, color, bg_shade)
              vim.api.nvim_set_hl(0, hl, { bg = "#" .. bg, fg = "#" .. fg })
            end
            return hl
          end
        end,
        extmark_opts = { priority = 2000 },
```

I don't understand what is wrong.
It'd be better to ask echasnovski for help.

Well, the folke's snippet counts the number of `extmarks`.
I suspect that my code doesn't clean up old extmarks for some reason.

So, what does `MiniHipatterns.compute_hex_color_group` do?

- [mini.hipatterns/lua/mini/hipatterns.lua at 0a72439dbded766af753a3e7ec0a5b21d0f8ada0 · echasnovski/mini.hipatterns · GitHub](https://github.com/echasnovski/mini.hipatterns/blob/0a72439dbded766af753a3e7ec0a5b21d0f8ada0/lua/mini/hipatterns.lua#L630)

It internally calls `vim.api.nvim_set_hl` and it caches the hl groups.

```lua
MiniHipatterns.compute_hex_color_group = function(hex_color, style)
  local hex = hex_color:lower():sub(2)
  local group_name = 'MiniHipatterns' .. hex

  -- Use manually tracked table instead of `vim.fn.hlexists()` because the
  -- latter still returns true for cleared highlights
  if H.hex_color_groups[group_name] then return group_name end

  -- Define highlight group if it is not already defined
  if style == 'bg' then
    -- Compute opposite color based on Oklab lightness (for better contrast)
    local opposite = H.compute_opposite_color(hex)
    vim.api.nvim_set_hl(0, group_name, { fg = opposite, bg = hex_color })
  end

  if style == 'fg' then vim.api.nvim_set_hl(0, group_name, { fg = hex_color }) end

  if style == 'line' then vim.api.nvim_set_hl(0, group_name, { sp = hex_color, underline = true }) end

  -- Keep track of created groups to properly react on `:hi clear`
  H.hex_color_groups[group_name] = true

  return group_name
end
```

Hmmm, is it really causing the high memory consumption?

## Noice?

```lua
{ {
    count = 3159,
    name = "noice"
  }, {
    count = 1682,
    name = "vim_lsp_semantic_tokens:15"
  }, {
    count = 958,
    name = "indent_blankline"
  }, {
    count = 262,
    name = "MiniIndentscope"
  }, {
    count = 154,
    name = "nvim-treesitter-context"
  }, {
    count = 74,
    name = "vim_lsp_semantic_tokens:18"
  }, {
    count = 20,
    name = "incline"
  }, {
    count = 17,
    name = "nui.nvim"
  }, {
    count = 9,
    name = "illuminate.highlight"
  }, {
    count = 2,
    name = "todo-comments"
  } }
```

```lua
{ {
    count = 719,
    name = "vim_lsp_semantic_tokens:4"
  }, {
    count = 406,
    name = "indent_blankline"
  }, {
    count = 17,
    name = "nui.nvim"
  }, {
    count = 6,
    name = "incline"
  }, {
    count = 3,
    name = "noice"
  }, {
    count = 2,
    name = "illuminate.highlight"
  } }
```

## Ripgrep?

- [bug: \(Telescope:live_grep\) ripgrep consumes all ram and crashes neovim · Issue #580 · LazyVim/LazyVim · GitHub](https://github.com/LazyVim/LazyVim/issues/580)

Well, it could be the issue as I often search files with ripgrep in Telescope and encounter the compiled files.

Hmm, but searching files does not immediately increase the mem usage.

- [live_grep makes linux computer run out of memory and freeze completely · Issue #2482 · nvim-telescope/telescope.nvim · GitHub](https://github.com/nvim-telescope/telescope.nvim/issues/2482)

Worth trying:

```vim
nnoremap <leader>fg <cmd>lua require("telescope.builtin").live_grep({ additional_args = { "-j1" }})<CR>
```

```sh
❯ rg -V
ripgrep 14.1.0
```

## Disable plugins

- [Rodrigo Jaroszewski on X: "@inkdrop_app I stopped using a few months ago because it was making my Neovim sluggish, but I never checked the memory usage. Just thought "screw it, I don't need the eye candy"" / X](https://twitter.com/rodrigolj/status/1768526797329531218)

Anyway, let's try disabling plugins:

```lua
   -- eye candy
   {
       "lukas-reineke/indent-blankline.nvim",
       enabled = false,
   },
   {
       "echasnovski/mini.indentscope",
       enabled = false,
   },

```

Current status:

![Screenshot 2024-03-15 at 16.33.44](/images/example-note_troubleshooting-2_curstatus.png)

The num of extmarks looks legit I think:

```lua
{ {
    count = 1055,
    name = "vim_lsp_semantic_tokens:1"
  }, {
    count = 76,
    name = "noice"
  }, {
    count = 23,
    name = "nui.nvim"
  }, {
    count = 3,
    name = "incline"
  }, {
    count = 3,
    name = "illuminate.highlight"
  } }
```

## Is it normal?

![Screenshot 2024-03-22 at 10.35.31](/images/example-note_troubleshooting-2_isitnormal.png)

But VSCode immediately consumes ~1.6GB after launching.

The process opening Semantic UI's theme files is huge:

```
[-]─97285 nvim (nvim src/themes/default/elements/label.variables)                                                                                          2 nora         12M ⣀⣀⣀⣀⣀  0.0
 │ [-]─97287 nvim (nvim --embed src/themes/default/elements/label.variables)                                                                               7 nora        1.7G ⣀⣀⣀⣀⣀  0.0
 │  │  ├─ 98037 <defunct> (node /Users/nora/.local/share/nvim/lazy/copilot.lua/copilot/index.js)                                                          12 nora         55M ⣀⣀⣀⣀⣀  0.0
 │  │  ├─ 98018 <defunct> (node /Users/nora/.local/share/nvim/mason/bin/vscode-css-language-server --stdio)                                                7 nora         46M ⣀⣀⣀⣀⣀  0.0
 │  │  └─ 98017 <defunct> (node /Users/nora/.local/share/nvim/mason/bin/tailwindcss-language-server --stdio)                                              14 nora         23M ⣀⣀⣀⣀⣀  0.0
```

But the num of extmarks is small:

```lua
{ {
    count = 87,
    name = "MiniHipatterns-hex_color"
  }, {
    count = 17,
    name = "nui.nvim"
  }, {
    count = 3,
    name = "noice"
  }, {
    count = 2,
    name = "illuminate.highlight"
  }, {
    count = 2,
    name = "incline"
  }, {
    count = 1,
    name = "gitsigns_extmark_signs_"
  } }
```

I suspect LESS treesitter or LSP has something wrong.

But, Nvim currently consumes 700MB on launch:

![Screenshot 2024-03-22 at 10.42.08](/images/example-note_troubleshooting-2_onlaunch.png)

There might be memory leak or something...
So, maybe I should disable plugins one by one to find the culprit.

## Language servers take ~1GB

Looks like most are language servers 😇 alright

```
│[-]─3966 nvim (nvim src/index.ts)                                                                                                                          2 nora         19M ⣀⣀⣀⣀⣀  0.0
│ │ [-]─3967 nvim (nvim --embed src/index.ts)                                                                                                               7 nora        171M ⣀⣀⣀⣀⣀  0.0
│ │  │  ├─ 14524 node (node /Users/nora/.local/share/nvim/mason/bin/vscode-json-language-server --stdio)                                                    7 nora         55M ⣀⣀⣀⣀⣀  0.0
│ │  │  ├─ 4732 node (node /Users/nora/.local/share/nvim/lazy/copilot.lua/copilot/index.js)                                                                12 nora        248M ⣀⣀⣀⣀⣀  0.0
│ │  │ [-]─3970 node (node /Users/nora/.local/share/nvim/mason/bin/typescript-language-server --stdio)                                                     11 nora         62M ⣀⣀⣀⣀⣀  0.0
│ │  │  │ [-]─3983 node (/opt/homebrew/Cellar/node/21.7.1/bin/node /Users/nora/Developments/inkdrop/fts-store/node_modules/typescript/lib/tsserver.js -)   13 nora        371M ⣀⣀⣀⣀⣀  0.0
│ │  │  │  │  └─ 3996 node (/opt/homebrew/Cellar/node/21.7.1/bin/node /Users/nora/Developments/inkdrop/fts-store/node_modules/typescript/lib/typingsIns)    7 nora         93M ⣀⣀⣀⣀⣀  0.0
│ │  │  │  └─ 3982 node (/opt/homebrew/Cellar/node/21.7.1/bin/node /Users/nora/Developments/inkdrop/fts-store/node_modules/typescript/lib/tsserver.js -)    7 nora        171M ⣀⣀⣀⣀⣀  0.0
│ │  │  ├─ 3969 node (node /Users/nora/.local/share/nvim/mason/bin/tailwindcss-language-server --stdio)                                                    14 nora         79M ⣀⣀⣀⣀⣀  0.0
│ │  │  └─ 3968 node (node /Users/nora/.local/share/nvim/mason/bin/vscode-eslint-language-server --stdio)                                                   7 nora        232M ⣀⣀⣀⣀⣀  0.0
```
