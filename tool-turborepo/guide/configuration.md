# Configuration

## turbo.json Structure

```json
{
  "$schema": "https://turborepo.dev/schema.json",
  "globalDependencies": ["tsconfig.json", ".env"],
  "globalEnv": ["NODE_ENV"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    }
  }
}
```

## Global Options

| Option | Type | Default | คำอธิบาย |
|--------|------|---------|----------|
| `globalDependencies` | `string[]` | `[]` | Files ที่เปลี่ยนแปลงแล้ว cache ทั้งหมด miss |
| `globalEnv` | `string[]` | `[]` | Env vars ที่เปลี่ยนแปลงแล้ว cache ทั้งหมด miss |
| `cacheDir` | `string` | `.turbo/cache` | Cache directory path |
| `daemon` | `boolean` | `true` | ใช้ daemon process |
| `concurrency` | `string` | `10` | Max concurrent tasks |

## Task Options

| Option | Type | Default | คำอธิบาย |
|--------|------|---------|----------|
| `dependsOn` | `string[]` | `[]` | Task dependencies |
| `inputs` | `string[]` | `$TURBO_DEFAULT$` | Files ที่มีผลต่อ hash |
| `outputs` | `string[]` | `[]` | Files ที่ต้อง cache |
| `cache` | `boolean` | `true` | Enable/disable caching |
| `persistent` | `boolean` | `false` | Long-running task |
| `interactive` | `boolean` | `false` | รับ stdin input |

## Task Dependencies Syntax

| Syntax | ความหมาย |
|--------|----------|
| `"^build"` | รอ dependencies' build เสร็จก่อน |
| `"build"` | รอ same-package build เสร็จก่อน |
| `"package#task"` | รอ specific package's task |
| `["^build", "lint"]` | รอทั้งสองอย่าง |

## Common Configuration Examples

### Basic Build Pipeline

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

### With Test Task

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    }
  }
}
```

### Dev Server (Non-cached)

```json
{
  "tasks": {
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### With Environment Variables

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "env": ["DATABASE_URL"],
      "outputs": ["dist/**"]
    }
  }
}
```

## Environment Modes

| Mode | พฤติกรรม |
|------|----------|
| `strict` | เฉพาะ `env`/`globalEnv` ถูกส่งให้ tasks |
| `loose` | ทุก environment variable ถูกส่งให้ tasks |

```json
{
  "envMode": "strict",
  "tasks": {
    "build": {
      "env": ["API_KEY", "NEXT_PUBLIC_*"]
    }
  }
}
```

## Remote Cache Configuration

```json
{
  "remoteCache": {
    "enabled": true,
    "signature": true,
    "timeout": 30,
    "apiUrl": "https://vercel.com"
  }
}
```

## Package Configurations

Override config สำหรับ specific package:

```json
// apps/web/turbo.json
{
  "extends": ["//"],
  "tasks": {
    "build": {
      "outputs": [".next/**", "!:.next/cache/**"]
    }
  }
}
```