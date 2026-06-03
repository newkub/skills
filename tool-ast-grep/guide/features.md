# All Features

## CLI Commands

### sg run

รัน search หรือ lint:

```bash
sg run --rule no-console-log
sg run --pattern '$PATTERN'
```

| Option | Description |
|--------|-------------|
| `--rule, -r` | ระบุ rule ID ที่จะรัน |
| `--pattern, -p` | search pattern |
| `--lang, -l` | ภาษาโปรแกรม |
| `--interactive, -i` | โหมด interactive |
| `--globs` | glob patterns สำหรับ file filtering |

### sg search

ค้นหา code:

```bash
sg search --pattern '$PATTERN'
```

### sg rewrite

แก้ไข code:

```bash
sg rewrite --pattern '$OLD' --rewrite '$NEW'
```

### sg lint

lint code:

```bash
sg lint
sg lint --fix
```

## Pattern Syntax

### Basic Patterns

```javascript
// match identifier
$ID

// match function call
$FUNC()

// match binary expression
$A + $B
```

### Quantifiers

```javascript
// match one or more
$ARG+

// match zero or more
$ARG*

// match exactly N
$ARG{3}
```

### Fields

```javascript
// access object field
$OBJ.field

// access array element
$ARR[0]

// access function argument
$FUNC($ARG1, $ARG2)
```

### Inside/Has

```yaml
rule:
  pattern: await $EXPR
  has:
    kind: try_statement
```

## Rule Configuration

### Basic Rule

```yaml
id: no-console-log
language: typescript
rule:
  pattern: console.log($ARG)
message: "Don't use console.log, use proper logging"
```

### With Fix

```yaml
id: prefer-const
language: typescript
rule:
  pattern: let $VAR = $VAL
fix:
  rule: $VAR
  value: const $VAR = $VAL
```

### Severity Levels

| Level | Description |
|-------|-------------|
| error | หยุดการทำงาน |
| warning | เตือน |
| info | ข้อมูล |
| hint | แนะนำ |

## Glob Patterns

```bash
# match .ts files only
ast-grep --pattern '$PATTERN' --globs '**/*.ts' ./src

# exclude test files
ast-grep --pattern '$PATTERN' --globs '**/*.ts' --globs '!**/*.test.ts' ./src

# multiple patterns
ast-grep --pattern '$PATTERN' --globs 'src/**/*.ts' --globs 'lib/**/*.ts' ./src
```

## Metacharacters

| Metacharacter | Match |
|---------------|-------|
| `$$` | literal `$` |
| `\n` | newline |
| `\t` | tab |
| `\s` | whitespace |

## Special Patterns

### Wildcard

```javascript
// match anything
$_ // single node
$__ // any nodes
```

### Typed Metavariable

```javascript
// match only identifiers
$ID:identifier

// match only strings
$VAL:string
```

### Named Metavariable

```javascript
// capture groups
$NAME@pattern
```

## Configuration File

### sg.config.yml

```yaml
ruleDirs:
  - rules/
language: typescript
```

## Language-Specific Features

### TypeScript/JavaScript

```yaml
language: typescript
rule:
  pattern: $FUNC?.($ARG)
```

### Python

```yaml
language: python
rule:
  pattern: $FUNC($ARG)
```

### Rust

```yaml
language: rust
rule:
  pattern: $LET:mut $NAME = $VAL
```

## Advanced Features

### nthChild

```yaml
rule:
  pattern: $ITEM
  nthChild:
    is: even
```

### Range

```yaml
rule:
  pattern: $TARGET
  range:
    start: 10
    end: 20
```

### Not

```yaml
rule:
  pattern: console.log($ARG)
  not:
    inside:
      kind: debug_statement
```

## Performance Tips

| Tip | Description |
|-----|-------------|
| ใช้ `--globs` | filter files ที่ไม่ต้องการ |
| ใช้ `--lang` | ระบุ language ชัดเจน |
| สร้าง rule files | reuse patterns |
| ใช้ `--limit` | limit results |