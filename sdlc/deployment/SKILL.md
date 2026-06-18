---
title: Deployment
description: Deploy ไป production อย่างปลอดภัยและถูกต้อง
auto_execution_mode: 3
---

## Goal

Deploy ไป production อย่างปลอดภัยและถูกต้อง

## Scope

ใช้สำหรับ deploy library หรือ application ไป production

## Execute

### 1. Pre-Deployment Checks

ตรวจสอบก่อน deploy

- Verify ทุก tests ผ่าน
- Verify build สำเร็จ
- Verify version number ถูกต้อง
- Verify changelog อัพเดทแล้ว
- Verify ไม่มี uncommitted changes

### 2. Package Publishing (Library)

Publish library ไป bun

- Build distribution package
- Verify `package.json` fields (name, version, exports)
- รัน dry-run publish
- Publish ไป bun registry
- Verify package พร้อมใช้งาน

### 3. Application Deployment (Web/Server)

Deploy web application

- Build production bundle
- Deploy ไป hosting platform (Vercel/Cloudflare/Netlify)
- Configure environment variables
- Configure domain & SSL
- Verify deployment ใช้งานได้

### 4. Container Deployment (Docker)

Deploy ด้วย Docker

- Build Docker image
- Push ไป container registry (Docker Hub/GHCR)
- Deploy ไป container orchestration (Kubernetes/Docker Compose)
- Verify container รันอยู่

### 5. Serverless Deployment

Deploy serverless functions

- Build worker function
- Deploy ไป platform (Cloudflare Workers/Lambda)
- Configure bindings & secrets
- Verify function ใช้งานได้

## Rules

### 1. Use Existing Workflows

ใช้ workflows ที่มีอยู่แล้ว

- ทำตาม `/run-deploy` สำหรับ deployment
- ทำตาม `/follow-deploy-to-cloudflare` สำหรับ Cloudflare
- ทำตาม `/follow-deploy-to-vercel` สำหรับ Vercel

### 2. Verify Deployment

ต้อง verify deployment

- Verify ว่า deployment สำเร็จ
- Verify ว่า application ใช้งานได้
- Verify ว่า environment variables ถูกต้อง
- Verify ว่า domain ใช้งานได้

### 3. Rollback Plan

ต้องมี rollback plan

- บันทึก version ก่อนหน้า
- บันทึก rollback steps
- Test rollback process

## Expected Outcome

- Pre-deployment checks ผ่าน
- Package publishing สำเร็จ (ถ้า library)
- Application deployment สำเร็จ (ถ้า web)
- Container deployment สำเร็จ (ถ้า docker)
- Serverless deployment สำเร็จ (ถ้า serverless)
- Deployment ใช้งานได้
- Rollback plan พร้อม
