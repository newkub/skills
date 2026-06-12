ใช้สำหรับสร้างหรือแก้ไข Devin Skills ทุกประเภท

## Skill Types ที่รองรับ

- `guide-` - guides และ best practices
- `lang-` - programming languages
- `lib-` - libraries
- `framework-` - frameworks
- `runtime-` - runtime environments
- `cloud-` - cloud platforms และ services
- `create-` - สร้าง extensions สำหรับ platforms ต่างๆ
- `tool-` - development tools

## Folder Structure ที่ใช้งาน

ทุก skill ต้องมีโครงสร้างพื้นฐาน:
- `SKILL.md` - REQUIRED (index file)
- `guide/` - REQUIRED (เนื้อหาแนะนำ)
- `key-concepts/` - OPTIONAL (แนวคิดสำคัญ)
- `principles/` - OPTIONAL (หลักการ)
- `references/` - REQUIRED (เอกสารอ้างอิง)
- `workflows/` - REQUIRED (workflows สำหรับ automation)
- `templates/` - OPTIONAL (templates สำหรับเริ่มต้น)
- `scripts/` - OPTIONAL (scripts สำหรับ automation)
- `.devin/` - REQUIRED (rules และ configurations)

## ขอบเขตการใช้งาน

- สร้าง skill ใหม่ตามมาตรฐาน
- แก้ไข skill ที่มีอยู่ให้ตรงกับมาตรฐานใหม่
- อัปเดต skill ให้มี folder structure ที่ consistent
- เขียน content ตามมาตรฐาน quality
