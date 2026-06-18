# Installation

## Requirements

| Requirement | Version |
|-------------|---------|
| Node.js | 18.x หรือสูงกว่า |
| Package Manager | bun, yarn, bun, หรือ bun |

## Installation Methods

### Using npx

```bash
npx nuxi@latest init my-nuxt-app
cd my-nuxt-app
bun install
```

### Using bun

```bash
bun install nuxt
```

### Using yarn

```bash
yarn add nuxt
```

### Using bun

```bash
bun add nuxt
```

### Using bun

```bash
bun add nuxt
```

## Manual Setup

```bash
mkdir my-nuxt-app
cd my-nuxt-app
bun init -y
bun install nuxt
```

## Create First Project

```bash
# Initialize project
npx nuxi@latest init .

# Start development server
bun run dev
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