# Troubleshooting

## Common Issues

- **Pattern doesn't match**: Check syntax and language specification
- **Rule not found**: Verify sgconfig.yml and file paths
- **Performance issues**: Limit scope and optimize patterns
- **Fix doesn't work**: Validate meta-variable names

## Debug Mode

```bash
# Debug pattern matching
ast-grep run -p 'pattern' --debug-query

# Debug rule matching
ast-grep scan --rule rule.yml --debug-query

# Show AST structure
ast-grep run -p 'pattern' --inspect ast
```
