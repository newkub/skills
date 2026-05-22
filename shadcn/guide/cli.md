# CLI Guide

## Overview

คู่มือการใช้งาน shadcn CLI commands สำหรับจัดการ components และ configuration

## Installation

```bash
npx shadcn@latest init
```

## Commands

### init

Initialize shadcn/ui ใน project:

```bash
npx shadcn@latest init
```

**Options**:
- `-y, --yes`: Skip confirmation prompts
- `-c, --cwd <path>`: Set working directory
- `--defaults`: Use default configuration

**Example**:
```bash
npx shadcn@latest init --defaults
```

### add

Add components ไปยัง project:

```bash
npx shadcn@latest add [components...]
```

**Options**:
- `-y, --yes`: Skip confirmation prompts
- `-o, --overwrite`: Overwrite existing files
- `-c, --cwd <path>`: Set working directory
- `--all`: Add all available components

**Examples**:
```bash
# Add single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button input card

# Add all components
npx shadcn@latest add -y

# Overwrite existing
npx shadcn@latest add button --overwrite
```

### diff

Check for component updates:

```bash
npx shadcn@latest diff [component]
```

**Options**:
- `-c, --cwd <path>`: Set working directory

**Example**:
```bash
npx shadcn@latest diff button
```

### update

Update components:

```bash
npx shadcn@latest update [components...]
```

**Options**:
- `-y, --yes`: Skip confirmation prompts
- `-o, --overwrite`: Overwrite existing files
- `-c, --cwd <path>`: Set working directory
- `--all`: Update all components

**Examples**:
```bash
# Update single component
npx shadcn@latest update button

# Update multiple components
npx shadcn@latest update button input

# Update all components
npx shadcn@latest update -y
```

### remove

Remove components จาก project:

```bash
npx shadcn@latest remove [components...]
```

**Options**:
- `-y, --yes`: Skip confirmation prompts
- `-c, --cwd <path>`: Set working directory

**Example**:
```bash
npx shadcn@latest remove button
```

## Configuration

### components.json

ไฟล์ configuration หลัก:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### Configuration Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `style` | string | Component style (new-york, default) | new-york |
| `rsc` | boolean | React Server Components support | true |
| `tsx` | boolean | Use TSX syntax | true |
| `tailwind.config` | string | Tailwind config path | tailwind.config.ts |
| `tailwind.css` | string | Global CSS path | src/app/globals.css |
| `tailwind.baseColor` | string | Base color (slate, zinc, neutral, stone) | slate |
| `tailwind.cssVariables` | boolean | Use CSS variables | true |
| `tailwind.prefix` | string | Tailwind prefix | "" |
| `aliases.components` | string | Components alias | @/components |
| `aliases.utils` | string | Utils alias | @/lib/utils |
| `aliases.ui` | string | UI components alias | @/components/ui |
| `aliases.lib` | string | Lib alias | @/lib |
| `aliases.hooks` | string | Hooks alias | @/hooks |
| `iconLibrary` | string | Icon library (lucide) | lucide |

## Component Registry

### Official Registry

shadcn/ui ใช้ official registry ที่ https://ui.shadcn.com/r/

### Custom Registry

ตั้งค่า custom registry ใน `components.json`:

```json
{
  "registry": "https://your-registry.com/r"
}
```

### Multi-Registry

ตั้งค่า multiple registries:

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

## Troubleshooting

### CLI Not Found

ถ้า command ไม่ work:

```bash
# Clear cache
npx shadcn@latest cache clear

# Reinstall
npm uninstall -g shadcn
npx shadcn@latest init
```

### Component Not Found

ถ้า component ไม่พบ:

```bash
# List available components
npx shadcn@latest add --help

# Check registry
npx shadcn@latest add --registry https://ui.shadcn.com/r button
```

### Permission Errors

ถ้าเกิด permission errors:

```bash
# On Unix/Linux/Mac
sudo npx shadcn@latest init

# On Windows
# Run as Administrator
```

## Advanced Usage

### Programmatic Usage

ใช้ CLI ใน scripts:

```json
{
  "scripts": {
    "ui:add": "shadcn add",
    "ui:update": "shadcn update",
    "ui:diff": "shadcn diff"
  }
}
```

```bash
npm run ui:add button
npm run ui:update button
npm run ui:diff button
```

### CI/CD Integration

ใช้ใน CI/CD pipelines:

```yaml
# .github/workflows/ui.yml
- name: Update shadcn components
  run: npx shadcn@latest update -y
```

## Best Practices

1. **Use Default Config**: เริ่มด้วย default configuration
2. **Version Control**: Commit `components.json` ไปยัง version control
3. **Regular Updates**: ใช้ `shadcn diff` และ `shadcn update` อย่างสม่ำเสมอ
4. **Test Changes**: ทดสอบ components หลังจาก update
5. **Document Customizations**: บันทึก custom changes ใน comments

## References

- [CLI Documentation](https://ui.shadcn.com/docs/cli)
- [Component Registry](https://ui.shadcn.com/r)
- [GitHub Repository](https://github.com/shadcn-ui/ui)
