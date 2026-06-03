# Installation - TypeScript

## Node.js Requirements

TypeScript requires Node.js. Install from https://nodejs.org/

```bash
node --version
npm --version
```

## Installation Methods

### Via npm (Recommended)

```bash
# Local installation per project
npm install --save-dev typescript

# Global installation
npm install -g typescript

# Verify installation
tsc --version
```

### Via yarn

```bash
yarn add --dev typescript
```

### Via pnpm

```bash
pnpm add --save-dev typescript
```

## Project Setup

### Initialize npm Project

```bash
npm init -y
npm install --save-dev typescript
npx tsc --init
```

### Create tsconfig.json

```bash
# Or manually create with basic settings:
npx tsc --init --target ES2020 --module NodeNext --outDir ./dist
```

## Essential Tools

### Type Definitions

```bash
# Install type definitions
npm install --save-dev @types/node @types/react @types/jest

# Search for types
npm search @types/
```

### Development Tools

| Tool | Purpose | Install |
|------|---------|---------|
| ts-node | Run TypeScript directly | `npm install --save-dev ts-node` |
| tsx | Fast TypeScript runner | `npm install --save-dev tsx` |
| vitest | Testing framework | `npm install --save-dev vitest` |
| ts-jest | Jest with TypeScript | `npm install --save-dev ts-jest @types/jest` |

## IDE Setup

### VS Code

Install extensions:
- TypeScript Vue Plugin (Volar)
- TypeScript errors in workspace

### IntelliJ IDEA / WebStorm

Built-in TypeScript support

### Neovim

```vim
-- Using lazy.nvim
{ "neovim/nvim-lspconfig", opts = { /* ... */ } }
{ "jose-elias-alvarez/typescript.nvim" }
```

## Verify Installation

```bash
# Check TypeScript version
tsc --version

# Run TypeScript compiler
tsc your-file.ts

# Run with ts-node
ts-node your-file.ts
```

## Update TypeScript

```bash
# Update to latest
npm update typescript

# Install specific version
npm install typescript@5.3
```