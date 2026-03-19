# Query Performance Best Practices Summary

## 1. Query Writing

- **ใช้ EXPLAIN ANALYZE** ก่อน deploy queries
- หลีกเลี่ยง `SELECT *` ใน production code
- ใช้ LIMIT clauses สำหรับ large result sets

## 2. Index Usage

- **สร้าง appropriate indexes** สำหรับ query patterns
- ใช้ partial indexes สำหรับ specific conditions
- ตรวจสอบ index usage ด้วย pg_stat_user_indexes

## 3. Join Optimization

- **ใช้ indexes** บน join columns
- จำกัด rows ก่อน join operations
- พิจารณา subqueries แทน joins สำหรับ small datasets

## 4. Aggregate Queries

- **ใช้ appropriate indexes** สำหรับ GROUP BY columns
- พิจารณa materialized views สำหรับ frequent aggregations
- ใช้ HAVING clauses หลัง GROUP BY

## 5. Function Usage

- **หลีกเลี่ยง functions** บน indexed columns
- ใช้ `IMMUTABLE` functions สำหรับ indexes
- พิจารณa computed columns แทน runtime calculations

## 6. Data Type Considerations

- **ใช้ appropriate types** สำหรับ comparisons
- หลีกเลี่ยง implicit type conversions
- ใช้ CAST อย่างชัดเจนเมื่อจำเป็น

## 7. Transaction Management

- **ทำให้ transactions สั้น** ที่สุด
- ใช้ appropriate isolation levels
- จัดการ deadlocks อย่างเหมาะสม

## 8. Monitoring and Tuning

- **ตรวจสอบ slow queries** อย่างสม่ำเสมอ
- ติดตาม cache hit ratios
- ปรับ configuration parameters ตาม workload
