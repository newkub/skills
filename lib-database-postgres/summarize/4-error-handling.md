# Error Handling Best Practices Summary

## 1. Exception Types

- **SQLSTATE codes** สำหรับ error classification
- ใช้ `EXCEPTION WHEN` clauses สำหรับ specific errors
- จำแนก errors ตาม severity levels

## 2. Transaction Rollbacks

- **ใช้ SAVEPOINTs** สำหรับ partial rollbacks
- จัดการ nested transactions อย่างเหมาะสม
- ทำ cleanup operations หลัง rollbacks

## 3. Constraint Violations

- **ตรวจสอบ constraint errors** ก่อน insert/update
- ใช้ `ON CONFLICT` clauses สำหรับ upserts
- ให้ข้อความ error ที่ชัดเจนแก่ users

## 4. Connection Errors

- **จัดการ connection timeouts** อย่างเหมาะสม
- ใช้ retry logic สำหรับ transient errors
- ติดตาม connection pool exhaustion

## 5. Deadlock Handling

- **ตรวจจับ deadlocks** และ retry operations
- จำกัด transaction duration
- ใช้ consistent lock ordering

## 6. Data Validation

- **ตรวจสอบ data validity** ก่อน database operations
- ใช้ CHECK constraints สำหรับ validation
- ให้ feedback ที่เป็นประโยชน์แก่ users

## 7. Logging Strategy

- **บันทึก error details** อย่างเพียงพอ
- รวม context information ใน logs
- หลีกเลี่ยง logging sensitive data

## 8. Recovery Procedures

- **สร้าง recovery scripts** สำหรับ common errors
- ทดสอบ recovery procedures อย่างสม่ำเสมอ
- มี backup plans สำหรับ disaster recovery
