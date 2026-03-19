# Basic Rule

## Purpose

ตั้งกฎพื้นฐานสำหรับการสร้าง content ที่สม่ำเสมอ

## Requirements

ทุก content ใน skill ต้องปฏิบัติตามกฎต่อไปนี้:

1. **Use clear headings** - ใช้หัวข้อที่อธิบาย content ชัดเจน
2. **Provide examples** - มีตัวอย่างการใช้งานจริงเสมอ
3. **Be specific** - ระบุรายละเอียดที่จำเป็น
4. **Test validity** - ตรวจสอบว่าใช้งานได้จริง

## Examples

### ✅ Correct

```markdown
# Clear Pattern Name

## Purpose

อธิบายว่า pattern นี้แก้ปัญหาอะไร

## When to Use

สถานการณ์ที่ควรใช้ pattern นี้

## Implementation

วิธีการ implement แบบ step-by-step

## Example

ตัวอย่างการใช้งานจริง
```

### ❌ Incorrect

```markdown
# pattern

นี่คือ pattern ใช้ตอนไหนก็ได้

## how to use

ทำตามนี้

copy โค้ดนี้ไปใช้
```

## Validation

ใช้ checklist ต่อไปนี้เพื่อตรวจสอบ:

- [ ] มีหัวข้อชัดเจน (H1, H2, H3)
- [ ] มี section "Purpose" ที่อธิบายวัตถุประสงค์
- [ ] มี section "When to Use" ที่ระบุเงื่อนไข
- [ ] มี section "Implementation" ที่ให้ขั้นตอน
- [ ] มี section "Example" ที่แสดงตัวอย่าง
- [ ] ใช้ภาษาที่เป็นทางการและสม่ำเสมอ
- [ ] ไม่มี typos หรือ grammar errors

## Common Violations

### 1. Missing Sections

**Problem:** ไม่มี sections ที่จำเป็น

**Solution:** เพิ่ม sections ตาม template

```markdown
# Pattern Name

## Purpose
## When to Use  
## Implementation
## Example
```

### 2. Vague Descriptions

**Problem:** อธิบายไม่ชัดเจน

**Solution:** ใช้ภาษาที่เจาะจง

❌ "ใช้ pattern นี้ตอนทำอะไรก็ได้"

✅ "ใช้ pattern นี้เมื่อต้องการสร้าง configuration file ใหม่"

### 3. No Examples

**Problem:** ไม่มีตัวอย่างการใช้งาน

**Solution:** เพิ่มตัวอย่างจริง

```markdown
## Example

```json
{
  "name": "example",
  "version": "1.0.0"
}
```

### 4. Inconsistent Formatting

**Problem:** ใช้รูปแบบไม่สม่ำเสมอ

**Solution:** ใช้ template เดียวกันทุกครั้ง

## Testing

### Manual Testing

1. **Read through** - อ่านทั้งหมดว่าเข้าใจไหม
2. **Try it** - ลองทำตามขั้นตอน
3. **Check results** - ได้ผลลัพธ์ตามที่คาดหวังไหม
4. **Ask others** - ให้คนอื่นลองแล้วขอ feedback

### Automated Testing

```bash
#!/bin/bash
# ตรวจสอบว่ามี sections ที่จำเป็น

file="$1"

# ตรวจสอบ sections
grep -q "^## Purpose" "$file" || echo "Missing Purpose section"
grep -q "^## When to Use" "$file" || echo "Missing When to Use section"  
grep -q "^## Implementation" "$file" || echo "Missing Implementation section"
grep -q "^## Example" "$file" || echo "Missing Example section"

# ตรวจสอบว่ามี code examples
grep -q '```' "$file" || echo "Missing code examples"

echo "Validation complete."
```

## Enforcement

### During Review

เมื่อ review content ให้ตรวจสอบ:

1. **Structure** - มี sections ครบถ้วน
2. **Clarity** - อธิบายเข้าใจง่าย
3. **Completeness** - มีตัวอย่างและขั้นตอน
4. **Consistency** - ใช้รูปแบบเดียวกัน

### During Updates

เมื่อแก้ไข content ให้:

1. **Preserve structure** - ไม่เปลี่ยน sections หลัก
2. **Update examples** - ให้ตรงกับ content ใหม่
3. **Test changes** - ตรวจสอบว่ายังใช้ได้
4. **Maintain consistency** - ใช้ภาษาและรูปแบบเดิม

## Benefits

การปฏิบัติตามกฎนี้ช่วยให้:

- **Consistent** - ทุก content มีรูปแบบเดียวกัน
- **Usable** - ผู้ใช้สามารถนำไปใช้ได้จริง
- **Maintainable** - ง่ายต่อการอัปเดทและแก้ไข
- **Professional** - ดูน่าเชื่อถือและเป็นมาตรฐาน
