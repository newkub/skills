# Plugin Template

## Custom Vite Plugin Template

```typescript
import { Plugin } from 'vite'

export interface MyPluginOptions {
  // Define your options here
  include?: string[]
  exclude?: string[]
  debug?: boolean
}

export default function myPlugin(options: MyPluginOptions = {}): Plugin {
  const { 
    include = ['**/*.js'], 
    exclude = [], 
    debug = false 
  } = options

  return {
    // Plugin name (required)
    name: 'vite-plugin-my-plugin',

    // Enforce plugin order
    enforce: 'pre', // 'pre' | 'post'

    // Apply only for certain conditions
    apply: 'serve', // 'serve' | 'build' | ((config, env) => boolean)

    // ==========================================
    // Build Hooks
    // ==========================================

    // Called when build starts
    buildStart() {
      if (debug) {
        console.log('[MyPlugin] Build starting...')
      }
    },

    // Called when build ends
    buildEnd(error) {
      if (error) {
        console.error('[MyPlugin] Build failed:', error)
      } else if (debug) {
        console.log('[MyPlugin] Build completed!')
      }
    },

    // Called when bundle is closed
    closeBundle() {
      if (debug) {
        console.log('[MyPlugin] Bundle closed')
      }
    },

    // ==========================================
    // Module Resolution Hooks
    // ==========================================

    // Resolve module id
    resolveId(source, importer) {
      // Return resolved id or null
      if (source.startsWith('my-prefix:')) {
        return source.replace('my-prefix:', '/resolved/')
      }
      return null
    },

    // Load module content
    load(id) {
      // Return module content or null
      if (id.endsWith('.special')) {
        return 'export default "special content"'
      }
      return null
    },

    // Transform code
    transform(code, id) {
      // Check if should transform
      if (!id.match(/\.(js|ts|vue|jsx|tsx)$/)) {
        return null
      }

      // Skip if in exclude list
      if (exclude.some(pattern => id.includes(pattern))) {
        return null
      }

      // Transform code
      if (debug) {
        console.log(`[MyPlugin] Transforming: ${id}`)
      }

      return {
        code: code.replace(/foo/g, 'bar'),
        map: null // or source map
      }
    },

    // ==========================================
    // Vite-Specific Hooks
    // ==========================================

    // Modify config before resolved
    config(userConfig, env) {
      return {
        // Merge with user config
        resolve: {
          alias: {
            'my-alias': '/path/to/alias'
          }
        }
      }
    },

    // Use resolved config
    configResolved(resolvedConfig) {
      // Access final config
      if (debug) {
        console.log('[MyPlugin] Config resolved')
      }
    },

    // Configure dev server
    configureServer(server) {
      // Add middleware
      server.middlewares.use('/api', (req, res, next) => {
        // Handle API requests
        next()
      })
    },

    // Transform index.html
    transformIndexHtml(html, context) {
      // Inject scripts or modify HTML
      return html.replace(
        '</head>',
        '<script>window.__MY_PLUGIN__ = true</script></head>'
      )
    },

    // Handle hot updates
    handleHotUpdate({ file, server, modules, read, timestamp }) {
      // Custom HMR handling
      if (file.endsWith('.special')) {
        console.log('[MyPlugin] Hot update:', file)
      }
    },

    // ==========================================
    // Output Generation Hooks (Build only)
    // ==========================================

    // Generate bundle
    generateBundle(options, bundle) {
      // Modify output bundle
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type === 'chunk' && chunk.isEntry) {
          // Process entry chunks
        }
      }
    },

    // Write bundle
    writeBundle(options, bundle) {
      // Post-process written files
    },

    // ==========================================
    // Watch Hooks
    // ==========================================

    // Add watch files
    watchChange(id) {
      console.log('[MyPlugin] File changed:', id)
    }
  }
}
```

---

## การใช้งาน Plugin

### ใน Vite Config

```typescript
import { defineConfig } from 'vite'
import myPlugin from './plugins/myPlugin'

export default defineConfig({
  plugins: [
    myPlugin({
      include: ['**/*.vue'],
      debug: process.env.DEBUG === 'true'
    })
  ]
})
```

---

## Official Plugin Examples

### @vitejs/plugin-vue

```typescript
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('my-')
        }
      }
    })
  ]
})
```

### @vitejs/plugin-react

```typescript
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
      babel: {
        plugins: []
      }
    })
  ]
})
```
