# Python API

## Installation

```bash
pip install ast-grep-py
```

## Basic Usage

```python
from ast_grep_py import SgRoot

# Parse code
root = SgRoot.parse('console.log("hello")', 'typescript')

# Find matches
matches = root.find_all('console.log($ARG)')

# Apply fixes
for match in matches:
    match.replace('logger.info($ARG)')
```

## Rule-based Scanning

```python
from ast_grep_py import Rule, ScanConfig

# Create rule
rule = Rule.from_dict({
    'id': 'no-console',
    'language': 'typescript',
    'rule': {'pattern': 'console.log($ARG)'}
})

# Scan directory
config = ScanConfig(paths=['src/**/*.ts'], rule=rule)
results = config.scan()
```

## Advanced Pattern Matching

```python
from ast_grep_py import Matcher, KindMatcher

# Use kind matcher
matcher = KindMatcher('call_expression')
matches = root.find_all(matcher)

# Custom matcher
def custom_matcher(node):
    return (node.kind() == 'call_expression' and 
            node.child_by_field('function') and
            node.child_by_field('function').text() == 'console.log')

matches = root.find_all(custom_matcher)
```

## File Processing

```python
import os
from pathlib import Path

# Process directory
for file_path in Path('src').rglob('*.ts'):
    content = file_path.read_text()
    root = SgRoot.parse(content, 'typescript')
    
    # Apply rule
    matches = root.find_all(rule)
    for match in matches:
        fixed = match.apply_fix()
        file_path.write_text(fixed)
```

## Error Handling

```python
from ast_grep_py import AstGrepError

try:
    root = SgRoot.parse(code, 'typescript')
except AstGrepError as e:
    print(f'AST-grep error: {e}')
except Exception as e:
    print(f'Unexpected error: {e}')
```

## Performance Optimization

```python
# Reuse parsed AST
root = SgRoot.parse(code, 'typescript')

# Batch operations
matches = root.find_all(pattern)

# Parallel processing
import multiprocessing
from concurrent.futures import ProcessPoolExecutor

def process_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    root = SgRoot.parse(content, 'typescript')
    return root.find_all(rule)

with ProcessPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(process_file, files))
```
