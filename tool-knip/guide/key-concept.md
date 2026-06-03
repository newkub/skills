# Key Concept

## What is Knip?

Knip เป็นเครื่องมือสำหรับหา unused files, dependencies และ exports ใน TypeScript/JavaScript projects

## Core Features

| Feature | Description |
|---------|-------------|
| **Unused Detection** | หาไฟล์, dependencies ที่ไม่ได้ใช้ |
| **TypeScript** | รองรับ TypeScript และ JavaScript |
| **Fast** | ใช้ language server protocol |
| **Configurable** | ปรับแต่งได้ตามต้องการ |
| **CI Integration** | รวมเข้ากับ CI/CD ได้ |

## Key Terms

| Term | Description |
|------|-------------|
| **Unused files** | ไฟล์ที่ไม่มี import |
| **Unused dependencies** | dependencies ที่ไม่ได้ใช้ |
| **Unused exports** | exports ที่ไม่มีใครใช้ |
| **Bad exports** | exports ที่มีปัญหา |

## When to Use

- เมื่อต้องการ cleanup project
- เมื่อต้องการลด bundle size
- เมื่อต้องการตรวจสอบ dependencies
- เมื่อทำ CI/CD quality checks

## Supported Languages

- TypeScript
- JavaScript
- JSX / TSX
- Vue
- Svelte