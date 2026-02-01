# Branching Strategy Best Practices

## Git Flow
- `main`: production code
- `develop`: development code
- `feature/*`: ฟีเจอร์ใหม่
- `release/*`: เตรียม release
- `hotfix/*`: แก้ไขปัญหาเร่งด่วน

## GitHub Flow
- `main`: production code
- `feature/*`: ฟีเจร์ใหม่
- Pull Request สำหรับ review
- Merge หลัง approve

## GitLab Flow
- `main`: production code
- `environment/*`: สำหรับ environments
- Feature branches สำหรับ development

## Best Practices
1. **Branch Naming**
   - `feature/user-authentication`
   - `fix/login-validation`
   - `hotfix/security-patch`

2. **Branch Lifecycle**
   - สร้าง branch จาก main/develop
   - ทำงานบน feature branch
   - สร้าง pull request
   - Review และ merge
   - ลบ feature branch

3. **Protection Rules**
   - ป้องกันการ push โดยตรงไป main
   - ต้องมี review ก่อน merge
   - ต้องผ่าน CI/CD tests
