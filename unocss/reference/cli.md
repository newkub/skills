# UnoCSS CLI Reference

## การติดตั้ง CLI

```bash
npm install -D unocss
```

## การใช้งาน

### Scan และ Generate CSS

```bash
npx unocss "src/**/*.tsx" -o dist/uno.css
```

### Watch Mode

```bash
npx unocss "src/**/*.tsx" -o dist/uno.css -w
```

### Config File

```bash
npx unocss "src/**/*.tsx" -o dist/uno.css -c uno.config.ts
```

## Options

| Option | Description |
|--------|-------------|
| `-o, --output` | Output file path |
| `-w, --watch` | Watch mode |
| `-c, --config` | Config file path |
| `--no-emit` | Don't emit CSS file |
| `--no-cache` | Disable cache |
