---
title: Review Mobile Development
description: ตรวจสอบ mobile apps (iOS/Android), React Native, Flutter และ mobile best practices
auto_execution_mode: 3
file-patterns:
  - "**/workflows/01-lang/*-review-mobile.md"
---

## Prerequisites

- เข้าใจ mobile development (iOS, Android, React Native, Flutter)
- รู้จัก mobile UI guidelines (Material Design, Human Interface)
- เข้าใจ mobile performance และ battery optimization
- รู้จัก mobile security และ data storage

## 3.1 Precondition

- มี mobile codebase หรือ project
- มี development environment สำหรับ mobile (Xcode, Android Studio)
- มีสิทธิ์อ่าน/เขียนไฟล์ใน project directory

## 3.2 Prepare

- ระบุ platform (iOS, Android, cross-platform)
- อ่าน project structure และ dependencies
- เตรียม mobile testing tools (simulator, emulator, physical devices)
- ทำ checklist ตาม mobile best practices

## 3.3 Execute

1. ตรวจสอบ platform-specific guidelines
   - Material Design (Android)
   - Human Interface Guidelines (iOS)
   - Navigation patterns (tabs, drawers, stacks)
   - Platform-specific components

2. ตรวจสอบ performance
   - App launch time
   - Memory usage
   - Battery consumption
   - Frame rates (60fps target)
   - Bundle size (APK/IPA)

3. ตรวจสอบ mobile security
   - Local storage encryption (Keychain, Keystore)
   - Certificate pinning
   - Biometric authentication
   - Jailbreak/root detection
   - OWASP Mobile Top 10

4. ตรวจสอบ responsive และ adaptive UI
   - Screen sizes และ orientations
   - Safe areas (notch, rounded corners)
   - Dark mode support
   - Accessibility (VoiceOver, TalkBack)

5. ตรวจสอบ offline capabilities
   - Data caching strategies
   - Offline-first architecture
   - Sync mechanisms
   - Conflict resolution

6. ตรวจสอบ push notifications
   - Permission handling
   - Notification content
   - Deep linking
   - Badge counts

7. ตรวจสอบ native modules (ถ้าเป็น cross-platform)
   - Platform channel implementations
   - Native bridge performance
   - Code reuse ที่เหมาะสม

## 3.4 Validate

- [ ] UI เป็นไปตาม platform guidelines
- [ ] App performance ผ่าน benchmarks
- [ ] Security practices ใช้งานถูกต้อง
- [ ] Responsive บนทุก screen sizes
- [ ] Offline capabilities ทำงานได้
- [ ] Push notifications ทำงานถูกต้อง
- [ ] Bundle size อยู่ใน reasonable limits
- [ ] Accessibility features ทำงานได้

## 3.5 Verify

- [ ] App build และ run ได้บน simulator/emulator
- [ ] ทดสอบบน physical devices
- [ ] ทดสอบ on different OS versions
- [ ] App store submission requirements ผ่าน
