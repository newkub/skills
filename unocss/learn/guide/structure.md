# โครงสร้าง UnoCSS

## ภาพรวม

UnoCSS มีโครงสร้างที่ modular และ flexible สำหรับ generate CSS แบบ on-demand

## Core Architecture

```
┌─────────────────────────────────────────┐
│           Source Files                  │
│  (HTML, Vue, React, etc.)              │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         Scanner / Parser                │
│  - Scan class names                     │
│  - Parse utilities                     │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         Rule Matching                  │
│  - Match utilities to rules            │
│  - Apply variants                       │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         CSS Generation                 │
│  - Generate CSS rules                  │
│  - Apply theme                         │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         CSS Output                     │
│  - Minified CSS                        │
│  - Layered CSS                         │
└─────────────────────────────────────────┘
```

## Configuration Structure

### uno.config.ts

```typescript
import { defineConfig } from 'unocss'

export default defineConfig({
  // Presets - ชุด rules และ utilities พื้นฐาน
  presets: [],
  
  // Rules - Custom rules สำหรับ utilities
  rules: [],
  
  // Shortcuts - Aliases สำหรับ group utilities
  shortcuts: [],
  
  // Theme - Design tokens
  theme: {},
  
  // Transformers - CSS transformers
  transformers: [],
  
  // Variants - CSS variants และ modifiers
  variants: [],
  
  // Layers - CSS layers
  layers: {},
  
  // Options - Configuration options
  // ...
})
```

## Preset Structure

Presets คือ modular units ที่รวม rules, theme, และ configuration

```
Preset
├── Rules
│   ├── Static rules
│   └── Dynamic rules
├── Theme
│   ├── Colors
│   ├── Spacing
│   ├── Typography
│   └── ...
├── Variants
│   ├── Responsive
│   ├── Dark mode
│   └── ...
└── Options
    └── Preset-specific options
```

## Rule Matching Process

### 1. Scanning

Scanner ค้นหา class names ใน source files

```html
<div class="text-red p-4">
  Content
</div>
```

### 2. Matching

Matcher จะ match class names กับ rules

```typescript
// Rule: [/^text-(.+)$/, ([, color]) => ({ color })]
// Match: text-red → { color: 'red' }
```

### 3. Variant Application

Variants ถูก apply หลังจาก matching

```typescript
// Variant: hover:
// Match: hover:text-red → { '&:hover': { color: 'red' } }
```

### 4. CSS Generation

CSS ถูก generate จาก matched rules

```css
.text-red { color: red; }
.p-4 { padding: 1rem; }
```

## Layer System

UnoCSS ใช้ layer system สำหรับ organize CSS

```typescript
export default defineConfig({
  layers: {
    // Layer order
    base: -1,      // Base styles
    pre: 0,        // Pre-utilities
    default: 1,    // Default utilities
    shortcuts: 2,   // Shortcuts
    post: 3,       // Post-utilities
  },
})
```

## CSS Output Structure

```
Generated CSS
├── @layer base
│   └── Base styles
├── @layer pre
│   └── Pre-utilities
├── @layer default
│   └── Utilities
├── @layer shortcuts
│   └── Shortcuts
└── @layer post
    └── Post-utilities
```

## Integration Structure

### Vite Integration

```
Vite Plugin
├── Transform hook
│   └── Transform source files
├── Generate hook
│   └── Generate CSS
└── Dev server
    └── HMR support
```

### Nuxt Integration

```
Nuxt Module
├── Config merge
│   └── Merge UnoCSS config
├── Page scanning
│   └── Scan Vue pages
└── CSS injection
    └── Inject CSS
```

## Performance Structure

### Build Time

```
Build Process
├── Scan files
│   └── Find utilities
├── Match rules
│   └── Match to rules
├── Generate CSS
│   └── Generate CSS
└── Optimize
    └── Minify CSS
```

### Runtime

```
Runtime
├── Zero overhead
│   └── No runtime code
└── CSS only
    └── Only CSS output
```

## Best Practices

### 1. Modular Configuration

แยก configuration ออกเป็น modules

```typescript
// config/theme.ts
export const theme = {
  colors: { /* ... */ },
}

// config/rules.ts
export const rules = [
  // ...
]

// uno.config.ts
import { theme, rules } from './config'

export default defineConfig({
  theme,
  rules,
})
```

### 2. Layer Organization

ใช้ layers สำหรับ organize CSS

```typescript
export default defineConfig({
  layers: {
    base: -1,
    utilities: 1,
    components: 2,
  },
})
```

### 3. Preset Composition

Compose presets สำหรับ reuse

```typescript
const myPreset = definePreset(() => ({
  presets: [presetUno()],
  rules: [/* ... */],
}))
```

## Debugging Structure

### Inspector

UnoCSS Inspector ช่วย debug CSS generation

```typescript
// Enable inspector
export default defineConfig({
  inspector: true,
})
```

### DevTools

Browser DevTools สำหรับ inspect CSS

```css
/* Inspect generated CSS */
.text-red { color: red; }
```

## Conclusion

UnoCSS มีโครงสร้างที่:
- Modular และ flexible
- Performance-oriented
- Easy to debug
- Easy to extend
