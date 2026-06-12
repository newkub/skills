# Migration

## Migrating from tsup

### Configuration

tsup:
```typescript
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
});
```

bunup:
```typescript
export default {
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
};
```

### CLI

tsup:
```bash
npx tsup
```

bunup:
```bash
bun run build
```

## Migrating from Rollup

Bunup ใช้ Rolldown ซึ่งเป็น Rust port ของ Rollup ดังนั้น configuration คล้ายกันมาก
