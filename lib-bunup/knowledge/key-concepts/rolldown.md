# Rolldown

## What is Rolldown

Rolldown เป็น JavaScript bundler ที่เขียนด้วย Rust โดย team ของ Vite:
- **Rust-based** - เร็วกว่า bundlers ที่เขียนด้วย JavaScript
- **Rollup-compatible** - API คล้ายกับ Rollup
- **Vite Integration** - ใช้เป็น default bundler ใน Vite

## Why Rolldown

- **Performance** - เร็วกว่า Rollup 10-100x
- **Memory Efficiency** - ใช้ memory น้อยกว่า
- **Incremental Builds** - รองรับ incremental builds
- **Tree-shaking** - tree-shake ที่มีประสิทธิภาพสูง

## Bunup and Rolldown

Bunup ใช้ Rolldown เป็น bundling engine:
- Zero-config bundling
- Auto-detect entry points
- TypeScript declarations generation
