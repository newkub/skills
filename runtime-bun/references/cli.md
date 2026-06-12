# CLI Reference - Bun

## bun

Bun CLI - all-in-one JavaScript runtime

```bash
bun [command] [options]
```

## Commands

### bun run

Run a script

```bash
bun run script.ts
bun run --watch script.ts
bun run --hot script.ts
```

### bun install

Install dependencies

```bash
bun install
bun install --frozen-lockfile
bun install --production
```

### bun add

Add package

```bash
bun add lodash
bun add @types/node -d
bun add -g prettier
```

### bun remove

Remove package

```bash
bun remove lodash
```

### bun test

Run tests

```bash
bun test
bun test --watch
bun test --coverage
bun test test/file.test.ts
```

### bun build

Build for production

```bash
bun build --outdir=dist src/index.ts
bun build --target=browser src/index.ts
bun build --target=node src/index.ts
bun build --minify src/index.ts
```

### bun create

Create new project

```bash
bun create
bun create react my-app
bun create next my-app
```

### bun x

Execute package

```bash
bunx prettier .
bunx typescript --noEmit
```

## Options

| Option | Description |
|--------|-------------|
| `--watch` | Watch for changes |
| `--hot` | Hot reload |
| `--cwd` | Set working directory |
| `--env` | Load env file |

## Common Flags

| Flag | Description |
|------|-------------|
| `-c, --config` | Config file |
| `-d, --dev` | Dev dependency |
| `-g, --global` | Global install |
| `-h, --help` | Show help |
| `-v, --version` | Show version |


---

