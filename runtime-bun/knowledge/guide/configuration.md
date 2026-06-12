# Configuration

## ภาพรวม

Bun มีหลายวิธีในการตั้งค่า ตั้งแต่ environment variables ไปจนถึง configuration files

## Environment Variables

### ตัวแปรสำคัญ

| Variable | Description | Default |
|----------|-------------|---------|
| `BUN_INSTALL` | Path สำหรับ global installation | `~/.bun/install/global` |
| `BUN_CONFIG_TOKENS` | Authentication tokens สำหรับ private registries | - |
| `BUN_CONFIG_PRELOAD_SCRIPT` | Script ที่จะ preload ก่อนรัน | - |
| `NODE_ENV` | Environment mode | `development` |
| `TZ` | Timezone | System timezone |

### ตัวอย่างการใช้งาน

```bash
# ตั้งค่า global installation path
export BUN_INSTALL=/custom/path

# ตั้งค่า authentication token
export BUN_CONFIG_TOKENS="registry.example.com=token123"

# ตั้งค่า environment mode
export NODE_ENV=production
```

## bunfig.toml

### ภาพรวม

`bunfig.toml` เป็น configuration file หลักของ Bun วางไว้ที่ root ของ project หรือ home directory

### ตัวอย่าง Configuration

```toml
[install]
# ตั้งค่า global installation path
globalPath = "~/.bun/install/global"

# ตั้งค่า cache path
cacheDir = "~/.bun/install/cache"

# ตั้งค่า lockfile
lockfile = "bun.lockb"

# ตั้งค่า registry
registry = "https://registry.npmjs.org"

[install.scopes]
# ตั้งค่า scoped registries
"@myorg" = "https://registry.example.com"

[install.lockfile]
# ตั้งค่า lockfile behavior
print = "yarn"

[test]
# ตั้งค่า test runner
preload = ["./test/setup.ts"]

[run]
# ตั้งค่า run behavior
shell = "bash"
```

### Configuration Options

#### [install]

| Option | Type | Description |
|--------|------|-------------|
| `globalPath` | string | Path สำหรับ global packages |
| `cacheDir` | string | Path สำหรับ cache |
| `lockfile` | string | Lockfile format (`bun.lockb`, `yarn.lock`, `package-lock.json`) |
| `registry` | string | Default registry URL |
| `frozenLockfile` | boolean | ไม่อัปเดต lockfile |

#### [install.scopes]

| Option | Type | Description |
|--------|------|-------------|
| `@scope` | string | Registry URL สำหรับ scope |

#### [test]

| Option | Type | Description |
|--------|------|-------------|
| `preload` | array | Files ที่จะ preload ก่อน test |

#### [run]

| Option | Type | Description |
|--------|------|-------------|
| `shell` | string | Shell ที่จะใช้ |

## package.json Scripts

### ตัวอย่าง Scripts

```json
{
  "scripts": {
    "dev": "bun run src/index.ts",
    "build": "bun build src/index.ts --outdir dist",
    "test": "bun test",
    "lint": "bunx eslint .",
    "format": "bunx prettier --write ."
  }
}
```

## TypeScript Configuration

### tsconfig.json

Bun รองรับ TypeScript โดยตรง แต่ยังสามารถใช้ `tsconfig.json` ได้:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "react-jsx",
    "types": ["bun-types"]
  }
}
```

### bun-types

ติดตั้ง bun-types สำหรับ TypeScript support:

```bash
bun add -d bun-types
```

## Environment-Specific Configuration

### Development

```bash
# .env.development
NODE_ENV=development
DEBUG=true
```

### Production

```bash
# .env.production
NODE_ENV=production
DEBUG=false
```

## Best Practices

1. **ใช้ bunfig.toml** สำหรับ project-wide configuration
2. **ใช้ environment variables** สำหรับ sensitive data
3. **ใช้ .env files** สำหรับ environment-specific settings
4. **commit bun.lockb** สำหรับ consistency
5. **ใช้ TypeScript** สำหรับ type safety
