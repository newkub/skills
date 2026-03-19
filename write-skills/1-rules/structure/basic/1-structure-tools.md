# Tools Structure

## โครงสร้างสำหรับ CLI Tools และ Utilities

### File Structure

```
tools/
├── build/                      # Build tools
│   ├── webpack.config.js
│   ├── rollup.config.js
│   └── vite.config.ts
├── lint/                       # Linting tools
│   ├── .eslintrc.js
│   ├── .prettierrc
│   └── biome.json
├── test/                       # Testing tools
│   ├── jest.config.js
│   ├── vitest.config.ts
│   └── playwright.config.ts
├── deploy/                     # Deployment tools
│   ├── docker/
│   │   └── Dockerfile
│   ├── k8s/
│   │   └── deployment.yaml
│   └── terraform/
└── scripts/                    # Utility scripts
    ├── build.sh
    ├── deploy.sh
    └── setup.sh
```

### Tools Configuration Table

| Category | Tool | Config File | Purpose |
|----------|------|-------------|---------|
| **Build** | Webpack | `webpack.config.js` | Bundle JavaScript |
| **Build** | Rollup | `rollup.config.js` | Library bundling |
| **Build** | Vite | `vite.config.ts` | Modern build tool |
| **Lint** | ESLint | `.eslintrc.js` | Code linting |
| **Lint** | Prettier | `.prettierrc` | Code formatting |
| **Lint** | Biome | `biome.json` | All-in-one tool |
| **Test** | Jest | `jest.config.js` | Unit testing |
| **Test** | Vitest | `vitest.config.ts` | Fast unit tests |
| **Test** | Playwright | `playwright.config.ts` | E2E testing |
| **Deploy** | Docker | `Dockerfile` | Containerization |
| **Deploy** | Kubernetes | `deployment.yaml` | Orchestration |
| **Deploy** | Terraform | `*.tf` | Infrastructure |

### Integration Patterns

#### Build Tools Integration
```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs']
    }
  }
})
```

#### Linting Setup
```json
// biome.json
{
  "$schema": "https://biomejs.dev/schemas/1.4.1/schema.json",
  "formatter": {
    "enabled": true
  },
  "linter": {
    "enabled": true
  }
}
```

#### Testing Configuration
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      reporter: ['text', 'json']
    }
  }
})
```

### Best Practices

1. **Tool Consistency** - ใช้ tool เดียวกันทั่วทั้ง project
2. **Configuration Management** - จัดการ config files ในรูปแบบที่เป็นระเบียบ
3. **Version Control** - lock versions ของ tools
4. **Documentation** - มี docs สำหรับแต่ละ tool
5. **Automation** - ใช้ scripts สำหรับ tasks ที่ซ้ำๆ
