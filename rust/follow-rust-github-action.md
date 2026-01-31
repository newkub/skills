---
description: ตั้งค่า GitHub Actions สำหรับ Rust CI/CD ด้วย sccache และ Cloudflare R2
trigger: manual
instruction:
  - อัปเดต GitHub Actions workflow
  - ตั้งค่า Organization Secrets
  - ตั้งค่า Organization Variables
  - ย้าย repository ไป organization
condition:
  - ใช้เมื่อต้องการตั้งค่า CI/CD สำหรับ Rust projects
  - ใช้เมื่อต้องการใช้ sccache ใน GitHub Actions
  - ใช้เมื่อมี organization ใน GitHub
goal:
  - ให้ CI ใช้ sccache + Cloudflare R2
  - แชร์ secrets และ variables ระหว่าง repositories
input:
  - GitHub organization name
  - Cloudflare R2 credentials
  - Cloudflare R2 endpoint
output:
  - GitHub Actions workflow ที่ใช้ sccache
  - Organization Secrets และ Variables
outcome:
  - CI ใช้ remote cache
  - ลดเวลา build ใน CI
  - แชร์ cache ระหว่าง local และ CI
---

# การตั้งค่า GitHub Actions สำหรับ Rust CI/CD

## ภาพรวม

ตั้งค่า GitHub Actions ให้ใช้ sccache และ Cloudflare R2 สำหรับ remote caching ช่วยให้:
- ลดเวลา build ใน CI
- แชร์ cache ระหว่าง local และ CI
- จัดการ secrets และ variables แบบ centralized

## ขั้นตอนการตั้งค่า

### 1. อัปเดต GitHub Actions Workflow

อัปเดต `.github/workflows/rust-ci.yml`:

```yaml
name: Rust CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  CARGO_TERM_COLOR: always
  RUST_BACKTRACE: 1
  RUSTC_WRAPPER: sccache
  SCCACHE_BUCKET: ${{ vars.SCCACHE_BUCKET }}
  SCCACHE_ENDPOINT: ${{ vars.SCCACHE_ENDPOINT }}
  SCCACHE_REGION: ${{ vars.SCCACHE_REGION }}
  SCCACHE_S3_USE_SSL: ${{ vars.SCCACHE_S3_USE_SSL }}

jobs:
  build:
    name: Build
    runs-on: ${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        rust: [stable]

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Rust toolchain
        uses: actions-rust-lang/setup-rust-toolchain@v1
        with:
          toolchain: ${{ matrix.rust }}
          components: rustfmt, clippy

      - name: Install sccache
        run: cargo install sccache

      - name: Configure sccache for R2
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.R2_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.R2_SECRET_ACCESS_KEY }}
        run: |
          echo "AWS_ACCESS_KEY_ID=${{ secrets.R2_ACCESS_KEY_ID }}" >> $GITHUB_ENV
          echo "AWS_SECRET_ACCESS_KEY=${{ secrets.R2_SECRET_ACCESS_KEY }}" >> $GITHUB_ENV

      - name: Show sccache stats before build
        run: sccache --show-stats

      - name: Format check
        run: cargo fmt --all -- --check

      - name: Clippy
        run: cargo clippy --all-targets --all-features -- -D warnings

      - name: Build
        run: cargo build --all --all-features

      - name: Run tests
        run: cargo test --all --all-features -- --test-threads=1 --nocapture

      - name: Upload build logs
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: build-logs-${{ matrix.os }}
          path: |
            **/target/**/*.txt
            **/target/**/*.log
          retention-days: 30

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: test-results-${{ matrix.os }}
          path: |
            **/target/**/test-results/
          retention-days: 30

      - name: Show sccache stats after build
        if: always()
        run: sccache --show-stats

  check:
    name: Check (faster)
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Rust toolchain
        uses: actions-rust-lang/setup-rust-toolchain@v1
        with:
          toolchain: stable
          components: rustfmt, clippy

      - name: Install sccache
        run: cargo install sccache

      - name: Configure sccache for R2
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.R2_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.R2_SECRET_ACCESS_KEY }}
        run: |
          echo "AWS_ACCESS_KEY_ID=${{ secrets.R2_ACCESS_KEY_ID }}" >> $GITHUB_ENV
          echo "AWS_SECRET_ACCESS_KEY=${{ secrets.R2_SECRET_ACCESS_KEY }}" >> $GITHUB_ENV

      - name: Check
        run: cargo check --all --all-features
```

### 2. สร้าง Organization Secrets

