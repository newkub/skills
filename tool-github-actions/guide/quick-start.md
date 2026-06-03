# Quick Start

## Create Workflow

สร้างไฟล์ `.github/workflows/ci.yml`:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
```

## Run Workflow

Workflow จะรันอัตโนมัติเมื่อ push หรือสร้าง PR

## Manual Trigger

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        default: 'staging'
```

## Next Steps

- ดู [Features](features.md) เพื่อเรียนรู้ features ทั้งหมด
- ดู [Configuration](configuration.md) เพื่อปรับแต่งการตั้งค่า
- ดู [Best Practices](best-practices.md) เพื่อแนวทางปฏิบัติที่ดี
