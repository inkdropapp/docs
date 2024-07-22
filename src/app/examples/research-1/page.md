---
title: Improve nvim
parentPage: '/start-guide/key-note-categories-and-examples'
youtubeVideoId: 'fFHlfbKVi30'
nextjs:
  metadata:
    title: Improve nvim
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I research promising plugins for Neovim in 2023.
{% /callout %}

- {% check v=true /%} 😕 [GitHub - AstroNvim/AstroNvim: AstroNvim is an aesthetic and feature-rich neovim config that is extensible and easy to use with a great set of plugins](https://github.com/AstroNvim/AstroNvim)
  - [Try AstroNvim](inkdrop://note/ye5KzfrfD)
- {% check v=true /%} 👍 [GitHub - folke/dot: ☕️ My Dot Files](https://github.com/folke/dot)
- {% check v=true /%} [GitHub - LazyVim/LazyVim: Neovim config for the lazy](https://github.com/LazyVim/LazyVim)
  - [Try LazyVim](inkdrop://note/_Ii_GM0EI)
- {% check v=true /%} [yutkat on Twitter: "PluginManager: lazy LSP: nvim-lsp+mason completion: nvim-cmp Linter: null-ls FF: telescope easymotion: flash snippet: LuaSnip comment: Comment statusline: lualine bufferline: bufferline terminal: toggleterm startup: alpha UI: noice colorscheme: catppuccin,nightfox,kanagawa" / Twitter](https://twitter.com/yutkat/status/1673604412227584000?s=46&t=UMw_xKhPtTJTVex-6ah1ug)
- {% check v=true /%} 😕 [GitHub - yutkat/dotfiles: The best and strongest dotfiles. Editor: Neovim; Shell: zsh(zinit, powerlevel10k); Terminal: wezterm; Desktop: sway, ulauncher, dunst; OS: ArchLinux (Ubuntu/Fedora/CentOS)](https://github.com/yutkat/dotfiles)
  - Very very complicated🫠

## Themes

- {% check v=false /%} [GitHub - AlexvZyl/nordic.nvim: 🌒 Nord for Neovim, but warmer and darker. Supports a variety of plugins and other platforms.](https://github.com/AlexvZyl/nordic.nvim)

## Other plugins

- {% check v=true /%} 👍 [GitHub - folke/flash.nvim: Navigate your code with search labels, enhanced character motions and Treesitter integration](https://github.com/folke/flash.nvim)
- {% check v=false /%} [GitHub - huggingface/llm.nvim: LLM powered development for Neovim](https://github.com/huggingface/llm.nvim)
- {% check v=true /%} 👍 [GitHub - monaqa/dial.nvim: enhanced increment/decrement plugin for Neovim.](https://github.com/monaqa/dial.nvim)
- {% check v=false /%} [GitHub - nvim-pack/nvim-spectre: Find the enemy and replace them with dark power.](https://github.com/nvim-pack/nvim-spectre)
- [GitHub - ThePrimeagen/refactoring.nvim: The Refactoring library based off the Refactoring book by Martin Fowler](https://github.com/ThePrimeagen/refactoring.nvim)
- {% check v=true /%} 👍 [GitHub - b0o/incline.nvim: 🎈 Floating statuslines for Neovim](https://github.com/b0o/incline.nvim)
- {% check v=true /%} RRethy/vim-illuminate
  > Automatically highlights other instances of the word under your cursor.
  > This works with LSP, Treesitter, and regexp matching to find the other
  > instances.
- {% check v=true /%} folke/trouble.nvim
  > better diagnostics list and others
- {% check v=true /%} folke/todo-comments.nvim
- {% check v=false /%} SmiteshP/nvim-navic
- {% check v=true /%} 👍 nvim-treesitter/nvim-treesitter-context
  ![Screenshot 2023-10-03 at 14.20.13](/images/example-note_research-1_treesitter-context.png)

## Issues

### Markdown backticks are invisible

- https://github.com/nvim-treesitter/nvim-treesitter/blob/812c2dd8fe838bb26cb53f0d251116468c2cae37/queries/markdown/highlights.scm#L29

  - It is concealed
  - `:TSHighlightCapturesUnderCursor` command
    ![#x-small](/images/example-note_research-1_color-issue.png)

- [日常に彩りを加える nvim-treesitter の設定術](https://zenn.dev/monaqa/articles/2021-12-22-vim-nvim-treesitter-highlight)
