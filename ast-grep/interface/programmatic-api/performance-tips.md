# Performance Tips

## General Principles

1. **Reuse Parsed AST**: Parse once, use multiple times
2. **Batch Operations**: Process multiple files together
3. **Parallel Processing**: Use worker threads for large projects
4. **Memory Management**: Free AST objects when done

## Node.js

### Reuse Parsed AST

```javascript
// Bad: Parse multiple times
const matches1 = parse(code, 'typescript').root().findAll('pattern1');
const matches2 = parse(code, 'typescript').root().findAll('pattern2');

// Good: Parse once, use multiple times
const ast = parse(code, 'typescript');
const matches1 = ast.root().findAll('pattern1');
const matches2 = ast.root().findAll('pattern2');
```

### Parallel Processing

```javascript
const { Worker } = require('worker_threads');

function processFile(file) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./process-worker.js', {
      workerData: { file }
    });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
}

const files = ['file1.ts', 'file2.ts', 'file3.ts'];
Promise.all(files.map(processFile));
```

### Memory Management

```javascript
// Free AST when done
function processFile(file) {
  const content = fs.readFileSync(file, 'utf-8');
  const ast = parse(content, 'typescript');
  
  // Process AST
  const matches = ast.root().findAll(pattern);
  
  // Let garbage collector free memory
  ast = null;
  return matches;
}
```

## Python

### Batch Processing

```python
# Bad: Process one by one
for file in files:
    content = file.read_text()
    root = SgRoot.parse(content, 'typescript')
    matches = root.find_all(pattern)

# Good: Batch with multiprocessing
from concurrent.futures import ProcessPoolExecutor

def process_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    root = SgRoot.parse(content, 'typescript')
    return root.find_all(pattern)

with ProcessPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(process_file, files))
```

### Memory Optimization

```python
# Use generators for large datasets
def process_files(files):
    for file_path in files:
        with open(file_path, 'r') as f:
            content = f.read()
        root = SgRoot.parse(content, 'typescript')
        matches = root.find_all(pattern)
        yield matches

# Process without loading all into memory
for matches in process_files(files):
    for match in matches:
        process(match)
```

## Rust

### Parallel Processing

```rust
use rayon::prelude::*;

let files: Vec<PathBuf> = glob("src/**/*.ts")?
    .filter_map(Result::ok)
    .collect();

// Process in parallel
files.par_iter().for_each(|file| {
    let content = std::fs::read_to_string(file).unwrap();
    let root = SgRoot::parse(&content, "typescript").unwrap();
    let matches = root.root().find_all(&pattern);
    // Process matches...
});
```

### Memory Efficiency

```rust
// Stream processing for large files
use std::io::{BufRead, BufReader};

fn process_large_file(file_path: &Path) -> Result<(), Box<dyn std::error::Error>> {
    let file = File::open(file_path)?;
    let reader = BufReader::new(file);
    
    for line in reader.lines() {
        let root = SgRoot::parse(&line?, "typescript")?;
        let matches = root.root().find_all(&pattern);
        // Process matches...
    }
    
    Ok(())
}
```

## Performance Monitoring

```javascript
// Measure performance
console.time('parse');
const ast = parse(code, 'typescript');
console.timeEnd('parse');

console.time('find');
const matches = ast.root().findAll(pattern);
console.timeEnd('find');

console.log(`Found ${matches.length} matches`);
```

## Optimization Strategies

1. **Limit File Scope**: Use glob patterns to reduce processing
2. **Cache Results**: Cache parsed AST for repeated operations
3. **Use Specific Patterns**: Narrow patterns are faster
4. **Enable Parallelism**: Use all available CPU cores
5. **Profile Regularly**: Identify bottlenecks early
