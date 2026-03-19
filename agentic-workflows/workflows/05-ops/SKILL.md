# File Operations

## ภาพรวม

File Operations skill สำหรับการจัดการไฟล์และโฟลเดอร์ในระบบปฏิบัติการ Windows ด้วย PowerShell และเครื่องมือต่างๆ รองรับการดำเนินการพื้นฐานและขั้นสูง

## ความสามารถหลัก

- **การเปลี่ยนชื่อไฟล์/โฟลเดอร์** (Rename)
- **การคัดลอกไฟล์/โฟลเดอร์** (Copy)
- **การย้ายไฟล์/โฟลเดอร์** (Move)
- **การลบไฟล์/โฟลเดอร์** (Delete)
- **การดำเนินการแบบ batch** (Batch Operations)
- **การใช้ patterns ในการตั้งชื่อ** (Pattern-based Operations)

## โครงสร้าง Directory

```text
flie-operation/
├── SKILL.md                 # คำอธิบายหลักของ skill (นี้)
├── AGENTs.md               # รายการ agents ที่เกี่ยวข้อง
├── guide/                  # คู่มือการใช้งาน
│   ├── rename.md          # การเปลี่ยนชื่อไฟล์/โฟลเดอร์
│   ├── copy.md            # การคัดลอกไฟล์/โฟลเดอร์
│   ├── move.md            # การย้ายไฟล์/โฟลเดอร์
│   ├── delete.md          # การลบไฟล์/โฟลเดอร์
│   ├── batch.md           # การดำเนินการแบบ batch
│   └── patterns.md        # รูปแบบการตั้งชื่อ
├── patterns/              # patterns สำหรับ file operations
│   ├── file-rename.md     # pattern การเปลี่ยนชื่อ
│   ├── batch-rename.md    # pattern การเปลี่ยนชื่อแบบ batch
│   └── safe-operations.md # pattern การทำงานอย่างปลอดภัย
└── examples/              # ตัวอย่างการใช้งาน
    ├── basic-usage.md
    └── advanced-scenarios.md
```

## หมวดหมู่ไฟล์

### 📚 Guide Files

- **rename.md** - คู่มือการเปลี่ยนชื่อไฟล์และโฟลเดอร์
- **copy.md** - คู่มือการคัดลอกไฟล์และโฟลเดอร์
- **move.md** - คู่มือการย้ายไฟล์และโฟลเดอร์
- **delete.md** - คู่มือการลบไฟล์และโฟลเดอร์อย่างปลอดภัย
- **batch.md** - คู่มือการดำเนินการกับไฟล์หลายไฟล์พร้อมกัน
- **patterns.md** - คู่มือรูปแบบการตั้งชื่อและการใช้ patterns

### 🔧 Pattern Files

- **file-rename.md** - patterns สำหรับการเปลี่ยนชื่อไฟล์
- **batch-rename.md** - patterns สำหรับการเปลี่ยนชื่อแบบ batch
- **safe-operations.md** - patterns สำหรับการทำงานอย่างปลอดภัย

### 📖 Example Files

- **basic-usage.md** - ตัวอย่างการใช้งานพื้นฐาน
- **advanced-scenarios.md** - ตัวอย่างการใช้งานขั้นสูง

## เครื่องมือที่ใช้

- **PowerShell** - สำหรับการดำเนินการใน Windows
- **Bun Shell** - สำหรับ cross-platform operations
- **Node.js** - สำหรับ automation scripts
- **Git** - สำหรับ version control operations

## Best Practices

- **สำรองข้อมูล** ก่อนการดำเนินการที่สำคัญ
- **ตรวจสอบ permissions** ก่อนดำเนินการ
- **ใช้ dry-run** สำหรับการทดสอบคำสั่ง
- **จัดการ errors** อย่างเหมาะสม
- **บันทึก log** สำหรับการตรวจสอบภายหลัง

## Integration

ทำงานร่วมกับ:

- **Git operations** - การจัดการไฟล์ใน repository
- **Build tools** - การจัดการไฟล์ build
- **File watchers** - การตรวจจับการเปลี่ยนแปลงไฟล์
- **CI/CD pipelines** - การดำเนินการอัตโนมัติ

## เมื่อไหร่ควรใช้

- ✅ การจัดระเบียบไฟล์ในโปรเจกต์
- ✅ การ batch operations กับไฟล์จำนวนมาก
- ✅ การ automation สำหรับ file management
- ✅ การ migration ข้อมูล
- ✅ การ cleanup ไฟล์เก่า

## เมื่อไหร่ไม่ควรใช้

- ❌ การดำเนินการกับไฟล์ระบบที่สำคัญ
- ❌ การดำเนินการโดยไม่มี backup
- ❌ การดำเนินการกับไฟล์ที่มีการ lock อยู่
- ❌ การดำเนินการใน production โดยไม่ทดสอบ
