# UnoCSS API Reference

## defineConfig

```typescript
import { defineConfig } from 'unocss'

export default defineConfig({
  // Configuration options
})
```

## Presets

### presetUno

Tailwind/Windi CSS compatible utilities.

```typescript
import { presetUno } from 'unocss'

presetUno({ dark: 'class' | 'media' })
```

### presetAttributify

Attribute-based styling.

```typescript
import { presetAttributify } from 'unocss'

presetAttributify({ prefix?: string, attributePrefix?: string })
```

### presetIcons

Iconify icons integration.

```typescript
import { presetIcons } from 'unocss'

presetIcons({
  scale: 1.2,
  warn: true,
  cdn: 'https://esm.sh/',
  extraProperties: {
    'display': 'inline-block',
    'vertical-align': 'middle',
  },
})
```

### presetTypography

Typography utilities (prose).

```typescript
import { presetTypography } from '@unocss/preset-typography'

presetTypography({ cssExtend: { 'h1': 'font-size: 2rem' } })
```

### presetWebFonts

Auto-loading web fonts.

```typescript
import { presetWebFonts } from '@unocss/preset-web-fonts'

presetWebFonts({
  fonts: {
    sans: 'Inter',
    mono: [{ name: 'Fira Code', weights: ['400', '600'] }],
  },
  provider: 'google', // 'google' | 'none'
})
```

## Rules

### Static Rules

```typescript
rules: [
  ['custom-class', { property: 'value' }],
]
```

### Dynamic Rules

```typescript
rules: [
  [/^custom-(\d+)$/, ([, d]) => ({ fontSize: `${d}px` })],
  [/^custom-(\w+)-(\d+)$/, ([, name, d]) => {
    return { [name]: `${d}px` }
  }],
]
```

### Rule Options

```typescript
rules: [
  ['custom', { color: 'red' }, { layer: 'default' }],
  [/^text-(.*)$/, handler, { autocomplete: 'text-$0' }],
]
```

## Shortcuts

### Static Shortcuts

```typescript
shortcuts: {
  'btn': 'px-4 py-2 bg-blue-500 text-white rounded',
  'btn-primary': 'btn hover:bg-blue-600',
}
```

### Dynamic Shortcuts

```typescript
shortcuts: [
  [/^btn-(\w+)$/, ([, color]) => `px-4 py-2 bg-${color}-500 text-white rounded`],
]
```

## Theme

```typescript
theme: {
  colors: {
    primary: '#3b82f6',
    gray: { 100: '#f3f4f6', 500: '#6b7280' },
  },
  spacing: { sm: '0.5rem', md: '1rem' },
  fontFamily: { sans: 'Inter' },
  fontSize: { sm: ['0.875rem', '1.25rem'] },
  breakpoints: { sm: '640px', md: '768px' },
  animation: { spin: 'spin 1s linear infinite' },
  keyframes: { spin: { to: { transform: 'rotate(360deg)' } } },
}
```

## Transformers

```typescript
import {
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
} from 'unocss'

transformers: [
  transformerDirectives({ enforce: 'pre' }),
  transformerVariantGroup(),
  transformerCompileClass(),
]
```

## Safelist & Blocklist

```typescript
safelist: [
  'text-red-500',
  /^bg-.*$/,
]
blocklist: [
  'p-1', 'm-1',
]
```

## Content

```typescript
content: {
  filesystem: ['src/**/*.{vue,jsx,tsx}'],
  inline: ['<div class="custom">'],
  pipeline: {
    include: [/\.vue$/],
    exclude: ['node_modules'],
  },
}
```

## Layers

```typescript
layers: {
  components: { order: 1 },
  default: 0,
  utilities: { order: 2 },
}
```

## Shortcut Utils

```typescript
shortcuts: {
  'btn': (ctx) => {
    if (ctx.theme.colors.primary)
      return 'px-4 py-2 bg-primary text-white rounded'
    return 'px-4 py-2 bg-blue-500 text-white rounded'
  },
}
```

## CLI

### Available Commands

```bash
# Generate CSS from files
unocss "src/**/*.html" -o dist/uno.css

# Watch mode
unocss "src/**/*.html" -o dist/uno.css -w

# Use config file
unocss "src/**/*.html" -o dist/uno.css -c uno.config.ts

# Minify output
unocss "src/**/*.html" -o dist/uno.css -m

# Disable cache
unocss "src/**/*.html" -o dist/uno.css --no-cache

# Show version
unocss --version

# Show help
unocss --help
```

### CLI Options

| Option | Short | Description |
|--------|-------|-------------|
| `--output`, `-o` | Required | Output file path |
| `--config`, `-c` | Optional | Config file path |
| `--watch`, `-w` | Optional | Watch mode |
| `--minify`, `-m` | Optional | Minify output |
| `--no-cache` | Optional | Disable cache |
| `--version` | Optional | Show version |
| `--help` | Optional | Show help |