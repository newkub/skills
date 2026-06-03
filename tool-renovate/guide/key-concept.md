# Key Concept

## Renovate คืออะไร?

Renovate เป็น automated dependency update tool ที่จะสร้าง pull requests อัตโนมัติสำหรับ update dependencies, lock files และ configuration files

## หลักการทำงาน

| หลักการ | คำอธิบาย |
|---------|----------|
| **Automated Detection** | ค้นหา package files อัตโนมัติ (package.json, Gemfile, requirements.txt, etc.) |
| **Version Checking** | ตรวจสอบเวอร์ชันล่าสุดจาก registry |
| **PR Creation** | สร้าง PRs พร้อม changelog และ release notes |
| **Auto-merge** | รองรับ auto-merge สำหรับ patch/minor updates |

## รองรับ Package Managers

| Package Manager | ไฟล์ |
|-----------------|------|
| **npm** | package.json, package-lock.json |
| **Yarn** | yarn.lock |
| **pnpm** | pnpm-lock.yaml |
| **Bundler** | Gemfile, Gemfile.lock |
| **pip** | requirements.txt, Pipfile |
| **Maven** | pom.xml |
| **Gradle** | build.gradle |
| **Docker** | Dockerfile |

## Platform Support

| Platform | รายละเอียด |
|----------|-----------|
| **GitHub** | GitHub.com และ Enterprise Server |
| **GitLab** | GitLab.com และ CE/EE |
| **Bitbucket** | Cloud และ Server |
| **Azure DevOps** | Azure DevOps Services |
| **Gitea/Forgejo** | Self-hosted |

## เมื่อไหร่ควรใช้

| Use Case | คำอธิบาย |
|----------|----------|
| **Regular Updates** | ต้องการ update dependencies สม่ำเสมอ |
| **Security Fixes** | ต้องการ patch vulnerabilities เร็ว |
| **Monorepo** | มีหลาย packages ใน repo เดียว |
| **Team Workflow** | ต้องการ standardize dependency updates |
