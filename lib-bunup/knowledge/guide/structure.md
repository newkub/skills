# Structure

## Project Structure

```
my-library/
├── src/
│   ├── index.ts
│   └── ...
├── package.json
├── tsconfig.json
└── bunup.config.ts
```

## Entry Points

Bunup auto-detects entry points:
- `src/index.ts` - Main entry point
- `src/cli.ts` - CLI entry point
- Exported functions จาก `src/` ที่ match patterns

## Configuration File

`bunup.config.ts` สำหรับ custom configuration:
```typescript
export default {
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
};
```
