# Integration Customization

## Vite Integration

Customize Vite integration

```typescript
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      // Custom configuration
      configFile: './uno.config.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.md\?vue/],
      exclude: [/node_modules/, /\.git/],
    }),
  ],
}
```

## Nuxt Integration

Customize Nuxt integration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    // Custom configuration
    uno: './uno.config.ts',
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.md\?vue/],
    exclude: [/node_modules/, /\.git/],
  },
})
```
