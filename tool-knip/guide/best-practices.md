# Best Practices

แนวทางปฏิบัติที่ดีในการใช้ Knip

## การตั้งค่า Configuration

- **เริ่มต้นด้วย `--strict` ใน CI** - เพื่อให้แน่ใจว่า code สะอาด
- **กำหนด entry files ที่ถูกต้อง** - บอก Knip ว่า entry point ของ project อยู่ที่ไหน
- **ใช้ `.gitignore` patterns** - ช่วย ignore generated files ที่ไม่ต้องการตรวจสอบ

## การทำงานร่วมกับ CI/CD

| Practice | Description |
|----------|-------------|
| **Run ใน CI** | รัน `knip --strict` ใน CI pipeline |
| **Pre-commit hook** | ใช้ lint-staged หรือ husky รันก่อน commit |
| **Fail on issues** | ใช้ `--strict` เพื่อให้ exit code เป็น 1 ถ้ามี issues |
| **Report only** | ใช้ใน CI ก่อน แล้วค่อย fix ทีละ step |

## การหลีกเลี่ยง False Positives

```json
{
  "ignore": [
    "**/*.test.ts",
    "**/__tests__/**",
    "**/fixtures/**"
  ]
}
```

- **Ignore test files** - test files มักมี exports ที่ไม่ถูกใช้ใน production
- **Ignore fixtures** - fixture files มักไม่ถูก import จากที่อื่น
- **Ignore generated** - generated files ไม่ต้องการตรวจสอบ

## Best Practices อื่นๆ

| Practice | Description |
|----------|-------------|
| **Fix ทีละขั้น** | รัน `--fix-dry-run` ก่อน แล้วค่อยรัน `--fix` |
| **Add to pre-commit** | เพิ่มใน pre-commit hook เพื่อ prevent issues |
| **Document exceptions** | ใช้ comments ใน config เพื่ออธิบายว่าทำไม ignore |
| **Run หลัง dependency changes** | รันหลังเพิ่ม/ลบ dependencies เสมอ |

## การตรวจสอบเฉพาะส่วน

```bash
# เช็คเฉพาะ dependencies
knip --dependencies

# เช็คเฉพาะ files
knip --files

# เช็คเฉพาะ production
knip --production
```
