# Use Modern Transpilers for Speed

## Rationale
Tools like `esbuild`, `swc`, and `bun` are written in high-performance languages (like Go and Rust) and can transpile TypeScript to JavaScript much faster than the standard `tsc` compiler. However, they do not perform type checking.

## Good Practice

Use a two-step process for a fast and safe build: first, check types with `tsc`, then transpile with a faster tool.

````bash
# 1. Check types without generating JavaScript files
tsc --noEmit

# 2. Use a fast transpiler to bundle the code
esbuild src/index.ts --bundle --outfile=dist/index.js
````
