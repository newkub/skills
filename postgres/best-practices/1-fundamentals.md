# PostgreSQL Fundamentals Best Practices

## 1. Database Design

- **เลือก data types** ที่เหมาะสมกับข้อมูล
- ใช้ `SERIAL` หรือ `BIGSERIAL` สำหรับ primary keys
- หลีกเลี่ยง `VARCHAR` โดยไม่ระบุความยาว

## 2. Naming Conventions

- **ใช้ snake_case** สำหรับ table และ column names
- ใช้ชื่อที่สื่อความหมายและสั้น
- หลีกเลี่ยง reserved keywords

## 3. Primary Keys

- **ใช้ integer types** สำหรับ primary keys
- พิจารณา `UUID` สำหรับ distributed systems
- หลีกเลี่ยง composite primary keys ถ้าไม่จำเป็น

## 4. Foreign Keys

- **สร้าง foreign key constraints** เพื่อรักษา integrity
- ใช้ `ON DELETE CASCADE` อย่างระมัดระวัง
- พิจารณา `ON UPDATE CASCADE` สำหรับ mutable keys

## 5. Index Strategy

- **สร้าง indexes** บน columns ที่ใช้ค้นหาบ่อย
- หลีกเลี่ยง over-indexing
- ใช้ `EXPLAIN` เพื่อตรวจสอบ query plans

## 6. Data Integrity

- **ใช้ constraints** แทน business logic ใน application
- ใช้ `CHECK` constraints สำหรับ validation
- ใช้ `NOT NULL` อย่างสม่ำเสมอ

## 7. Transaction Management

- **ใช้ transactions** สำหรับ operations หลายขั้นตอน
- ทำให้ transactions สั้นที่สุด
- จัดการ errors และ rollbacks อย่างเหมาะสม

## 8. Security Basics

- **ใช้ parameterized queries** เพื่อป้องกัน SQL injection
- จำกัด user permissions ตามความจำเป็น
- ใช้ connection pooling สำหรับ applications
