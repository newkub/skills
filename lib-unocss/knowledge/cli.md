# CLI Commands

## Installation
```bash
npm install -g @unocss/cli
```

## Basic Commands
```bash
# สร้าง CSS จากไฟล์
unocss [glob patterns] -o output.css

# ตั้งค่า config file
unocss -c uno.config.js -o output.css

# watch mode
unocss -w -o output.css

# minify output
unocss -m -o output.css
```

## Advanced Options
```bash
# กำหนด patterns หลายอัน
unocss "**/*.vue" "**/*.html" -o styles.css

# ใช้กับ stdin
echo "class='text-red-500'" | unocss -o -

# สร้าง TypeScript definitions
unocss -d -o types.d.ts
```
