# How It Works

## Workflow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Input     │ --> │  Processing │ --> │   Output    │
│  (Command)  │     │   (Agent)   │     │  (Result)   │
└─────────────┘     └─────────────┘     └─────────────┘
```

### Step 1: User Input

ผู้ใช้ส่งคำสั่งผ่าน terminal:

```bash
codex
# หรือ
codex "แก้ไข bug ในไฟล์ auth.ts"
```

### Step 2: Task Planning

Codex วิเคราะห์คำสั่งและวางแผนการทำงาน:

1. **Intent Detection** - ทำความเข้าใจว่าผู้ใช้ต้องการอะไร
2. **Scope Analysis** - ระบุไฟล์และโค้ดที่เกี่ยวข้อง
3. **Step Planning** - วางแผนขั้นตอนการทำงาน

### Step 3: Execution

Agent ทำงานตามแผน:

```
┌─────────────────────────────────────────────────┐
│              Execution Flow                     │
├─────────────────────────────────────────────────┤
│  1. Read Files                                  │
│  2. Analyze Context                             │
│  3. Generate Response                           │
│  4. Execute Changes                             │
│  5. Run Verification (if needed)                │
└─────────────────────────────────────────────────┘
```

### Step 4: Output

แสดงผลลัพธ์กลับไปยังผู้ใช้ พร้อมสรุปสิ่งที่ทำ

## Interactive Mode

เมื่อรัน `codex` โดยไม่มี argument จะเข้าสู่ interactive mode:

```bash
codex
```

ในโหมดนี้:
- พิมพ์คำสั่งแล้วกด Enter
- ใช้ `Ctrl+C` หรือ `exit` เพื่อออก
- Codex จะจำ context ของการสนทนา

## File Operations

Codex สามารถจัดการไฟล์ได้หลายแบบ:

| Operation | Description |
|-----------|-------------|
| **Read** | อ่านเนื้อหาไฟล์ |
| **Write** | สร้างหรือเขียนไฟล์ใหม่ |
| **Edit** | แก้ไขโค้ดที่มีอยู่ |
| **Delete** | ลบไฟล์ |
| **Execute** | รันสคริปต์หรือคำสั่ง terminal |

## Sandbox Mode

Codex มี sandbox mode สำหรับทดสอบโค้ดอันตราย:

```
┌─────────────────────────────────────┐
│          Sandbox Mode               │
├─────────────────────────────────────┤
│  - Safe command execution           │
│  - Temporary file operations        │
│  - No permanent changes             │
└─────────────────────────────────────┘
```