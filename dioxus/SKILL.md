# Dioxus

Dioxus เป็น fullstack cross-platform framework สำหรับ Rust ที่ช่วยให้คุณสร้าง applications สำหรับ web, desktop, และ mobile ด้วย codebase เดียว

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | CRITICAL | [1-dioxus-component-structure.md](./rules/1-dioxus-component-structure.md) | Component Structure and Best Practices | กฎเกี่ยวกับโครงสร้างและ best practices สำหรับ Dioxus components | dioxus- | เมื่อสร้าง components ใหม่ |
| 2 | HIGH | [2-dioxus-performance-optimization.md](./rules/2-dioxus-performance-optimization.md) | Performance Optimization | กฎเกี่ยวกับการปรับปรุง performance ของ Dioxus applications | dioxus- | เมื่อต้องการ optimize performance |
| 3 | MEDIUM | [3-dioxus-cross-platform-development.md](./rules/3-dioxus-cross-platform-development.md) | Cross-Platform Development | กฎเกี่ยวกับการพัฒนา cross-platform applications ด้วย Dioxus | dioxus- | เมื่อพัฒนา cross-platform apps |

## Scripts

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | CRITICAL | [1-dioxus-init.sh](./scripts/1-dioxus-init.sh) | Initialize Dioxus Project | สร้าง Dioxus project ใหม่ด้วย dx CLI | dioxus- | เมื่อต้องการสร้าง project ใหม่ |
| 2 | HIGH | [2-dioxus-dev.sh](./scripts/2-dioxus-dev.sh) | Start Development Server | เริ่ม development server สำหรับ Dioxus | dioxus- | เมื่อต้องการเริ่ม development |
| 3 | MEDIUM | [3-dioxus-build.sh](./scripts/3-dioxus-build.sh) | Build for Production | Build Dioxus application สำหรับ production | dioxus- | เมื่อต้องการ build สำหรับ production |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [dioxus-core-concepts.md](./knowledge/dioxus-core-concepts.md) | Dioxus Core Concepts | ความรู้พื้นฐานเกี่ยวกับ Dioxus framework | dioxus- |
| [dioxus-ecosystem.md](./knowledge/dioxus-ecosystem.md) | Dioxus Ecosystem | ความรู้เกี่ยวกับ ecosystem และ tools ของ Dioxus | dioxus- |

## Rules Explanation

### 1. Component Structure and Best Practices

**[1-dioxus-component-structure.md](./rules/1-dioxus-component-structure.md)** ประกอบด้วย:
- Component naming conventions (PascalCase)
- Props structure และ memoization
- Component composition principles
- State management with signals
- Hooks usage rules (Rules of Hooks)

**เมื่อใช้**: สร้าง components ใหม่, จัดโครงสร้าง components, ใช้ hooks

### 2. Performance Optimization

**[2-dioxus-performance-optimization.md](./rules/2-dioxus-performance-optimization.md)** ประกอบด้วย:
- Memoization strategies สำหรับ props และ components
- List rendering ด้วย keys
- Asset optimization
- Async operations ด้วย use_resource
- Web bundle size optimization

**เมื่อใช้**: ต้องการ optimize performance, ปรับปรุง load times, reduce bundle size

### 3. Cross-Platform Development

**[3-dioxus-cross-platform-development.md](./rules/3-dioxus-cross-platform-development.md)** ประกอบด้วย:
- Platform-specific code ด้วย conditional compilation
- Asset management สำหรับ cross-platform
- Responsive design สำหรับ desktop/mobile
- Platform testing strategies
- CLI usage สำหรับ different platforms

**เมื่อใช้**: พัฒนา cross-platform apps, handle platform differences, deploy ไปยังหลาย platforms

## Scripts Explanation

### 1. Initialize Dioxus Project

**[1-dioxus-init.sh](./scripts/1-dioxus-init.sh)** สร้าง Dioxus project ใหม่:
- ใช้ `dx new` command
- Set up project structure
- Provide next steps instructions

**เมื่อใช้**: ต้องการสร้าง Dioxus project ใหม่

### 2. Start Development Server

**[2-dioxus-dev.sh](./scripts/2-dioxus-dev.sh)** เริ่ม development server:
- รองรับหลาย platforms (web, desktop, mobile)
- Enable hot reloading
- Provide live updates

**เมื่อใช้**: ต้องการเริ่ม development, test changes

### 3. Build for Production

**[3-dioxus-build.sh](./scripts/3-dioxus-build.sh)** Build สำหรับ production:
- Platform-specific optimization
- WASM optimization สำหรับ web
- Native bundling สำหรับ desktop/mobile

**เมื่อใช้**: ต้องการ deploy ไปยัง production, create release builds

## Knowledge Explanation

### 1. Dioxus Core Concepts

**[dioxus-core-concepts.md](./knowledge/dioxus-core-concepts.md)** ครอบคลุม:
- Virtual DOM และ rendering
- RSX (Rust Syntax Extension)
- Components และ props
- Signals สำหรับ state management
- Hooks สำหรับ reusable logic
- Platform support (web, desktop, mobile)

**เมื่อใช้**: เรียนรู้ Dioxus, เข้าใจ core concepts, อ้างอิง documentation

### 2. Dioxus Ecosystem

**[dioxus-ecosystem.md](./knowledge/dioxus-ecosystem.md)** ครอบคลุม:
- CLI tool (dx) และ commands
- Renderers (web, desktop, mobile)
- Key libraries และ dependencies
- Configuration (dx.toml, Cargo.toml)
- Development tools (hot reloading, linting, bundling)
- Community resources

**เมื่อใช้**: เรียนรู้ tools, configure projects, เข้าถึง community resources

## How to Use This Skill

1. **เริ่มต้น**: อ่าน [dioxus-core-concepts.md](./knowledge/dioxus-core-concepts.md) เพื่อเข้าใจพื้นฐาน
2. **สร้าง Project**: ใช้ [1-dioxus-init.sh](./scripts/1-dioxus-init.sh) สร้าง project ใหม่
3. **พัฒนา**: อ่าน [1-dioxus-component-structure.md](./rules/1-dioxus-component-structure.md) สำหรับ component structure
4. **Optimize**: ดู [2-dioxus-performance-optimization.md](./rules/2-dioxus-performance-optimization.md) สำหรับ performance tips
5. **Cross-Platform**: ดู [3-dioxus-cross-platform-development.md](./rules/3-dioxus-cross-platform-development.md) สำหรับ multi-platform
6. **Deploy**: ใช้ [3-dioxus-build.sh](./scripts/3-dioxus-build.sh) สำหรับ production builds

## References

- [Dioxus Official Website](https://dioxuslabs.com/)
- [Dioxus Documentation](https://dioxuslabs.com/learn/0.7/)
- [Dioxus on GitHub](https://github.com/DioxusLabs/dioxus)
- [Dioxus on docs.rs](https://docs.rs/dioxus/)
- [Dioxus Discord](https://discord.gg/XgGxMSkvUM)
