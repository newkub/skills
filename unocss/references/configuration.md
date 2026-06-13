# UnoCSS Configuration Reference

## defineConfig Options

| Option | Type | Description |
|--------|------|-------------|
| `presets` | `Preset[]` | Array of presets to use |
| `rules` | `Rule[]` | Custom static and dynamic rules |
| `shortcuts` | `Shortcut[]` | Shortcut definitions |
| `theme` | `Theme` | Design tokens (colors, spacing, etc.) |
| `transformers` | `Transformer[]` | CSS transformers |
| `content` | `Content` | Content sources to scan |
| `safelist` | `string[]` | Always-included classes |
| `blocklist` | `string[]` | Excluded classes |
| `preflights` | `Preflight[]` | Base CSS injection |
| `layers` | `Layers` | CSS layer ordering |
| `extractors` | `Extractor[]` | Custom content extractors |
| `rulesMaxWidth` | `number` | Max width for dynamic rules |

## Presets

```typescript
// Multiple presets
presets: [
  presetUno({ dark: 'class' }),
  presetAttributify({ prefix: 'un-' }),
  presetIcons({ scale: 1.2 }),
]

// Single preset
presets: [presetUno()]
```

## Rules

### Static Rules

```typescript
rules: [
  ['custom-flex', { display: 'flex' }],
  ['custom-grid', { display: 'grid' }],
]
```

### Dynamic Rules

```typescript
rules: [
  // Regex with capture groups
  [/^w-(\d+)$/, ([, d]) => ({ width: `${d}px` })],
  [/^h-(\d+)$/, ([, d]) => ({ height: `${d}px` })],

  // With theme access
  [/^text-(\w+)$/, ([, c], { theme }) => ({ color: theme.colors[c] })],

  // With options
  [/^custom-(\w+)-(\d+)$/, handler, { layer: 'utilities' }],
]
```

## Shortcuts

```typescript
shortcuts: {
  // Simple
  'btn': 'px-4 py-2 rounded bg-blue-500 text-white',

  // With nested shortcuts
  'btn-primary': 'btn hover:bg-blue-600',

  // With conditions
  'btn-danger': 'btn bg-red-500 text-white',
}
```

## Theme

```typescript
theme: {
  // Colors
  colors: {
    primary: '#3b82f6',
    gray: {
      100: '#f3f4f6',
      500: '#6b7280',
      900: '#111827',
    },
  },

  // Spacing
  spacing: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '4': '1rem',
  },

  // Font families
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'monospace'],
  },

  // Font sizes
  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1rem' }],
    'base': ['1rem', { lineHeight: '1.5rem' }],
  },

  // Breakpoints
  breakpoints: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },

  // Animations
  animation: {
    'spin': 'spin 1s linear infinite',
    'fade': 'fade 0.3s ease-out',
  },

  // Keyframes
  keyframes: {
    'spin': { to: { transform: 'rotate(360deg)' } },
    'fade': { from: { opacity: 0 }, to: { opacity: 1 } },
  },
}
```

## Content

```typescript
content: {
  // Filesystem glob
  filesystem: [
    'src/**/*.{vue,jsx,tsx,html,svelte}',
  ],

  // Inline content
  inline: [
    '<div class="custom-class">',
  ],

  // Pipeline options
  pipeline: {
    include: [/\.vue$/, /\.jsx?$/],
    exclude: [/\/node_modules\//, /\/dist\//],
  },
}
```

## Safelist & Blocklist

```typescript
safelist: [
  // Static classes
  'text-red-500', 'bg-blue-500',

  // Dynamic patterns
  /^bg-.*$/, /^text-.*$/,
]

blocklist: [
  'p-0', 'm-0',
]
```

## Transformers

```typescript
transformers: [
  // CSS directives (@apply, @screen)
  transformerDirectives(),

  // Variant groups (hover:(bg-red text-white))
  transformerVariantGroup(),

  // Compile multiple classes
  transformerCompileClass(),
]
```

## Layers

```typescript
layers: {
  // Custom layer ordering
  'pre': 0,
  'shortcuts': 1,
  'default': 2,
  'utilities': 3,
  'post': 4,
}
```

## Configuration Files

| File | Format | Priority |
|------|--------|----------|
| `uno.config.ts` | TypeScript | Highest |
| `uno.config.mts` | ES Module | Highest |
| `unocss.config.ts` | TypeScript | Highest |
| `uno.config.js` | JavaScript | Medium |
| `unocss.config.js` | JavaScript | Medium |
| `package.json` | JSON (uno key) | Lowest |