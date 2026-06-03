# RMUX

Terminal multiplexer สำหรับ automation ที่เขียนด้วย Rust เข้ากันได้กับ tmux และมี Rust SDK สำหรับ programmatic control

## Content Overview

| Folder | Description | Files |
|--------|-------------|-------|
| guide/ | Guides และ tutorials สำหรับเริ่มต้นใช้งาน | key-concept, all-features, installation, configuration, quick-start, best-practices, troubleshooting |
| reference/ | ลิงก์และ references จาก official sources | official |
| interface/cli/ | CLI commands และ usage | index |
| interface/programmatic-api/ | Rust SDK API documentation | index |
| interface/configuration/ | Configuration options | index |
| examples/ | ตัวอย่างการใช้งานจริง | automation, session-management, snapshots |
| rules/ | Rules และ conventions สำหรับการใช้ RMUX | naming, structure, error-handling |
| patterns/ | Design patterns สำหรับ RMUX automation | session-pattern, automation-pattern, snapshot-pattern |
| usecase/ | Use cases สำหรับสถานการณ์ต่างๆ | ci-cd, testing, orchestration |
| workflows/ | Workflows สำหรับการทำงานร่วมกับ RMUX | setup, automation, integration |
| integration/ | Integration กับ tools อื่นๆ | agents, ci-tools, editors |
| changelog/ | Version history และ changes | v0.2.0 |

## File Structure

```
rmux/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── all-features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   └── troubleshooting.md
├── reference/
│   └── official.md
├── interface/
│   ├── cli/
│   │   └── index.md
│   ├── programmatic-api/
│   │   └── index.md
│   └── configuration/
│       └── index.md
├── examples/
│   ├── automation.md
│   ├── session-management.md
│   └── snapshots.md
├── rules/
│   ├── naming.md
│   ├── structure.md
│   └── error-handling.md
├── patterns/
│   ├── session-pattern.md
│   ├── automation-pattern.md
│   └── snapshot-pattern.md
├── usecase/
│   ├── ci-cd.md
│   ├── testing.md
│   └── orchestration.md
├── workflows/
│   ├── setup.md
│   ├── automation.md
│   └── integration.md
├── integration/
│   ├── agents.md
│   ├── ci-tools.md
│   └── editors.md
└── changelog/
    └── v0.2.0.md
```

## Usage Order

1. **Start**: `guide/key-concept.md` → `guide/quick-start.md`
2. **Setup**: `guide/installation.md` → `guide/configuration.md`
3. **Learn**: `guide/all-features.md` → `guide/best-practices.md`
4. **Reference**: `interface/cli/index.md` → `interface/programmatic-api/index.md`
5. **Examples**: `examples/automation.md` → `examples/session-management.md`
6. **Advanced**: `patterns/` → `usecase/` → `workflows/`
7. **Troubleshoot**: `guide/troubleshooting.md`
