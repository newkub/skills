# Performance Optimization Rules

## Rule 1: เก็บ Actions ให้เล็กที่สุด

Actions ต้องเล็กที่สุดเพื่อลดเวลา execution

**วิธีการ:**
- ใช้ lightweight Docker images (alpine, alpine-node)
- ติดตั้ง dependencies เท่าที่จำเป็น
- หลีกเลี่ยงการ download ไฟล์ขนาดใหญ่
- ใช้ caching สำหรับ dependencies

**ตัวอย่างที่ไม่ดี:**
```yaml
- name: Build
  run: |
    npm install
    npm run build
```

**ตัวอย่างที่ดี:**
```yaml
- name: Build
  run: |
    npm ci --production
    npm run build
```

---

## Rule 2: หลีกเลี่ยงการติดตั้ง dependencies ที่ไม่จำเป็น

ต้องหลีกเลี่ยงการติดตั้ง dependencies ที่ไม่จำเป็น

**วิธีการ:**
- ใช้ `npm ci` แทน `npm install`
- ใช้ `--production` flag สำหรับ production builds
- ใช้ `--only=prod` สำหรับ production
- ติดตั้งเฉพาะ dependencies ที่จำเป็น

**ตัวอย่างที่ไม่ดี:**
```yaml
- name: Install dependencies
  run: |
    npm install
```

**ตัวอย่างที่ดี:**
```yaml
- name: Install dependencies
  run: |
    npm ci
```

---

## Rule 3: ใช้ caching mechanism

ต้องใช้ caching mechanism เพื่อลดเวลา execution

**ใช้ `actions/cache`:**
```yaml
- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

**Cache สิ่งที่ควร cache:**
- `~/.npm` - npm cache
- `~/.cache/pip` - pip cache
- `~/.cargo` - Cargo cache
- `~/.gradle` - Gradle cache
- `~/.m2` - Maven cache
- `node_modules` - Node modules

---

## Rule 4: ใช้ lightweight Docker images

ต้องใช้ lightweight Docker images

**ตัวอย่างที่ไม่ดี:**
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    container:
      image: node:18
```

**ตัวอย่างที่ดี:**
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    container:
      image: node:18-alpine
```

**Lightweight images:**
- `node:18-alpine` - Node.js Alpine
- `python:3.11-slim` - Python Slim
- `golang:1.21-alpine` - Go Alpine
- `rust:1.75-alpine` - Rust Alpine

---

## Rule 5: จำกัด environment variables ให้มี scope แคบที่สุด

ต้องจำกัด environment variables ให้มี scope แคบที่สุด

**ตัวอย่างที่ไม่ดี:**
```yaml
env:
  NODE_ENV: production
  API_KEY: ${{ secrets.API_KEY }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Test
        run: npm test

  build:
    runs-on: ubuntu-latest
    steps:
      - name: Build
        run: npm build
```

**ตัวอย่างที่ดี:**
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Test
        run: npm test

  build:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
      API_KEY: ${{ secrets.API_KEY }}
    steps:
      - name: Build
        run: npm build
```

---

## Rule 6: ใช้ matrix builds อย่างมีเหตุผล

ต้องใช้ matrix builds อย่างมีเหตุผล

**ตัวอย่างที่ไม่ดี:**
```yaml
strategy:
  matrix:
    node-version: [12, 14, 16, 18, 20]
    os: [ubuntu-latest, windows-latest, macos-latest]
```

**ตัวอย่างที่ดี:**
```yaml
strategy:
  matrix:
    node-version: [18, 20]
    os: [ubuntu-latest]
```

---

## Rule 7: ใช้ concurrency groups

ต้องใช้ concurrency groups เพื่อหลีกเลี่ยงการรัน workflows ซ้ำ

**ตัวอย่าง:**
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

**ข้อดี:**
- ป้องกันการรัน workflows ซ้ำ
- ลด resource usage
- เพิ่มประสิทธิภาพ

---

## Rule 8: ใช้ conditional execution

ต้องใช้ conditional execution เพื่อรัน steps ที่จำเป็นเท่านั้น

**ตัวอย่าง:**
```yaml
- name: Deploy
  if: github.ref == 'refs/heads/main' && github.event_name == 'push'
  run: |
    deploy.sh
```

---

## Rule 9: ใช้ artifact upload/download อย่างมีเหตุผล

ต้องใช้ artifact upload/download อย่างมีเหตุผล

**ตัวอย่างที่ไม่ดี:**
```yaml
- name: Upload artifacts
  uses: actions/upload-artifact@v4
  with:
    name: dist
    path: dist/
```

**ตัวอย่างที่ดี:**
```yaml
- name: Upload artifacts
  uses: actions/upload-artifact@v4
  with:
    name: dist
    path: dist/
    retention-days: 7
```

---

## Rule 10: ใช้ timeout

ต้องใช้ timeout เพื่อป้องกันการรันนานเกินไป

**ตัวอย่าง:**
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 30
    steps:
      - name: Build
        run: |
          npm build
```

---

## Checklist

- [ ] เก็บ Actions ให้เล็กที่สุด
- [ ] หลีกเลี่ยงการติดตั้ง dependencies ที่ไม่จำเป็น
- [ ] ใช้ caching mechanism
- [ ] ใช้ lightweight Docker images
- [ ] จำกัด environment variables ให้มี scope แคบที่สุด
- [ ] ใช้ matrix builds อย่างมีเหตุผล
- [ ] ใช้ concurrency groups
- [ ] ใช้ conditional execution
- [ ] ใช้ artifact upload/download อย่างมีเหตุผล
- [ ] ใช้ timeout
