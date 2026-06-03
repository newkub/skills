# Configuration ของ UnoCSS

## Basic Config

```typescript
// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2, warn: true }),
  ],
})
```

## Presets Configuration

```typescript
import {
  presetUno,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetTagify,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({ dark: 'media' }),         // dark mode via media query
    presetAttributify({ prefix: 'un-' }), // prefix attributes
    presetIcons({
      scale: 1.2,                         // icon scale
      warn: true,                         // warn missing icons
      cdn: 'https://esm.sh/',            // CDN for icons
    }),
    presetTypography(),
    presetWebFonts({
      fonts: { sans: 'Inter', mono: 'Fira Code' },
    }),
  ],
})
```

## Rules

```typescript
export default defineConfig({
  rules: [
    // Static rule
    ['custom-flex', { display: 'flex' }],

    // Dynamic rule with regex
    [/^size-(\d+)$/, ([, d]) => ({
      width: `${d}px`,
      height: `${d}px`,
    })],

    // Rule with variants
    [/^text-primary-(\w+)$/, ([, c], { theme }) => ({
      color: theme.colors.primary[c],
    })],
  ],
})
```

## Shortcuts

```typescript
export default defineConfig({
  // Object shortcuts
  shortcuts: {
    'btn': 'px-4 py-2 rounded font-medium transition',
    'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-600',
    'flex-center': 'flex items-center justify-center',
  },

  // Array shortcuts (dynamic)
  shortcuts: [
    [/^space-(\d+)$/, ([, d]) => ({ gap: `${Number(d) * 0.25}rem` })],
  ],
})
```

## Theme

```typescript
export default defineConfig({
  theme: {
    colors: {
      primary: { 50: '#eff6ff', 500: '#3b82f6', 900: '#1e3a8a' },
      brand: { DEFAULT: '#3b82f6', light: '#60a5fa', dark: '#1d4ed8' },
    },
    spacing: {
      'xs': '0.75rem', 'sm': '0.875rem', 'md': '1rem',
      'lg': '1.125rem', 'xl': '1.25rem',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
    },
    breakpoints: {
      sm: '640px', md: '768px', lg: '1024px', xl: '1280px',
    },
  },
})
```

## Transformers

```typescript
import { transformerDirectives, transformerVariantGroup, transformerCompileClass } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),       // @apply, @screen
    transformerVariantGroup(),     // hover:(bg-red text-white)
    transformerCompileClass(),     // compile classes
  ],
})
```

## Safelist & Blocklist

```typescript
export default defineConfig({
  safelist: [
    'bg-red-500', 'bg-green-500',      // always generate
    'i-carbon-home', 'i-carbon-close',  // dynamic icons
  ],
  blocklist: [
    'p-1', 'm-1',  // block specific classes
  ],
})
```

## Content Scanning

```typescript
export default defineConfig({
  content: {
    filesystem: [
      'src/**/*.{vue,jsx,tsx,html}',
      'components/**/*.vue',
    ],
    inline: [
      '<div class="custom-inline-class">',
    ],
    pipeline: {
      include: [/\.vue$/, /\.tsx$/, /\.html$/],
      exclude: ['node_modules', 'dist'],
    },
  },
})
```

## Preflights

```typescript
export default defineConfig({
  preflights: [
    {
      getCSS: () => `
        * { margin: 0; padding: 0; }
        html { font-family: 'Inter', sans-serif; }
      `,
    },
  ],
})
```
