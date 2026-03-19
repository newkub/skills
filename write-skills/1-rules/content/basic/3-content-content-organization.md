# Content Organization

## การจัดระเบียบเนื้อหาใน Skill Files

### โครงสร้างเนื้อหามาตรฐาน

```markdown
# Skill Name

## Purpose
[คำอธิบายวัตถุประสงค์ - ทำไมต้องมี skill นี้]

## Scope
[ขอบเขตการใช้งาน - ใช้เมื่อไหร่ ไม่ใช้เมื่อไหร่]

## Quick Reference
[ตารางสรุปข้อมูลสำคัญ]

## โครงสร้าง Directory
[โครงสร้างไฟล์และโฟลเดอร์]

## หมวดหมู่ไฟล์
[คำอธิบายแต่ละ directory และไฟล์]

## Implementation Steps
[ขั้นตอนการทำงาน]

## Expected Outcome
[ผลลัพธ์ที่คาดหวาย]

## Integration
[การเชื่อมโยงกับ skills/workflows อื่น]

## Troubleshooting
[ปัญหาที่พบบ่อยและวิธีแก้ไข]
```

### หลักการเขียน

1. **Thai Language** - ใช้ภาษาไทยสำหรับคำอธิบายหลัก
2. **Technical Terms** - ใช้คำศัพท์ภาษาอังกฤษสำหรับเรื่อง technical
3. **Active Voice** - ใช้ประโยค active: "สร้างไฟล์" ไม่ใช่ "ไฟล์ถูกสร้าง"
4. **Imperative Mood** - ใช้คำสั่ง: "ตรวจสอบ", "สร้าง", "อัพเดท"

### Section Guidelines

#### Purpose Section
- อธิบาย **ทำไม**ต้องมี skill นี้
- เน้นปัญหาที่ skill แก้ไข
- ใช้ bullet points สำหรับประเด็นหลัก

#### Scope Section
- ระบุ **เมื่อไหร่**ควรใช้ skill นี้
- ระบุ **เมื่อไหร่**ไม่ควรใช้
- ใช้รูปแบบ: "ใช้สำหรับ:", "ไม่ใช้สำหรับ:"

#### Quick Reference
- ใช้ตารางสำหรับข้อมูลสรุป
- รวม directories, files, patterns ที่สำคัญ
- ทำให้อ่านง่ายและหาข้อมูลได้เร็ว

### Content Quality Standards

| มาตรฐาน | คำอธิบาย | ตัวอย่าง |
|-----------|-------------|-------------|
| **Clarity** | เข้าใจง่าย ไม่กำกวม | "สร้างไฟล์ SKILL.md" |
| **Consistency** | ใช้คำศัพท์เดียวกัน | ใช้ "directory" ทั้งไฟล์ |
| **Completeness** | ครอบคลุมทุกสิ่งที่จำเป็น | มีทุก sections ที่กำหนด |
| **Actionability** | สามารถนำไปปฏิบัติได้ | มีขั้นตอนที่ชัดเจน |

### Formatting Best Practices

1. **Headings** - ใช้ `##` สำหรับ main sections
2. **Bullet Points** - ใช้ `-` สำหรับ lists
3. **Tables** - ใช้ markdown tables สำหรับข้อมูลที่เปรียบเทียบได้
4. **Code Blocks** - ใช้ ```language สำหรับ code examples
5. **Links** - ใช้ `@skill-name` และ `/workflow-name` สำหรับ references
