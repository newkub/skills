# Write Structure

## โครงสร้างสำหรับ Writing Systems และ Content Generation

### File Structure

```
write/
├── generators/                 # Code generators
│   ├── api-generator.ts
│   ├── component-generator.ts
│   └── template-generator.ts
├── templates/                  # Template files
│   ├── components/
│   │   ├── button.template.ts
│   │   ├── form.template.ts
│   │   └── modal.template.ts
│   ├── pages/
│   │   ├── home.template.ts
│   │   ├── about.template.ts
│   │   └── contact.template.ts
│   └── configs/
│       ├── vite.template.ts
│       ├── eslint.template.ts
│       └── jest.template.ts
├── schemas/                    # Data schemas
│   ├── component.schema.json
│   ├── page.schema.json
│   └── config.schema.json
├── outputs/                    # Generated outputs
│   ├── src/
│   ├── tests/
│   └── docs/
└── config/                     # Generator configuration
    ├── generators.json
    ├── templates.json
    └── outputs.json
```

### Generator Types Table

| Generator | Input | Output | Template | Use Case |
|-----------|-------|--------|----------|----------|
| **API Generator** | OpenAPI spec | TypeScript types | api.template.ts | API client generation |
| **Component Generator** | JSON config | React/Vue components | component.template.ts | UI component creation |
| **Template Generator** | Schema | Various templates | *.template.ts | Code scaffolding |
| **Page Generator** | Page config | Full pages | page.template.ts | Page generation |
| **Config Generator** | Options | Config files | config.template.ts | Project setup |

### Template Categories

#### Component Templates
| Template | Framework | Features | Output |
|----------|-----------|----------|--------|
| `button.template.ts` | React/Vue | Click handlers, styling | Button component |
| `form.template.ts` | React/Vue | Validation, submission | Form component |
| `modal.template.ts` | React/Vue | Overlay, close handling | Modal component |

#### Page Templates
| Template | Type | Sections | Output |
|----------|------|----------|--------|
| `home.template.ts` | Landing | Hero, features, footer | Home page |
| `about.template.ts` | Content | Team, mission, history | About page |
| `contact.template.ts` | Interactive | Form, map, info | Contact page |

#### Config Templates
| Template | Tool | Purpose | Output |
|----------|------|---------|--------|
| `vite.template.ts` | Vite | Build configuration | vite.config.ts |
| `eslint.template.ts` | ESLint | Linting rules | .eslintrc.js |
| `jest.template.ts` | Jest | Test setup | jest.config.js |

### Configuration Schema

```json
{
  "$schema": "./generator.schema.json",
  "generators": {
    "component": {
      "input": "component-spec.json",
      "template": "component.template.ts",
      "output": "src/components/"
    },
    "page": {
      "input": "page-spec.json", 
      "template": "page.template.ts",
      "output": "src/pages/"
    }
  },
  "templates": {
    "framework": "react",
    "styling": "tailwind",
    "testing": "vitest"
  }
}
```

### Example Generator Implementation

```typescript
// generators/component-generator.ts
import { Generator } from '../types'
import componentTemplate from '../templates/component.template.ts'

export class ComponentGenerator implements Generator {
  generate(spec: ComponentSpec): string {
    return componentTemplate
      .replace('{{name}}', spec.name)
      .replace('{{props}}', this.generateProps(spec.props))
      .replace('{{methods}}', this.generateMethods(spec.methods))
  }
  
  private generateProps(props: Prop[]): string {
    return props.map(prop => 
      `${prop.name}: ${prop.type};`
    ).join('\n  ')
  }
}
```

### Best Practices

1. **Template Reusability** - สร้าง templates ที่ใช้ซ้ำได้
2. **Schema Validation** - ตรวจสอบ input ก่อน generation
3. **Output Organization** - จัดการ generated files อย่างเป็นระเบียบ
4. **Error Handling** - จัดการ errors ใน generation process
5. **Testing** - ทดสอบ templates และ generators
