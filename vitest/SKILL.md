# Vitest

Vitest is a next-generation testing framework powered by Vite, designed to provide a fast, modern testing experience with native ESM support. It leverages Vite's transformation pipeline and plugin ecosystem to ensure that your tests run in the same environment as your application code.

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน Vitest |
| **Guide** | guide/configuration.md | การตั้งค่า configuration |
| **Guide** | guide/testing-api.md | Testing API และ assertions |
| **Guide** | guide/mocking.md | Mocking และ spying |
| **Guide** | guide/coverage.md | Code coverage |
| **Guide** | guide/browser-testing.md | การทดสอบใน browser |
| **Reference** | reference/cli.md | CLI commands |
| **Reference** | reference/config.md | Configuration options |
| **Reference** | reference/api.md | API reference |

## คุณสมบัติหลัก

- **Vite-native**: ใช้ Vite's transformation pipeline และ plugin ecosystem
- **Watch Mode**: ใช้ Vite's HMR และ dependency graph เพื่อรัน tests ที่ได้รับผลกระทบเท่านั้น
- **Coverage**: รองรับ V8 (native) และ Istanbul providers
- **Mocking**: Integrated `vi` utility สำหรับ functions, timers, และ modules
- **Browser Testing**: รัน tests ใน real browsers ผ่าน Playwright หรือ WebdriverIO
- **Snapshot Testing**: Jest-compatible snapshots พร้อม custom serializers
- **Type Testing**: รองรับการทดสอบ TypeScript types

## โครงสร้าง Monorepo

Vitest เป็น pnpm workspace ที่มี packages อยู่ใน `packages/` directory:

- `vitest`: Main entry point สำหรับ CLI, Node.js API, และ core logic
- `@vitest/runner`: Test runner ที่จัดการ task tree (Suites และ Tests)
- `@vitest/mocker`: จัดการ module mocking และ interception ผ่าน `vi.mock()`
- `@vitest/expect`: Implement `expect()` assertion API
- `@vitest/snapshot`: จัดการ snapshot state, matching, และ serialization
- `@vitest/utils`: Shared internal utilities
- `@vitest/browser`: Orchestrates tests ใน real browsers
- `@vitest/ui`: Vue-based web dashboard สำหรับ interactive test management
- `@vitest/coverage-istanbul`: Code coverage collection ผ่าน Istanbul
- `@vitest/ws-client`: WebSocket client สำหรับ communication ระหว่าง Vitest server และ external clients

## การเชื่อมต่อกับ Vite

- **ViteDevServer**: Vitest starts a Vite development server เพื่อ handle module resolution และ transformation
- **Shared Configuration**: ใช้ `vitest.config.ts` (หรือ `vite.config.ts`) สำหรับจัดการทั้ง app และ test settings
- **Plugin Compatibility**: Vite plugins ที่ใช้ใน project จะถูก apply อัตโนมัติกับ test files
- **Vite-Node**: ใช้ `vite-node` logic เพื่อ execute transformed modules โดยตรงใน Node.js โดยไม่ต้อง build แยก
