# CLI Commands

Complete reference for shadcn/ui CLI commands

## Initialize

| Command | Description |
|---------|-------------|
| `npx shadcn@latest init` | Initialize shadcn/ui in project |
| `npx shadcn@latest init --defaults` | Initialize with defaults |
| `npx shadcn@latest init --style default` | Set component style |
| `npx shadcn@latest init --base-color slate` | Set base color |

## Add Components

| Command | Description |
|---------|-------------|
| `npx shadcn@latest add button` | Add single component |
| `npx shadcn@latest add button card dialog` | Add multiple components |
| `npx shadcn@latest add -a` | Add all components |
| `npx shadcn@latest add button --yes` | Skip confirmation |

## Add Options

| Option | Description | Example |
|--------|-------------|---------|
| `--yes` | Skip confirmation | `add button --yes` |
| `--path` | Custom output path | `add button --path components` |
| `--style` | Component style | `add button --style new-york` |
| `--overwrite` | Overwrite existing | `add button --overwrite` |

## Component List

```bash
# Forms
npx shadcn@latest add button input textarea select checkbox radio switch label form

# Layout
npx shadcn@latest add card sheet dialog accordion tabs separator scroll-area

# Navigation
npx shadcn@latest add navigation-menu breadcrumb pagination menubar dropdown-menu context-menu

# Feedback
npx shadcn@latest add alert alert-dialog toast progress skeleton spinner

# Data Display
npx shadcn@latest add table badge avatar calendar carousel chart code

# Overlay
npx shadcn@latest add popover tooltip command hover-card
```

## Utility Commands

| Command | Description |
|---------|-------------|
| `npx shadcn@latest diff` | Show component differences |
| `npx shadcn@latest upgrade` | Upgrade all components |
| `npx shadcn@latest doctor` | Check setup status |
| `npx shadcn@latest --version` | Show CLI version |

## Diff Command

```bash
# Show differences for a component
npx shadcn@latest diff button

# Compare with latest version
npx shadcn@latest diff --all
```

## Upgrade Command

```bash
# Upgrade all components
npx shadcn@latest upgrade

# Dry run (show what would change)
npx shadcn@latest upgrade --dry-run
```

## Doctor Command

```bash
# Check configuration
npx shadcn@latest doctor

# Expected output:
# ✅ Good to go!
# - components.json is valid
# - tailwind.config.js is valid
# - globals.css is valid
# - lib/utils.ts exists
```

## Common Workflows

```bash
# Full setup from scratch
npx shadcn@latest init
npx shadcn@latest add button card input form dialog toast
```