# PostgreSQL Performance Best Practices

## 1. Query Optimization

- **ใช้ EXPLAIN ANALYZE** เพื่อตรวจสอบ query plans
- หลีกเลี่ยง `SELECT *` ใน production
- ใช้ appropriate indexes สำหรับ query patterns

## 2. Index Strategy

- **สร้าง indexes** บน columns ที่ใช้ใน WHERE clauses
- ใช้ partial indexes สำหรับ specific conditions
- พิจารณา covering indexes สำหรับ frequent queries

## 3. Table Partitioning

- **แบ่ง large tables** ตาม logical criteria
- ใช้ partitioning สำหรับ tables ที่มี millions of rows
- พิจารณา range, list, หรือ hash partitioning

## 4. Connection Management

- **ใช้ connection pooling** เพื่อลด overhead
- ตั้งค่า `max_connections` อย่างเหมาะสม
- ปิด connections หลังใช้งาน

## 5. Memory Configuration

- **ตั้งค่า shared_buffers** เป็น 25% ของ RAM
- ปรับ `work_mem` สำหรับ complex queries
- ตั้งค่า `effective_cache_size` ให้สูงกว่า RAM

## 6. Vacuum and Maintenance

- **รัน autovacuum** เพื่อ reclaim space
- ตั้งค่า vacuum thresholds อย่างเหมาะสม
- รัน `VACUUM ANALYZE` สำหรับ heavy updates

## 7. Bulk Operations

- **ใช้ COPY** สำหรับ bulk data loading
- ปิด indexes ระหว่าง bulk inserts
- ใช้ transactions สำหรับ batch operations

## 8. Monitoring

- **ตรวจสอบ slow queries** ด้วย pg_stat_statements
- ติดตาม cache hit ratios
- ใช้ monitoring tools สำหรับ performance metrics
