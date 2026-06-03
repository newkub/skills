# Configuration

## Config File

Vite supports multiple config file formats:

| File | Type | Description |
|------|------|-------------|
| `vite.config.ts` | TypeScript | Recommended with type checking |
| `vite.config.js` | JavaScript | For CJS projects |
| `vite.config.mts` | TypeScript | ESM syntax |
| `vite.config.mjs` | JavaScript | ESM syntax |

## defineConfig Helper

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  // Config options
})
```

Conditional configuration based on command/mode:

```typescript
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'serve') {
    return { /* dev-specific config */ }
  } else {
    return { /* build-specific config */ }
  }
})
```

## Server Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `port` | `number` | `5173` | Dev server port |
| `host` | `string \| boolean` | `false` | Server host |
| `https` | `ServerOptions \| boolean` | `false` | HTTPS options |
| `open` | `boolean \| string` | `false` | Open browser |
| `proxy` | `Record<string, ProxyOptions>` | `{}` | Proxy configuration |
| `cors` | `boolean` | `true` | Enable CORS |
| `strictPort` | `boolean` | `false` | Exit if port in use |
| `force` | `boolean` | `false` | Force force optimizer |
| `hmr` | `HmrOptions \| boolean` | `{}` | HMR configuration |
| `watch` | `WatcherOptions` | `null` | File watcher options |

## Build Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `outDir` | `string` | `'dist'` | Output directory |
| `assetsDir` | `string` | `'assets'` | Assets subdirectory |
| `assetsInlineLimit` | `number` | `4096` | Inline asset size limit |
| `sourcemap` | `boolean \| 'inline' \| 'hidden'` | `false` | Source maps |
| `minify` | `'esbuild' \| 'terser' \| false` | `'esbuild'` | Minifier |
| `target` | `string \| string[]` | `'es2020'` | Build target |
| `cssCodeSplit` | `boolean` | `true` | CSS code splitting |
| `cssMinify` | `boolean \| 'esbuild'` | `true` | CSS minification |
| `rollupOptions` | `RollupOptions` | `{}` | Rollup options |
| `lib` | `LibraryOptions` | `false` | Library mode |
| `ssr` | `SsrOptions` | `{}` | SSR options |
| `populatorGenerate` | `function` | `undefined` | Generate function |

### Rollup Options

| Option | Type | Description |
|--------|------|-------------|
| `input` | `string \| Record<string, string>` | Entry point(s) |
| `output` | `OutputOptions \| OutputOptions[]` | Output options |
| `external` | `string[] \| RegExp \| Function` | Externalize deps |
| `treeshake` | `boolean \| object` | Tree shaking options |

### Library Options

| Option | Type | Description |
|--------|------|-------------|
| `entry` | `string \| string[] \| Record<string, string>` | Entry file(s) |
| `name` | `string` | Global variable name for UMD |
| `fileName` | `string \| function` | Output file name format |
| `formats` | `Array<'es' \| 'cjs' \| 'umd' \| 'iife'>` | Output formats |

## Resolve Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `alias` | `Record<string, string>` | `{}` | Path aliases |
| `extensions` | `string[]` | See below | File extensions |
| `conditions` | `string[]` | `[]` | Export conditions |
| `mainFields` | `string[]` | `['module', 'jsnext:main', 'jsnext']` | Main fields |
| `fullySpecify` | `boolean` | `false` | Require ESM specifier |

Default `extensions`:

```
['.mjs', '.js', '.mts', '.ts', '.mjsx', '.jsx', '.tsx', '.json']
```

## CSS Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `devSourcemap` | `boolean` | `false` | CSS source maps |
| `preprocessorOptions` | `Record<string, PreprocessorOptions>` | `{}` | Preprocessor config |
| `modules` | `CSSModulesOptions \| false` | `{}` | CSS modules config |
| `postcss` | `string \| Postcss.Configuration` | `{}` | PostCSS config |

### SCSS/Sass Options

```typescript
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "@/styles/variables";`,
      api: 'modern-compiler', // or 'legacy'
    },
  },
}
```

## OptimizeDeps Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `include` | `string[]` | `[]` | Dependencies to pre-bundle |
| `exclude` | `string[]` | `[]` | Dependencies to exclude |
| `force` | `boolean` | `false` | Force re-bundle |
| `esbuildOptions` | `object` | `{}` | esbuild options |

## Environment Variables

Files and prefixes:

| File | Description |
|------|-------------|
| `.env` | Loaded in all cases |
| `.env.local` | Local override (git-ignored) |
| `.env.[mode]` | Mode-specific (e.g., `.env.production`) |
| `.env.[mode].local` | Mode-local override |

| Prefix | Behavior |
|--------|----------|
| `VITE_` | Exposed to client code |
| `VITE_PUBLIC_` | Exposed to client (same as VITE_) |
| (other) | Server-side only |

Built-in `import.meta.env` variables:

| Variable | Type | Description |
|----------|------|-------------|
| `import.meta.env.MODE` | `string` | Current mode |
| `import.meta.env.DEV` | `boolean` | True in dev mode |
| `import.meta.env.PROD` | `boolean` | True in production mode |
| `import.meta.env.BASE_URL` | `string` | Base URL |
| `import.meta.env.ENTRY` | `string` | Entry file path |
| `import.meta.env.SSR` | `boolean` | True in SSR context |

## esbuild Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `jsx` | `'preserve' \| 'es' \| 'automatic'` | `'es'` | JSX transformation |
| `jsxImportSource` | `string` | `'react'` | JSX pragma import source |
| `tsconfig` | `string` | `tsconfig.json` | TSConfig file path |

---

Last updated: 2025
