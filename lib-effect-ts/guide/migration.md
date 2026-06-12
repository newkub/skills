# Migration

## Migrating from Promises

### Key Differences

- **Effect System** - Effect มี error handling ดีกว่า promises
- **Composable** - effects สามารถ compose ได้ดีกว่า
- **Type-safe** - Effect มี type safety ดีกว่า

### Migration Steps

1. Convert promises ไปเป็น effects
2. Update error handling
3. Update composition patterns
4. Test migration

## Migrating from RxJS

- **Effect vs Observable** - Effect คือ single value, Observable คือ stream
- **Cancellation** - Effect มี cancellation support
- **Type Safety** - Effect มี type safety ดีกว่า
