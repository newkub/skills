# Troubleshooting

Common issues and solutions when working with AST-grep rules.

## Pattern Matching Issues

### Pattern Doesn't Match

**Problem**: Your pattern doesn't find expected matches.

**Common Causes**:
1. Pattern is not valid code syntax
2. Pattern is too specific or too broad
3. Language mismatch between pattern and target code

**Solutions**:

1. **Validate Pattern Syntax**
   ```bash
   # Use playground to validate
   # Visit: https://ast-grep.github.io/playground
   
   # Or use debug mode
   ast-grep run -p 'your-pattern' --debug-query
   ```

2. **Check Language Specification**
   ```yaml
   # Ensure correct language
   language: typescript  # not javascript for .ts files
   
   # Use file patterns to limit scope
   files:
     - "**/*.ts"
     - "!**/*.d.ts"
   ```

3. **Simplify Pattern**
   ```yaml
   # Start simple
   rule:
     pattern: console.log
   
   # Then add complexity
   rule:
     pattern: console.log($ARG)
   ```

### Too Many False Positives

**Problem**: Rule matches too much code.

**Solutions**:

1. **Add Constraints**
   ```yaml
   rule:
     pattern: import $NAME from '$PATH'
     constraints:
       NAME: { regex: '^[A-Z]' }
       PATH: { regex: '^@/' }
   ```

2. **Use Relational Rules**
   ```yaml
   rule:
     pattern: console.log($ARGS)
     not:
       inside:
         kind: catch_clause
   ```

3. **Limit File Scope**
   ```yaml
   files:
     - "src/**/*.ts"
     - "!src/**/*.test.ts"
   ```

## Fix Template Issues

### Fix Doesn't Work

**Problem**: Fix template generates invalid code.

**Common Causes**:
1. Meta-variable names don't match
2. Indentation issues
3. Missing context

**Solutions**:

1. **Verify Meta-variable Names**
   ```yaml
   # Pattern captures $MSG
   rule:
     pattern: console.log($MSG)
   
   # Fix must use same name
   fix: "logger.info($MSG)"
   ```

2. **Handle Indentation**
   ```yaml
   # Use block scalar for multi-line fixes
   fix: |
     if ($CONDITION) {
       $BODY
     }
   ```

3. **Preserve Context**
   ```yaml
   fix:
     template: "const $VAR = $VALUE"
     expandEnd: rule
   ```

### Fix Applied Incorrectly

**Problem**: Fix changes code in unexpected ways.

**Solutions**:

1. **Test with Interactive Mode**
   ```bash
   ast-grep scan --rule your-rule.yml --interactive
   ```

2. **Use Specific Patterns**
   ```yaml
   # More specific pattern
   rule:
     pattern: console.log($MSG)
     constraints:
       MSG: { kind: string_literal }
   ```

3. **Add Context Constraints**
   ```yaml
   rule:
     pattern: console.log($MSG)
     inside:
       kind: function_declaration
   ```

## Performance Issues

### Slow Scanning

**Problem**: AST-grep scan is too slow.

**Solutions**:

1. **Limit File Scope**
   ```yaml
   files:
     - "src/**/*.ts"
     - "!src/**/*.test.ts"
     - "!src/**/*.spec.ts"
   ```

2. **Optimize Rule Patterns**
   ```yaml
   # Use kind matching when possible
   rule:
     kind: call_expression
     has:
       pattern: console.log
   
   # Instead of broad pattern
   rule:
     pattern: console.log($$$ARGS)
   ```

3. **Use Worker Threads**
   ```bash
   # Increase thread count
   ast-grep scan --threads 8
   ```

### Memory Usage

**Problem**: High memory consumption during scanning.

**Solutions**:

1. **Scan Subdirectories**
   ```bash
   ast-grep scan src/ --config sgconfig.yml
   ```

2. **Exclude Large Files**
   ```yaml
   files:
     - "**/*.ts"
     - "!**/*.min.js"
     - "!**/bundle.js"
   ```

3. **Use Incremental Scanning**
   ```bash
   # Scan only changed files
   ast-grep scan --git-diff
   ```

## Configuration Issues

### Rule Not Found

**Problem**: AST-grep can't find your rule files.

**Solutions**:

1. **Check sgconfig.yml**
   ```yaml
   ruleDirs:
     - rules
     - ast-grep-rules
   ```

2. **Verify File Paths**
   ```bash
   # List rule files
   find . -name "*.yml" -path "*/rules/*"
   
   # Test specific rule
   ast-grep scan --rule path/to/rule.yml
   ```

3. **Check File Permissions**
   ```bash
   # Ensure files are readable
   ls -la rules/
   ```

### Language Support Issues

**Problem**: Rule doesn't work for specific language.

**Solutions**:

1. **Check Supported Languages**
   ```bash
   ast-grep --help | grep -A 20 "Supported Languages"
   ```

2. **Use Correct Language ID**
   ```yaml
   # TypeScript files
   language: typescript
   
   # JavaScript files
   language: javascript
   
   # Python files
   language: python
   ```

3. **Custom Language Configuration**
   ```yaml
   # sgconfig.yml
   customLanguages:
    mylang:
      libraryPath: "./mylang-parser.so"
      extensions: [".mylang"]
      expandoChar: "$"
   ```

## Testing Issues

### Test Cases Fail

**Problem**: Rule tests don't pass.

**Solutions**:

1. **Check Test File Structure**
   ```
   rules/
     my-rule.yml
   rule-tests/
     my-rule/
       valid.ts
       invalid.ts
   ```

