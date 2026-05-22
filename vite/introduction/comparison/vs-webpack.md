# Vite vs Webpack

## สรุป

| | Vite | Webpack |
|--|------|---------|
| **Dev Start** | 100ms+ | 2-10s |
| **HMR** | <50ms | 200ms+ |
| **Bundle Tool** | esbuild + Rollup | Webpack |
| **Config Size** | น้อย | มาก |
| **Ecosystem** | กำลังเติบโต | มากมาย |

---

## Development

### Cold Start

```text
Webpack: Bundle → Serve → Update Bundle → Serve
Vite:     Serve directly → HMR (instant)
```

Webpack ต้อง bundle ทั้ง project ก่อน serve
Vite serve files ผ่าน native ESM โดยตรง

### HMR Speed

| Tool | Time |
|------|------|
| Webpack | 200ms - 2s+ |
| Vite | <50ms |

---

## Configuration

### Webpack Config (เยอะมาก)

```javascript
// webpack.config.js (มักยาว 100+ บรรทัด)
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8080,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
```

### Vite Config (น้อย กระชับ)

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
  },
})
```

---

## Production Build

### Bundle Strategy

| | Webpack | Vite |
|--|---------|------|
| **Development** | Bundle | Native ESM |
| **Production** | Webpack | Rollup |
| **Transform** | JavaScript | Go (esbuild) + Rollup |

### Build Speed

| Project Size | Webpack | Vite |
|--------------|---------|------|
| Small | 5-10s | 2-5s |
| Medium | 20-60s | 5-15s |
| Large | 60s+ | 15-30s |

---

## เมื่อไหร่ใช้อะไร?

### เลือก Vite เมื่อ

- เริ่ม project ใหม่
- ต้องการ dev server เร็ว
- ต้องการ config ง่าย
- ไม่ต้องการ features เฉพาะของ Webpack

### เลือก Webpack เมื่อ

- มี ecosystem ที่พึ่ง Webpack (เช่น specific loaders)
- ต้องการ features ที่ยังไม่มีใน Vite
- Project ใหญ่มากที่ optimize มาแล้ว

---

## Migration

### จาก Webpack มา Vite

```javascript
// Webpack
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ],
  },
}

// Vite
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

Vite handle ส่วนใหญ่โดยอัตโนมัติ (TypeScript, JSX, etc.)
