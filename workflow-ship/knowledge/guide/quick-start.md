# Quick Start

## เริ่มต้นใช้งาน Workflow-Ship

### ข้อกำหนดเบื้องต้น

- มี project ที่ต้องการ ship code
- มี build system ที่ตั้งค่าไว้
- มี test suite ที่ตั้งค่าไว้
- มี development server ที่ตั้งค่าไว้

### การใช้งานพื้นฐาน

#### Step 1: Ship Code

```bash
/ship-code
```

นี่จะทำ:
- Planning และ analysis
- เขียน code ตาม plan
- Build และ compilation

#### Step 2: Run Verify

```bash
/run-verify
```

นี่จะทำ:
- Typecheck
- Lint
- Test
- วนซ้ำจนกว่าจะผ่าน

#### Step 3: Run Dev

```bash
/run-dev
```

นี่จะทำ:
- เริ่ม development server
- ตรวจสอบการทำงาน
- วนซ้ำจนกว่าจะผ่าน

### การใช้งานแบบครบวงจร

ใช้ `/ship-run` เพื่อทำทั้ง 3 phases อัตโนมัติ:

```bash
/ship-run
```

นี่จะทำ:
1. Ship code (planning → build)
2. Run verify (typecheck → lint → test)
3. Run dev (development server)

### การจัดการ Errors

เมื่อพบ error:

1. **ตรวจสอบ error type**
   - Type errors
   - Lint errors
   - Test failures
   - Runtime errors

2. **ใช้ `/resolve-errors`**
   - วิเคราะห์ root cause
   - แก้ไข minimal changes
   - ทดสอบซ้ำ

3. **Workflow จะวนซ้ำอัตโนมัติ**
   - ไม่ต้องรันคำสั่งซ้ำ
   - แก้ไขและทดสอบซ้ำอัตโนมัติ

### ตัวอย่างการใช้งาน

#### ตัวอย่าง 1: Ship Code ใหม่

```bash
# 1. Ship code
/ship-code

# 2. Verify
/run-verify

# 3. Run dev
/run-dev
```

#### ตัวอย่าง 2: ใช้ /ship-run แบบครบวงจร

```bash
# ทำทั้งหมดในคำสั่งเดียว
/ship-run
```

#### ตัวอย่าง 3: แก้ไข Errors

เมื่อพบ error ระหว่าง `/run-verify`:

1. Workflow จะหยุดและแสดง error
2. ใช้ `/resolve-errors` เพื่อแก้ไข
3. Workflow จะวนซ้ำอัตโนมัติ
4. ทำซ้ำจนกว่าจะผ่าน

### Tips

- **ใช้ `/ship-run`** สำหรับการ ship ครบวงจร
- **ใช้ `/ship-code`** เมื่อต้องการเฉพาะ planning และ build
- **ใช้ `/run-verify`** เมื่อต้องการเฉพาะ testing
- **ใช้ `/run-dev`** เมื่อต้องการเฉพาะ development server
- **ใช้ `/resolve-errors`** เมื่อพบ error
- **ใช้ `/loop-until-complete`** เมื่อต้องการวนซ้ำจนผ่าน

### Next Steps

- อ่าน [Best Practices](best-practices.md) สำหรับแนวทางปฏิบัติที่ดีที่สุด
- อ่าน [Configuration](configuration.md) สำหรับการตั้งค่า
- อ่าน [Integration](integration.md) สำหรับการเชื่อมต่อกับ workflows อื่นๆ
