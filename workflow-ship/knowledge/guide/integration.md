# Integration

## การเชื่อมต่อ Workflow-Ship กับ Workflows อื่นๆ

### Skills ที่เกี่ยวข้อง

Workflow-Ship เชื่อมต่อกับ skills และ workflows อื่นๆ ดังนี้:

### 1. Ship-Code

**Skill:** `/ship-code`

**คำอธิบาย:** Ship code ครบวงจรจาก planning ไปจนถึง build

**การใช้งาน:**
```bash
/ship-code
```

**Integration:**
- เป็น phase แรกของ workflow-ship
- ต้องทำก่อน run-verify เสมอ
- ไม่รวม testing

### 2. Run-Verify

**Skill:** `/run-verify`

**คำอธิบาย:** ทดสอบคุณภาพโค้ดด้วย typecheck, lint, และ test

**การใช้งาน:**
```bash
/run-verify
```

**Integration:**
- เป็น phase ที่สองของ workflow-ship
- ต้องทำหลังจาก ship-code เสร็จ
- ใช้ `/loop-until-complete` เพื่อวนซ้ำจนผ่าน

### 3. Run-Dev

**Skill:** `/run-dev`

**คำอธิบาย:** รัน development server และตรวจสอบการทำงาน

**การใช้งาน:**
```bash
/run-dev
```

**Integration:**
- เป็น phase สุดท้ายของ workflow-ship
- ต้องทำหลังจาก verify เสร็จ
- ใช้ `/loop-until-complete` เพื่อวนซ้ำจนผ่าน

### 4. Loop Until Complete

**Skill:** `/loop-until-complete`

**คำอธิบาย:** วนซ้ำจนกว่าจะผ่าน

**การใช้งาน:**
```bash
/loop-until-complete
```

**Integration:**
- ใช้กับ run-verify และ run-dev
- วนซ้ำจนกว่าจะผ่าน
- แก้ไข errors อัตโนมัติ

### 5. Resolve Errors

**Skill:** `/resolve-errors`

**คำอธิบาย:** แก้ไข errors อย่างเป็นระบบ

**การใช้งาน:**
```bash
/resolve-errors
```

**Integration:**
- ใช้เมื่อพบ error
- วิเคราะห์ root cause
- แก้ไขและทดสอบซ้ำ

### Integration Flow

```text
Start
  ↓
[/ship-code]
  ↓ (Planning → Build)
[/loop-until-complete]
  ↓
  [/run-verify]
  ↓ (Typecheck → Lint → Test)
  ↓ (เมื่อ error → [/resolve-errors])
  ↓ (วนซ้ำจนผ่าน)
[/loop-until-complete]
  ↓
  [/run-dev]
  ↓ (Start Dev Server)
  ↓ (เมื่อ error → [/resolve-errors])
  ↓ (วนซ้ำจนผ่าน)
End
```

### Custom Integration

สามารถสร้าง custom workflows ที่ extend จาก workflow-ship:

#### ตัวอย่าง 1: เพิ่ม Pre-Ship Steps

```markdown
---
description: Custom workflow with pre-ship steps
---

## Execute

1. ทำ `/run-clean` - Clean build artifacts
2. ทำ `/ship-code` - Ship code
3. ทำ `/run-verify` - Verify
4. ทำ `/run-dev` - Run dev
```

#### ตัวอย่าง 2: เพิ่ม Post-Dev Steps

```markdown
---
description: Custom workflow with post-dev steps
---

## Execute

1. ทำ `/ship-code` - Ship code
2. ทำ `/run-verify` - Verify
3. ทำ `/run-dev` - Run dev
4. ทำ `/run-e2e` - Run E2E tests
```

#### ตัวอย่าง 3: เพิ่ม Deployment

```markdown
---
description: Custom workflow with deployment
---

## Execute

1. ทำ `/ship-code` - Ship code
2. ทำ `/run-verify` - Verify
3. ทำ `/run-dev` - Run dev
4. ทำ `/run-deploy` - Deploy
```

### Integration with Frameworks

#### Next.js

```bash
/ship-code  # Planning → Build
/run-verify  # Typecheck → Lint → Test
/run-dev  # Next dev server
```

#### Nuxt

```bash
/ship-code  # Planning → Build
/run-verify  # Typecheck → Lint → Test
/run-dev  # Nuxt dev server
```

#### Vite

```bash
/ship-code  # Planning → Build
/run-verify  # Typecheck → Lint → Test
/run-dev  # Vite dev server
```

#### Tauri

```bash
/ship-code  # Planning → Build
/run-verify  # Typecheck → Lint → Test
/run-dev  # Tauri dev
```

### Integration with Tools

#### Biome

```bash
/ship-code
/run-verify  # ใช้ Biome สำหรับ linting
/run-dev
```

#### Vitest

```bash
/ship-code
/run-verify  # ใช้ Vitest สำหรับ testing
/run-dev
```

#### Playwright

```bash
/ship-code
/run-verify  # ใช้ Playwright สำหรับ E2E tests
/run-dev
```

### Best Practices

1. **ทำตามลำดับ:** Ship-code → Verify → Dev
2. **ใช้ loop-until-complete:** สำหรับ verify และ dev
3. **ใช้ resolve-errors:** เมื่อพบ error
4. **ห้ามข้าม steps:** ทำตามลำดับที่กำหนด
5. **Custom workflows:** สามารถ extend ได้ตามต้องการ

### Next Steps

- อ่าน [Architecture](architecture.md) สำหรับสถาปัตยกรรม
- อ่าน [Best Practices](best-practices.md) สำหรับแนวทางปฏิบัติที่ดีที่สุด
- อ่าน [Configuration](configuration.md) สำหรับการตั้งค่า
