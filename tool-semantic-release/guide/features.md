# All Features

## ฟีเจอร์หลัก

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| **Automated Versioning** | กำหนด version อัตโนมัติจาก commits |
| **Semantic Versioning** | ปฏิบัติตาม semver spec อย่างเคร่งครัด |
| **Conventional Commits** | วิเคราะห์ commit format |
| **Changelog** | สร้าง changelog อัตโนมัติ |
| **CI/CD Integration** | รันหลัง build สำเร็จ |

## ฟีเจอร์สำหรับ Plugins

| Plugin | คำอธิบาย |
|--------|----------|
| **Commit Analyzer** | วิเคราะห์ commit messages |
| **Release Notes** | สร้าง release notes |
| **NPM Publish** | publish ไปยัง npm registry |
| **GitHub Releases** | สร้าง GitHub releases |
| **GitLab Releases** | สร้าง GitLab releases |
| **Changelog** | สร้าง CHANGELOG.md |

## ฟีเจอร์สำหรับ Branches

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| **Main Branch** | release หลักจาก main |
| **Stable Branch** | release จาก stable |
| **Pre-release** | alpha, beta, rc versions |
| **Maintenance** | release จาก version branches |

## ฟีเจอร์เพิ่มเติม

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| **Shareable Configs** | ใช้ config ที่ share ได้ |
| **Dry Run** | ทดสอบโดยไม่ publish |
| **Debug Mode** | debug ด้วย DEBUG flag |
| **Commit Signing** | sign commits ด้วย GPG |
| **Tag Signing** | sign tags ด้วย GPG |

## CI/CD Integration

| Platform | Configuration |
|----------|---------------|
| **GitHub Actions** | `GITHUB_TOKEN` environment |
| **GitLab CI** | `GITLAB_TOKEN` environment |
| **Travis CI** | CI environment variable |
| **CircleCI** | CI environment variable |
