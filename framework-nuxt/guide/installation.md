# Installation

## Requirements

| Requirement | Version |
|-------------|---------|
| Node.js | 18.x หรือสูงกว่า |
| Package Manager | npm, yarn, pnpm, หรือ bun |

## Installation Methods

### Using npx

```bash
npx nuxi@latest init my-nuxt-app
cd my-nuxt-app
npm install
```

### Using npm

```bash
npm install nuxt
```

### Using yarn

```bash
yarn add nuxt
```

### Using pnpm

```bash
pnpm add nuxt
```

### Using bun

```bash
bun add nuxt
```

## Manual Setup

```bash
mkdir my-nuxt-app
cd my-nuxt-app
npm init -y
npm install nuxt
```

## Create First Project

```bash
# Initialize project
npx nuxi@latest init .

# Start development server
npm run dev
```

## Project Structure

```text
my-nuxt-app/
├── nuxt.config.ts      # Nuxt configuration
├── app.vue             # App entry
├── pages/              # Routes
├── components/         # Components
├── composables/        # Composables
├── layouts/            # Layouts
├── assets/             # Assets
├── public/             # Static files
└── package.json
```

## Verify Installation

```bash
# Check Nuxt version
npx nuxi --version
```

## Next Steps

- [Quick Start Guide](quick-start.md)
- [Key Concepts](key-concept.md)
- [Configuration](configuration.md)