# Best Practices

แนวทางปฏิบัติที่ดีในการใช้ moonrepo

## Project Structure

- **ใช้ workspace pattern** - แบ่ง apps และ packages ชัดเจน
- **กำหนด project dependencies** - บอก moon ว่า project ไหนต้องรอ project ไหน

## Task Configuration

| Practice | Description |
|----------|-------------|
| **Define inputs** | ระบุ inputs ที่ชัดเจนเพื่อ smart hashing |
| **Define outputs** | ระบุ outputs ที่จะ cache |
| **Use inheritance** | ใช้ task inheritance ลดความซ้ำซ้อน |
| **Add deps** | กำหนด task dependencies อย่างถูกต้อง |

## Caching

```yaml
# moon.yml
tasks:
  build:
    cache: true
    inputs:
      - 'src/**'
      - 'package.json'
    outputs:
      - 'dist/**'
```

## CI/CD

| Practice | Description |
|----------|-------------|
| **Enable remote cache** | ใช้ remote cache เพื่อเร่ง CI |
| **Run affected only** | รันเฉพาะ tasks ที่ affected |
| **Use moon ci** | ใช้ `moon ci` สำหรับ CI environment |

## Common Pitfalls

- **ไม่กำหนด inputs** - ทำให้ cache ไม่ accurate
- **ไม่กำหนด outputs** - ทำให้ไม่ cache ถูกต้อง
- **Circular dependencies** - ทำให้ pipeline ล้มเหลว
