# CLI Commands

## Main Commands

### cargo nextest run

รัน tests ด้วย nextest

```bash
cargo nextest run [OPTIONS] [FILTER]
```

**Options:**
- `-p, --package <SPEC>` - รัน tests ใน package เฉพาะ
- `--workspace` - รัน tests ใน workspace ทั้งหมด
- `--exclude <SPEC>` - exclude package
- `--lib` - รัน library tests
- `--bins` - รัน binary tests
- `--examples` - รัน example tests
- `--tests` - รัน integration tests
- `--benches` - รัน benchmark tests
- `--all-targets` - รันทุก targets
- `--test-threads <NUM>` - จำนวน threads (default: num-cpus)
- `--no-fail-fast` - ไม่หยุดเมื่อ fail
- `--no-capture` - ไม่ capture output
- `--profile <PROFILE>` - ใช้ profile (default: default)
- `--config-file <PATH>` - config file path
- `--reuse-build` - reuse build artifacts
- `--archive-file <PATH>` - run from archive
- `-E, --filter-expr <EXPR>` - filter expression
- `--hide-progress` - ซ่อน progress bar
- `--success-output <MODE>` - output mode เมื่อ success
- `--failure-output <MODE>` - output mode เมื่อ failure
- `--final-status-level <LEVEL>` - final status level (pass, retry, slow, flaky, skip)
- `--slow-timeout <DURATION>` - timeout สำหรับ tests ช้า
- `--record` - record test run
- `--no-run` - list tests แต่ไม่รัน

**Examples:**
```bash
cargo nextest run
cargo nextest run test_name
cargo nextest run -p my_crate
cargo nextest run --profile ci
cargo nextest run --reuse-build
cargo nextest run -E 'test(test_) or package(my-package)'
```

### cargo nextest list

List tests ทั้งหมด

```bash
cargo nextest list [OPTIONS] [FILTER]
```

**Options:**
- `-p, --package <SPEC>` - list tests ใน package เฉพาะ
- `--workspace` - list tests ใน workspace ทั้งหมด
- `--exclude <SPEC>` - exclude package
- `-E, --filter-expr <EXPR>` - filter expression

**Examples:**
```bash
cargo nextest list
cargo nextest list -p my_crate
cargo nextest list -E 'test(test_)'
```

### cargo nextest archive

สร้าง archive ของ test binaries

```bash
cargo nextest archive [OPTIONS]
```

**Options:**
- `--output <PATH>` - output path
- `--format <FORMAT>` - archive format (tar-zst, tar-gz)
- `--include <PATH>` - include files
- `--profile <PROFILE>` - profile สำหรับ build

**Examples:**
```bash
cargo nextest archive
cargo nextest archive --output my-archive.tar.zst
```

### cargo nextest replay

Replay test run จาก recording

```bash
cargo nextest replay <RUN_ID> [OPTIONS]
```

**Options:**
- `--archive-file <PATH>` - archive file path
- `--hide-progress` - ซ่อน progress bar

**Examples:**
```bash
cargo nextest replay abc123
cargo nextest replay abc123 --archive-file archive.tar.zst
```

### cargo nextest show-config

แสดง configuration

```bash
cargo nextest show-config [OPTIONS]
```

**Options:**
- `--profile <PROFILE>` - show profile configuration
- `--list-profiles` - list all profiles

**Examples:**
```bash
cargo nextest show-config
cargo nextest show-config --profile ci
cargo nextest show-config --list-profiles
```

### cargo nextest --version

แสดง version

```bash
cargo nextest --version
```

### cargo nextest --help

แสดง help

```bash
cargo nextest --help
cargo nextest run --help
```

## Output Modes

| Mode | Description |
|------|-------------|
| `immediate` | แสดง output ทันที |
| `immediate-final` | แสดง output ทันที และสรุปท้าย |
| `final` | แสดง output เฉพาะท้าย |
| `never` | ไม่แสดง output |

## Filter Expressions

| Expression | Description |
|------------|-------------|
| `test(name)` | Match test name |
| `package(name)` | Match package name |
| `kind(lib)` | Match test kind (lib, bin, test, bench, example) |
| `binary(name)` | Match binary name |
| `not expr` | Negate expression |
| `expr and expr` | Logical AND |
| `expr or expr` | Logical OR |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXTEST_TEST_THREADS` | จำนวน test threads |
| `NEXTEST_RETRIES` | จำนวน retries |
| `NEXTEST_PROFILE` | Default profile |
| `NEXTEST_CONFIG_FILE` | Config file path |


---

