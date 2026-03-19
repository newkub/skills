# Third-party Actions Governance Rules

## Rule 1: บังคับใช้ allowlist สำหรับ third-party actions

ต้องบังคับให้ใช้เฉพาะ third-party actions ที่ได้รับอนุมัติเท่านั้น

**ตั้งค่าใน organization settings:**

1. ไปที่ Organization Settings > Actions > General
2. เลือก "Allow all actions and reusable workflows"
3. หรือเลือก "Allow select actions and reusable workflows"
4. เพิ่ม actions ที่อนุมัติใน allowlist

**ตัวอย่าง allowlist:**

- `actions/*` - GitHub-owned actions
- `aws-actions/*` - AWS actions
- `azure/*` - Azure actions
- `google-github-actions/*` - Google Cloud actions

---

## Rule 2: Review third-party actions ก่อนใช้งาน

ต้อง review third-party actions ก่อนใช้งาน

**สิ่งที่ต้องตรวจสอบ:**

- [ ] Action ถูก maintain โดย organization ที่เชื่อถือได้
- [ ] Action มีการอัปเดตอย่างสม่ำเสมอ
- [ ] Action มี documentation ที่ชัดเจน
- [ ] Action มี stars และ users ที่เพียงพอ
- [ ] Action ไม่มี security warnings
- [ ] Action ไม่ได้ถูก abandoned

**เครื่งมือช่วย review:**

- GitHub Dependabot alerts
- GitHub Advisory Database
- CodeQL analysis

---

## Rule 3: Fork risky third-party actions

สำหรับ actions ที่มีความเสี่ยง ควร fork มาเพื่อควบคุมการเปลี่ยนแปลง

**เหมาะสำหรับ:**

- Actions ที่ maintain โดย individual developers
- Actions ที่ไม่ได้รับการอัปเดตเป็นเวลานาน
- Actions ที่มีความสำคัญต่อ critical workflows

**ขั้นตอน:**

1. Fork action repository
2. Review code และ dependencies
3. Upgrade vulnerable dependencies
4. Perform security hardening
5. ใช้ forked action ใน workflows

**ข้อควรระวัง:**

- ต้อง maintain forked action อย่างสม่ำเสมอ
- ควร merge bug fixes และ security updates จาก upstream
- อาจมี cost สูงในการบำรุงรักษา

---

## Rule 4: Pin actions ด้วย full commit SHA

ต้อง pin actions ด้วย full commit SHA ไม่ใช้ version tags

**ตัวอย่างที่ไม่ดี:**

```yaml
- uses: actions/checkout@v3
```

**ตัวอย่างที่ดี:**

```yaml
- uses: actions/checkout@f43a0e5ff2bd931b8e6a1c6db00c4e9a2877c8a4
```

**ข้อดีของการใช้ commit SHA:**

- Immutable - ไม่สามารถเปลี่ยนแปลงได้
- Security - ป้องกัน supply chain attacks
- Predictable - รู้ว่าใช้ version ไหน

**ข้อเสีย:**

- ต้อง manually update เมื่อมี security patches
- ยากในการ track versions

**Compromise:**

- ใช้ version tags สำหรับ actions จาก organizations ที่เชื่อถือได้
- ใช้ commit SHA สำหรับ actions อื่นๆ

---

## Rule 5: ใช้ actions จาก organizations ที่เชื่อถือได้

ควรใช้ actions จาก organizations ที่เชื่อถือได้

**Organizations ที่แนะนำ:**

- `actions/*` - GitHub
- `aws-actions/*` - AWS
- `azure/*` - Microsoft Azure
- `google-github-actions/*` - Google Cloud
- `hashicorp/*` - HashiCorp
- `docker/*` - Docker

**Actions จาก organizations เหล่านี้มัก:**

- มี quality bar สูง
- ได้รับการ maintain อย่างสม่ำเสมอ
- มี security reviews
- มี documentation ที่ดี

---

## Rule 6: ตรวจสอบ action metadata

ต้องตรวจสอบ action metadata ก่อนใช้งาน

**สิ่งที่ต้องตรวจสอบใน `action.yml`:**

- `name` - ชื่อ action
- `description` - รายละเอียด
- `inputs` - inputs ที่รองรับ
- `outputs` - outputs ที่ส่งคืน
- `runs` - วิธีการรัน (node12, node16, composite, docker)
- `branding` - icon และ color

**ตัวอย่าง:**

```yaml
name: 'My Action'
description: 'Action description'
inputs:
  token:
    description: 'GitHub token'
    required: true
runs:
  using: 'node16'
  main: 'index.js'
```

---

## Rule 7: ตรวจสอบ action dependencies

ต้องตรวจสอบ dependencies ของ action

**สิ่งที่ต้องตรวจสอบ:**

- Dependencies ใน `package.json` หรือ `requirements.txt`
- Docker base images
- มี vulnerabilities หรือไม่
- Dependencies ถูก maintain อยู่หรือไม่

**เครื่องมือ:**

- `npm audit`
- `pip-audit`
- `docker scan`
- GitHub Dependabot

---

## Checklist

- [ ] บังคับใช้ allowlist สำหรับ third-party actions
- [ ] Review third-party actions ก่อนใช้งาน
- [ ] Fork risky third-party actions
- [ ] Pin actions ด้วย full commit SHA
- [ ] ใช้ actions จาก organizations ที่เชื่อถือได้
- [ ] ตรวจสอบ action metadata
- [ ] ตรวจสอบ action dependencies
