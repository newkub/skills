# Vitest CLI Reference

## Commands

### vitest / vitest dev

รัน tests ใน watch mode:

```bash
vitest
vitest dev
```

### vitest run

รัน tests ครั้งเดียว:

```bash
vitest run
```

### vitest --ui

เปิด UI dashboard:

```bash
vitest --ui
```

### vitest --coverage

รัน tests พร้อม coverage:

```bash
vitest --coverage
```

## Options

### --run

รัน tests ครั้งเดียว:

```bash
vitest --run
```

### --watch

รันใน watch mode (default):

```bash
vitest --watch
```

### --mode

ตั้ง mode:

```bash
vitest --mode development
vitest --mode production
```

### --reporter

ตั้ง reporter:

```bash
vitest --reporter verbose
vitest --reporter json
vitest --reporter=verbose,json
```

### --filter

กรอง tests:

```bash
vitest --filter "should add"
vitest -t "should add"
```

### --exclude

排除 tests:

```bash
vitest --exclude "slow"
```

## Environment Variables

### VITEST_POOL_ID

ID สำหรับ worker pool

### VITEST_POOL_COUNT

จำนวน workers

## Examples

```bash
# Run specific test file
vitest run math.test.ts

# Run tests matching pattern
vitest run --filter "add"

# Run with coverage
vitest run --coverage

# Run in UI mode
vitest --ui

# Run with specific reporter
vitest run --reporter verbose
```
