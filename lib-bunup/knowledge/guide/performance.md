# Performance

## Bunup Performance

- **Rolldown-based** - ใช้ Rolldown (Rust) สำหรับ bundling ที่เร็วกว่า
- **Parallel Processing** - Process ไฟล์แบบ parallel
- **Incremental Builds** - Build เฉพาะไฟล์ที่เปลี่ยนแปลง
- **Caching** - Cache intermediate results

## Optimization Tips

- **Tree-shaking** - Bunup tree-shake อัตโนมัติ
- **Minification** - ใช้ minification สำหรับ production
- **Code Splitting** - Split code ตาม entry points
- **External Dependencies** - กำหนด dependencies เป็น external เพื่อลด bundle size

## Benchmark

Bunup เร็วกว่า tsup 10-20x สำหรับ TypeScript libraries
