# Configuration Options

## Configuration File

`.config/nextest.toml`

## Profile Options

### [profile.<name>]

**retries**
- Type: integer
- Default: 0
- Description: จำนวน retries สำหรับ test ที่ล้มเหลว

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

**final-status-level**
- Type: string
- Default: "flaky"
- Description: final status level สำหรับ reporting
- Values: "pass", "retry", "slow", "flaky", "skip"

**hide-progress-bar**
- Type: boolean
- Default: false
- Description: ซ่อน progress bar

**junit**
- Type: table
- Description: JUnit XML output configuration
- Fields:
  - `path` (string): output path

**archive-format**
- Type: string
- Default: "tar-zst"
- Description: archive format
- Values: "tar-zst", "tar-gz"

## Test Groups

### [groups.<name>]

**max-fail**
- Type: integer
- Description: จำนวน test ที่ล้มเหลวสูงสุด ก่อนหยุด group

**retries**
- Type: integer
- Description: จำนวน retries สำหรับ group

### [[test-groups]]

**name**
- Type: string
- Description: group name จาก [groups]

**filter**
- Type: string
- Description: filter expression สำหรับ group

## Environment Variables

### [env]

ตั้งค่า environment variables สำหรับ tests

```toml
[env]
RUST_LOG = "debug"
RUST_BACKTRACE = "1"
MY_VAR = "value"
```

### [profile.<name>.env]

ตั้งค่า environment variables สำหรับ profile เฉพาะ

```toml
[profile.ci.env]
RUST_LOG = "info"
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

**retries**
- Type: integer
- Description: override retries

```toml
[[profile.default.overrides]]
filter = "test(slow_)"
slow-timeout = "300s"
retries = 3
```

## Archive Configuration

### [profile.<name>.archive]

**include-files**
- Type: array of strings
- Description: files ที่จะรวมใน archive

**exclude-files**
- Type: array of strings
- Description: files ที่จะ exclude จาก archive

## Example Configuration

```toml
[profile.default]
retries = 2
test-threads = "num-cpus"
slow-timeout = "60s"
success-output = "immediate"
failure-output = "immediate-final"
final-status-level = "flaky"

[profile.ci]
retries = 0
test-threads = 4
hide-progress-bar = true
fail-fast = false
final-status-level = "pass"
junit = { path = "junit.xml" }

[groups]
slow = { max_fail = 1, retries = 3 }
integration = { max_fail = 2, retries = 1 }
unit = { max_fail = 5, retries = 0 }

[[test-groups]]
name = "slow"
filter = "test(slow_)"

[[test-groups]]
name = "integration"
filter = "test(integration_)"

[[test-groups]]
name = "unit"
filter = "not test(slow_) and not test(integration_)"

[env]
RUST_LOG = "info"

[[profile.default.overrides]]
filter = "test(slow_)"
slow-timeout = "300s"
retries = 3
```


---

