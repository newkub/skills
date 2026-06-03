# cli

## index.md

---
title: CLI Commands
description: คำสั่ง CLI ทั้งหมดของ cargo-nextest
---

## Commands

### cargo nextest run

รัน tests ด้วย nextest

```bash
cargo nextest run [OPTIONS] [FILTER]
```

**Options:**
- `--all` - รัน tests ทั้งหมดใน workspace
- `--package <SPEC>` - รัน tests ใน package เฉพาะ
- `--workspace` - รัน tests ใน workspace ทั้งหมด
- `--exclude <SPEC>` - exclude package
- `--lib` - รัน library tests
- `--bins` - รัน binary tests
- `--examples` - รัน example tests
- `--tests` - รัน integration tests
- `--benches` - รัน benchmark tests
- `--all-targets` - รันทุก targets
- `--test-threads <NUM>` - จำนวน threads
- `--no-fail-fast` - ไม่หยุดเมื่อ fail
- `--no-capture` - ไม่ capture output
- `--list` - list tests ทั้งหมด
- `--hide-progress` - ซ่อน progress bar
- `--success-output <MODE>` - output mode เมื่อ success
- `--failure-output <MODE>` - output mode เมื่อ failure
- `--profile <PROFILE>` - ใช้ profile
- `--config-file <PATH>` - config file path
- `--slow-timeout <DURATION>` - timeout สำหรับ tests ช้า

**Examples:**
```bash
cargo nextest run
cargo nextest run test_name
cargo nextest run --package my_crate
cargo nextest run --profile ci
cargo nextest run --list
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

- `immediate` - แสดง output ทันที
- `immediate-final` - แสดง output ทันที และสรุปท้าย
- `final` - แสดง output เฉพาะท้าย
- `never` - ไม่แสดง output


---

