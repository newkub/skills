---
name: build
description: "Build artifacts สำหรับ deployment"
triggers: ['user', 'model']
allowed-tools: ['read', 'edit', 'grep', 'glob', 'exec']
---
## Goal

Build artifacts สำหรับ deployment อย่างถูกต้องและ optimized


## Scope

ใช้สำหรับ build project สำหรับ deployment


## Execute

### 1. Build Configuration

ตั้งค่า build

- Configure build settings
- Setup optimization (minification, tree-shaking)
- Configure output formats (ESM/CJS)
- Setup source maps

### 2. Build Execution

รัน build

- รัน build command
- Verify build output
- Check สำหรับ build warnings
- Verify bundle size
- Verify ไม่มี build errors

### 3. Artifacts Generation

สร้าง artifacts

- Generate type declarations (`.d.ts`)
- Generate documentation (TypeDoc/typedoc)
- Create distribution package
- Verify `package.json` exports


## Rules

### 1. Use Existing Workflows

ใช้ workflows ที่มีอยู่แล้ว

- ทำตาม `/run-build` สำหรับ build
- ทำตาม `/follow-tsdown` สำหรับ bundling (ถ้าใช้ tsdown)
- ทำตาม `/follow-vite` สำหรับ bundling (ถ้าใช้ Vite)

### 2. Verify Output

ต้อง verify build output

- Check ว่า bundle size ไม่ใหญ่เกินไป
- Check ว่าไม่มี build errors
- Check ว่าไม่มี build warnings สำคัญ
- Verify ว่า type declarations ถูกต้อง

### 3. Optimize Build

ต้อง optimize build

- Enable minification
- Enable tree-shaking
- Enable code splitting (ถ้าจำเป็น)
- Enable compression (ถ้าจำเป็น)


## Expected Outcome

- Build configuration ตั้งค่าเสร็จ
- Build สำเร็จโดยไม่มี errors
- Build output ถูกต้อง
- Bundle size อยู่ใน limits
- Type declarations สร้างเสร็จ
- Documentation สร้างเสร็จ
- Distribution package พร้อม deploy
