# Getting Started with WXT

## การสร้าง Project

สร้าง project ใหม่:

```bash
bunx wxt@latest init
cd my-extension
bun install
```

## การรัน Development

```bash
bun run dev
```

Browser จะเปิดอัตโนมัติเมื่อเริ่ม development

## การ Build

```bash
bun run build
```

Target browser เฉพาะ:

```bash
bun run build -b chrome
bun run build -b firefox
```

## การ Zip

```bash
bun run zip
```

## การ Publish

```bash
bun run publish
```
