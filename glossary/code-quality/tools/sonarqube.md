# SonarQube

## คำอธิบาย
Platform สำหรับตรวจสอบคุณภาพโค้ดและ security อย่างครบวงจร

## ลักษณะเฉพาะ
- **Comprehensive Analysis**: วิเคราะห์คุณภาพโค้ดทุกมิติ
- **Security Scanning**: ตรวจสอบ vulnerabilities และ security issues
- **Quality Gates**: กำหนดเกณฑ์คุณภาพโค้ด
- **Technical Debt**: วัดและติดตาม technical debt

## คุณสมบัติหลัก
- **Code Quality Metrics**: Complexity, duplication, coverage
- **Security Vulnerabilities**: OWASP Top 10, security hotspots
- **Multi-language**: รองรับ 25+ ภาษา
- **CI/CD Integration**: ทำงานร่วมกับ build pipelines

## ตัวอย่างการใช้งาน
```bash
# Scan project
sonar-scanner \
  -Dsonar.projectKey=my-project \
  -Dsonar.sources=src \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=your-token

# Quality Gate example
- Coverage > 80%
- No new vulnerabilities
- Maintainability Rating A
- Reliability Rating A
```

## ข้อดี
- Comprehensive analysis
- Security focus
- Quality metrics
- Team collaboration

## ข้อเสีย
- Complex setup
- Resource intensive
- Commercial features cost
- Learning curve

## เหมาะกับ
- Enterprise applications
- Security-critical projects
- Quality assurance
- Large development teams

---

**หมวดหมู่**: Code Quality Tools
