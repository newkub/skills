# Installation - WXT

## Prerequisites

- Node.js 18+
- pnpm 8+ (recommended) or npm/bun
- Browser for development

## Create Project

### Using Bun (Recommended)

```bash
bunx wxt@latest init my-extension
cd my-extension
bun install
```

### Using npm

```bash
npm create wxt@latest my-extension
cd my-extension
npm install
```

### Using pnpm

```bash
pnpm create wxt@latest my-extension
cd my-extension
pnpm install
```

## Manual Installation

### Install WXT

```bash
npm install -D wxt
```

### Add Scripts to package.json

```json
{
  "scripts": {
    "dev": "wxt dev",
    "build": "wxt build",
    "zip": "wxt zip",
    "publish": "wxt publish"
  }
}
```

## VS Code Setup

Install WXT extension for better DX:

```bash
code --install-extension wxt-extension
```

### Recommended Extensions

- WXT Extension (official)
- TypeScript Vue Plugin (for Vue)
- Svelte for VS Code

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "strict": true
  }
}
```

## IDE Configuration

### JetBrains

WXT plugins are auto-detected in JetBrains IDEs.

### Vim/Neovim

```vim
" Use null-ls or coc-tsserver
Plug 'neoclide/coc.nvim', { 'branch': 'release' }
```

## Verify Installation

```bash
wxt --version
```

Output:

```
wxt v0.x.x
```

## Next Steps

1. สร้าง [background.ts](./quick-start.md#add-entrypoints)
2. สร้าง [content script](./quick-start.md#add-entrypoints)
3. Run `wxt dev` เพื่อเริ่มพัฒนา