---
title: Try Neovim native LSP
parentPage: '/start-guide/key-note-categories-and-examples'
youtubeVideoId: 'ajmK0ZNcM4Q'
nextjs:
  metadata:
    title: Try Neovim native LSP
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I first tried the native LSP support on Neovim 0.5 back in 2021.
{% /callout %}

- [Neovim (0.5) Is Overpowering | CrispDev](https://crispgm.com/page/neovim-is-overpowering.html)

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

Though neovim embeds tree-sitter, it is not out-of-box for users. We need this to install the languages.

Installation:

```vi
Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}
Plug 'nvim-treesitter/playground'
```

- [shougo-s-github/deinlazy.toml at 7b2d658eeef11ad6d235bb6651479191c0dbb569 · Shougo/shougo-s-github](https://github.com/Shougo/shougo-s-github/blob/7b2d658eeef11ad6d235bb6651479191c0dbb569/vim/rc/deinlazy.toml#L530)

For Dein.nvim:

```toml
[[plugins]]
repo = "nvim-treesitter/nvim-treesitter"
hook_post_update = 'TSUpdate'
hook_source = '''
source ~/.config/nvim/plugins/treesitter.rc.vim
'''

[[plugins]]
repo = "nvim-treesitter/playground"
```

And `:TSInstall [language]` to install a language parser. Sometimes, you may not notice what tree-sitter does. Just try `:TSPlaygroudToggle`, you will have a clearer understanding of tree-sitter.

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

It is similar to nvim-treesitter but for LSP client, which is needed for install and communicate with language servers of each language.

Installation:

```
Plug 'neovim/nvim-lspconfig'
```

```toml
[[plugins]]
repo = "neovim/nvim-lspconfig"
on_lua = 'lspconfig'
hook_add = """
source ~/.config/nvim/plugins/lspconfig.rc.vim
"""
```

The language servers are needed to install externally on system level with any package manager you like. I use Homebrew, `go get` and npm/yarn all together. Follow [`CONFIG.md`](https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md) for details of each language server.

Take Go and `gopls` as example:

Install `gopls`:

```
GO111MODULE=on go get golang.org/x/tools/gopls@latest
```

Then setup with `lspconfig`:

```
require'lspconfig'.gopls.setup{}
```

When you open a file, `:LspInfo` to know whether a LSP client is attached.

## Use `flow`

[nvim-treesitter/nvim-treesitter: Nvim Treesitter configurations and abstraction layer](https://github.com/nvim-treesitter/nvim-treesitter#update-parsers-used_by)

```vim
lua <<EOF
local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
parser_config.typescript.used_by = "javascriptflow"
EOF
```

Update toml:

```toml
[[plugins]]
repo = "nvim-treesitter/nvim-treesitter"
hook_post_update = """
:TSUpdate
"""
hook_post_source = """
source ~/.config/nvim/plugins/treesitter.rc.vim
"""
```

- [nvim-lspconfig/CONFIG.md at master · neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md#flow)

```
require'lspconfig'.flow.setup{}

  Commands:

  Default Values:
    cmd = { "npx", "--no-install", "flow", "lsp" }
    filetypes = { "javascript", "javascriptreact", "javascript.jsx" }
    root_dir = root_pattern(".flowconfig")
```

Inserted it into `.config/nvim/plugins/lspconfig.rc.vim`:

```lua
lua << EOF
local nvim_lsp = require('lspconfig')

-- Use an on_attach function to only map the following keys
-- after the language server attaches to the current buffer
local on_attach = function(client, bufnr)
  local function buf_set_keymap(...) vim.api.nvim_buf_set_keymap(bufnr, ...) end
  local function buf_set_option(...) vim.api.nvim_buf_set_option(bufnr, ...) end

  --Enable completion triggered by <c-x><c-o>
  buf_set_option('omnifunc', 'v:lua.vim.lsp.omnifunc')

  -- Mappings.
  local opts = { noremap=true, silent=true }

  -- See `:help vim.lsp.*` for documentation on any of the below functions
  buf_set_keymap('n', 'gD', '<Cmd>lua vim.lsp.buf.declaration()<CR>', opts)
  buf_set_keymap('n', 'gd', '<Cmd>lua vim.lsp.buf.definition()<CR>', opts)
  buf_set_keymap('n', 'K', '<Cmd>lua vim.lsp.buf.hover()<CR>', opts)
  buf_set_keymap('n', 'gi', '<cmd>lua vim.lsp.buf.implementation()<CR>', opts)
  buf_set_keymap('n', '<C-k>', '<cmd>lua vim.lsp.buf.signature_help()<CR>', opts)
  buf_set_keymap('n', '<space>wa', '<cmd>lua vim.lsp.buf.add_workspace_folder()<CR>', opts)
  buf_set_keymap('n', '<space>wr', '<cmd>lua vim.lsp.buf.remove_workspace_folder()<CR>', opts)
  buf_set_keymap('n', '<space>wl', '<cmd>lua print(vim.inspect(vim.lsp.buf.list_workspace_folders()))<CR>', opts)
  buf_set_keymap('n', '<space>D', '<cmd>lua vim.lsp.buf.type_definition()<CR>', opts)
  buf_set_keymap('n', '<space>rn', '<cmd>lua vim.lsp.buf.rename()<CR>', opts)
  buf_set_keymap('n', '<space>ca', '<cmd>lua vim.lsp.buf.code_action()<CR>', opts)
  buf_set_keymap('n', 'gr', '<cmd>lua vim.lsp.buf.references()<CR>', opts)
  buf_set_keymap('n', '<space>e', '<cmd>lua vim.lsp.diagnostic.show_line_diagnostics()<CR>', opts)
  buf_set_keymap('n', '[d', '<cmd>lua vim.lsp.diagnostic.goto_prev()<CR>', opts)
  buf_set_keymap('n', ']d', '<cmd>lua vim.lsp.diagnostic.goto_next()<CR>', opts)
  buf_set_keymap('n', '<space>q', '<cmd>lua vim.lsp.diagnostic.set_loclist()<CR>', opts)
  buf_set_keymap("n", "<space>f", "<cmd>lua vim.lsp.buf.formatting()<CR>", opts)

end

-- Use a loop to conveniently call 'setup' on multiple servers and
-- map buffer local keybindings when the language server attaches
local servers = { "pyright", "rust_analyzer", "tsserver" }
for _, lsp in ipairs(servers) do
  nvim_lsp[lsp].setup { on_attach = on_attach }
end
EOF

lua << EOF
require'lspconfig'.flow.setup{}
  Commands:
  Default Values:
    cmd = { "npx", "--no-install", "flow", "lsp" }
    filetypes = { "javascript", "javascriptreact", "javascript.jsx" }
    root_dir = root_pattern(".flowconfig")
EOF
```

But keymapping is not working?
Or, maybe `flow` is not working.

Failed to load `lspconfig`:

```
[dein] Error occurred while executing hook: nvim-lspconfig
[dein] Vim(lua):E5108: Error executing lua [string ":lua"]:1: module 'lspconfig' not found:
[dein] ^Ino field package.preload['lspconfig']
[dein] ^Ino file './lspconfig.lua'
[dein] ^Ino file '/opt/homebrew/Cellar/luajit/HEAD-1e66d0f/share/luajit-2.1.0-beta3/lspconfig.lua'
[dein] ^Ino file '/usr/local/share/lua/5.1/lspconfig.lua'
[dein] ^Ino file '/usr/local/share/lua/5.1/lspconfig/init.lua'
[dein] ^Ino file '/opt/homebrew/Cellar/luajit/HEAD-1e66d0f/share/lua/5.1/lspconfig.lua'
[dein] ^Ino file '/opt/homebrew/Cellar/luajit/HEAD-1e66d0f/share/lua/5.1/lspconfig/init.lua'
[dein] ^Ino file './lspconfig.so'
[dein] ^Ino file '/usr/local/lib/lua/5.1/lspconfig.so'
[dein] ^Ino file '/opt/homebrew/Cellar/luajit/HEAD-1e66d0f/lib/lua/5.1/lspconfig.so'
[dein] ^Ino file '/usr/local/lib/lua/5.1/loadall.so'
```

Copied files manually. Got this error:

```
E5108: Error executing lua ...ache/dein/.cache/init.vim/.dein/lua/lspconfig/_lspui.lua:105: Invalid key 'border'
```

- [LspInfo failed · Issue #836 · neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig/issues/836)

Update packages:

```
brew install --HEAD tree-sitter
brew upgrade --fetch-HEAD luajit
brew upgrade --fetch-HEAD neovim
```

Okay, that worked.

```
[dein] Error occurred while executing hook: nvim-lspconfig
[dein] Vim(lua):E5107: Error loading lua [string ":lua"]:3: function arguments expected near 'Values'
```

The below lines are not necessary:

```
  Commands:
  Default Values:
```

Had to add a language:

```lua
local servers = { "flow", "pyright", "rust_analyzer", "tsserver" }
for _, lsp in ipairs(servers) do
  nvim_lsp[lsp].setup { on_attach = on_attach }
end
```

## Treesitter error

```
nvim-treesitter[haskell]: Error during compilation
src/scanner.cc:79:10: error: expected expression
  return [=](A a) { return f(g(a)); };
         ^
src/scanner.cc:83:10: error: expected expression
  return [=](A a) { return f(g(a)); };
         ^
```

- [Error during compilation · Issue #626 · nvim-treesitter/nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter/issues/626)

> Could you try adding the `-std=c++11` flag here: <https://github.com/theHamsta/nvim-treesitter/blob/28126659e2eb6ae39e75530e38a743c6086203ed/lua/nvim-treesitter/shell_command_selectors.lua#L56-L70>
> This could cause problems compiling the C code...

- [nvim-treesitter/shell_command_selectors.lua at 28126659e2eb6ae39e75530e38a743c6086203ed · theHamsta/nvim-treesitter](https://github.com/theHamsta/nvim-treesitter/blob/28126659e2eb6ae39e75530e38a743c6086203ed/lua/nvim-treesitter/shell_command_selectors.lua#L56-L70)

```sh
brew install gcc
```

Parser config:

```lua
  tsx = {
    filetype = "typescriptreact",
    install_info = {
      files = { "src/parser.c", "src/scanner.c" },
      generate_requires_npm = true,
      location = "tree-sitter-tsx/tsx",
      url = "https://github.com/tree-sitter/tree-sitter-typescript"
    },
    maintainers = { "@steelsojka" },
    used_by = "javascript",
    <metatable> = {
      __newindex = <function 59>
    }
  },

  typescript = {
    install_info = {
      files = { "src/parser.c", "src/scanner.c" },
      generate_requires_npm = true,
      location = "tree-sitter-typescript/typescript",
      url = "https://github.com/tree-sitter/tree-sitter-typescript"
    },
    maintainers = { "@steelsojka" },
    <metatable> = {
      __newindex = <function 61>
    }
  },
```

```
lua <<EOF
local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
print("config:", vim.inspect(parser_config))
EOF
```

It worked:

```vim
set filetype=typescriptreact
```

But it's not ideal because it detects as TypeScript but actually it's Flow.

Editing `lua/nvim-treesitter/parsers.lua` directly worked.
Reported it: [parser_config.tsx.used_by is not working · Issue #161 · tree-sitter/tree-sitter-typescript](https://github.com/tree-sitter/tree-sitter-typescript/issues/161#issue-921131267)

## Use `eslint`

- [Help with integrate nvim-lsp with eslint (diagnosticls) : neovim](https://www.reddit.com/r/neovim/comments/j2tn38/help_with_integrate_nvimlsp_with_eslint/)
- [iamcco/diagnostic-languageserver: diagnostic language server integrate with linters](https://github.com/iamcco/diagnostic-languageserver)

```sh
npm i -g diagnostic-languageserver prettier-eslint-cli
```

## `markdownlint`

```sh
brew install markdownlint-cli
```

I don't need it.

## `stylelint`

- [stylelint/stylelint: A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.](https://github.com/stylelint/stylelint)

Looks nice!

- https://github.com/iamcco/diagnostic-languageserver/wiki/Linters#stylelint

## Format on save

it blocks while formatting and is slow:

```lua
vim.cmd [[ autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_sync() ]]
```

- [Let's talk formatting again : neovim](https://www.reddit.com/r/neovim/comments/jvisg5/lets_talk_formatting_again/)

```lua
-- formatting
vim.lsp.handlers["textDocument/formatting"] = function(err, _, result, _, bufnr)
    if err ~= nil or result == nil then
        return
    end
    if not vim.api.nvim_buf_get_option(bufnr, "modified") then
        local view = vim.fn.winsaveview()
        vim.lsp.util.apply_text_edits(result, bufnr)
        vim.fn.winrestview(view)
        if bufnr == nil or bufnr == vim.api.nvim_get_current_buf() then
            vim.api.nvim_command("noautocmd :update")
        end
    end
end

local on_attach = function(client, bufnr)
  ...

  if client.resolved_capabilities.document_formatting then
    vim.api.nvim_command [[augroup Format]]
    vim.api.nvim_command [[autocmd! * <buffer>]]
    vim.api.nvim_command [[autocmd BufWritePost <buffer> lua vim.lsp.buf.formatting()]]
    vim.api.nvim_command [[augroup END]]
  end
end
```

## Icon and color

```lua
-- color and icons

vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
  vim.lsp.diagnostic.on_publish_diagnostics, {
    underline = true,
    -- This sets the spacing and the prefix, obviously.
    virtual_text = {
      spacing = 4,
      prefix = '‚úò'
    }
  }
)
```

- [How to change icons and colors, to make my LSP diagnostics look better? : neovim](https://www.reddit.com/r/neovim/comments/mx1gnw/how_to_change_icons_and_colors_to_make_my_lsp/)

- [glepnir/lspsaga.nvim: neovim lsp plugin](https://github.com/glepnir/lspsaga.nvim)

![lspsaga](/images/example-note_learning-4_lspsaga.gif)

```lua
nnoremap <silent> <C-j> :Lspsaga diagnostic_jump_next<CR>
```

## colors

It won't work:

```vim
highlight LspDiagnosticsDefaultError guifg=BrightRed
highlight LspDiagnosticsVirtualTextError guifg=Red ctermfg=Red
highlight LspDiagnosticsDefaultWarning guifg=BrightYellow
highlight LspDiagnosticsVirtualTextWarning guifg=Yellow ctermfg=Yellow
```

- [folke/lsp-colors.nvim: 🌈 Plugin that creates missing LSP diagnostics highlight groups for color schemes that don't yet support the Neovim 0.5 builtin LSP client.](https://github.com/folke/lsp-colors.nvim)

I keep getting these errors:

```
[dein] Error occurred while executing hook: lspsaga.nvim
[dein] Vim(lua):E5108: Error executing lua Vim(call):E714: List required
[dein] Error occurred while executing hook: lsp-colors.nvim
[dein] Vim(lua):E5108: Error executing lua Vim(call):E714: List required
```

## Completion

Use [nvim-compe](https://github.com/hrsh7th/nvim-compe).

Customize icons:

```lua
local protocol = require'vim.lsp.protocol'
protocol.CompletionItemKind = {
  'Óòí', -- Text
  '\u{f09a}', -- Method
  '\u{0192}', -- Function
  '\u{0192}', -- Constructor
  'Óûõ', -- Field
  'Óûõ', -- Variable
  'ÔÉ®', -- Class
  '\u{f417}', -- Interface
  '\u{f40d}', -- Module
  'Óò§', -- Property
  'Ôëµ', -- Unit
  '\u{f89f}', -- Value
  '\u{f435}', -- Enum
  '\u{f1de}', -- Keyword
  '\u{e60b}', -- Snippet
  'Óà´', -- Color
  'ÔÖõ', -- File
  '\u{fa46}', -- Reference
  'ÔÑï', -- Folder
  'ÔÖù', -- EnumMember
  '\u{f8fe}', -- Constant
  'ÔÉä', -- Struct
  'ÔÉß', -- Event
  'Ô¨¶', -- Operator
  'Óòé', -- TypeParameter
}
```

## fuzzy finder - telescope.nvim

- [nvim-telescope/telescope.nvim: Find, Filter, Preview, Pick. All lua, all the time.](https://github.com/nvim-telescope/telescope.nvim)

![Preview](/images/example-note_learning-4_telescope.png)

```vim
nnoremap <silent> ;f <cmd>Telescope find_files<cr>
nnoremap <silent> ;r <cmd>Telescope live_grep<cr>
nnoremap <silent> ;b <cmd>Telescope buffers<cr>
nnoremap <silent> ;; <cmd>Telescope help_tags<cr>

lua << EOF
local actions = require('telescope.actions')
-- Global remapping
------------------------------
require('telescope').setup{
  defaults = {
    mappings = {
      n = {
        ["q"] = actions.close
      },
    },
  }
}
EOF
```

## Others

- [cohama/lexima.vim: Auto close parentheses and repeat by dot dot dot...](https://github.com/cohama/lexima.vim)
- [Raimondi/delimitMate: Vim plugin, provides insert mode auto-completion for quotes, parens, brackets, etc.](https://github.com/Raimondi/delimitMate)

## Switch from Dein to VimPlug

dein.vim is quite unstable. tired of using it.

- [junegunn/vim-plug: Minimalist Vim Plugin Manager](https://github.com/junegunn/vim-plug)

Install:

```sh
sh -c 'curl -fLo $HOME/.local/share/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
```

The directory for plugins is `~/.local/share/nvim/plugged`:

```
call plug#begin(stdpath('data') . '/plugged')

Plug 'tpope/vim-rhubarb'

call plug#end()
```

## lexima won't work with completion

why

oh, completion also supports auto-paren?
This solved:

```vim
let g:completion_confirm_key = ""
imap <expr> <cr>  pumvisible() ? complete_info()["selected"] != "-1" ?
                 \ "\<Plug>(completion_confirm_completion)"  : "\<c-e>\<CR>" :  "\<CR>"
```

But, when `nvim-treesitter` is enabled, it won't work properly. Why?
Setting `indent.enable = false` in `nvim-treesitter.configs` solved!

```
require'nvim-treesitter.configs'.setup {
  indent = {
    enable = false,
    disable = {},
  },
```

## Try lua based statusline plugin

- [hoob3rt/lualine.nvim: A blazing fast and easy to configure neovim statusline plugin written in pure lua.](https://github.com/hoob3rt/lualine.nvim)

Works great!

![Screen Shot 2021-06-18 at 19.44.25.png](/images/example-note_learning-4_neovim-statusline.png)

## Customize tabline

- [Nvim documentation: tabpage](https://neovim.io/doc/user/tabpage.html#tabline-menu)

Ok...

```
Since the number of tab labels will vary, you need to use an expression for
the whole option.  Something like:
	:set tabline=%!MyTabLine()

Then define the MyTabLine() function to list all the tab pages labels.  A
convenient method is to split it in two parts:  First go over all the tab
pages and define labels for them.  Then get the label for each tab page.

	function MyTabLine()
	  let s = ''
	  for i in range(tabpagenr('$'))
	    " select the highlighting
	    if i + 1 == tabpagenr()
	      let s .= '%#TabLineSel#'
	    else
	      let s .= '%#TabLine#'
	    endif

	    " set the tab page number (for mouse clicks)
	    let s .= '%' . (i + 1) . 'T'

	    " the label is made by MyTabLabel()
	    let s .= ' %{MyTabLabel(' . (i + 1) . ')} '
	  endfor

	  " after the last tab fill with TabLineFill and reset tab page nr
	  let s .= '%#TabLineFill#%T'

	  " right-align the label to close the current tab page
	  if tabpagenr('$') > 1
	    let s .= '%=%#TabLine#%999Xclose'
	  endif

	  return s
	endfunction

Now the MyTabLabel() function is called for each tab page to get its label.

	function MyTabLabel(n)
	  let buflist = tabpagebuflist(a:n)
	  let winnr = tabpagewinnr(a:n)
	  return bufname(buflist[winnr - 1])
	endfunction
```

Lightline's tabline:

- [lightline.vim/lightline.vim at 8a712365f9708044667589d9fffd87a4825d29f6 · itchyny/lightline.vim](https://github.com/itchyny/lightline.vim/blob/8a712365f9708044667589d9fffd87a4825d29f6/autoload/lightline.vim#L431)

Created my tabline settings: `.dotfiles/.config/nvim/after/plugin/tabline.rc.vim`

## WSL (Windows)

This would be another story..

## Use `eslint_d`

`eslint-prettier` is outdated. [It doesn't support TypeScript 4.0](https://github.com/prettier/prettier-eslint/issues/402).

- [mantoni/eslint_d.js: Makes eslint the fastest linter on the planet](https://github.com/mantoni/eslint_d.js)
- [Configuring eslint to work with Neovim LSP | Phelipe Teles](https://phelipetls.github.io/posts/configuring-eslint-to-work-with-neovim-lsp/)

```lua
local lspconfig = require"lspconfig"

local eslint = {
  lintCommand = "eslint_d -f unix --stdin --stdin-filename ${INPUT}",
  lintStdin = true,
  lintFormats = {"%f:%l:%c: %m"},
  lintIgnoreExitCode = true,
  formatCommand = "eslint_d --fix-to-stdout --stdin --stdin-filename=${INPUT}",
  formatStdin = true
}

lspconfig.tsserver.setup {
  on_attach = function(client)
    if client.config.flags then
      client.config.flags.allow_incremental_sync = true
    end
    client.resolved_capabilities.document_formatting = false
    set_lsp_config(client)
  end
}

lspconfig.efm.setup {
  on_attach = function(client)
    client.resolved_capabilities.document_formatting = true
    client.resolved_capabilities.goto_definition = false
    set_lsp_config(client)
  end,
  root_dir = function()
    if not eslint_config_exists() then
      return nil
    end
    return vim.fn.getcwd()
  end,
  settings = {
    languages = {
      javascript = {eslint},
      javascriptreact = {eslint},
      ["javascript.jsx"] = {eslint},
      typescript = {eslint},
      ["typescript.tsx"] = {eslint},
      typescriptreact = {eslint}
    }
  },
  filetypes = {
    "javascript",
    "javascriptreact",
    "javascript.jsx",
    "typescript",
    "typescript.tsx",
    "typescriptreact"
  },
}
```

Install

```
npm install -g eslint_d
```

Okay, it works!

```lua
    formatters = {
      eslint_d = {
        command = 'eslint_d',
        args = { '--stdin', '--stdin-filename', '%filename', '--fix-to-stdout' },
        rootPatterns = { '.git' },
      },
    },
```

## signature help is not working

hmm

No, it's working.

## Annoying prompts

When saving `.tsx` file, it prompts:

```
Select a language server:
(1) diagnosticls, (2) tsserver:
```

This is from here: <https://github.com/neovim/neovim/blob/f76f72a27bb0c60c9e60a5bba30d94fd5541595a/runtime/lua/vim/lsp/buf.lua#L132>

That's annoying.

### Use `formatting_seq_sync`

```lua
vim.api.nvim_command [[autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_seq_sync()]]
```

Since `eslint_d` is enough fast, I can remove `vim.lsp.handlers["textDocument/formatting"]` handler.
