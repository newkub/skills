# MVCC

## Definition

MVCC (Multi-Version Concurrency Control) คือ:
- ให้ multiple readers และ writers ทำงานพร้อมกัน
- Readers ไม่ block writers
- Writers ไม่ block readers
- Snapshot isolation

## How It Works

- แต่ละ transaction เห็น snapshot ของ database
- Changes ถูกแต่ละ transaction
- Old versions ถูกเก็บไว้
- Cleanup เมื่อไม่มีใครใช้

## Benefits

- High concurrency
- No read locks
- Consistent snapshots
- Time travel queries
