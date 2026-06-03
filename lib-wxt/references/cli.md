# CLI - WXT

## wxt dev

Start development server with hot reload.

```bash
wxt dev
wxt dev -b firefox
wxt dev --port 3000
```

| Option | Description |
|--------|-------------|
| `-b, --browser` | Target browser |
| `--port` | Dev server port |
| `--verbose` | Verbose output |

## wxt build

Build extension for production.

```bash
wxt build
wxt build --target chrome
wxt build --prod
```

| Option | Description |
|--------|-------------|
| `-t, --target` | Target browser |
| `--prod` | Production build |
| `--zip` | Create zip file |
| `--verbose` | Verbose output |

## wxt zip

Package extension to zip file.

```bash
wxt zip
wxt zip --target firefox
```

| Option | Description |
|--------|-------------|
| `-t, --target` | Target browser |
| `--out-dir` | Output directory |

## wxt publish

Auto-publish to browser stores.

```bash
wxt publish
wxt publish --store chrome
```

| Option | Description |
|--------|-------------|
| `--store` | Target store (chrome, firefox, safari) |
| `--dry-run` | Preview without publishing |

## wxt clean

Remove build artifacts.

```bash
wxt clean
```

## Browser Targets

| Target | Stores |
|--------|--------|
| `chromium` | Chrome, Edge, Opera |
| `firefox` | Firefox |
| `safari` | Safari |
| `all` | All browsers |

## Common Options

| Option | Description |
|--------|-------------|
| `-b, --browser` | Default browser |
| `-t, --target` | Build target |
| `--verbose` | Verbose output |
| `--version` | Show version |