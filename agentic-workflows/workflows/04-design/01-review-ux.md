---
title: Review UX/UI
description: ตรวจสอบ user experience, user interface, accessibility และ responsive design
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-ux.md"
---

## Prerequisites

- เข้าใจ UX principles และ usability heuristics (Nielsen's 10 heuristics)
- รู้จัก accessibility standards (WCAG 2.1 AA/AAA)
- เข้าใจ responsive design และ mobile-first approach
- มีประสบการณ์กับ design systems และ component libraries

## 3.1 Precondition

- มี UI components หรือ pages ที่ต้องการตรวจสอบ
- สามารถรัน application เพื่อดู UI ได้
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- เข้าใจ user personas และ use cases ของ feature นั้น

## 3.2 Prepare

- รวบรวม design specs, mockups, หรือ Figma files (ถ้ามี)
- เตรียม accessibility testing tools (axe DevTools, WAVE, Lighthouse)
- ระบุ target devices และ screen sizes ที่ต้องรองรับ
- ทำ checklist ตาม UX heuristics และ WCAG guidelines

## 3.3 Execute

1. ตรวจสอบ visual design consistency
   - ตรวจสอบ color palette, typography, spacing สอดคล้องกับ design system
   - ดูว่า components ใช้ design tokens ที่ consistent
   - ระบุ inconsistencies ใน styles ระหว่าง pages

2. ทดสอบ accessibility (WCAG compliance)

   ```bash
   # รัน automated accessibility tests
   bunx playwright test --grep accessibility
   ```

   - ตรวจสอบ color contrast (minimum 4.5:1 for normal text)
   - ยืนยันว่าทุก interactive element มี focus indicators
   - ตรวจสอบ alt text สำหรับ images
   - ทดสอบ keyboard navigation (Tab, Enter, Escape, Arrow keys)
   - ตรวจสอบ ARIA labels และ landmarks

3. ทดสอบ responsive design
   - ใช้ Chrome DevTools Device Mode
   - ทดสอบบน breakpoints ที่สำคัญ (mobile, tablet, desktop)
   - ตรวจสอบว่า content ไม่ถูกตัดหรือ overflow
   - ดู touch targets มีขนาด minimum 44x44px หรือไม่

4. ทดสอบ usability
   - ทดสอบ user flows หลัก (onboarding, checkout, error recovery)
   - ตรวจสอบ error messages ชัดเจนและแนะนำวิธีแก้ไข
   - ดูว่ามี loading states และ empty states ที่เหมาะสม
   - ตรวจสอบ feedback สำหรับ user actions (success, error, progress)

5. ตรวจสอบ performance perception
   - ดู skeleton screens หรือ loading placeholders
   - ตรวจสอบ progressive loading
   - ดูว่ามี perceived performance optimizations

6. หา common UX issues
   - Form validation ที่ real-time และ clear
   - ไม่มี unexpected behavior (buttons ที่ดู disabled แต่กดได้)
   - ข้อความ error ที่ friendly และ actionable
   - Navigation ที่ intuitive และ discoverable

## 3.4 Validate

- [ ] Design เป็นไปตาม design system และ consistent ทั้ง project
- [ ] ผ่าน automated accessibility tests ไม่มี critical issues
- [ ] Color contrast ผ่าน WCAG AA standards
- [ ] Keyboard navigation ใช้งานได้ครบทุก feature
- [ ] Responsive บนทุก target screen sizes
- [ ] Touch targets มีขนาดเหมาะสมสำหรับ mobile
- [ ] Error handling มี UX ที่ดี (ชัดเจน, actionable, friendly)
- [ ] Loading states และ empty states มีการจัดการ

## 3.5 Verify

- [ ] ยืนยันว่า UI ทำงานได้บน browsers ที่รองรับ
- [ ] ทดสอบการทำงานด้วย screen readers (NVDA, VoiceOver)
- [ ] ตรวจสอบว่าไม่มี visual regressions จากการแก้ไข
