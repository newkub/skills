# Check CLI

TypeScript CLI tool for various system and project checks using CAC framework.

## Installation

```bash
bun install
```

## Usage

### Run individual checks

```bash
bun src/index.ts dependencies-latest
bun src/index.ts disk-space
bun src/index.ts file-length
bun src/index.ts file-structure
bun src/index.ts follow-skills
bun src/index.ts follow-workflows
bun src/index.ts legal-compliance
bun src/index.ts missing-workflows
bun src/index.ts monorepo
bun src/index.ts my-cli-program
bun src/index.ts test-coverage
bun src/index.ts todo
bun src/index.ts unused-deps
bun src/index.ts unused-variables
bun src/index.ts unused-workflows
```

### Run all checks

```bash
bun src/index.ts all
```

### Build for production

```bash
bun run build
node dist/index.js all
```

## Available Commands

- **dependencies-latest** - Check for latest dependency versions
- **disk-space** - Check available disk space
- **file-length** - Check file lengths in project
- **file-structure** - Check project file structure
- **follow-skills** - Check if skills are being followed
- **follow-workflows** - Check if workflows are being followed
- **legal-compliance** - Check legal compliance
- **missing-workflows** - Check for missing workflow files
- **monorepo** - Check monorepo structure
- **my-cli-program** - Check installed CLI tools and package managers
- **test-coverage** - Check test coverage
- **todo** - Check for TODO comments
- **unused-deps** - Check for unused dependencies
- **unused-variables** - Check for unused variables
- **unused-workflows** - Check for unused workflow files

## Features

- 🚀 Built with TypeScript and Bun
- 🎨 Beautiful colored output with Chalk
- ⚡ Fast execution with Execa
- 📁 File system operations with fs-extra
- 🔍 Pattern matching with Glob
- 🛠️ Modern CLI framework with CAC
