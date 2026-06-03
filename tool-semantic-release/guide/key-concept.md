# Key Concept

## Semantic-release คืออะไร?

semantic-release เป็น automated version management และ package publishing tool ที่ใช้ conventional commits เพื่อตัดสินใจ version bump อัตโนมัติตาม semantic versioning spec

## Semantic Versioning

รูปแบบเวอร์ชัน: `MAJOR.MINOR.PATCH`

| ประเภท | คำอธิบาย | ตัวอย่าง |
|--------|----------|----------|
| **Major** | Breaking changes | 1.0.0 → 2.0.0 |
| **Minor** | New features (compatible) | 1.0.0 → 1.1.0 |
| **Patch** | Bug fixes | 1.0.0 → 1.0.1 |

## Conventional Commits

รูปแบบ commit message ที่ semantic-release ใช้วิเคราะห์:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

| Type | Version | คำอธิบาย |
|------|---------|----------|
| `feat` | minor | เพิ่ม feature ใหม่ |
| `fix` | patch | แก้ bug |
| `perf` | patch | ปรับปรุง performance |
| `refactor` | patch | ปรับ code |
| `docs` | patch | แก้ไข docs |
| `test` | patch | เพิ่ม tests |
| `chore` | patch | maintenance |
| `BREAKING CHANGE` | major | breaking change |

## Plugin System

| Plugin | หน้าที่ |
|--------|--------|
| `@semantic-release/commit-analyzer` | วิเคราะห์ commit messages |
| `@semantic-release/release-notes-generator` | สร้าง release notes |
| `@semantic-release/npm` | publish ไปยัง npm |
| `@semantic-release/github` | สร้าง GitHub release |
| `@semantic-release/changelog` | สร้าง CHANGELOG.md |
| `@semantic-release/git` | commit และ push tags |
