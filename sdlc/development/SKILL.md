---
title: Development
description: พัฒนา features และ modules ตาม Clean Architecture
auto_execution_mode: 3
---

## Goal

พัฒนา features และ modules ตาม Clean Architecture อย่างมีคุณภาพ

## Scope

ใช้สำหรับพัฒนา features ใหม่ หรือ modules ใหม่

## Execute

### 1. Domain Layer Development

พัฒนา domain layer

- กำหนด domain types และ models
- Implement domain operations (business logic)
- Implement domain events
- Implement domain validators
- กำหนด domain errors (DomainError)

### 2. Application Layer Development

พัฒนา application layer

- Implement use cases
- Implement workflows
- Implement application services
- กำหนด DTOs และ mappers

### 3. Infrastructure Layer Development

พัฒนา infrastructure layer

- Implement database adapters (Drizzle/Prisma)
- Implement external service adapters (Stripe API)
- Implement cache adapters (Redis/Upstash)
- Implement file storage adapters (S3/R2)
- Implement message queue adapters (BullMQ/SQS)

### 4. Presentation Layer Development

พัฒนา presentation layer

- Implement CLI commands (ถ้า CLI)
- Implement HTTP handlers (ถ้า API)
- Implement UI components (ถ้า Web)
- Implement composables (ถ้า Vue/Nuxt)

### 5. Testing Development

เขียน tests

- เขียน unit tests สำหรับ domain logic
- เขียน integration tests สำหรับ adapters
- เขียน E2E tests สำหรับ critical flows
- Setup test fixtures และ mocks
- Configure test coverage reporting

### 6. Code Quality

ปรับปรุงคุณภาพโค้ด

- รัน linting (Biome/ESLint)
- รัน type checking (TypeScript)
- Apply code formatting
- Review code complexity
- Refactor long functions (>50 lines)
- Split long files (>250 lines)

## Rules

### 1. Follow Clean Architecture

ต้องทำตาม Clean Architecture

- ทำตาม `/follow-clean-architecture`
- Domain layer ต้องไม่มี dependencies ภายนอก
- Infrastructure layer ต้อง implement ports เท่านั้น

### 2. Use Existing Workflows

ใช้ workflows ที่มีอยู่แล้ว

- ทำตาม `/follow-ts` สำหรับ TypeScript
- ทำตาม `/follow-biome` สำหรับ linting
- ทำตาม `/follow-vitest` สำหรับ testing
- ทำตาม `/follow-drizzle` สำหรับ database

### 3. Test First

เขียน tests ก่อนหรือ parallel กับ development

- เขียน unit tests สำหรับ domain logic
- เขียน integration tests สำหรับ adapters
- รัน tests บ่อยๆ

## Expected Outcome

- Domain layer พัฒนาเสร็จ
- Application layer พัฒนาเสร็จ
- Infrastructure layer พัฒนาเสร็จ
- Presentation layer พัฒนาเสร็จ
- Tests เขียนครบถ้วน
- Code quality ผ่านมาตรฐาน
