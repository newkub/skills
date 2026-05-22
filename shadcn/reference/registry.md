# Component Registry System

## Overview

shadcn/ui ใช้ registry-first architecture ที่ components ถูก serve ผ่าน public API และ consumed โดย CLI installer

## Registry Architecture

### Registry Items

Registry item คือ JSON object ที่ represent component, block, หรือ utility:

```json
{
  "name": "button",
  "type": "components:ui",
  "registryDependencies": [],
  "files": [
    {
      "path": "components/ui/button.tsx",
      "content": "/* component code */"
    }
  ]
}
```

### Registry Schema

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Component name |
| `type` | string | Item type (components:ui, components:example, registry:base) |
| `registryDependencies` | string[] | Required components |
| `files` | array[] | File definitions |
| `files[].path` | string | File path |
| `files[].content` | string | File content |
| `files[].target` | string | Target path (optional) |

### Registry Types

#### components:ui
UI components ปกติ (button, input, card)

#### components:example
Example components ที่ใช้ components:ui

#### registry:base
Base configuration (fonts, themes, CSS)

## Registry API

### Official Registry

```
https://ui.shadcn.com/r/{component}
```

**Example**:
```
https://ui.shadcn.com/r/button
```

### Registry Index

```
https://ui.shadcn.com/r/index.json
```

Returns all available registry items.

### Registry Build Pipeline

1. **Source**: Component source code ใน `registry/` directory
2. **Transform**: Build script processes และ transforms code
3. **Generate**: JSON metadata ถูก generated
4. **Serve**: API serves JSON ไปยัง CLI

## Dependency Resolution

### Recursive Dependencies

CLI resolves recursive dependencies automatically:

```json
{
  "name": "form",
  "registryDependencies": ["button", "input", "label"]
}
```

### Dependency Graph

```
form
├── button
├── input
└── label
```

## Multi-Registry Ecosystem

### Custom Registries

ตั้งค่า custom registry ใน `components.json`:

```json
{
  "registry": "https://your-registry.com/r"
}
```

### Multiple Registries

```json
{
  "registries": [
    {
      "name": "shadcn",
      "url": "https://ui.shadcn.com/r"
    },
    {
      "name": "custom",
      "url": "https://your-registry.com/r"
    }
  ]
}
```

### Namespaced Dependencies

ใช้ namespaced dependencies จาก multiple registries:

```json
{
  "name": "custom-card",
  "registryDependencies": ["shadcn/card", "custom/button"]
}
```

## Creating Custom Registry

### Registry Structure

```
my-registry/
├── registry/
│   ├── index.json
│   ├── button.json
│   └── card.json
└── styles/
    └── global.css
```

### Registry Item Example

```json
// registry/button.json
{
  "name": "button",
  "type": "components:ui",
  "registryDependencies": [],
  "files": [
    {
      "path": "components/ui/button.tsx",
      "content": "import * as React from \"react\"\n\nexport function Button() {\n  return <button>Click me</button>\n}"
    }
  ]
}
```

### Registry Index

```json
// registry/index.json
{
  "button": "registry/button.json",
  "card": "registry/card.json"
}
```

### Serve Registry

ใช้ any HTTP server หรือ deploy ไปยัง hosting:

```bash
# Using Vercel
vercel deploy

# Using Netlify
netlify deploy

# Using simple HTTP server
npx serve .
```

## Registry Authentication

### Private Registries

ตั้งค่า authentication:

```json
{
  "registries": [
    {
      "name": "private",
      "url": "https://private-registry.com/r",
      "auth": {
        "type": "bearer",
        "token": "your-token"
      }
    }
  ]
}
```

### Registry Namespaces

ใช้ namespaces สำหรับ organization:

```
https://registry.example.com/r/@org/component
```

## Best Practices

1. **Version Control**: ใช้ version control สำหรับ registry
2. **Semantic Versioning**: Use semantic versioning สำหรับ updates
3. **Documentation**: Document components ใน registry
4. **Testing**: Test components ก่อน publish
5. **Security**: Use authentication สำหรับ private registries

## References

- [Registry Documentation](https://ui.shadcn.com/docs/registry)
- [Registry Schema](https://ui.shadcn.com/schema.json)
- [GitHub Repository](https://github.com/shadcn-ui/ui)
