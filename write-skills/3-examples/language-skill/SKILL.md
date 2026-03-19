---
title: Language Skill Example
description: ตัวอย่าง skill สำหรับพัฒนา programming languages และ compilers
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.rs", "*.c", "*.cpp", "*.go", "*.zig", "*.nim"]
follow:
  skills: ["@rust", "@typescript", "@kotlin"]
  workflows: ["/write-workflows"]
  files: []
  mcp: []
---

# Language Skill Example

## Purpose

ตัวอย่าง skill สำหรับพัฒนา programming languages และ compilers:

- **Language design** - การออกแบบภาษาโปรแกรม
- **Compiler architecture** - สถาปัตยกรรม compiler
- **Tooling** - เครื่องมือสำหรับนักพัฒนา
- **Standard library** - ไลบรารีมาตรฐาน
- **Ecosystem** - ระบบนิเวศการ

## Scope

ใช้สำหรับ:

- พัฒนา programming languages ใหม่
- การสร้าง compilers และ interpreters
- การออกแบบ language toolchains
- การสร้าง standard libraries
- ไม่รวม applications ที่เขียนด้วยภาษา

## Quick Reference

| Directory | Status | Purpose |
|-----------|--------|---------|
| `SKILL.md` | **MUST** | Main definition |
| `src/` | **MUST** | Source code |
| `compiler/` | **MUST** | Compiler implementation |
| `std/` | **RECOMMENDED** | Standard library |
| `tools/` | **RECOMMENDED** | Developer tools |

## โครงสร้าง Directory

```
language-skill/
├── SKILL.md
├── src/
│   ├── lexer/
│   │   ├── tokenizer.rs
│   │   └── lexer.rs
│   ├── parser/
│   │   ├── ast.rs
│   │   └── parser.rs
│   ├── compiler/
│   │   ├── codegen.rs
│   │   └── optimizer.rs
│   └── vm/
│       ├── bytecode.rs
│       └── runtime.rs
├── std/
│   ├── collections/
│   ├── io/
│   └── math/
├── tools/
│   ├── formatter/
│   ├── linter/
│   └── debugger/
├── tests/
│   ├── parser/
│   ├── compiler/
│   └── std/
├── examples/
│   ├── hello-world/
│   └── algorithms/
├── docs/
│   ├── language-spec/
│   ├── tutorials/
│   └── api/
├── Cargo.toml
└── README.md
```

## Implementation

### 1. สร้างโครงสร้าง Language

```bash
mkdir language-skill
cd language-skill
mkdir src compiler std tools tests examples docs
touch Cargo.toml README.md
```

### 2. ออกแบบ Language Syntax

```rust
// src/lexer/tokenizer.rs
#[derive(Debug, Clone, PartialEq)]
pub enum Token {
    // Literals
    Number(f64),
    String(String),
    Boolean(bool),
    
    // Keywords
    Let,
    Fn,
    If,
    Else,
    
    // Symbols
    Plus,
    Minus,
    Equals,
    
    // Special
    Identifier(String),
    EOF,
}

pub struct Tokenizer {
    input: Vec<char>,
    position: usize,
}

impl Tokenizer {
    pub fn new(input: &str) -> Self {
        Self {
            input: input.chars().collect(),
            position: 0,
        }
    }
    
    pub fn tokenize(&mut self) -> Vec<Token> {
        // Tokenization logic
    }
}
```

### 3. สร้าง Parser

```rust
// src/parser/parser.rs
use crate::lexer::{Token, Tokenizer};

#[derive(Debug, Clone)]
pub enum Expr {
    Number(f64),
    String(String),
    Boolean(bool),
    Binary {
        left: Box<Expr>,
        operator: Token,
        right: Box<Expr>,
    },
    Unary {
        operator: Token,
        right: Box<Expr>,
    },
    Variable(String),
    Assignment {
        name: String,
        value: Box<Expr>,
    },
}

pub struct Parser {
    tokens: Vec<Token>,
    current: usize,
}

impl Parser {
    pub fn new(tokens: Vec<Token>) -> Self {
        Self { tokens, current: 0 }
    }
    
    pub fn parse(&mut self) -> Result<Vec<Expr>, String> {
        // Parsing logic
    }
}
```

### 4. สร้าง Compiler

```rust
// src/compiler/codegen.rs
use crate::parser::Expr;

pub struct CodeGenerator {
    instructions: Vec<u8>,
    constants: Vec<Value>,
}

impl CodeGenerator {
    pub fn new() -> Self {
        Self {
            instructions: Vec::new(),
            constants: Vec::new(),
        }
    }
    
    pub fn compile(&mut self, expr: &Expr) -> Result<(), String> {
        match expr {
            Expr::Number(n) => self.emit_constant(Value::Number(*n)),
            Expr::Binary { left, operator, right } => {
                self.compile(left)?;
                self.compile(right)?;
                self.emit_operator(operator);
            }
            // Handle other expression types
        }
    }
    
    fn emit_constant(&mut self, value: Value) {
        self.constants.push(value);
        self.instructions.push(OP_CONSTANT);
    }
}
```

## Language Best Practices

### Language Design
- Clear and consistent syntax
- Minimal but expressive feature set
- Good error messages
- Type safety when applicable

### Compiler Architecture
- Clear separation of concerns
- Efficient intermediate representations
- Good optimization passes
- Target multiple backends

### Standard Library
- Comprehensive but focused
- Consistent API design
- Good documentation
- Performance optimized

### Tooling
- Language server protocol support
- Good error reporting
- Debugging capabilities
- Package management

## Verification Checklist

- [ ] Language syntax is well-defined
- [ ] Parser handles all valid inputs
- [ ] Compiler generates correct code
- [ ] Standard library is functional
- [ ] Tools are useful
- [ ] Documentation is complete
- [ ] Examples are working

## Related Skills

- `@rust` - สำหรับ Rust implementation
- `@typescript` - สำหรับ type systems
- `@kotlin` - สำหรับ modern language design
- `@write-skills` - สำหรับสร้าง skills แบบสมบูรณ์
- `@write-markdown` - สำหรับเขียน documentation
