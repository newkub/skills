# configuration

## index.md

---
title: Configuration Options
description: ตัวเลือกการตั้งค่าทั้งหมด
---

## Configuration File

`.config/nextest.toml`

## Profile Options

### [profile.<name>]

**test-threads**
- Type: string or integer
- Default: "num-cpus"
- Description: จำนวน threads สำหรับ parallel execution
- Values: "num-cpus", integer

**slow-timeout**
- Type: duration string
- Default: "60s"
- Description: timeout สำหรับ tests ช้า
- Values: "30s", "60s", "5m", etc.

**success-output**
- Type: string
- Default: "immediate"
- Description: output mode เมื่อ test pass
- Values: "immediate", "immediate-final", "final", "never"

**failure-output**
- Type: string
- Default: "immediate-final"
- Description: output mode เมื่อ test fail
- Values: "immediate", "immediate-final", "final", "never"

**fail-fast**
- Type: boolean
- Default: true
- Description: หยุดเมื่อ test fail

**hide-progress-bar**
- Type: boolean
- Default: false
- Description: ซ่อน progress bar

## Environment Variables

### [env]

ตั้งค่า environment variables สำหรับ tests

```toml
[env]
RUST_LOG = "debug"
RUST_BACKTRACE = "1"
MY_VAR = "value"
```

## Per-Test Overrides

### [[profile.<name>.overrides]]

**filter**
- Type: string
- Description: filter pattern สำหรับ tests

**slow-timeout**
- Type: duration string
- Description: override timeout

**test-threads**
- Type: integer
- Description: override threads

```toml
[[profile.default.overrides]]
filter = "test::slow::*"
slow-timeout = "300s"
```

## Example Configuration

```toml
[profile.default]
test-threads = "num-cpus"
slow-timeout = "60s"
success-output = "immediate"
failure-output = "immediate-final"

[profile.ci]
test-threads = 4
hide-progress-bar = true
fail-fast = true

[env]
RUST_LOG = "info"

[[profile.default.overrides]]
filter = "test::integration::*"
slow-timeout = "300s"
```


---

