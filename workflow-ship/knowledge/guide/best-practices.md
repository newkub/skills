# Best Practices

## แนวทางปฏิบัติที่ดีที่สุดสำหรับ Workflow-Ship

### 1. Execution Order

ทำตามลำดับขั้นตอนอย่างเคร่งครัด:

- **Ship-code** ต้องทำก่อนเสมอ
- **Run-verify** ต้องทำหลังจาก ship-code เสร็จ
- **Run-dev** ต้องทำหลังจาก verify เสร็จ
- ห้ามข้ามขั้นตอนใดๆ
- ทำตามขั้นตอนที่กำหนดจนครบ

### 2. Mandatory Ship-Code

ห้ามข้าม ship-code โดยเด็ดขาด:

- ต้องทำ `/ship-code` ทุกครั้ง
- ห้ามข้าม step นี้ไม่ว่ากรณีใดๆ
- ห้ามใช้คำสั่งอื่นแทน
- ต้องผ่านทุก steps ใน `/ship-code` ก่อนดำเนินการต่อ

### 3. Error Resolution

แก้ไข errors อย่างเป็นระบบ:

- ใช้ `/resolve-errors` เมื่อพบ error
- วิเคราะห์ root cause ก่อนแก้ไข
- ทำ minimal changes เท่านั้ม
- หลีกเลี่ยง downstream workarounds
- ใช้ single-line changes เมื่อเป็นไปได้

### 4. Quality Assurance

ทดสอบคุณภาพอย่างครบถ้วน:

- Typecheck ทุกครั้ง
- Lint ทุกครั้ง
- Test ทุกครั้ง
- ตรวจสอบ coverage
- ใช้ verification tools ที่มีอยู่

### 5. Loop Until Complete

ใช้ loop อย่างมีประสิทธิภาพ:

- ใช้ `/loop-until-complete` สำหรับ verify และ dev
- วนซ้ำจนกว่าจะผ่าน
- แก้ไข errors อัตโนมัติ
- ทำงานอัตโนมัติโดยไม่หยุดถาม

### 6. Clear Separation

แยก responsibilities ชัดเจน:

- **Ship-code**: Planning → Build (ไม่มี testing)
- **Run-verify**: Testing เท่านั้น (typecheck, lint, test)
- **Run-dev**: Development server
- ห้ามผสม responsibilities

### 7. Automation

ทำงานอัตโนมัติ:

- ไม่หยุดถามผู้ใช้
- แก้ไข errors อัตโนมัติ
- วน loop จนกว่าจะผ่าน
- ทำงานต่อเนื่องโดยไม่ขัดจังหวะ

### 8. Testing

ทดสอบอย่างเป็นระบบ:

- เขียน tests ครอบคลุม
- ใช้ Playwright สำหรับ E2E
- ใช้ unit tests สำหรับ unit testing
- ตรวจสอบ coverage
- ใช้ verification tools

### 9. Documentation

เขียน documentation ชัดเจน:

- อธิบาย changes
- อธิบาย error fixes
- อธิบาย testing
- อธิบาย configuration

### 10. Monitoring

ตรวจสอบอย่างต่อเนื่อง:

- Monitor build status
- Monitor test results
- Monitor dev server health
- Monitor error logs

### 11. Minimal Changes

แก้ไขแบบ minimal:

- แก้ไข root cause เท่านั้น
- ไม่ over-engineer
- ใช้ single-line changes เมื่อเป็นไปได้
- หลีกเลี่ยง downstream workarounds

### 12. Verification

ใช้ verification tools:

- Playwright สำหรับ E2E tests
- Unit tests สำหรับ unit testing
- Linting tools สำหรับ code quality
- Type checkers สำหรับ type safety

### 13. Code Quality

รักษาคุณภาพโค้ด:

- เขียน code ที่อ่านง่าย
- ใช้ naming conventions
- ใช้ consistent style
- ใช้ proper error handling

### 14. Performance

ปรับปรุงประสิทธิภาพ:

- Optimize build time
- Optimize test time
- Optimize dev server startup
- Monitor performance metrics

### 15. Security

รักษาความปลอดภัย:

- ตรวจสอบ vulnerabilities
- ใช้ secure dependencies
- ตรวจสอบ secrets
- ใช้ secure practices

## Common Mistakes

### 1. ข้าม Ship-Code

❌ **ผิด:**
```bash
# ข้าม ship-code ไปเลย
/run-verify
```

✅ **ถูก:**
```bash
# ทำ ship-code ก่อน
/ship-code
/run-verify
```

### 2. ผสม Responsibilities

❌ **ผิด:**
```bash
# ทำ testing ใน ship-code
/ship-code
# รวม testing และ dev
```

✅ **ถูก:**
```bash
# แยก responsibilities ชัดเจน
/ship-code  # Planning → Build
/run-verify  # Testing
/run-dev  # Dev Server
```

### 3. ไม่ใช้ Loop Until Complete

❌ **ผิด:**
```bash
# รันครั้งเดียว
/run-verify
```

✅ **ถูก:**
```bash
# วนซ้ำจนกว่าจะผ่าน
/loop-until-complete
/run-verify
```

### 4. Over-Engineering

❌ **ผิด:**
```bash
# แก้ไขหลายจุดเมื่อเจอ error
# ทำ downstream workarounds
```

✅ **ถูก:**
```bash
# แก้ไข root cause เท่านั้ม
# ใช้ minimal changes
```

## Checklist

ก่อน ship code:

- [ ] ทำ `/ship-code` ก่อนเสมอ
- [ ] ทำ `/run-verify` หลังจาก ship-code
- [ ] ทำ `/run-dev` หลังจาก verify
- [ ] ใช้ `/loop-until-complete` สำหรับ verify และ dev
- [ ] ใช้ `/resolve-errors` เมื่อพบ error
- [ ] ทำ minimal changes
- [ ] ใช้ verification tools
- [ ] ตรวจสอบ coverage
- [ ] Monitor build status
- [ ] Monitor test results
- [ ] Monitor dev server health
