# Node.js API

## Installation

```bash
npm install @ast-grep/napi
```

## Basic Usage

```javascript
import { parse } from '@ast-grep/napi';

// Parse TypeScript code
const ast = parse('console.log("hello")', 'typescript');

// Find all console.log calls
const matches = ast.root().findAll('console.log($ARG)');

// Apply fix
matches.forEach(match => {
  match.replace('logger.info($ARG)');
});
```

## Advanced Usage

```javascript
import { SgRoot, Rule } from '@ast-grep/napi';

// Create rule from YAML
const rule = Rule.fromYaml(`
id: no-console
language: typescript
rule:
  pattern: console.log($ARG)
`);

// Scan files
const results = await SgRoot.scanInFiles('src/**/*.ts', rule);
```

## Advanced Pattern Matching

```javascript
import { Matcher, KindMatcher } from '@ast-grep/napi';

// Use kind matcher
const matcher = new KindMatcher('call_expression');
const matches = ast.root().find_all(matcher);

// Custom matcher
const customMatcher = new Matcher(node => {
  return node.kind() === 'call_expression' && 
         node.childByField('function')?.text() === 'console.log';
});
```

## Rule Configuration

```javascript
import { RuleConfig, RuleCore } from '@ast-grep/napi';

// Create rule from YAML
const ruleConfig = RuleConfig.fromYaml(`
id: no-console
language: typescript
rule:
  pattern: console.log($ARG)
constraints:
  ARG:
    kind: string_literal
`);

// Compile rule
const rule = RuleCore::try_from(ruleConfig);
```

## File Processing

```javascript
import { SgRoot, ScanConfig } from '@ast-grep/napi';
import { glob } from 'glob';

// Process multiple files
const files = await glob('src/**/*.ts');
for (const file of files) {
  const content = await fs.readFile(file, 'utf-8');
  const root = SgRoot.parse(content, 'typescript');
  
  // Apply rule
  const matches = root.root().find_all(rule);
  for (const match of matches) {
    const fixed = match.apply_fix();
    await fs.writeFile(file, fixed);
  }
}
```

## Batch Operations

```javascript
import { ScanConfig } from '@ast-grep/napi';

// Scan directory
const config = new ScanConfig({
  paths: ['src/**/*.ts'],
  rule: rule,
  threads: 4
});

const results = await config.scan();
results.forEach(result => {
  console.log(`File: ${result.file}`);
  result.matches.forEach(match => {
    console.log(`  ${match.range}: ${match.text()}`);
  });
});
```

## Error Handling

```javascript
import { AstGrepError } from '@ast-grep/napi';

try {
  const ast = parse(code, 'typescript');
  // Process AST
} catch (error) {
  if (error instanceof AstGrepError) {
    console.error('AST-grep error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Performance Optimization

```javascript
// Reuse parsed AST
const ast = parse(code, 'typescript');

// Batch operations
const matches = ast.root().findAll(pattern);

// Parallel processing (Node.js)
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
