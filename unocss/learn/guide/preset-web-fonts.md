# Preset Web Fonts

## ภาพรวม

`preset-web-fonts` คือ preset ที่ auto-load Google Fonts และ generate CSS utilities สำหรับ font families ช่วยให้ใช้ web fonts ได้ง่ายและ performant

## การติดตั้ง

```bash
bun add -D @unocss/preset-web-fonts
```

## การตั้งค่า

```typescript
import { defineConfig } from 'unocss'
import { presetWebFonts } from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetWebFonts(),
  ],
})
```

## การใช้งาน

### Basic Usage

กำหนด fonts ใน config:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        serif: 'Merriweather',
        mono: 'Fira Code',
      },
    }),
  ],
})
```

```html
<!-- Usage -->
<div class="font-sans">Sans font</div>
<div class="font-serif">Serif font</div>
<div class="font-mono">Mono font</div>
```

### Google Fonts

preset-web-fonts รองรับ Google Fonts โดย default:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        // Google Fonts
        sans: 'Inter',
        serif: 'Playfair Display',
        mono: 'JetBrains Mono',
      },
    }),
  ],
})
```

### Custom Font Providers

ใช้ custom font providers:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
})
```

## Configuration Options

```typescript
import { presetWebFonts } from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetWebFonts({
      // Font provider
      provider: 'google',
      
      // Font families
      fonts: {
        sans: 'Inter',
        serif: 'Merriweather',
        mono: 'Fira Code',
      },
      
      // Custom theme
      theme: {
        colors: {
          primary: '#3b82f6',
        },
      },
    }),
  ],
})
```

### Font Provider

กำหนด font provider:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'google', // or 'none' for custom fonts
    }),
  ],
})
```

### Font Weights

กำหนด font weights:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          weights: ['400', '500', '600', '700'],
        },
      },
    }),
  ],
})
```

### Font Styles

กำหนด font styles:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          styles: 'italic',
        },
      },
    }),
  ],
})
```

### Font Subsets

กำหนด font subsets:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          subsets: ['latin', 'latin-ext'],
        },
      },
    }),
  ],
})
```

## Google Fonts

### Popular Google Fonts

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        // Sans-serif
        sans: 'Inter',
        'sans-alt': 'Roboto',
        
        // Serif
        serif: 'Merriweather',
        'serif-alt': 'Playfair Display',
        
        // Monospace
        mono: 'Fira Code',
        'mono-alt': 'JetBrains Mono',
        
        // Display
        display: 'Oswald',
        'display-alt': 'Montserrat',
      },
    }),
  ],
})
```

### Google Fonts with Options

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter:wght@400;500;600;700',
          weights: ['400', '500', '600', '700'],
        },
        display: {
          name: 'Oswald:wght@400;500;600;700',
          weights: ['400', '500', '600', '700'],
        },
      },
    }),
  ],
})
```

## Custom Fonts

### Local Fonts

ใช้ local fonts:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Custom Sans',
        serif: 'Custom Serif',
      },
    }),
  ],
})
```

```css
/* Custom font CSS */
@font-face {
  font-family: 'Custom Sans';
  src: url('/fonts/custom-sans.woff2') format('woff2');
}
```

### CDN Fonts

ใช้ CDN fonts:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: {
          name: 'Custom Sans',
          url: 'https://cdn.example.com/fonts/custom-sans.woff2',
        },
      },
    }),
  ],
})
```

## Font Utilities

### Font Family

```html
<div class="font-sans">Sans font</div>
<div class="font-serif">Serif font</div>
<div class="font-mono">Mono font</div>
```

### Font Weight

```html
<div class="font-light">Light (300)</div>
<div class="font-normal">Normal (400)</div>
<div class="font-medium">Medium (500)</div>
<div class="font-semibold">Semibold (600)</div>
<div class="font-bold">Bold (700)</div>
```

### Font Style

```html
<div class="italic">Italic</div>
<div class="not-italic">Not italic</div>
```

## Font กับ Theme

### Theme Integration

```typescript
export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
  },
  presets: [
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        serif: 'Merriweather',
        mono: 'Fira Code',
      },
    }),
  ],
})
```

### Custom Font Utilities

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        heading: 'Oswald',
        body: 'Inter',
        code: 'Fira Code',
      },
    }),
  ],
})
```

```html
<h1 class="font-heading">Heading</h1>
<p class="font-body">Body text</p>
<code class="font-code">Code</code>
```

## Performance Optimization

### Font Loading Strategies

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          // Load critical weights first
          weights: ['400', '500'],
        },
      },
    }),
  ],
})
```

### Font Display

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter&display=swap',
        },
      },
    }),
  ],
})
```

### Font Subsetting

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          subsets: ['latin'], // Load only Latin subset
        },
      },
    }),
  ],
})
```

## Best Practices

1. **Minimal fonts** - ใช้ fonts เฉพาะที่จำเป็น
2. **Optimize loading** - optimize font loading strategies
3. **Fallback fonts** - กำหนด fallback fonts
4. **Test performance** - test font loading performance
5. **Accessibility** - พิจารณา accessibility

## Common Patterns

### Typography Scale

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        // Heading font
        heading: 'Oswald',
        
        // Body font
        body: 'Inter',
        
        // Code font
        code: 'Fira Code',
      },
    }),
  ],
})
```

```html
<h1 class="font-heading text-4xl">Heading</h1>
<p class="font-body text-base">Body text</p>
<code class="font-code text-sm">Code</code>
```

### Brand Typography

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        // Brand font
        brand: 'Montserrat',
        
        // Content font
        content: 'Inter',
      },
    }),
  ],
})
```

```html
<h1 class="font-brand">Brand</h1>
<p class="font-content">Content</p>
```

### Multi-language Support

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        // Latin
        sans: 'Inter',
        
        // Cyrillic
        'sans-cyrillic': 'Roboto',
        
        // Thai
        'sans-thai': 'Sarabun',
      },
    }),
  ],
})
```

## Integration Examples

### Vite

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { presetWebFonts } from '@unocss/preset-web-fonts'

export default {
  plugins: [
    UnoCSS({
      presets: [
        presetWebFonts({
          fonts: {
            sans: 'Inter',
          },
        }),
      ],
    }),
  ],
}
```

### Nuxt

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    presets: [
      presetWebFonts({
        fonts: {
          sans: 'Inter',
        },
      }),
    ],
  },
})
```

### Astro

```typescript
// astro.config.mjs
import UnoCSS from 'unocss/astro'
import { presetWebFonts } from '@unocss/preset-web-fonts'

export default {
  integrations: [
    UnoCSS({
      presets: [
        presetWebFonts({
          fonts: {
            sans: 'Inter',
          },
        }),
      ],
    }),
  ],
})
```

## Troubleshooting

### Fonts ไม่โหลด

ตรวจสอบว่า preset-web-fonts ถูกเปิด:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts(),
  ],
})
```

### Font weights ไม่ทำงาน

ตรวจสอบ font weights configuration:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          weights: ['400', '500', '600', '700'],
        },
      },
    }),
  ],
})
```

### Custom fonts ไม่ทำงาน

ตรวจสอบ provider configuration:

```typescript
export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Custom Sans',
      },
    }),
  ],
})
```

## Alternatives

### ใช้ Google Fonts Direct

```html
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
```

### ใชงาน Font Face

```css
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/custom.woff2') format('woff2');
}
```

## Resources

- [UnoCSS Documentation](https://unocss.dev)
- [preset-web-fonts GitHub](https://github.com/unocss/unocss/tree/main/packages/presets/web-fonts)
- [Google Fonts](https://fonts.google.com)
