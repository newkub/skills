# PostgreSQL Advanced Queries

## 1. Window Functions

- **คำนวณค่า** ตามชุดข้อมูลย่อย
- ใช้ `OVER()` clause กับ PARTITION BY และ ORDER BY
- เช่น `ROW_NUMBER()`, `RANK()`, `LAG()`, `LEAD()`

## 2. Common Table Expressions (CTE)

- **สร้าง temporary result sets** ที่อ้างอิงได้
- ใช้ `WITH` clause สำหรับ complex queries
- ช่วยให้ query อ่านง่ายขึ้น

## 3. Recursive CTEs

- **จัดการ hierarchical data** เช่น org charts
- ใช้ `WITH RECURSIVE` syntax
- ต้องมี base case และ recursive part

## 4. Subqueries

- **ซ้อน queries** ภายใน queries อื่น
- ใช้ใน WHERE, FROM, หรือ SELECT clauses
- สามารถ correlated หรือ non-correlated

## 5. Set Operations

- **รวมผลลัพธ์** จากหลาย queries
- `UNION` (distinct), `UNION ALL` (all rows)
- `INTERSECT`, `EXCEPT` สำหรับ set operations

## 6. Conditional Logic

- **ตัดสินใจใน queries** ด้วย CASE statements
- ใช้ `CASE WHEN condition THEN value ELSE value END`
- รองรับ nested conditions

## 7. Aggregate Functions

- **สรุปข้อมูล** จาก groups of rows
- `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`
- ใช้กับ `GROUP BY` และ `HAVING`

## 8. JSON Operations

- **จัดการ JSON data** ใน PostgreSQL
- ใช้ `->`, `->>`, `#>`, `#>>` operators
- ใช้ `jsonb_array_elements()` และ `jsonb_each()`
