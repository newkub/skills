# PostgreSQL Indexes

## 1. B-Tree Index

- **Default index type** สำหรับการค้นหาทั่วไป
- เหมาะกับ equality และ range queries
- ใช้ `CREATE INDEX idx_name ON table_name(column);`

## 2. Hash Index

- เหมาะกับ equality queries เท่านั้น
- เร็วกว่า B-Tree สำหรับ exact matches
- ใช้ `CREATE INDEX idx_name ON table_name USING hash(column);`

## 3. GIN Index

- สำหรับ composite values เช่น arrays และ JSON
- เหมาะกับ full-text search
- ใช้ `CREATE INDEX idx_name ON table_name USING gin(column);`

## 4. GiST Index

- สำหรับ geometric data และ full-text search
- รองรับ complex data types
- ใช้ `CREATE INDEX idx_name ON table_name USING gist(column);`

## 5. Partial Index

- สร้าง index เฉพาะบาง rows
- ลดขนาด index และเพิ่มประสิทธิภาพ
- ใช้ `CREATE INDEX idx_name ON table_name(column) WHERE condition;`

## 6. Unique Index

- รับประกันค่าไม่ซ้ำกัน
- ใช้สร้าง constraints ได้
- ใช้ `CREATE UNIQUE INDEX idx_name ON table_name(column);`

## 7. Expression Index

- สร้าง index จาก expression หรือ function
- ใช้ `CREATE INDEX idx_name ON table_name((expression));`

## 8. Covering Index

- รวม columns ที่จำเป็นใน index
- ลดการอ่านจาก table
- ใช้ `CREATE INDEX idx_name ON table_name(column1, column2) INCLUDE (column3);`
