# File Operations AGENTs

## รายการ Agents ที่เกี่ยวข้อง

### 🤖 File Operation Agents

| Agent | คำอธิบาย | เครื่องมือที่ใช้ | สถานการณ์ที่ใช้ |
|-------|-----------|----------------|----------------|
| **file-renamer** | จัดการการเปลี่ยนชื่อไฟล์และโฟลเดอร์ | PowerShell, Bun Shell | การเปลี่ยนชื่อไฟล์เดี่ยวหรือแบบ batch |
| **file-copier** | คัดลอกไฟล์และโฟลเดอร์ | PowerShell, Robocopy | การสำรองข้อมูล การคัดลอกไฟล์จำนวนมาก |
| **file-mover** | ย้ายไฟล์และโฟลเดอร์ | PowerShell, Bun Shell | การจัดระเบียบไฟล์ การ restructure |
| **file-deleter** | ลบไฟล์และโฟลเดอร์อย่างปลอดภัย | PowerShell, Recycle Bin | การ cleanup ไฟล์เก่า การลบ temp files |
| **batch-operator** | ดำเนินการกับไฟล์หลายไฟล์พร้อมกัน | PowerShell, Node.js | การ batch rename, copy, move |
| **pattern-matcher** | ใช้ patterns ในการจัดการไฟล์ | Regex, PowerShell | การค้นหาและจัดการไฟล์ตาม pattern |

### 🔧 Utility Agents

| Agent | คำอธิบาย | เครื่องมือที่ใช้ | สถานการณ์ที่ใช้ |
|-------|-----------|----------------|----------------|
| **permission-checker** | ตรวจสอบสิทธิ์การเข้าถึงไฟล์ | PowerShell ACL | การตรวจสอบก่อนดำเนินการ |
| **backup-creator** | สร้าง backup ก่อนดำเนินการ | PowerShell, 7-Zip | การสำรองข้อมูลก่อนแก้ไข |
| **log-keeper** | บันทึก log การดำเนินการ | PowerShell, JSON | การตรวจสอบภายหลัง |
| **error-handler** | จัดการ errors และ exceptions | PowerShell Try-Catch | การจัดการปัญหาขณะดำเนินการ |

### 🔄 Integration Agents

| Agent | คำอธิบาย | เครื่องมือที่ใช้ | สถานการณ์ที่ใช้ |
|-------|-----------|----------------|----------------|
| **git-file-manager** | จัดการไฟล์ใน Git repository | Git, PowerShell | การจัดการไฟล์ในโปรเจกต์ |
| **build-file-organizer** | จัดการไฟล์ build | MSBuild, PowerShell | การ cleanup build artifacts |
| **temp-file-cleaner** | ลบไฟล์ชั่วคราว | PowerShell, Task Scheduler | การ cleanup ระบบอัตโนมัติ |

## การเลือกใช้ Agent

### ถามตัวเองก่อนเลือก

1. **ประเภทการดำเนินการ:** rename, copy, move, delete หรือ batch?
2. **จำนวนไฟล์:** ไฟล์เดี่ยวหรือหลายไฟล์?
3. **ความซับซ้อน:** การดำเนินการพื้นฐานหรือต้องการ patterns?
4. **ความปลอดภัย:** ต้องการ backup หรือ permission check หรือไม่?
5. **ระบบที่ใช้:** Windows, cross-platform หรือเฉพาะเจาะจง?

### ตัวอย่างการเลือก

- **ต้องการเปลี่ยนชื่อไฟล์เดี่ยว:** → `file-renamer`
- **ต้องการคัดลอกไฟล์จำนวนมาก:** → `file-copier` + `backup-creator`
- **ต้องการ cleanup temp files:** → `file-deleter` + `temp-file-cleaner`
- **ต้องการ batch rename ด้วย pattern:** → `batch-operator` + `pattern-matcher`
- **ต้องการจัดการไฟล์ใน Git:** → `git-file-manager`

## การทำงานร่วมกัน (Agent Composition)

### 🔗 ชุดคำสั่งที่ใช้ร่วมกันบ่อย

1. **Safe Rename:**

   ```text
   file-renamer + permission-checker + backup-creator + log-keeper
   ```

2. **Batch Copy with Backup:**

   ```text
   file-copier + batch-operator + backup-creator + error-handler
   ```

3. **Git File Management:**

   ```text
   git-file-manager + file-mover + permission-checker + log-keeper
   ```

4. **System Cleanup:**

   ```text
   file-deleter + temp-file-cleaner + permission-checker + log-keeper
   ```

## การตั้งค่า Agent

### การกำหนดค่าทั่วไป

```json
{
  "agent": "file-renamer",
  "config": {
    "dryRun": true,
    "createBackup": true,
    "logLevel": "info",
    "errorHandling": "stop"
  }
}
```

### การกำหนดค่าสำหรับ batch operations

```json
{
  "agent": "batch-operator",
  "config": {
    "batchSize": 100,
    "parallel": false,
    "progress": true,
    "continueOnError": true
  }
}
```

## Best Practices สำหรับ Agent Usage

- **เริ่มต้นด้วย dry-run** เสมอ
- **ใช้ backup-creator** สำหรับการดำเนินการสำคัญ
- **ตรวจสอบ permissions** ก่อนดำเนินการ
- **บันทึก logs** สำหรับการตรวจสอบภายหลัง
- **จัดการ errors** อย่างเหมาะสม
- **ทดสอบกับไฟล์จำลอง** ก่อนใช้จริง
