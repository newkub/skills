---
name: lib-unocss
description: UnoCSS is an instant, on-demand atomic CSS engine with the best performance. It provides fully customizable utilities, presets, shortcuts, and icon system for any web project.
---

# UnoCSS

UnoCSS is an instant, on-demand atomic CSS engine with the best performance. It provides fully customizable utilities, presets, shortcuts, and icon system for any web project.

## Features

- **Instant On-demand** - Generate CSS only when used
- **Fully Customizable** - Custom presets, rules, shortcuts
- **Attributify Mode** - Use HTML attributes instead of classes
- **Icons Integration** - 100+ icon collections from Iconify
- **Theme System** - Design tokens (colors, spacing, fonts)
- **Transformers** - CSS directives (@apply, @screen)
- **Framework Agnostic** - Works with Vite, Webpack, CLI, etc.

## When to use

Use UnoCSS when you need:
- Atomic CSS with instant generation
- Tailwind/Windi-compatible utilities
- High performance (faster than Tailwind)
- Easy integration with Vite
- Icon system with 100+ collections
- Fully customizable styling


## Skills Related


## Quick Start

```bash
npm install -D unocss
```

```typescript
// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
})
```

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [UnoCSS()],
}
```

```typescript
// src/main.ts
import 'virtual:uno.css'
```

## File Structure

| Folder | Files | Description |
|--------|-------|-------------|
| **Guide** | [Installation](guide/installation.md) | Installation and setup |
| | [Quick Start](guide/quick-start.md) | Step-by-step guide |
| | [Key Concepts](guide/key-concept.md) | Core concepts |
| | [How It Works](guide/how-it-works.md) | Engine pipeline |
| | [Features](guide/features.md) | All features |
| | [Configuration](guide/configuration.md) | Configuration guide |
| | [Best Practices](guide/best-practices.md) | Best practices |
| | [Integration](guide/integration.md) | Framework integrations |
| | [Architecture](guide/architecture.md) | Internal architecture |
| **References** | [Website](references/website.md) | Official resources |
| | [API](references/api.md) | API reference |
| | [CLI](references/cli.md) | CLI commands |
| | [Configuration](references/configuration.md) | Config options |
| | [Templates](references/templates/) | Setup templates |

## Guide (TH)

| File | Description |
|------|-------------|
| [installation.md](guide/installation.md) | การติดตั้งและ setup |
| [quick-start.md](guide/quick-start.md) | คู่มือเริ่มต้นใช้งาน |
| [key-concept.md](guide/key-concept.md) | Core concepts ของ UnoCSS |
| [how-it-works.md](guide/how-it-works.md) | UnoCSS engine pipeline |
| [features.md](guide/features.md) | Features ทั้งหมด |
| [configuration.md](guide/configuration.md) | การตั้งค่า configuration |
| [best-practices.md](guide/best-practices.md) | แนวทางการใช้งาน |
| [integration.md](guide/integration.md) | การใช้กับ frameworks |
| [architecture.md](guide/architecture.md) | สถาปัตยกรรมภายใน |

## References (EN)

| File | Description |
|------|-------------|
| [website.md](references/website.md) | Official docs & resources links |
| [api.md](references/api.md) | defineConfig, presets, rules API |
| [cli.md](references/cli.md) | CLI commands reference |
| [configuration.md](references/configuration.md) | All configuration options |

### Templates

| File | Description |
|------|-------------|
| [basic-setup.md](references/templates/basic-setup.md) | Setup templates for Vite, Nuxt, Next, etc. |
| [component-patterns.md](references/templates/component-patterns.md) | Common component patterns |