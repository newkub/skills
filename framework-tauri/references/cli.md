# Tauri CLI Reference

## Installation

```bash
# Install via Cargo
cargo install tauri-cli

# Or use via npm
npm install --save-dev @tauri-apps/cli
```

## Common Commands

### Project Initialization

| Command | Description |
|---------|-------------|
| `npm run tauri init` | Initialize Tauri project in current directory |
| `cargo tauri init` | Initialize Tauri project via Cargo |

### Development

| Command | Description |
|---------|-------------|
| `npm run tauri dev` | Run Tauri app in development mode |
| `cargo tauri dev` | Run Tauri app in development mode via Cargo |
| `npm run tauri dev -- --release` | Run in release mode (faster) |

### Building

| Command | Description |
|---------|-------------|
| `npm run tauri build` | Build Tauri app for current platform |
| `cargo tauri build` | Build Tauri app via Cargo |
| `npm run tauri build -- --target x86_64-pc-windows-msvc` | Build for specific target |

### Plugin Management

| Command | Description |
|---------|-------------|
| `npm run tauri add <plugin>` | Add Tauri plugin to project |
| `cargo tauri add <plugin>` | Add plugin via Cargo |

### Info

| Command | Description |
|---------|-------------|
| `npm run tauri info` | Display system information and Tauri version |
| `cargo tauri info` | Display system information via Cargo |

## CLI Options

### Development Options

```bash
# Specify custom frontend dev server
npm run tauri dev -- --no-watch

# Disable watching for file changes
npm run tauri dev -- --no-watch

# Run with specific features
cargo tauri dev --features custom-feature
```

### Build Options

```bash
# Build without updater
npm run tauri build -- --no-bundle

# Build for specific target
cargo tauri build --target aarch64-apple-darwin

# Build with debug symbols
cargo tauri build --debug
```

## Configuration

The CLI can be configured via `tauri.conf.json` or `tauri.conf.json5`:

```json
{
  "build": {
    "beforeBuildCommand": "npm run build",
    "beforeDevCommand": "npm run dev",
    "devUrl": "http://localhost:3000"
  },
  "tauri": {
    "bundle": {
      "identifier": "com.example.app"
    }
  }
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `TAURI_PRIVATE_KEY` | Path to private key for signing |
| `TAURI_KEY_PASSWORD` | Password for private key |
| `TAURI_BUNDLE` | Custom bundle configuration |
| `TAURI_SKIP_TARGET_CHECK` | Skip target compatibility check |

## Examples

### Initialize New Project

```bash
npm create tauri-app@latest
cd my-tauri-app
npm install
npm run tauri dev
```

### Add Plugin

```bash
npm run tauri add fs
npm run tauri add shell
npm run tauri add dialog
```

### Build for Production

```bash
# Build for current platform
npm run tauri build

# Build for specific platform
cargo tauri build --target x86_64-pc-windows-msvc
```

## Troubleshooting

### Common Issues

- **Build fails**: Ensure Rust toolchain is installed and up to date
- **Dev server not starting**: Check `beforeDevCommand` in config
- **Plugin not found**: Run `npm run tauri add <plugin>` to install
- **Permission errors**: Check system permissions for file access

### Debug Mode

```bash
# Enable debug logging
RUST_LOG=debug npm run tauri dev

# Verbose output
cargo tauri dev --verbose
```
