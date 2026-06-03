# Installation

## Overview

การติดตั้ง tools และ dependencies สำหรับ web development

## Development Environment

### 1. Node.js Installation

| OS | Method | Command |
|----|--------|---------|
| **Windows** | Installer | Download from nodejs.org |
| **macOS** | Homebrew | `brew install node` |
| **Linux** | Package manager | `sudo apt install nodejs` |
| **All** | nvm | `nvm install --lts` |

```bash
# Verify installation
node --version
npm --version

# Recommended: Use nvm for version management
nvm install --lts
nvm use --lts
```

### 2. Package Managers

| Package Manager | Command | Features |
|----------------|---------|----------|
| **npm** | `npm install` | Default, large registry |
| **yarn** | `yarn add` | Faster, offline cache |
| **pn.pm** | `pnpm add` | Fast, disk efficient |
| **bun** | `bun add` | Native, fast startup |

```bash
# npm
npm install package-name

# yarn
yarn add package-name

# pnpm
pnpm add package-name

# bun
bun add package-name
```

### 3. VS Code Extensions

| Extension | Purpose | Popularity |
|-----------|---------|------------|
| **ESLint** | JavaScript linting | 20M+ downloads |
| **Prettier** | Code formatting | 28M+ downloads |
| **GitLens** | Git integration | 16M+ downloads |
| **Tailwind CSS IntelliSense** | Tailwind support | 8M+ downloads |
| **Live Server** | Local development server | 15M+ downloads |

### 4. Project Scaffolding

| Framework | Command | Description |
|-----------|---------|-------------|
| **Vite** | `npm create vite@latest` | Fast, modern |
| **Next.js** | `npx create-next-app` | Full-stack React |
| **Nuxt** | `npx nuxi init` | Full-stack Vue |
| **Astro** | `npm create astro` | Content-focused |
| **SvelteKit** | `npm create svelte@latest` | Svelte framework |

```bash
# Vite + React + TypeScript
npm create vite@latest my-app -- --template react-ts

# Next.js
npx create-next-app@latest my-app --typescript

# Nuxt
npx nuxi@latest init my-app
```

### 5. Development Dependencies

| Type | Packages | Purpose |
|------|----------|---------|
| **Lint** | `eslint`, `eslint-plugin-react` | Code quality |
| **Format** | `prettier` | Code formatting |
| **Type Check** | `typescript` | Type safety |
| **Test** | `vitest`, `@testing-library/react` | Testing |

```bash
# Common dev dependencies
npm install -D typescript eslint prettier vitest
npm install react react-dom
npm install @types/react @types/react-dom
```

## Summary

| Setup Step | Command |
|-----------|---------|
| **Node.js** | Download or `nvm install --lts` |
| **Package Manager** | npm/yarn/pnpm/bun |
| **VS Code Extensions** | ESLint, Prettier, Live Server |
| **Project Init** | `npm create vite@latest` |
| **Dev Dependencies** | `npm install -D typescript eslint prettier` |
