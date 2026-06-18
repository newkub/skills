## FGA Concepts

Fine-Grained Authorization สำหรับ authorization ที่ละเอียด

## Key Concepts

- **Relation**: ความสัมพันธ์ระหว่าง object และ user (owner, editor, viewer)
- **Tuple**: Data ที่ define specific relationship
- **Authorization Model**: Schema ที่ define authorization logic
- **Store**: Database ที่เก็บ tuples
- **Check**: Operation ตรวจสอบ authorization

## Model Structure

Authorization model define:
- Types (user, document, folder)
- Relations (owner, editor, viewer)
- Permissions (view, edit, delete)

## Example Model

```
type user
type document

relation owner: user
relation editor: user
relation viewer: user

permission view = viewer + owner
permission edit = editor + owner
permission delete = owner
```

## Benefits

- Flexible authorization logic
- Support complex relationships
- Real-time authorization checks
- Scalable สำหรับ large datasets
