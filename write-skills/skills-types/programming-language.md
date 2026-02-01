# Programming Language Type

สร้าง programming language skills ด้วยโครงสร้างนี้

## Required files
- `SKILL.md` - Main documentation file

### Getting Started
- `getting-started/` - Getting started directory
  - `1. introduction.md` - Language introduction file
  - `2. goal.md` - Objectives file
  - `3. when-to-use.md` - When to use file
  - `4. why-to-use.md` - Why to use file
  - `5. configuration.md` - Setup file
  - `6. usage.md` - Basic usage file
  - `7. key-concept.md` - Core concepts file
  - `8. core-principle.md` - Fundamental principles file

### Development Patterns
- `development-patterns/` - Development patterns directory
  - `1. workflows/` - Workflows directory
    - `1. run-setup.md`
    - `2. run-build.md`
    - `3. run-test.md`
    - `4. run-deploy.md`
    - `5. run-debug.md`
  - `2. patterns/` - Patterns directory
    - `1. must/` - Required
      - `1. safety.md`
      - `2. error-handling.md`
      - `3. api-contract.md`
    - `2. should/` - Recommended
      - `1. code-style.md`
      - `2. naming.md`
      - `3. performance-tips.md`
      - `4. documentation.md`
  - `3. dont-patterns/` - Don't patterns directory
    - `1. dont-safety.md`
    - `2. dont-error-handling.md`
    - `3. dont-api-contract.md`
    - `4. dont-code-style.md`
    - `5. dont-naming.md`
    - `6. dont-performance-tips.md`
    - `7. dont-documentation.md`

### Tools & Optimization
- `tools/` - Tools directory
- `optimization/` - Optimization directory
  - `1. perf/` - General performance
  - `2. mem/` - Memory
  - `3. cpu/` - CPU
  - `4. io/` - Input/Output
  - `5. build/` - Build
  - `6. runtime/` - Runtime
  - `7. dx/` - Developer experience

### Architecture & Production
- `architecture-production/` - Architecture and production directory
  - `1. architecture/` - Architecture directory
  - `2. ecosystem/` - Ecosystem directory
  - `3. production/` - Production directory
  - `4. security/` - Security directory
  - `5. scalability/` - Scalability directory

### Learning & Reference
- `learning-reference/` - Learning and reference directory
  - `1. glossary.md` - Glossary file
  - `2. learning-path/` - Learning path directory
  - `3. practices/` - Practices directory
  - `4. guide/` - Advanced guide directory
  - `5. examples/` - Examples directory
  - `6. apis/` - API documentation directory

## Acceptance criteria
- Covers basics and advanced language topics
- Patterns and anti-patterns have clear examples
- Optimization covers all performance aspects
- Tools and workflows are complete

## File Structure
```
skill-name/
├── 1. SKILL.md
├── 2. getting-started/
│   ├── 1. introduction.md
│   ├── 2. goal.md
│   ├── 3. when-to-use.md
│   ├── 4. why-to-use.md
│   ├── 5. configuration.md
│   ├── 6. usage.md
│   ├── 7. key-concept.md
│   └── 8. core-principle.md
├── 3. development-patterns/
│   ├── 1. workflows/
│   │   ├── 1. run-setup.md
│   │   ├── 2. run-build.md
│   │   ├── 3. run-test.md
│   │   ├── 4. run-deploy.md
│   │   └── 5. run-debug.md
│   ├── 2. patterns/
│   │   ├── 1. must/
│   │   │   ├── 1. safety.md
│   │   │   ├── 2. error-handling.md
│   │   │   └── 3. api-contract.md
│   │   └── 2. should/
│   │       ├── 1. code-style.md
│   │       ├── 2. naming.md
│   │       ├── 3. performance-tips.md
│   │       └── 4. documentation.md
│   └── 3. dont-patterns/
│       ├── 1. dont-safety.md
│       ├── 2. dont-error-handling.md
│       ├── 3. dont-api-contract.md
│       ├── 4. dont-code-style.md
│       ├── 5. dont-naming.md
│       ├── 6. dont-performance-tips.md
│       └── 7. dont-documentation.md
├── 4. tools/
├── 5. optimization/
│   ├── 1. perf/
│   ├── 2. mem/
│   ├── 3. cpu/
│   ├── 4. io/
│   ├── 5. build/
│   ├── 6. runtime/
│   └── 7. dx/
├── 6. architecture-production/
│   ├── 1. architecture/
│   ├── 2. ecosystem/
│   ├── 3. production/
│   ├── 4. security/
│   └── 5. scalability/
└── 7. learning-reference/
    ├── 1. glossary.md
    ├── 2. learning-path/
    ├── 3. practices/
    ├── 4. guide/
    ├── 5. examples/
    └── 6. apis/
```
