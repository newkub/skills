# Best Practices

## แนวทางปฏิบัติที่ดีในการใช้ Git

### Commit Best Practices

| Practice | Description |
|----------|-------------|
| **Atomic commits** | แต่ละ commit ควรทำอย่างเดียวเสร็จ |
| **Meaningful messages** | เขียน message ที่สื่อความหมาย |
| **Small commits** | commit เล็กๆ ง่ายต่อการ review และ revert |
| **Test before commit** | ตรวจสอบก่อน commit |

### Commit Message Format

```bash
# แนะนำ format
<type>: <short summary>

<body>

<footer>

# ตัวอย่าง
feat: add user authentication

- Add login form
- Implement JWT token generation
- Add logout functionality

Closes #123
```

| Type | Description |
|------|-------------|
| `feat` | Feature ใหม่ |
| `fix` | แก้ bug |
| `docs` | แก้ไขเอกสาร |
| `style` | เปลี่ยนแปลง formatting |
| `refactor` | Refactor code |
| `test` | เพิ่ม tests |
| `chore` | งานบำรุงรักษา |

### Branching Strategy

| Branch Type | Purpose | Example |
|-------------|---------|---------|
| **main** | Production code | ห้าม push โดยตรง |
| **develop** | Integration branch | รวม features ก่อน release |
| **feature/** | Development branch | `feature/user-auth` |
| **hotfix/** | Emergency fixes | `hotfix/security-patch` |
| **release/** | Release preparation | `release/v1.2.0` |

### Workflow แนะนำ

```bash
# 1. สร้าง feature branch จาก main
git checkout main
git pull
git checkout -b feature/my-feature

# 2. พัฒนาและ commit บ่อยๆ
git add .
git commit -m "feat: add feature"

# 3. Sync กับ main branch เป็นระยะ
git fetch origin
git rebase origin/main

# 4. Push และสร้าง PR
git push -u origin feature/my-feature
```

### Gitignore Best Practices

```gitignore
# Dependencies
node_modules/
vendor/

# Build outputs
dist/
build/

# IDE
.vscode/
.idea/

# Environment
.env
.env.local

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Cache
.cache/
.turbo/
```

### Security Best Practices

| Practice | Description |
|----------|-------------|
| **Never commit secrets** | ใช้ `.gitignore` และ environment variables |
| **Review before push** | ตรวจสอบ changes ก่อน push |
| **Use SSH keys** | ใช้ SSH แทน password |
| **Protect branches** | ตั้งค่า branch protection rules |
| **Sign commits** | ใช้ GPG signing สำหรับ commits สำคัญ |

### Common Pitfalls to Avoid

| Pitfall | Solution |
|---------|----------|
| **Large files in repo** | ใช้ Git LFS หรือลบ large files |
| **Committing secrets** | ใช้ `git filter-branch` หรือ BFG |
| **Force push** | หลีกเลี่ยง force push บน shared branches |
| **Merging wrong branch** | ใช้ `git reset` หรือ `git revert` |
| **Lost commits** | ใช้ `git reflog` เพื่อกู้คืน |