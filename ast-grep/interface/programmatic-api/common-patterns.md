# Common Patterns

## Search and Replace

### Node.js
```javascript
const ast = parse(code, 'typescript');
const matches = ast.root().findAll('oldPattern($ARG)');
matches.forEach(m => m.replace('newPattern($ARG)'));
```

### Python
```python
root = SgRoot.parse(code, 'typescript')
matches = root.find_all('oldPattern($ARG)')
for match in matches:
    match.replace('newPattern($ARG)')
```

### Rust
```rust
let pattern = Pattern::try_new("oldPattern($ARG)")?;
let matches = root.root().find_all(&pattern);
for m in matches {
    m.replace("newPattern($ARG)")?;
}
```

## Rule Application

### Node.js
```javascript
const rule = Rule.fromYaml(`
id: my-rule
language: typescript
rule:
  pattern: pattern($ARG)
fix: replacement($ARG)
`);
```

### Python
```python
rule = Rule.from_dict({
    'id': 'my-rule',
    'language': 'typescript',
    'rule': {'pattern': 'pattern($ARG)'},
    'fix': 'replacement($ARG)'
})
```

### Rust
```rust
let config = RuleConfig::from_yaml_str(yaml_content)?;
let rule = RuleCore::try_from(config)?;
```

## Batch Processing

### Node.js
```javascript
const files = ['file1.ts', 'file2.ts', 'file3.ts'];
for (const file of files) {
  const content = await fs.readFile(file, 'utf-8');
  const root = SgRoot.parse(content, 'typescript');
  const matches = root.root().find_all(pattern);
  // Process matches...
}
```

### Python
```python
for file_path in Path('src').rglob('*.ts'):
    content = file_path.read_text()
    root = SgRoot.parse(content, 'typescript')
    matches = root.find_all(pattern)
    # Process matches...
```

### Rust
```rust
let files: Vec<PathBuf> = glob("src/**/*.ts")?
    .filter_map(Result::ok)
    .collect();

for file in files {
    let content = std::fs::read_to_string(&file)?;
    let root = SgRoot::parse(&content, "typescript")?;
    let matches = root.root().find_all(&pattern);
    // Process matches...
}
```
