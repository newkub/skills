# Rust API

## Installation

```toml
[dependencies]
ast-grep-core = "0.1.0"
```

## Basic Usage

```rust
use ast_grep_core::{SgRoot, Pattern};

// Parse code
let root = SgRoot::parse("console.log(\"hello\")", "typescript")?;

// Find matches
let pattern = Pattern::try_new("console.log($ARG)")?;
let matches = root.root().find_all(&pattern);

// Apply fixes
for m in matches {
    m.replace("logger.info($ARG)")?;
}
```

## Rule Configuration

```rust
use ast_grep_config::{RuleConfig, RuleCore};

// Create rule from YAML
let yaml_content = r#"
id: no-console
language: typescript
rule:
  pattern: console.log($ARG)
constraints:
  ARG:
    kind: string_literal
"#;

let config = RuleConfig::from_yaml_str(yaml_content)?;
let rule = RuleCore::try_from(config)?;

// Apply rule
let matches = root.root().find_all(&rule);
```

## Custom Matchers

```rust
use ast_grep_core::{Node, Matcher};

struct ConsoleLogMatcher;

impl Matcher for ConsoleLogMatcher {
    fn match_node(&self, node: Node) -> bool {
        node.kind() == "call_expression" &&
        node.child_by_field("function")
            .map(|func| func.text() == "console.log")
            .unwrap_or(false)
    }
}

let matcher = ConsoleLogMatcher;
let matches = root.root().find_all(&matcher);
```

## File Processing

```rust
use std::path::Path;
use glob::glob;

// Process directory
for entry in glob("src/**/*.ts")? {
    let path = entry?;
    let content = std::fs::read_to_string(&path)?;
    let root = SgRoot::parse(&content, "typescript")?;
    
    // Apply rule
    let matches = root.root().find_all(&rule);
    for match in matches {
        let fixed = match.apply_fix()?;
        std::fs::write(&path, fixed)?;
    }
}
```

## Error Handling

```rust
use ast_grep_core::AstGrepError;

match SgRoot::parse(code, "typescript") {
    Ok(root) => {
        // Process AST
    }
    Err(AstGrepError::ParseError(msg)) => {
        eprintln!("Parse error: {}", msg);
    }
    Err(e) => {
        eprintln!("Other error: {}", e);
    }
}
```

## Performance Optimization

```rust
// Reuse parsed AST
let root = SgRoot::parse(code, "typescript")?;

// Batch operations
let matches = root.root().find_all(&pattern);

// Parallel processing
use rayon::prelude::*;

let files: Vec<PathBuf> = glob("src/**/*.ts")?
    .filter_map(Result::ok)
    .collect();

files.par_iter().for_each(|file| {
    let content = std::fs::read_to_string(file).unwrap();
    let root = SgRoot::parse(&content, "typescript").unwrap();
    let matches = root.root().find_all(&pattern);
    // Process matches...
});
```
