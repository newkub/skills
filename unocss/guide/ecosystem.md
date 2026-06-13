# UnoCSS Ecosystem

## ภาพรวม

UnoCSS มี ecosystem ที่ rich ประกอบด้วย presets, transformers, integrations, และ tools

## Core Packages

### @unocss/core

Core engine สำหรับ UnoCSS

```bash
bun add @unocss/core
```

### unocss

Main package สำหรับ UnoCSS

```bash
bun add -D unocss
```

## Presets

### Official Presets

#### presetUno

Default preset ที่รวม utilities พื้นฐาน

```typescript
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
})
```

#### presetWind

Tailwind CSS compatible preset

```typescript
import { presetWind } from 'unocss'

export default defineConfig({
  presets: [presetWind()],
})
```

#### presetMini

Minimal preset สำหรับ small projects

```typescript
import { presetMini } from 'unocss'

export default defineConfig({
  presets: [presetMini()],
})
```

#### presetAttributify

Attributify mode preset

```typescript
import { presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetAttributify()],
})
```

#### presetIcons

Icon collections preset

```typescript
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetIcons()],
})
```

### Community Presets

#### @unocss/preset-rem-to-px

Convert rem to px

```bash
bun add -D @unocss/preset-rem-to-px
```

```typescript
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [presetRemToPx()],
})
```

#### @unocss/preset-tagify

Tag-based CSS

```bash
bun add -D @unocss/preset-tagify
```

```typescript
import presetTagify from '@unocss/preset-tagify'

export default defineConfig({
  presets: [presetTagify()],
})
```

## Transformers

### Official Transformers

#### transformerDirectives

CSS directives transformer

```typescript
import { transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives()],
})
```

#### transformerVariantGroup

Variant group transformer

```typescript
import { transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [transformerVariantGroup()],
})
```

#### transformerCompileClass

Compile class transformer

```typescript
import { transformerCompileClass } from 'unocss'

export default defineConfig({
  transformers: [transformerCompileClass()],
})
```

### Community Transformers

#### @unocss/transformer-attributify-jsx

JSX attributify transformer

```bash
bun add -D @unocss/transformer-attributify-jsx
```

```typescript
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  transformers: [transformerAttributifyJsx()],
})
```

## Integrations

### Framework Integrations

#### Vite

```bash
bun add -D unocss
```

```typescript
import UnoCSS from 'unocss/vite'

export default {
  plugins: [UnoCSS()],
}
```

#### Nuxt

```bash
bun add -D @unocss/nuxt
```

```typescript
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
})
```

#### Next.js

```bash
bun add -D @unocss/next
```

```javascript
const UnoCSS = require('@unocss/next').default

module.exports = UnoCSS()
```

#### Webpack

```bash
bun add -D @unocss/webpack
```

```javascript
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  plugins: [UnoCSS()],
}
```

#### CLI

```bash
bun add -D unocss
```

```bash
# Run CLI
bunx unocss "input.html" -o output.css
```

### Runtime

#### @unocss/runtime

Runtime สำหรับ browser

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
```

## Tools

### VS Code Extension

UnoCSS VS Code extension

```bash
# Install from VS Code Marketplace
code --install-extension antfu.unocss
```

### Browser Inspector

UnoCSS browser inspector

```typescript
export default defineConfig({
  inspector: true,
})
```

### CLI Tools

UnoCSS CLI tools

```bash
# Scan utilities
bunx unocss scan

# Generate CSS
bunx unocss generate
```

## Development Tools

### Testing

#### @unocss/vite

Vite plugin สำหรับ development

```typescript
import UnoCSS from 'unocss/vite'

export default {
  plugins: [UnoCSS()],
}
```

### Debugging

#### Inspector Mode

Enable inspector สำหรับ debugging

```typescript
export default defineConfig({
  inspector: true,
})
```

#### Source Maps

Enable source maps สำหรับ debugging

```typescript
export default defineConfig({
  sourceMap: true,
})
```

## Community Resources

### Documentation

- [Official Docs](https://unocss.dev/) - Official documentation
- [GitHub](https://github.com/unocss/unocss) - Source code
- [Discord](https://chat.antfu.me) - Community chat

### Examples

- [Examples Repo](https://github.com/unocss/unocss/tree/main/examples) - Example projects
- [Templates](https://github.com/unocss/unocss/tree/main/templates) - Project templates

### Plugins

- [Awesome UnoCSS](https://github.com/unocss/awesome-unocss) - Community plugins
- [Presets List](https://unocss.dev/presets/) - Available presets

## Best Practices

### 1. Use Official Packages

ใช้ official packages สำหรับ stability

```bash
# Official packages
bun add -D unocss
```

### 2. Check Compatibility

ตรวจสอบ compatibility ก่อนใช้ community packages

```bash
# Check package version
bunx npm view <package> versions
```

### 3. Review Updates

Review updates ก่อน upgrade

```bash
# Check changelog
bunx npm view unocss --json | jq '.versions'
```

### 4. Contribute Back

Contribute กลับไปยัง community

```bash
# Fork และ contribute
git clone https://github.com/unocss/unocss
```

## Conclusion

UnoCSS ecosystem ประกอบด้วย:
- Core packages
- Official presets
- Community presets
- Transformers
- Framework integrations
- Development tools

ใช้ official packages สำหรับ stability และ community packages สำหรับ extend functionality
