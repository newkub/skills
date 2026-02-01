# Schema Design Best Practices Summary

## 1. Table Structure
- **ใช้ appropriate data types** ตามลักษณะข้อมูล
- จำกัด column count ไม่เกิน 50 columns per table
- ใช้ consistent naming conventions

## 2. Normalization Rules
- **First Normal Form**: แยก atomic values
- **Second Normal Form**: ลบ partial dependencies
- **Third Normal Form**: ลบ transitive dependencies

## 3. Primary Key Guidelines
- **ใช้ single column primary keys** เมื่อเป็นไปได้
- ใช้ `SERIAL` หรือ `BIGSERIAL` สำหรับ auto-increment
- หลีกเลี่ยง business logic ใน primary keys

## 4. Foreign Key Best Practices
- **สร้าง foreign key constraints** เสมอ
- ใช้ appropriate ON DELETE/UPDATE actions
- จำกัด cascade depth ไม่เกิน 3 levels

## 5. Column Design
- **ใช้ NOT NULL constraints** สำหรับ required fields
- ตั้งค่า DEFAULT values อย่างสมเหตุสมผล
- ใช้ CHECK constraints สำหรับ validation

## 6. Index Strategy
- **สร้าง indexes** บน foreign keys
- สร้าง indexes บน columns ที่ค้นหาบ่อย
- หลีกเลี่ยง indexes บน columns ที่มี cardinality ต่ำ

## 7. Data Types Optimization
- **ใช้ smallest possible type** ที่เพียงพอ
- ใช้ `TEXT` แทน `VARCHAR(n)` เมื่อไม่จำเป็นต้องจำกัด
- ใช้ `TIMESTAMP WITH TIME ZONE` สำหรับ timezone data

## 8. Schema Evolution
- **ใช้ migrations** สำหรับ schema changes
- สร้าง backward compatible changes
- ทดสอบ migrations ใน staging environment
