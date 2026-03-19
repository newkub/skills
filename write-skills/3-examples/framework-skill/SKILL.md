---
title: Framework Skill Example
description: ตัวอย่าง skill สำหรับพัฒนา frameworks และ platforms
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.ts", "*.tsx", "*.js", "*.jsx", "*.vue", "*.svelte"]
follow:
  skills: ["@next", "@vue", "@react", "@nuxt"]
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---

# Framework Skill Example

## Purpose

ตัวอย่าง skill สำหรับพัฒนา frameworks และ platforms:

- **Architecture** - การออกแบบสถาปัตยกรรม
- **Plugin system** - ระบบ plugins และ extensions
- **Developer experience** - ประสบการณ์การพัฒนา
- **Performance** - การปรับแต่งประสิทธิภาพ
- **Ecosystem** - ระบบนิเวศการและ tools

## Scope

ใช้สำหรับ:

- พัฒนา web frameworks
- การสร้าง plugin systems
- การออกแบบ developer tools
- การสร้าง build systems
- ไม่รวม applications ที่ใช้ framework

## Quick Reference

| Directory | Status | Purpose |
|-----------|--------|---------|
| `SKILL.md` | **MUST** | Main definition |
| `src/` | **MUST** | Source code |
| `packages/` | **RECOMMENDED** | Monorepo packages |
| `plugins/` | **RECOMMENDED** | Plugin system |
| `examples/` | **RECOMMENDED** | Usage examples |

## โครงสร้าง Directory

```
framework-skill/
├── SKILL.md
├── src/
│   ├── core/
│   │   ├── framework.ts
│   │   ├── plugin.ts
│   │   └── config.ts
│   ├── plugins/
│   ├── utils/
│   └── types/
├── packages/
│   ├── cli/
│   ├── devtools/
│   └── plugins/
├── examples/
│   ├── basic-app/
│   ├── plugin-example/
│   └── advanced-usage/
├── docs/
│   ├── guides/
│   ├── api/
│   └── plugins/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── package.json
├── lerna.json
└── README.md
```

## Implementation

### 1. สร้างโครงสร้าง Framework

```bash
mkdir framework-skill
cd framework-skill
mkdir src packages examples docs tests
touch package.json lerna.json
```

### 2. ออกแบบ Core Framework

```typescript
// src/core/framework.ts
export interface FrameworkConfig {
  plugins?: string[];
  devMode?: boolean;
  buildTarget?: 'web' | 'node' | 'mobile';
}

export class Framework {
  private plugins: Map<string, Plugin> = new Map();
  
  constructor(private config: FrameworkConfig = {}) {}
  
  public use(plugin: Plugin): void {
    this.plugins.set(plugin.name, plugin);
  }
  
  public async build(): Promise<void> {
    // Build process
  }
  
  public async dev(): Promise<void> {
    // Development server
  }
}
```

### 3. สร้าง Plugin System

```typescript
// src/core/plugin.ts
export interface Plugin {
  name: string;
  version: string;
  apply(framework: Framework): void | Promise<void>;
}

export abstract class BasePlugin implements Plugin {
  abstract name: string;
  abstract version: string;
  
  abstract apply(framework: Framework): void;
}

// Example plugin
export class LoggerPlugin extends BasePlugin {
  name = 'logger';
  version = '1.0.0';
  
  apply(framework: Framework): void {
    // Plugin implementation
  }
}
```

### 4. การจัดการ Configuration

```typescript
// src/core/config.ts
export interface ConfigFile {
  framework: FrameworkConfig;
  plugins: Record<string, any>;
  build: BuildConfig;
  dev: DevConfig;
}

export function loadConfig(path: string): ConfigFile {
  // Load and validate configuration
}
```

## Framework Best Practices

### Architecture
- Modular design with clear boundaries
- Plugin-based extensibility
- Configuration-driven behavior
- Type-safe APIs

### Developer Experience
- Clear error messages
- Helpful debugging tools
- Comprehensive documentation
- Active community support

### Performance
- Minimal runtime overhead
- Efficient build process
- Optimized development workflow
- Scalable architecture

### Ecosystem
- Plugin marketplace
- Developer tools
- Integration examples
- Community contributions

## Verification Checklist

- [ ] Framework core is complete
- [ ] Plugin system works
- [ ] Configuration is flexible
- [ ] Documentation is comprehensive
- [ ] Examples are functional
- [ ] Performance is optimized
- [ ] Ecosystem tools are available

## Related Skills

- `@next` - สำหรับ React framework
- `@vue` - สำหรับ Vue framework
- `@react` - สำหรับ React library
- `@nuxt` - สำหรับ Vue framework
- `@write-skills` - สำหรับสร้าง skills แบบสมบูรณ์
- `@write-markdown` - สำหรับเขียน documentation
