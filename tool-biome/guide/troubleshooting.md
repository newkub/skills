# Biome Troubleshooting

## Common Issues

### 1. Biome Not Found

**Error**: `biome: command not found`

**Solution**:
```bash
# Install as project dependency
npm install --save-dev @biomejs/biome

# Or use npx
npx biome --version
```

### 2. Configuration Not Applied

**Issue**: Biome is not using your configuration

**Solutions**:
1. Ensure `biome.json` is in project root
2. Check file name spelling (`biome.json` not `biome.config.json`)
3. Validate JSON syntax

```bash
# Validate configuration
npx biome check --diagnostic-level=error
```

### 3. Slow Performance

**Issue**: Biome takes too long

**Solutions**:
1. Ignore build directories:

```json
{
  "files": {
    "ignore": ["dist/**", "node_modules/**", "build/**"]
  }
}
```

2. Use CI mode for faster checks:

```bash
npx biome ci ./src
```

### 4. ESLint Conflict

**Issue**: Conflicts with ESLint

**Solution**:
```bash
# Remove ESLint or disable it
npx biome migrate eslint --write

# Then remove ESLint config
rm .eslintrc.json
```

### 5. Prettier Conflict

**Issue**: Prettier conflicting with Biome

**Solution**:
```bash
# Remove prettier from package.json
npm uninstall prettier

# Remove .prettierrc
rm .prettierrc
```

### 6. VS Code Not Formatting

**Issue**: Save doesn't format

**Solutions**:
1. Install Biome extension
2. Check VS Code settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome"
}
```

3. Reload VS Code window

### 7. TypeScript Parsing Errors

**Issue**: Biome can't parse TypeScript files

**Solution**:
1. Ensure you have TypeScript installed
2. Check your TypeScript version (v4+ recommended)
3. Verify `tsconfig.json` is valid

### 8. Glob Patterns Not Working

**Issue**: Ignore patterns don't match

**Solution**:
- Use forward slashes in patterns
- Check pattern syntax:

```json
{
  "files": {
    "ignore": [
      "dist/**/*.js",
      "node_modules/**",
      "coverage/**"
    ]
  }
}
```

### 9. Safe vs Unsafe Fixes

**Issue**: `biome check` doesn't fix everything

**Solution**:
```bash
# Apply safe fixes
npx biome check --write ./src

# Apply unsafe fixes (may change behavior)
npx biome check --write --unsafe ./src
```

### 10. CI Exit Code Issues

**Issue**: CI fails even with no errors

**Solution**:
```bash
# Run in CI mode (non-interactive)
npx biome ci ./src

# Use correct reporter
npx biome ci ./src --reporter=github-annotations
```

## Debug Mode

Run with debug output:

```bash
RUST_LOG=debug biome check ./src
```

## Reset Configuration

To reset to defaults:

```bash
# Delete existing config
rm biome.json

# Generate fresh config
npx biome init
```

## Report Issues

If you find bugs, report at:
- GitHub: https://github.com/biomejs/biome/issues
- Include: biome version, OS, reproduction steps