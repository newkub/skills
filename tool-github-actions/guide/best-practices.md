# Best Practices

แนวทางปฏิบัติที่ดีในการใช้ GitHub Actions

## Workflow Structure

| Practice | Description |
|----------|-------------|
| **ใช้ reusable actions** | ลดความซ้ำซ้อนด้วย actions จาก marketplace |
| **แบ่ง jobs ตามหน้าที่** | แยก build, test, deploy เป็น jobs แยกกัน |
| **ใช้ concurrency** | ป้องกัน duplicate runs |

## Security

| Practice | Description |
|----------|-------------|
| **ใช้ secrets** | เก็บ API keys ใน secrets ไม่ใช่ hardcode |
| **กำหนด permissions** | กำหนด GITHUB_TOKEN permissions แบบ minimal |
| **ใช้ OpenID Connect** | ใช้ OIDC สำหรับ cloud authentication |

## Performance

| Practice | Description |
|----------|-------------|
| **ใช้ cache** | cache dependencies สำหรับ faster builds |
| **ใช้ matrix** | รันหลาย configurations พร้อมกัน |
| **ใช้ fail-fast** | หยุดเร็วถ้า job ล้มเหลว |

## Example: Optimized Workflow

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  test:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test
```
