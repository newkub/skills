# PostgreSQL Constraints

## 1. Primary Key Constraint

- **ระบุ unique identifier** สำหรับแต่ละ row
- ไม่อนุญาตให้มี NULL values
- ใช้ `PRIMARY KEY` ใน CREATE TABLE หรือ ALTER TABLE

## 2. Foreign Key Constraint

- **เชื่อมโยง tables** เพื่อรักษา referential integrity
- อ้างอิง primary key ของ table อื่น
- ใช้ `REFERENCES table_name(column)` พร้อม ON DELETE/UPDATE options

## 3. Unique Constraint

- **รับประกันค่าไม่ซ้ำ** ใน column หรือ group of columns
- อนุญาต NULL values ได้หนึ่งค่า
- ใช้ `UNIQUE` constraint หรือ CREATE UNIQUE INDEX

## 4. Check Constraint

- **ตรวจสอบค่า** ตามเงื่อนไขที่กำหนด
- ใช้สำหรับ business rules validation
- ใช้ `CHECK (condition)` ใน table definition

## 5. Not Null Constraint

- **บังคับให้มีค่า** ใน column นั้นๆ
- ป้องกัน NULL values
- ใช้ `NOT NULL` ใน column definition

## 6. Exclusion Constraint

- **ป้องกันค่าทับซ้อน** ตามเงื่อนไขที่ซับซ้อน
- ใช้สำหรับ time ranges หรือ resource booking
- ใช้ `EXCLUDE USING operator WITH (condition)`

## 7. Deferrable Constraints

- **ยอมให้ข้ามการตรวจสอบ** ชั่วคราวใน transaction
- มี DEFERRABLE และ INITIALLY DEFERRED options
- ใช้สำหรับ complex data loading

## 8. Constraint Naming

- **ตั้งชื่อ constraints** ให้ชัดเจนและสอดคล้อง
- ใช้ `CONSTRAINT constraint_name` syntax
- ช่วยการ maintenance และ debugging
