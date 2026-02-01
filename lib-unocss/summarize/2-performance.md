# Performance

| Technique | Benefit | Implementation |
|-----------|---------|----------------|
| **On-demand Generation** | ลดขนาด CSS | Default UnoCSS behavior |
| **Shortcuts** | ลด class count | Define in config |
| **Safelist** | ป้องกัน dynamic classes | `safelist: ['dynamic-class']` |
| **Caching** | เร็วขึ้นใน development | Enable build cache |
| **Tree Shaking** | ลด unused CSS | Scan only used files |
| **Minification** | ลดขนาดไฟล์ | Build-time optimization |
