# API Reference

## Language APIs

| Language | Documentation |
|----------|---------------|
| **Node.js** | [nodejs.md](./nodejs.md) |
| **Python** | [python.md](./python.md) |
| **Rust** | [rust.md](./rust.md) |

## Common Topics

| Topic | Documentation |
|-------|---------------|
| **Common Patterns** | [common-patterns.md](./common-patterns.md) |
| **Error Handling** | [error-handling.md](./error-handling.md) |
| **Performance Tips** | [performance-tips.md](./performance-tips.md) |
| **Integration Examples** | [integration-examples.md](./integration-examples.md) |

## Quick Start

### Node.js
```javascript
import { parse } from '@ast-grep/napi';
const ast = parse('console.log("hello")', 'typescript');
const matches = ast.root().findAll('console.log($ARG)');
```

### Python
```python
from ast_grep_py import SgRoot
root = SgRoot.parse('console.log("hello")', 'typescript')
matches = root.find_all('console.log($ARG)')
```

### Rust
```rust
use ast_grep_core::{SgRoot, Pattern};
let root = SgRoot::parse("console.log(\"hello\")", "typescript")?;
let pattern = Pattern::try_new("console.log($ARG)")?;
let matches = root.root().find_all(&pattern);
```
