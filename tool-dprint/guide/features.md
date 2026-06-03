# Features

## Core Features

| Feature | Description |
|---------|-------------|
| Multi-language | TypeScript, JavaScript, JSON, Markdown, TOML, Rust, Go, Python, CSS |
| WASM Plugins | Secure sandbox execution |
| Incremental | Format เฉพาะ changed files |
| Parallel | Multi-thread processing |
| Caching | Plugin binary and format cache |
| Configurable | Fine-tune formatting rules |

## CLI Commands

| Command | Description |
|---------|-------------|
| `dprint init` | สร้าง `dprint.json` config |
| `dprint fmt` | Format files |
| `dprint check` | แสดง files ที่ไม่ format |
| `dprint add` | เพิ่ม plugin |
| `dprint update` | อัปเดต plugins |
| `dprint clear-cache` | ล้าง cache |
| `dprint config` | จัดการ config |

## TypeScript/JavaScript

### Formatting Options

```json
{
  "typescript": {
    "useTabs": false,
    "indentWidth": 2,
    "lineWidth": 100,
    "quoteStyle": "preferSingle",
    "semicolons": true,
    "useBraces": "always",
    "arrowKind": "arrow",
    "binaryExpressionKind": "alwaysBreak",
    "memberExpression": "dynamic",
    "propertyDeclaration": "sameLine",
    "typeLiteral": "maintain",
    "enumDeclaration": "preferValue"
  }
}
```

### Supported Extensions

- `.ts`, `.tsx`
- `.js`, `.jsx`, `.mjs`, `.cjs`
- `.json`, `.jsonc`

## JSON

### Options

```json
{
  "json": {
    "indentWidth": 2,
    "lineWidth": 120,
    "trailingCommas": "none"
  }
}
```

## Markdown

### Options

```json
{
  "markdown": {
    "lineWidth": 100,
    "textWrap": "preserve",
    "headingStyle": "maintain",
    "alignmentStyle": "maintain"
  }
}
```

## TOML

```json
{
  "toml": {
    "indentWidth": 2
  }
}
```

## Rust

```json
{
  "rust": {
    "indentWidth": 4,
    "maxWidth": 100,
    "newlineStyle": "Unix"
  }
}
```

## Go

```json
{
  "go": {
    "indentWidth": 4,
    "lineWidth": 100
  }
}
```

## Python

```json
{
  "python": {
    "indentWidth": 4,
    "lineWidth": 120
  }
}
```

## Global Options

| Option | Default | Description |
|--------|---------|-------------|
| `indentWidth` | 4 | Spaces per indent |
| `useTabs` | false | Use tabs |
| `lineWidth` | 120 | Max line length |
| `newLineKind` | "auto" | Line ending (auto/lf/crlf) |

## Plugins

### Official Plugins

| Plugin | URL |
|--------|-----|
| TypeScript | `https://plugins.dprint.dev/typescript-0.93.3.wasm` |
| JSON | `https://plugins.dprint.dev/json-0.19.3.wasm` |
| Markdown | `https://plugins.dprint.dev/markdown-0.17.2.wasm` |
| TOML | `https://plugins.dprint.dev/toml-0.6.3.wasm` |
| Rust | `https://plugins.dprint.dev/rust-0.16.2.wasm` |
| Go | `https://plugins.dprint.dev/go-0.1.5.wasm` |

### Community Plugins

| Plugin | Source |
|--------|--------|
| Biome | GitHub releases |
| Prettier-compatible | dprint.dev/configs |