---
title: Library Skill Example
description: ตัวอย่าง skill สำหรับพัฒนา libraries และ packages
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.ts", "*.js", "*.py", "*.rs", "*.go", "*.java"]
follow:
  skills: ["@typescript", "@rust", "@node-sdk"]
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---

# Library Skill Example

## Purpose

ตัวอย่าง skill สำหรับพัฒนา libraries และ packages ที่ใช้ร่วมกัน:

- **API Design** - การออกแบบ API ที่ชัดเจน
- **Package structure** - โครงสร้าง package มาตรฐาน
- **Documentation** - เอกสารประกอบครบถ้วน
- **Testing** - การทดสอบอย่างครบครัน
- **Distribution** - การเผยแพร่ library

## Scope

ใช้สำหรับ:

- พัฒนา libraries สำหรับ multiple languages
- การจัดการ dependencies
- การสร้าง reusable components
- การเขียน API documentation
- ไม่รวม applications ที่ run แบบ standalone

## Quick Reference

| Directory | Status | Purpose |
|-----------|--------|---------|
| `SKILL.md` | **MUST** | Main definition |
| `src/` | **MUST** | Source code |
| `tests/` | **MUST** | Test files |
| `docs/` | **RECOMMENDED** | Documentation |
| `examples/` | **RECOMMENDED** | Usage examples |

## โครงสร้าง Directory

```
lib-skill/
├── SKILL.md
├── src/
│   ├── index.ts
│   ├── core/
│   ├── utils/
│   └── types/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── docs/
│   ├── api/
│   ├── guides/
│   └── examples/
├── examples/
│   ├── basic-usage/
│   └── advanced/
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Implementation

### 1. สร้างโครงสร้าง Library

```bash
mkdir lib-skill
cd lib-skill
mkdir src tests docs examples
touch package.json tsconfig.json
```

### 2. กำหนด Package Structure

```json
{
  "name": "@username/lib-skill",
  "version": "1.0.0",
  "description": "A useful library",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "lint": "eslint src"
  }
}
```

### 3. ออกแบบ API

```typescript
// src/index.ts
export interface LibraryOptions {
  debug?: boolean;
  timeout?: number;
}

export class Library {
  constructor(options: LibraryOptions = {}) {}
  
  public method(input: string): Promise<string> {
    // Implementation
  }
  
  public static create(options?: LibraryOptions): Library {
    return new Library(options);
  }
}
```

### 4. การทดสอบ

```typescript
// tests/library.test.ts
import { Library } from '../src';

describe('Library', () => {
  test('should create instance', () => {
    const lib = new Library();
    expect(lib).toBeInstanceOf(Library);
  });
  
  test('should process input correctly', async () => {
    const lib = new Library();
    const result = await lib.method('test');
    expect(result).toBeDefined();
  });
});
```

## Library Best Practices

### API Design
- Use consistent naming conventions
- Provide both CommonJS and ES modules
- Include TypeScript definitions
- Design for tree-shaking

### Documentation
- Complete API reference
- Usage examples
- Migration guides
- Changelog

### Testing
- High test coverage
- Unit and integration tests
- Performance benchmarks
- Type checking

### Distribution
- Semantic versioning
- Automated releases
- Multiple package registries
- Dependency management

## Verification Checklist

- [ ] Package structure is complete
- [ ] API is well-designed
- [ ] TypeScript definitions are included
- [ ] Tests have good coverage
- [ ] Documentation is complete
- [ ] Build process works
- [ ] Package can be published

## Related Skills

- `@typescript` - สำหรับ TypeScript libraries
- `@rust` - สำหรับ Rust libraries  
- `@node-sdk` - สำหรับ Node.js packages
- `@write-skills` - สำหรับสร้าง skills แบบสมบูรณ์
- `@write-markdown` - สำหรับเขียน documentation