ไปที่: https://github.com/organizations/<org-name>/settings/secrets/actions

กด **New organization secret** แล้วเพิ่ม:

**Secret 1:**
- Name: `R2_ACCESS_KEY_ID`
- Value: `<your-access-key-id>`
- Repository access: เลือก **All repositories**

**Secret 2:**
- Name: `R2_SECRET_ACCESS_KEY`
- Value: `<your-secret-access-key>`
- Repository access: เลือก **All repositories**

### 3. สร้าง Organization Variables

ไปที่: https://github.com/organizations/<org-name>/settings/variables/actions

กด **New organization variable** แล้วเพิ่ม:

**Variable 1:**
- Name: `SCCACHE_BUCKET`
- Value: `rust-sccache`
- Repository access: เลือก **All repositories**

**Variable 2:**
- Name: `SCCACHE_ENDPOINT`
- Value: `https://<account-id>.r2.cloudflarestorage.com`
- Repository access: เลือก **All repositories**

**Variable 3:**
- Name: `SCCACHE_REGION`
- Value: `auto`
- Repository access: เลือก **All repositories**

**Variable 4:**
- Name: `SCCACHE_S3_USE_SSL`
- Value: `true`
- Repository access: เลือก **All repositories**

### 4. ย้าย repository ไป organization

ไปที่: https://github.com/<username>/<repo>/settings

1. ไปที่ **Danger Zone**
2. กด **Transfer ownership**
3. พิมพ์ `<org-name>/<repo>`
4. กด **I understand, transfer this repository**

## การใช้งาน

### รัน CI

```bash
# Push ไป GitHub
git push origin main

# หรือสร้าง Pull Request
git push origin feature-branch
```

### ตรวจสอบ sccache stats ใน CI

GitHub Actions จะแสดง sccache stats ใน logs:

```
Run sccache --show-stats
Compile requests                    5
Compile requests executed           5
Cache hits                          0
Cache misses                        5
Cache hit rate                      0.00%
```

## ข้อดีของ Organization Secrets และ Variables

### Organization Secrets
- ✅ ตั้งค่าครั้งเดียว ใช้ได้ทุก repository ใน organization
- ✅ จัดการ secrets แบบ centralized
- ✅ ปลอดภัย (secrets ไม่แสดงใน logs)
- ✅ สามารถจำกัดการเข้าถึงได้

### Organization Variables
- ✅ ตั้งค่าครั้งเดียว ใช้ได้ทุก repository ใน organization
- ✅ ใช้สำหรับค่าที่ไม่ sensitive (เช่น bucket name, endpoint)
- ✅ ค่าจะแสดงใน logs (เหมาะสำหรับ debugging)
- ✅ สามารถจัดการได้ง่าย

## เปรียบเทียบ Repository vs Organization

| ด้าน | Repository Secrets | Organization Secrets |
|-----|-------------------|---------------------|
| ขอบเขต | Repository เดียว | ทุก repository ใน organization |
| จัดการ | แยกในแต่ละ repository | Centralized |
| ความง่าย | ง่าย | ง่าย |
| แนะนำ | Personal account | Organization |

## เคล็ดลับ

- ใช้ Organization Secrets สำหรับ sensitive data (เช่น API keys)
- ใช้ Organization Variables สำหรับ non-sensitive data (เช่น bucket name)
- ตั้งค่า repository access ให้เหมาะสม (All repositories หรือ Selected repositories)
- ใช้ `${{ vars.VAR_NAME }}` สำหรับ variables
- ใช้ `${{ secrets.SECRET_NAME }}` สำหรับ secrets

## การ Debugging

### ตรวจสอบว่า sccache ทำงานใน CI

ดู logs ใน GitHub Actions:

```
Run sccache --show-stats
```

ควรเห็น:
- Cache hits เพิ่มขึ้นหลังจากรันครั้งที่ 2
- Cache hit rate สูงกว่า 0%

### ถ้า cache ไม่ทำงาน

ตรวจสอบ:
1. Organization Secrets ถูกต้องหรือไม่
2. Organization Variables ถูกต้องหรือไม่
3. Cloudflare R2 bucket มีอยู่จริงหรือไม่
4. API Token มี permissions ถูกต้องหรือไม่

## ข้อจำกัด

- Organization Secrets และ Variables ใช้ได้เฉพาะใน organization
- Personal account ไม่มี Organization Secrets และ Variables
- ต้องย้าย repository ไป organization ก่อน
- Free plan จำกัด GitHub Actions minutes (2,000 นาที/เดือน)
