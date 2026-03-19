# Setup UnoCSS

## Title

ติดตั้งและตั้งค่า UnoCSS ในโปรเจกต์

## Description

Setup UnoCSS สำหรับโปรเจกต์ใหม่ด้วยการติดตั้ง package และการตั้งค่าเริ่มต้น

## Examples

### ติดตั้งด้วย npm

```bash
npm install -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons
```

### ติดตั้งด้วย yarn

```bash
yarn add -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons
```

### ติดตั้งด้วย pnpm

```bash
pnpm add -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons
```

## Anti-patterns

- ห้ามติดตั้ง UnoCSS โดยไม่มี presets
- ห้ามใช้เวอร์ชันที่ไม่เสถียร
- ห้ามติดตั้งใน production dependencies
