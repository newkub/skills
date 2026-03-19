---
title: Review Container/Docker
description: ตรวจสอบ Docker images, container configuration, security และ optimization
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-container.md"
---

## Prerequisites

- เข้าใจ Docker concepts (images, containers, layers)
- รู้จัก Dockerfile best practices และ multi-stage builds
- เข้าใจ container security (distroless, non-root users)
- รู้จัก container registries และ image scanning

## 3.1 Precondition

- มี Dockerfile หรือ container configuration
- มี Docker หรือ container runtime พร้อมใช้งาน
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- อ่าน Dockerfile และ docker-compose files
- ระบุ base images ที่ใช้
- เตรียม container scanning tools (Trivy, Snyk)
- ทำ checklist ตาม container best practices

## 3.3 Execute

1. ตรวจสอบ Dockerfile structure
   - Multi-stage builds ที่เหมาะสม
   - Layer caching optimization
   - ลำดับ COPY และ RUN ที่เหมาะสม
   - ไม่มี unnecessary layers

2. ตรวจสอบ base images
   - ใช้ official images หรือ trusted sources
   - Specific version tags (ไม่ใช้ latest)
   - Minimal base images (alpine, distroless) เมื่อเป็นไปได้
   - Regular updates ของ base images

3. ตรวจสอบ security
   - Non-root user ใน container
   - ไม่มี secrets ใน images
   - Read-only filesystem (ถ้าเป็นไปได้)
   - Security scanning ผ่านไม่มี critical/high vulnerabilities
   - ไม่มี unnecessary capabilities

4. ตรวจสอบ image size
   - ใช้ multi-stage builds เพื่อลด size
   - ลบ unnecessary dependencies
   - ใช้ .dockerignore เพื่อลด build context
   - Image layers มีขนาดที่เหมาะสม

5. ตรวจสอบ health checks
   - HEALTHCHECK directive ใน Dockerfile
   - Startup probes (Kubernetes)
   - Readiness/liveness checks

6. ตรวจสอบ docker-compose (ถ้ามี)
   - Service dependencies (depends_on)
   - Environment variables จัดการถูกต้อง
   - Volume mounts ที่เหมาะสม
   - Network configuration
   - Resource limits (memory, CPU)

7. รัน security scan

   ```bash
   # ใช้ Trivy
   trivy image [image-name]

   # ใช้ Snyk
   snyk container test [image-name]
   ```

8. ทดสอบ build และ run
   - Build image ได้สำเร็จ
   - Container รันได้
   - Application ทำงานได้ภายใน container
   - Logs แสดงผลถูกต้อง

## 3.4 Validate

- [ ] ใช้ multi-stage builds ที่เหมาะสม
- [ ] Base images มาจาก trusted sources มี specific version
- [ ] รันด้วย non-root user
- [ ] ไม่มี secrets หรือ credentials ใน image
- [ ] Security scan ผ่านไม่มี critical/high vulnerabilities
- [ ] Image size optimized (ไม่เกิน reasonable limit)
- [ ] Health checks ถูกกำหนด
- [ ] docker-compose configuration ถูกต้อง

## 3.5 Verify

- [ ] Build image ใหม่สำเร็จ
- [ ] Container รันและทำงานได้ปกติ
- [ ] ทดสอบว่า health checks ทำงานได้
- [ ] ยืนยันว่าไม่มี sensitive data ใน image layers
