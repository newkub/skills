# JSPM Installation

## Requirements

- Node.js (latest version recommended)
- npm, yarn, pnpm, or bun

## Global Installation

```bash
npm install -g jspm
```

## Verify Installation

```bash
jspm --version
```

## Initialize Project

```bash
jspm init my-project
```

### Interactive Prompts

```
Creating package.json in my-project

Package Name: (my-project)
Version: (dev)
Description:
Enable TypeScript with type stripping? (y/n)
Exports Entry Point: (src/index.ts)
Create a .gitignore file with JavaScript defaults? (y/n)
Create an index.html example app file? (y/n)
Create an AI prompt file? (y/n)
```

### Generated Files

```
✓  my-project/tsconfig.json created
✓  my-project/.gitignore created
✓  my-project/index.html created
✓  my-project/src/index.ts created
✓  my-project/src/landing.js created
✓  my-project/src/landing.css created
✓  my-project/CLAUDE.md created
✓  my-project/package.json created

Ok: Initialization complete.
Info: Next, run cd my-project and jspm serve to start a local server.
```

## CLI Commands

### jspm serve

เริ่ม development server พร้อม hot reloading:

```bash
jspm serve
# Default port: 5776
```

Options:

```bash
jspm serve --port 3000
jspm serve --static  # No hot reload
jspm serve --open    # Auto open browser
```

### jspm install

สร้าง/อัปเดต importmap.js:

```bash
jspm install
jspm install lit react vue
```

### jspm build

Build สำหรับ production:

```bash
jspm build
```

## Uninstall

```bash
npm uninstall -g jspm
```
