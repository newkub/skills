# Installation

## Installation Command

```bash
pnpm add -D oxlint
```

หรือใช้ package managers อื่นๆ:

```bash
# npm
npm install -D oxlint

# yarn
yarn add -D oxlint

# bun
bun add -D oxlint
```

## Verify Installation

```bash
npx oxlint --version
```

## Add Scripts to package.json

```json
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```

## Requirements

- Node.js 18+ recommended
- pnpm, npm, yarn, หรือ bun

## Editor Integration

ติดตั้ง extension สำหรับ editor ของคุณ:

- **VS Code**: Oxlint extension
- **Neovim**: nvim-lint พร้อม oxlint integration
- **IntelliJ**: Oxlint plugin

ดูรายละเอียดที่: [Setup Editors](https://oxc.rs/docs/guide/usage/linter/editors)
