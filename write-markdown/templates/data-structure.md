# Data Structure Format

## รูปแบบ Data Structure มาตรฐาน

### JSON Format

```markdown
```json
{
  "name": "example",
  "value": 123
}
```
```

### YAML Format

```markdown
```yaml
name: example
value: 123
```
```

### XML Format

```markdown
```xml
<root>
  <name>example</name>
  <value>123</value>
</root>
```
```

### CSV Format

```markdown
```csv
name,value
example,123
```
```

### TOML Format

```markdown
```toml
name = "example"
value = 123
```
```

### When to Use

- JSON: configuration, API responses
- YAML: configuration, data serialization
- XML: legacy systems, SOAP
- CSV: tabular data, exports
- TOML: configuration files

### Best Practices

- ใช้ format ที่เหมาะสมกับ use case
- ให้ structure ชัดเจน
- ใช้ proper indentation
- ให้ data อ่านง่าย