2. **Verify Test Content**
   ```typescript
   // invalid.ts - should match rule
   console.log("This should be flagged");
   
   // valid.ts - should not match rule
   logger.info("This is acceptable");
   ```

3. **Run Tests Verbosely**
   ```bash
   ast-grep test --verbose
   ```

### Snapshot Tests Fail

**Problem**: Snapshot tests don't match expected output.

**Solutions**:

1. **Update Snapshots**
   ```bash
   ast-grep test --update-all
   ```

2. **Review Changes**
   ```bash
   # Check what changed
   git diff rule-tests/
   ```

3. **Debug Specific Test**
   ```bash
   ast-grep test --rule my-rule.yml --debug
   ```

## Editor Integration Issues

### LSP Server Problems

**Problem**: AST-grep LSP doesn't work in editor.

**Solutions**:

1. **Check LSP Configuration**
   ```json
   // .vscode/settings.json
   {
     "ast-grep.enable": true,
     "ast-grep.configPath": "sgconfig.yml"
   }
   ```

2. **Restart LSP Server**
   ```bash
   # Restart editor LSP
   # VS Code: Command Palette > Restart Language Server
   ```

3. **Check LSP Logs**
   ```bash
   # Run LSP with debug
   ast-grep lsp --log-level debug
   ```

### VS Code Extension Issues

**Problem**: VS Code extension not working.

**Solutions**:

1. **Check Extension Installation**
   ```bash
   # List extensions
   code --list-extensions | grep ast-grep
   ```

2. **Reload Window**
   ```json
   // Command Palette > Developer: Reload Window
   ```

3. **Check Extension Settings**
   ```json
   {
     "ast-grep.trace.server": "verbose",
     "ast-grep.debug": true
   }
   ```

## CI/CD Integration Issues

### GitHub Actions Fail

**Problem**: AST-grep scan fails in CI.

**Solutions**:

1. **Check Workflow Configuration**
   ```yaml
   - name: Run AST-grep
     run: |
       npm install -g @ast-grep/cli
       ast-grep scan --config sgconfig.yml
   ```

2. **Verify Configuration Path**
   ```bash
   # Use absolute path
   ast-grep scan --config $PWD/sgconfig.yml
   ```

3. **Check Exit Codes**
   ```bash
   # Capture exit code
   ast-grep scan --config sgconfig.yml
   echo "Exit code: $?"
   ```

### Pre-commit Hook Issues

**Problem**: Pre-commit hooks fail.

**Solutions**:

1. **Check Hook Configuration**
   ```yaml
   # .pre-commit-config.yaml
   repos:
     - repo: local
       hooks:
         - id: ast-grep
           name: AST-grep Scan
           entry: ast-grep scan --config sgconfig.yml
           language: system
   ```

2. **Test Hook Manually**
   ```bash
   # Run hook manually
   pre-commit run ast-grep --all-files
   ```

3. **Debug Hook Output**
   ```bash
   # Run with verbose output
   pre-commit run ast-grep --verbose
   ```

## Advanced Debugging

### Debug Query Mode

Use debug mode to understand pattern matching:

```bash
# Debug pattern matching
ast-grep run -p 'console.log($ARG)' --debug-query

# Debug rule matching
ast-grep scan --rule my-rule.yml --debug-query
```

### JSON Output

Use JSON output for detailed analysis:

```bash
# Get detailed match information
ast-grep scan --config sgconfig.yml --json

# Parse JSON output
ast-grep scan --config sgconfig.yml --json | jq '.[] | {file: .file, text: .text, range: .range}'
```

### AST Inspection

Inspect the AST structure:

```bash
# Dump AST for debugging
ast-grep run -p 'console.log($ARG)' --inspect ast

# Show node kinds
ast-grep run -p 'console.log($ARG)' --inspect kind
```

## Common Error Messages

### "Cannot parse rule"

**Cause**: Invalid YAML syntax or rule structure.

**Solution**: 
- Check YAML syntax with online validator
- Verify rule structure against documentation
- Use minimal rule to test

### "Pattern did not match any variant"

**Cause**: Pattern syntax is invalid for the language.

**Solution**:
- Simplify pattern
- Check language specification
- Use playground to validate

### "Meta variable not found"

**Cause**: Meta-variable in fix doesn't exist in pattern.

**Solution**:
- Verify meta-variable names match
- Check pattern captures the variable
- Use constraints to ensure capture

### "File not found"

**Cause**: Rule file or sgconfig.yml not found.

**Solution**:
- Check file paths
- Verify working directory
- Use absolute paths

## Getting Help

### Community Resources

1. **GitHub Discussions**: https://github.com/ast-grep/ast-grep/discussions
2. **Discord Server**: https://discord.gg/ast-grep
3. **Stack Overflow**: https://stackoverflow.com/questions/tagged/ast-grep

### Documentation

1. **Official Docs**: https://ast-grep.github.io/
2. **Rule Reference**: https://ast-grep.github.io/reference/rule.html
3. **Pattern Guide**: https://ast-grep.github.io/guide/pattern-syntax.html

### Reporting Issues

When reporting issues, include:

1. **AST-grep version**: `ast-grep --version`
2. **Operating system**: `uname -a`
3. **Rule content**: Minimal reproducing example
4. **Target code**: Code that should match but doesn't
5. **Error message**: Full error output
6. **Debug output**: `--debug-query` output if applicable

## Next Steps

- Review [Best Practices](./best-practices.md)
- Explore [Advanced Patterns](../patterns/)
- Check [Real-world Examples](../examples/)
