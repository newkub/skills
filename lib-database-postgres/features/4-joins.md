# PostgreSQL Joins

## 1. Inner Join

- **เชื่อมตาราง** ที่มีค่าตรงกันเท่านั้น
- ใช้ `INNER JOIN` หรือ `JOIN`
- คืน rows ที่ match ในทั้งสอง tables

## 2. Left Join

- **เชื่อมตาราง** คืนทุก rows จาก table ซ้าย
- ใช้ `LEFT JOIN` หรือ `LEFT OUTER JOIN`
- คืน NULL สำหรับ rows ที่ไม่ match

## 3. Right Join

- **เชื่อมตาราง** คืนทุก rows จาก table ขวา
- ใช้ `RIGHT JOIN` หรือ `RIGHT OUTER JOIN`
- คืน NULL สำหรับ rows ที่ไม่ match

## 4. Full Outer Join

- **เชื่อมตาราง** คืนทุก rows จากทั้งสอง tables
- ใช้ `FULL OUTER JOIN`
- คืน NULL เมื่อไม่มีการ match

## 5. Cross Join

- **สร้าง Cartesian product** ของทุก rows
- ใช้ `CROSS JOIN`
- ไม่ต้องการ ON condition

## 6. Self Join

- **เชื่อมตาราง** กับตัวเอง
- ใช้ table aliases สำหรับแยก instances
- เหมาะกับ hierarchical data

## 7. Using Clause

- **ระบุ columns** ที่มีชื่อเหมือนกัน
- ใช้ `USING (column_name)` แทน ON
- ลดความซ้ำซ้อนใน join conditions

## 8. Join Performance

- **ใช้ indexes** บน join columns
- จำกัด rows ก่อน join ด้วย WHERE clauses
- พิจารณา execution plan ด้วย EXPLAIN
