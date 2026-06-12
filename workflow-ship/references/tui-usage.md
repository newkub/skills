# TUI Usage

## TUI Usage และ Interactive Mode สำหรับ Workflow-Ship

### Overview

Workflow-Ship ทำงานผ่าน command line ใน Windsurf IDE ซึ่งมี TUI (Terminal User Interface) ที่ช่วยให้การใช้งานง่ายขึ้น

### Interactive Mode

#### Starting Interactive Mode

```bash
/ship-run
```

นี่จะเริ่ม interactive mode ที่แสดง progress และ status อย่าง real-time

### TUI Features

#### 1. Progress Display

**Feature:** แสดง progress ของแต่ละ phase

**Display:**
```
┌─────────────────────────────────────┐
│ Workflow-Ship Progress              │
├─────────────────────────────────────┤
│ Phase 1: Ship-code                  │
│ [████████████████████████] 100%    │
│                                     │
│ Phase 2: Run-verify                 │
│ [████████░░░░░░░░░░░░░░░] 40%     │
│   Typecheck: ✓                     │
│   Lint: ✓                          │
│   Test: [████░░░░░░░░░░░░] 20%     │
│                                     │
│ Phase 3: Run-dev                    │
│ [░░░░░░░░░░░░░░░░░░░░░] 0%       │
└─────────────────────────────────────┘
```

#### 2. Status Indicators

**Feature:** แสดง status ของแต่ละ task

**Indicators:**
- ✓ - Success
- ✗ - Failed
- ⏳ - In progress
- ⏸ - Paused
- ? - Unknown

**Display:**
```
Ship-code: ✓
Run-verify: ⏳
  Typecheck: ✓
  Lint: ✓
  Test: ⏳
Run-dev: ?
```

#### 3. Error Display

**Feature:** แสดง errors อย่างชัดเจน

**Display:**
```
┌─────────────────────────────────────┐
│ Error Detected                      │
├─────────────────────────────────────┤
│ Type: Type Error                    │
│ Location: src/index.ts:42           │
│ Message: Type 'string' is not       │
│ assignable to type 'number'         │
│                                     │
│ [R] Resolve  [I] Ignore  [S] Skip   │
└─────────────────────────────────────┘
```

#### 4. Interactive Prompts

**Feature:** ให้เลือก actions เมื่อพบ error

**Prompts:**
- **[R] Resolve** - แก้ไข error อัตโนมัติ
- **[I] Ignore** - ข้าม error
- **[S] Skip** - ข้าม phase นี้
- **[M] Manual** - แก้ไข manually

**Display:**
```
Error detected. Choose action:
[R] Resolve automatically
[I] Ignore this error
[S] Skip this phase
[M] Manual fix
> R
```

### Keyboard Shortcuts

#### Navigation

- **Ctrl+C** - Stop workflow
- **Ctrl+P** - Pause workflow
- **Ctrl+R** - Resume workflow
- **Ctrl+L** - Clear screen
- **Ctrl+H** - Show help

#### Actions

- **R** - Resolve error
- **I** - Ignore error
- **S** - Skip phase
- **M** - Manual fix
- **Q** - Quit

### TUI Modes

#### 1. Normal Mode

**Description:** Mode ปกติสำหรับการทำงาน

**Features:**
- Progress display
- Status indicators
- Error display
- Interactive prompts

#### 2. Verbose Mode

**Description:** Mode ที่แสดงรายละเอียดมากขึ้น

**Features:**
- Detailed logs
- Stack traces
- Debug information

**Enable:**
```bash
/ship-run --verbose
```

#### 3. Silent Mode

**Description:** Mode ที่แสดง output น้อยลง

**Features:**
- Minimal output
- Only errors
- Progress summary

**Enable:**
```bash
/ship-run --silent
```

### TUI Configuration

#### Colors

**Default Colors:**
- Success: Green
- Error: Red
- Warning: Yellow
- Info: Blue
- Progress: Cyan

**Custom Colors:**
สามารถปรับแต่งผ่าน configuration file (ถ้ามีในอนาคต)

#### Themes

**Available Themes:**
- Light
- Dark (default)
- High contrast

**Switch Theme:**
```bash
/ship-run --theme light
```

### TUI Workflows

#### Workflow 1: Standard Ship-Run

```bash
/ship-run
```

**TUI Flow:**
1. แสดง progress bar
2. แสดง status ของแต่ละ phase
3. เมื่อพบ error แสดง prompt
4. User เลือก action
5. ดำเนินการตาม action
6. วนซ้ำจนเสร็จ

#### Workflow 2: Manual Error Resolution

```bash
/ship-code
/run-verify
# Error occurs
/resolve-errors
# Manual fix in TUI
/run-verify
```

**TUI Flow:**
1. แสดง error
2. User เลือก [M] Manual
3. TUI opens editor
4. User fixes error
5. User saves and closes
6. TUI retries
7. Continue

#### Workflow 3: Interactive Verification

```bash
/loop-until-complete
/run-verify
```

**TUI Flow:**
1. แสดง loop progress
2. แสดง iteration count
3. แสดง errors ในแต่ละ iteration
4. User สามารถ stop ได้ด้วย Ctrl+C
5. Continue จนผ่าน

### TUI Best Practices

1. **Monitor Progress:** ตรวจสอบ progress อย่างใกล้ชิด
2. **Read Errors:** อ่าน error messages อย่างละเอียด
3. **Choose Actions:** เลือก actions อย่างรอบคอบ
4. **Use Shortcuts:** ใช้ keyboard shortcuts เพื่อความเร็ว
5. **Save Logs:** Save logs สำหรับ debugging

### TUI Troubleshooting

#### TUI Not Displaying

**Problem:** TUI ไม่แสดง

**Solution:**
- ตรวจสอบ terminal compatibility
- ตรวจสอบ Windsurf version
- Restart Windsurf

#### TUI Frozen

**Problem:** TUI ค้าง

**Solution:**
- ใช้ Ctrl+C เพื่อ stop
- ตรวจสอบ system resources
- Restart workflow

#### TUI Colors Wrong

**Problem:** สีไม่ถูกต้อง

**Solution:**
- ตรวจสอบ terminal color support
- เปลี่ยน theme
- ใช้ default theme

### TUI Examples

#### Example 1: Standard Ship-Run

```bash
/ship-run
```

**TUI Output:**
```
┌─────────────────────────────────────┐
│ Workflow-Ship Progress              │
├─────────────────────────────────────┤
│ Phase 1: Ship-code                  │
│ [████████████████████████] 100% ✓  │
│                                     │
│ Phase 2: Run-verify                 │
│ [████████████████████████] 100% ✓  │
│   Typecheck: ✓                     │
│   Lint: ✓                          │
│   Test: ✓                          │
│                                     │
│ Phase 3: Run-dev                    │
│ [████████████████████████] 100% ✓  │
│   Server: ✓                        │
│   Health: ✓                        │
└─────────────────────────────────────┘
```

#### Example 2: With Error

```bash
/ship-run
```

**TUI Output:**
```
┌─────────────────────────────────────┐
│ Error Detected                      │
├─────────────────────────────────────┤
│ Type: Type Error                    │
│ Location: src/index.ts:42           │
│ Message: Type 'string' is not       │
│ assignable to type 'number'         │
│                                     │
│ [R] Resolve  [I] Ignore  [S] Skip   │
└─────────────────────────────────────┘
```

### Next Steps

- อ่าน [Configuration](configuration.md) สำหรับ configuration options
- อ่าน [API](api.md) สำหรับ API reference
- อ่าน [CLI](cli.md) สำหรับ CLI commands
