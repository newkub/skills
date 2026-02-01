# Workflow Security Rules

## Rule 1: ใช้ reusable workflows

ควรใช้ reusable workflows สำหรับ scenarios ทั่วไป

**ข้อดี:**
- มาตรฐาน workflows ทั่ว organization
- บำรุงรักษา centrally
- ลดการ duplicate code
- ง่ายในการ enforce security policies

**ตัวอย่าง reusable workflow:**
```yaml
name: Reusable CI Workflow

on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}
      - run: npm ci
      - run: npm test
```

**การใช้งาน:**
```yaml
jobs:
  test:
    uses: ./.github/workflows/reusable-ci.yml
    with:
      node-version: '18'
```

---

## Rule 2: รัน sensitive workflows เฉพาะบน trusted code

Sensitive workflows ต้องรันเฉพาะบน trusted code เท่านั้น

**Sensitive workflows:**
- Production deployments
- Infrastructure changes
- Database migrations
- Secret management

**ตัวอย่างที่ไม่ดี:**
```yaml
on:
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          deploy.sh
```

**ตัวอย่างที่ดี:**
```yaml
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          deploy.sh
```

---

## Rule 3: เปิดใช้ Dependabot สำหรับ updates

ต้องเปิดใช้ Dependabot สำหรับ updates

**ตั้งค่าใน `.github/dependabot.yml`:**
```yaml
version: 2
updates:
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "dependencies"
      - "github-actions"
```

**ขั้นตอน:**
1. สร้าง `.github/dependabot.yml`
2. Enable Dependabot ใน repository settings
3. Review pull requests จาก Dependabot
4. Merge pull requests ที่ผ่าน review

---

## Rule 4: เปิดใช้ Branch Protection

ต้องเปิดใช้ Branch Protection สำหรับทุก code changes

**ตั้งค่าใน repository settings:**
1. ไปที่ Settings > Branches
2. เพิ่ม rule สำหรับ main branch
3. เปิดใช้:
   - Require a pull request before merging
   - Require approvals (อย่างน้อย 1 reviewer)
   - Require status checks to pass before merging
   - Require branches to be up to date before merging

**ตัวอย่าง:**
```yaml
on:
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
```

---

## Rule 5: ใช้ CODEOWNERS สำหรับ workflows

ต้องใช้ CODEOWNERS เพื่อระบุ owners ของ workflows

**สร้าง `.github/CODEOWNERS`:**
```
.github/workflows/*.yml @team-devops @team-security
.github/workflows/deploy.yml @team-ops
```

**ข้อดี:**
- ชัดเจนว่าใคร responsible สำหรับ workflow
- ป้องกันการเปลี่ยนแปลงโดยไม่ได้รับอนุญาต
- ง่ายในการ review

---

## Rule 6: ป้องกัน Actions จากการสร้าง/approve pull requests

ต้องป้องกัน Actions จากการสร้างหรือ approve pull requests

**ตั้งค่าใน repository settings:**
1. ไปที่ Settings > Actions > General
2. Scroll ลงไปที่ "Workflow permissions"
3. เลือก "Read repository contents permission"
4. หรือ explicitly define permissions ใน workflow

**ตัวอย่าง:**
```yaml
permissions:
  contents: read
  pull-requests: write
```

**ตรวจสอบว่า workflow ไม่มี permissions:**
- `pull-requests: write`
- `issues: write`

---

## Rule 7: ปิด workflow runs จาก forked repositories

ถ้าไม่จำเป็น ควรปิด workflow runs จาก forked repositories

**ตั้งค่าใน repository settings:**
1. ไปที่ Settings > Actions > General
2. Scroll ลงไปที่ "Fork pull request workflows from outside collaborators"
3. เลือก "Require approval for all outside collaborators"

**หรือใช้ condition:**
```yaml
on:
  pull_request:
    branches: [main]

jobs:
  test:
    if: github.event.pull_request.head.repo.full_name == github.repository
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm test
```

---

## Rule 8: ใช้ environment protection rules

ต้องใช้ environment protection rules สำหรับ environments ที่ sensitive

**ตั้งค่า environment:**
1. ไปที่ Settings > Environments
2. สร้าง environment ใหม่ (เช่น `production`)
3. เพิ่ม protection rules:
   - Required reviewers
   - Wait timer
   - Deployment branches

**ตัวอย่าง:**
```yaml
jobs:
  deploy:
    environment:
      name: production
      url: https://example.com
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        run: |
          deploy.sh
```

---

## Rule 9: ตรวจสอบ workflow triggers

ต้องตรวจสอบ workflow triggers อย่างระมัดระวัง

**Triggers ที่ควรหลีกเลี่ยง:**
- `pull_request` สำหรับ sensitive workflows
- `workflow_dispatch` โดยไม่มี restrictions
- `repository_dispatch` โดยไม่มี validation

**Triggers ที่ปลอดภัย:**
- `push` ไปยัง main branch
- `release` events
- `workflow_dispatch` พร้อม restrictions

---

## Checklist

- [ ] ใช้ reusable workflows สำหรับ scenarios ทั่วไป
- [ ] รัน sensitive workflows เฉพาะบน trusted code
- [ ] เปิดใช้ Dependabot สำหรับ updates
- [ ] เปิดใช้ Branch Protection
- [ ] ใช้ CODEOWNERS สำหรับ workflows
- [ ] ป้องกัน Actions จากการสร้าง/approve pull requests
- [ ] ปิด workflow runs จาก forked repositories
- [ ] ใช้ environment protection rules
- [ ] ตรวจสอบ workflow triggers
