# Packaging

## Optimize Bundle Size

```json
// tsconfig.json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "exclude": ["**/*.test.ts", "**/test/**"]
}
```

## Use Webpack for Bundling

```javascript
// webpack.config.js
module.exports = {
  entry: './src/extension.ts',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'out')
  },
  externals: {
    vscode: 'commonjs vscode'
  }
};
```
