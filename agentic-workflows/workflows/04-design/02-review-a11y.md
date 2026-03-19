---
title: Review Accessibility
description: ตรวจสอบ accessibility compliance, WCAG standards และ inclusive design
auto_execution_mode: 3
file-patterns:
  - "**/workflows/review-a11y.md"
---

## Prerequisites

- เข้าใจ WCAG 2.1/2.2 guidelines (AA และ AAA levels)
- รู้จัก accessibility testing tools (axe, Lighthouse, WAVE, screen readers)
- เข้าใจ semantic HTML และ ARIA best practices
- รู้จัก keyboard navigation และ focus management

## 3.1 Precondition

- มี UI หรือ web application ที่สามารถรันได้
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory
- Browsers และ accessibility tools พร้อมใช้งาน

## 3.2 Prepare

- รวบรวม accessibility testing tools
- ระบุ target WCAG level (AA หรือ AAA)
- เตรียม keyboard สำหรับ manual testing
- ทำ checklist ตาม WCAG guidelines

## 3.3 Execute

1. รัน automated accessibility tests

   ```bash
   # ใช้ axe-core ผ่าน Playwright
   bunx playwright test --grep accessibility

   # หรือ Lighthouse CI
   lhci autorun
   ```

2. ตรวจสอบ keyboard navigation
   - ใช้ Tab key เพื่อ navigate ทั้งหน้า
   - ยืนยันว่าทุก interactive element รับ focus
   - ตรวจสอบ focus order มี logic
   - ทดสอบ Escape, Enter, Space, Arrow keys
   - ดูว่ามี skip links หรือไม่

3. ตรวจสอบ visual accessibility
   - Color contrast ratio (4.5:1 สำหรับ normal text, 3:1 สำหรับ large text)
   - ไม่มี content ที่อาศัย color เพียงอย่างเดียว
   - Focus indicators ชัดเจน
   - Text สามารถ resize ได้ 200% โดยไม่สูญเสีย functionality
   - ไม่มี flashing content ที่อาจก่อให้เกิด seizures

4. ตรวจสอบ semantic HTML
   - ใช้ heading hierarchy ที่ถูกต้อง (h1 → h2 → h3)
   - ใช้ landmark elements (nav, main, aside, header, footer)
   - Form labels ผูกกับ inputs ถูกต้อง
   - Lists ใช้ ol/ul/li อย่างเหมาะสม
   - Tables มี proper headers

5. ตรวจสอบ ARIA
   - ใช้ ARIA attributes เฉพาะเมื่อจำเป็น
   - ARIA labels สำหรับ icon buttons
   - ARIA live regions สำหรับ dynamic updates
   - Role attributes ถูกต้อง
   - ARIA states (aria-expanded, aria-selected, etc.)

6. ตรวจสอบ screen reader compatibility
   - Alt text สำหรับ images (meaningful หรือ empty ถ้า decorative)
   - ไม่มี unlabeled buttons/links
   - Complex widgets มี proper announcements
   - Error messages ถูกอ่านโดย screen reader

7. ทดสอบด้วย screen readers
   - NVDA (Windows) หรือ VoiceOver (macOS)
   - ทดสอบ user flows หลัก
   - ดูว่ามี confusing announcements หรือไม่

## 3.4 Validate

- [ ] Automated accessibility tests ผ่านไม่มี violations
- [ ] ทุก interactive element ใช้งานได้ด้วย keyboard
- [ ] Focus order มี logic และ visible
- [ ] Color contrast ผ่าน WCAG AA standards
- [ ] ไม่มี content ที่อาศัย color เพียงอย่างเดียว
- [ ] Semantic HTML ใช้งานถูกต้อง
- [ ] ARIA attributes ใช้เหมาะสม
- [ ] Alt text ครบถ้วนและ meaningful
- [ ] Complex components ทำงานได้กับ screen readers

## 3.5 Verify

- [ ] ทดสอบบน screen readers หลัก (NVDA, VoiceOver, JAWS)
- [ ] ตรวจสอบว่า accessibility fixes ไม่พัง functionality
- [ ] ทดสอบด้วย users ที่มี disabilities (ถ้าเป็นไปได้)
