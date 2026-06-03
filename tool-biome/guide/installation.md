# Biome Installation

## Installation Methods

### npm

```bash
# Install as dev dependency
npm install --save-dev @biomejs/biome

# Or install globally
npm install -g @biomejs/biome
```

### pnpm

```bash
pnpm add --save-dev @biomejs/biome
```

### yarn

```bash
yarn add --dev @biomejs/biome
```

### bun

```bash
bun add --dev @biomejs/biome
```

### Standalone Binary

Download pre-built binaries from the [GitHub releases](https://github.com/biomejs/biome/releases):

```bash
# Linux/macOS
curl -Ls https://biome.sh | bash

# Or download from releases page
```

### Homebrew (macOS/Linux)

```bash
brew install biome
```

### Winget (Windows)

```bash
winget install Biome.Biome
```

## Version Requirements

Biome requires:
- Node.js v14+ (for npm installation)
- Works on Windows, macOS, and Linux

## Verify Installation

```bash
biome --version
```

Output example: `Biome v1.9.0`