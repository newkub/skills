# Continuous Deployment vs Continuous Delivery

## เปรียบเทียบ

| หัวข้อ | Continuous Deployment (CD) | Continuous Delivery |
|--------|---------------------------|---------------------|
| **Release** | Automatic to production | Manual gate to production |
| **Approval** | Automated checks only | Human approval required |
| **Risk** | Higher, requires quality | Lower, final human check |
| **Speed** | Minutes to production | Hours/days to production |
| **Quality Gates** | Automated tests, monitoring | Same + manual QA |
| **Rollbacks** | Automated | Manual decision |
| **Trust** | High in automation | Moderate |
| **Use Case** | SaaS, web apps | Mobile, enterprise, regulated |
| **Branch** | Main only | Release branches possible |
| **Confidence** | Requires 100% automated coverage | Tolerates some manual testing |

## เมื่อไหร่ใช้อะไร

- **Continuous Deployment**: Web apps, mature teams, high automation
- **Continuous Delivery**: Mobile apps, regulated, compliance requirements

---

**หมวดหมู่**: Deployment & Delivery
