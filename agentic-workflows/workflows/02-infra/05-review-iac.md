---
title: Review Infrastructure as Code
description: ตรวจสอบ Terraform, Pulumi, CloudFormation และ IaC best practices
auto_execution_mode: 3
file-patterns:
  - "**/workflows/02-infra/*-review-iac.md"
---

## Prerequisites

- เข้าใจ Infrastructure as Code concepts
- รู้จัก Terraform, Pulumi, CloudFormation หรือ CDK
- เข้าใจ cloud services (AWS, Azure, GCP)
- รู้จัก state management และ remote backends

## 3.1 Precondition

- มี IaC configuration files
- มี cloud provider access
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน existing IaC files
- ระบุ cloud provider และ services
- เตรียม IaC validation tools (terraform validate, tflint)
- ทำ checklist ตาม IaC best practices

## 3.3 Execute

1. ตรวจสอบ code structure
   - Modular architecture
   - Reusable modules
   - Consistent naming conventions
   - Directory structure ที่เหมาะสม

2. ตรวจสอบ state management
   - Remote state backend
   - State locking mechanism
   - State encryption
   - State versioning

3. ตรวจสอบ security
   - ไม่มี hardcoded credentials
   - Secrets management (Vault, AWS Secrets Manager)
   - IAM policies least privilege
   - Security groups/firewall rules
   - Encryption at rest และ in transit

4. ตรวจสอบ variables และ outputs
   - Input validation
   - Type constraints
   - Default values
   - Sensitive outputs marked

5. ตรวจสอบ resource naming
   - Naming conventions consistent
   - Environment tags
   - Resource tagging strategy
   - Cost allocation tags

6. รัน validation tools

   ```bash
   # Terraform
   terraform validate
   terraform fmt -check
   tflint

   # Security scanning
   tfsec
   checkov
   ```

7. ตรวจสอบ drift detection
   - Planned changes ตรงกับ intentions
   - No unexpected replacements
   - Resource dependencies ถูกต้อง

8. ตรวจสอบ documentation
   - README สำหรับ modules
   - Input/output documentation
   - Architecture diagrams
   - Deployment instructions

## 3.4 Validate

- [ ] ใช้ modular architecture
- [ ] Remote state backend กำหนดถูกต้อง
- [ ] ไม่มี hardcoded secrets
- [ ] IAM policies ใช้ least privilege
- [ ] Validation tools ผ่านไม่มี errors
- [ ] Security scanning ผ่านไม่มี critical issues
- [ ] Variables มี validation และ documentation
- [ ] Resources มี tagging ครบถ้วน

## 3.5 Verify

- [ ] รัน terraform plan ดู changes
- [ ] ทดสอบ apply บน non-production environment
- [ ] ตรวจสอบว่า resources สร้างถูกต้อง
- [ ] Validate cost estimates
