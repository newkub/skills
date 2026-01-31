# GitHub Actions Skill

## Description
แนวทางการพัฒนาและจัดการ GitHub Actions workflows ตาม best practices สำหรับความปลอดภัย ประสิทธิภาพ และการบำรุงรักษา

## When to Use
- เมื่อต้องสร้างหรือแก้ไข GitHub Actions workflows
- เมื่อต้องตรวจสอบความปลอดภัยของ workflows
- เมื่อต้องปรับปรุงประสิทธิภาพของ CI/CD pipelines
- เมื่อต้องจัดการ secrets และ permissions
- เมื่อต้องใช้งาน third-party actions

## Best Practices

### 1. Secrets Management
- **ใช้ OpenID Connect (OIDC)** แทน secrets โดยตรงเมื่อเป็นไปได้
- **ตั้งค่า GITHUB_TOKEN permissions** เป็น least-privileged
- **ใช้ environment secrets** พร้อม mandatory reviews
- **Rotate secrets** อย่างสม่ำเสมอ
- **หลีกเลี่ยงการพิมพ์ secrets** ใน logs
- **หลีกเลี่ยงการใช้ structured data** เป็น secrets
- **Scan logs** สำหรับ secrets และ sensitive information

### 2. Third-party Actions Governance
- **บังคับใช้ allowlist** สำหรับ third-party actions
- **Review third-party actions** ก่อนใช้งาน
- **Fork risky actions** สำหรับการควบคุมการเปลี่ยนแปลง
- **Pin actions** ด้วย full commit SHA (ไม่ใช้ version tags)
- **ใช้ actions** จาก organizations ที่เชื่อถือได้ (GitHub, Microsoft, AWS, Google)

### 3. Workflow Change Management
- **ใช้ reusable workflows** สำหรับ scenarios ทั่วไป
- **รัน sensitive workflows** เฉพาะบน trusted code
- **เปิดใช้ Dependabot** สำหรับ updates
- **เปิดใช้ Branch Protection** สำหรับทุก code changes
- **ใช้ CODEOWNERS** สำหรับ workflows
- **ป้องกัน Actions** จากการสร้าง/approve pull requests
- **ปิด workflow runs** จาก forked repositories ถ้าไม่จำเป็น

### 4. Performance & Efficiency
- **เก็บ Actions ให้เล็กที่สุด**
- **หลีกเลี่ยงการติดตั้ง dependencies** ที่ไม่จำเป็น
- **ใช้ caching mechanism** (actions/cache)
- **ใช้ lightweight Docker images** (alpine, alpine-node)
- **จำกัด environment variables** ให้มี scope แคบที่สุด

### 5. Security
- **ใช้ Harden-Runner** สำหรับ runtime security
- **รักษาความปลอดภัย infrastructure** สำหรับ self-hosted runners
- **ใช้ ephemeral runners** สำหรับ self-hosted
- **หลีกเลี่ยง self-hosted runners** บน public repositories
- **Harden runner images** สำหรับ self-hosted

## Rules
ดู rules เพิ่มเติมใน `rules/` directory:
- `secrets-management.md` - การจัดการ secrets
- `third-party-actions.md` - การใช้งาน third-party actions
- `workflow-security.md` - ความปลอดภัยของ workflows
- `performance-optimization.md` - การปรับปรุงประสิทธิภาพ
- `self-hosted-runners.md` - การจัดการ self-hosted runners

## Resources
- [GitHub Actions Security Best Practices](https://www.stepsecurity.io/blog/github-actions-security-best-practices)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Security Cheat Sheet](https://blog.gitguardian.com/github-actions-security-cheat-sheet/)