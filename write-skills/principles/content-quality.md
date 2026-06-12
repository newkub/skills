# Content Quality

## คุณภาพเนื้อหา

เนื้อหาต้องมีคุณภาพและถูกต้องตามมาตรฐาน

## การใช้ภาษา

- `key-concepts/` - เขียนเป็นภาษาไทย
- `principles/` - เขียนเป็นภาษาไทย
- `workflows/` - เขียนเป็นภาษาไทย
- `guide/` - เขียนเป็นภาษาอังกฤษ
- `references/` - เขียนเป็นภาษาอังกฤษ

## การจัดรูปแบบ

- ปรับปรุง spacing, indentation, headings ให้สม่ำเสมอ
- ปรับปรุง headings เป็น Title Case (EN) และรายการเป็น TH
- ใช้ตารางสรุปข้อมูลที่เปรียบเทียบได้
- ใช้ `codeblock` สำหรับ code examples, configuration, หรือ commands
- ใช้ `ansi markdown diagrams` สำหรับ flow, architecture, หรือ how-it-works
- ใช้ backticks สำหรับ technical terms, file names, commands, หรือ code references

## ขนาดไฟล์

- แต่ละไฟล์ต้องไม่เกิน 200 บรรทัด
- ถ้าเกินให้ refactor แยกไฟล์
- แต่ละ concept หรือ principle อยู่ในไฟล์แยกกัน

## การติดตั้ง

- เวลาเขียนเกี่ยวกับการติดตั้ง ให้ใช้ `bun add` หรือ `bun add -D` แทน `npm install` เสมอ
