# configuration

## index.md

# Configuration Reference - Bun

## package.json

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "bun run --watch src/index.ts",
    "build": "bun build src/index.ts",
    "start": "bun run src/index.ts",
    "test": "bun test"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "@types/bun": "^1.0.0"
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "lib": ["ES2022"],
    "types": ["bun-types"],
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## bunfig.toml

Bun configuration file

```toml
[install]
registry = "https://registry.npmjs.org/"
production = false

[install.cache]
remote =true
dir = ".bun-cache"

[test]
preload = ["./test/setup.ts"]
coverage = true

[runtime]
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| BUN_ENV | Environment (development/production) |
| BUN_CONSOLE_LEVEL | Console output level |
| BUN_GQL_SHOW_VERBOSE | GraphQL verbose |
| BUN_Telemetry_DISABLED | Disable telemetry |

## .env

Bun loads `.env` automatically:

```bash
DATABASE_URL=postgres://localhost/db
PORT=3000
```

## Runtime Options

| Option | Description |
|--------|-------------|
| `--bun` | Force Bun mode |
| `--inspect` | Enable debugger |
| `--smol` | Use less memory |


---

