# PostgreSQL Design Patterns

## 1. Audit Trail Pattern
- **ติดตาม changes** ด้วย trigger functions
- สร้าง audit tables สำหรับ logging
- ใช้ `INSERT INTO audit_table SELECT * FROM old_table`

## 2. Soft Delete Pattern
- **ใช้ is_deleted flag** แทนการลบจริง
- ใช้ `deleted_at` timestamp สำหรับ tracking
- สร้าง views ที่ filter deleted rows

## 3. Versioning Pattern
- **เก็บ history** ของ data changes
- ใช้ `valid_from` และ `valid_to` timestamps
- สร้าง temporal tables สำหรับ time-based queries

## 4. Hierarchical Data Pattern
- **จัดการ tree structures** ด้วย recursive CTEs
- ใช้ `ltree` extension สำหรับ materialized paths
- พิจารณา nested set model สำหรับ read-heavy operations

## 5. Event Sourcing Pattern
- **เก็บ events** แทน current state
- ใช้ JSONB สำหรับ event data
- สร้าง projections จาก event streams

## 6. Multi-tenancy Pattern
- **แยก data** ตาม tenant_id
- ใช้ row-level security policies
- พิจารณa partitioning ตาม tenants

## 7. Caching Pattern
- **ใช้ materialized views** สำหรับ complex queries
- สร้าง summary tables สำหรับ reporting
- ใช้ application-level caching สำหรับ frequent reads

## 8. Data Migration Pattern
- **ใช้ migrations** ที่ reversible
- สร้าง rollback scripts สำหรับทุก migration
- ใช้ transactions สำหรับ atomic migrations
