# Commands Standards

## มาตรฐานการสร้าง Commands สำหรับ Skills

### เทคโนโลยีที่ใช้

**ต้องใช้เฉพาะ:**
- ✅ **TypeScript (.ts)** - ภาษาหลักสำหรับ command files
- ✅ **CAC CLI** - Framework สำหรับสร้าง command-line interface

### ห้ามใช้
- ❌ JavaScript (.js)
- ❌ อื่นๆ ที่ไม่ใช่ TypeScript + CAC

### โครงสร้างไฟล์ Commands

```
commands/
├── build.ts              # Command สำหรับ build
├── dev.ts                 # Command สำหรับ development
├── test.ts                # Command สำหรับ testing
└── index.ts               # Main entry point
```

### มาตรฐานการเขียน

#### 1. โครงสร้างไฟล์ TypeScript

```typescript
#!/usr/bin/env node

import { cac } from 'cac'

const cli = cac('skill-name')

// Command definitions
cli
  .command('build', 'Build the skill')
  .option('--output <dir>', 'Output directory')
  .action((options) => {
    // Build logic
  })

cli.help()
cli.parse()
```

#### 2. การตั้งชื่อไฟล์
- ใช้ kebab-case: `build-skills.ts`
- มีคำอธิบายที่ชัดเจน
- สั้นกระชับ

#### 3. การจัดการ Dependencies
- ต้องมี `cac` ใน package.json
- ต้องมี `typescript` ใน devDependencies
- ใช้ `shebang` `#!/usr/bin/env node`

### การติดตั้งและใช้งาน

#### Installation
```bash
npm install cac
npm install -D typescript @types/node
```

#### Usage
```bash
chmod +x commands/build.ts
./commands/build.ts --output dist/
```

### Best Practices

1. **Type Safety** - ใช้ TypeScript เต็มรูปแบบ
2. **Error Handling** - มีการจัดการ error ที่ดี
3. **Help Text** - มีคำอธิบายสำหรับทุก command
4. **Options** - กำหนด options ที่จำเป็น
5. **Validation** - ตรวจสอบ input parameters

### การเชื่อมโยงกับ Skills

Commands คือส่วนขยายของ skills ที่ให้ผู้ใช้สามารถ execute ผ่าน command line:

- `@skill-name` → สำหรับการใช้ใน Windsurf
- `commands/*.ts` → สำหรับการใช้ใน CLI

### ตัวอย่าง Command Files

ดูตัวอย่างเพิ่มเติมใน:
- `commands/` folder
- `4-examples/` สำหรับ command examples
