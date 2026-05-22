# Error Handling

## Node.js

```javascript
import { AstGrepError } from '@ast-grep/napi';

try {
  const ast = parse(code, 'typescript');
  // Process AST
} catch (error) {
  if (error instanceof AstGrepError) {
    console.error('AST-grep error:', error.message);
    console.error('Error code:', error.code);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Python

```python
from ast_grep_py import AstGrepError

try:
    root = SgRoot.parse(code, 'typescript')
except AstGrepError as e:
    print(f'AST-grep error: {e}')
    print(f'Error code: {e.code}')
except Exception as e:
    print(f'Unexpected error: {e}')
```

## Rust

```rust
use ast_grep_core::AstGrepError;

match SgRoot::parse(code, "typescript") {
    Ok(root) => {
        // Process AST
    }
    Err(AstGrepError::ParseError(msg)) => {
        eprintln!("Parse error: {}", msg);
    }
    Err(AstGrepError::PatternError(msg)) => {
        eprintln!("Pattern error: {}", msg);
    }
    Err(e) => {
        eprintln!("Other error: {}", e);
    }
}
```

## Common Error Types

### Parse Errors
- Invalid syntax in source code
- Unsupported language
- File not found

### Pattern Errors
- Invalid pattern syntax
- Meta variable conflicts
- Language mismatch

### Rule Errors
- Invalid YAML configuration
- Missing required fields
- Constraint violations

## Error Recovery

```javascript
// Graceful degradation
function safeParse(code, language) {
  try {
    return parse(code, language);
  } catch (error) {
    console.warn(`Failed to parse: ${error.message}`);
    return null;
  }
}

// Continue processing other files
const files = ['file1.ts', 'file2.ts', 'file3.ts'];
for (const file of files) {
  const content = await fs.readFile(file, 'utf-8');
  const ast = safeParse(content, 'typescript');
  if (ast) {
    // Process AST
  }
}
```
