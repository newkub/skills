---
title: AWS SDK
description: AWS SDK for JavaScript. Use for interacting with AWS services like S3, Lambda, DynamoDB, and more from Node.js and browser applications.
auto_execution_mode: 3
---

## Goal

ใช้ AWS SDK ตาม best practices สำหรับการเชื่อมต่อกับ AWS cloud services

## Scope

ใช้สำหรับการพัฒนา applications ที่ต้องการ interact กับ AWS services เช่น S3, Lambda, DynamoDB และอื่นๆ

## Execute

- Install SDK ด้วย `bun add @aws-sdk/client-s3` สำหรับ service ที่ต้องการ
- Configure credentials ด้วย IAM roles สำหรับ production หรือ environment variables สำหรับ development
- Create client instance ด้วย `new S3Client({ region: 'us-east-1' })`
- Make API calls ด้วย command pattern เช่น `await client.send(new PutObjectCommand(...))`
- Handle errors ด้วย try-catch และใช้ built-in retry logic
- ใช้ TypeScript สำหรับ type safety และ autocomplete

## Rules

- ใช้ `bun add` หรือ `bun add -D` แทน `npm install`
- Install เฉพาะ clients ที่ต้องการ (modular v3)
- ใช้ IAM roles สำหรับ production
- ใช้ environment variables สำหรับ development
- ไม่ hardcode credentials ใน code
- Handle AWS SDK errors อย่างเหมาะสม
- Implement retry logic ด้วย built-in retries
- Log errors สำหรับ debugging
- ใช้ TypeScript สำหรับ type safety
- ใช้ streaming สำหรับ large files
- ใช้ pagination helpers สำหรับ large datasets

## Expected Outcome

- Integration กับ AWS services ที่ reliable
- Code ที่ follow best practices
- Error handling ที่ robust
- Security ที่เหมาะสม

## โครงสร้าง Directory

```
cloud-aws-sdk/
├── SKILL.md
├── guide/
├── key-concepts/
├── principles/
├── references/
├── workflows/
├── templates/
└── scripts/
```

## หมวดหมู่ไฟล์

- `SKILL.md` - ไฟล์หลักของ skill
- `guide/` - คู่มือการใช้งานและ best practices
- `key-concepts/` - แนวคิดสำคัญเกี่ยวกับ AWS SDK
- `principles/` - หลักการในการใช้ AWS SDK
- `references/` - เอกสารอ้างอิงและ API documentation
- `workflows/` - workflows สำหรับ automation
- `templates/` - templates สำหรับเริ่มต้น
- `scripts/` - scripts สำหรับ automation

## References

- [AWS SDK v3 Documentation](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/)
- [AWS SDK on NPM](https://www.npmjs.com/package/@aws-sdk)
- [AWS Documentation](https://docs.aws.amazon.com/)
