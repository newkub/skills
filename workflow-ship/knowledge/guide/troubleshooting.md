# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Workflow-Ship

### Common Issues

#### 1. Ship-Code Fails

**Symptoms:**
- Build fails
- Compilation errors
- Missing dependencies

**Solutions:**

**Check Dependencies:**
```bash
# ติดตั้ง dependencies
bun install

# ตรวจสอบ dependencies
bun pm ls
```

**Check Build Configuration:**
```bash
# ตรวจสอบ build config
cat vite.config.ts
cat next.config.js
```

**Check Environment:**
```bash
# ตรวจสอบ environment variables
cat .env

# ตรวจสอบ Node/Bun version
bun --version
node --version
```

**Common Fixes:**
- Update dependencies: `bun update`
- Clear cache: `rm -rf node_modules/.cache`
- Reinstall: `rm -rf node_modules && bun install`

#### 2. Run-Verify Fails

**Symptoms:**
- Typecheck errors
- Lint errors
- Test failures

**Solutions:**

**Typecheck Errors:**
```bash
# Run typecheck
bun run typecheck

# Check tsconfig
cat tsconfig.json

# Fix type errors
# 1. Add proper types
# 2. Remove `any`
# 3. Enable strict mode
```

**Lint Errors:**
```bash
# Run lint
bun run lint

# Auto-fix
bun run lint:fix

# Check lint config
cat biome.json
cat .eslintrc.js
```

**Test Failures:**
```bash
# Run tests
bun run test

# Run specific test
bun run test -- sum.test.ts

# Run with coverage
bun run test --coverage

# Check test config
cat vitest.config.ts
```

**Common Fixes:**
- Fix type errors: Add proper types
- Fix lint errors: Follow lint rules
- Fix test failures: Update tests or code

#### 3. Run-Dev Fails

**Symptoms:**
- Dev server won't start
- Port already in use
- Runtime errors

**Solutions:**

**Port Already in Use:**
```bash
# Find process using port
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Use different port
bun run dev --port 3001
```

**Runtime Errors:**
```bash
# Check dev server logs
bun run dev

# Check environment
cat .env

# Check dev config
cat vite.config.ts
cat next.config.js
```

**Common Fixes:**
- Change port
- Fix environment variables
- Update dev config

#### 4. Loop Until Complete Stuck

**Symptoms:**
- Loop never completes
- Infinite retries
- No progress

**Solutions:**

**Check Loop Configuration:**
```bash
# Check max retries
# Check timeout
# Check backoff strategy
```

**Force Stop:**
```bash
# Stop the loop
Ctrl+C

# Check status
ps aux | grep workflow
```

**Common Fixes:**
- Increase max retries
- Increase timeout
- Fix underlying issue

#### 5. Error Resolution Fails

**Symptoms:**
- Can't resolve error
- Wrong fix applied
- Error persists

**Solutions:**

**Manual Resolution:**
```bash
# Analyze error manually
# Check error message
# Check stack trace
# Check code context
```

**Skip Auto-Resolution:**
```bash
# Disable auto-resolution
# Fix manually
# Re-run workflow
```

**Common Fixes:**
- Analyze error manually
- Apply correct fix
- Test fix thoroughly

### Debugging Strategies

#### 1. Enable Verbose Logging

```bash
# Enable verbose mode
bun run dev --verbose
bun run test --verbose
```

#### 2. Check Logs

```bash
# Check build logs
cat dist/build.log

# Check test logs
cat coverage/index.html

# Check dev server logs
# Look at terminal output
```

#### 3. Use Debuggers

```bash
# Use Node debugger
node --inspect dist/index.js

# Use Chrome DevTools
chrome://inspect
```

#### 4. Isolate Issues

```bash
# Test individual components
bun run test -- sum.test.ts

# Test individual phases
/ship-code
/run-verify
/run-dev
```

### Performance Issues

#### 1. Slow Build

**Solutions:**
- Enable incremental builds
- Cache dependencies
- Minimize bundle size
- Parallelize tasks

#### 2. Slow Tests

**Solutions:**
- Use parallel testing
- Mock external dependencies
- Skip slow tests in CI
- Optimize test setup

#### 3. Slow Dev Server

**Solutions:**
- Enable fast refresh
- Minimize initial load
- Lazy load routes
- Optimize HMR

### Environment Issues

#### 1. Wrong Node/Bun Version

**Solutions:**
```bash
# Check version
bun --version
node --version

# Install correct version
bun install --bun
nvm install 20
```

#### 2. Missing Environment Variables

**Solutions:**
```bash
# Check .env
cat .env

# Add missing variables
echo "API_KEY=secret" >> .env

# Load .env
bun run dev --dotenv .env
```

#### 3. Wrong OS/Platform

**Solutions:**
- Check platform compatibility
- Use cross-platform tools
- Use Docker containers

### Dependency Issues

#### 1. Dependency Conflicts

**Solutions:**
```bash
# Check conflicts
bun pm ls

# Resolve conflicts
bun update

# Use resolutions
# Add to package.json
```

#### 2. Outdated Dependencies

**Solutions:**
```bash
# Check outdated
bun outdated

# Update dependencies
bun update

# Update major versions
bun update --latest
```

#### 3. Vulnerable Dependencies

**Solutions:**
```bash
# Check vulnerabilities
bun audit

# Fix vulnerabilities
bun update

# Use alternatives
# Replace vulnerable packages
```

### Git Issues

#### 1. Git Hooks Fail

**Solutions:**
```bash
# Skip hooks (temporary)
git commit --no-verify

# Fix hooks
# Update hook scripts
# Fix permissions
```

#### 2. Merge Conflicts

**Solutions:**
```bash
# Resolve conflicts
git mergetool

# Abort merge
git merge --abort

# Rebase instead
git rebase
```

#### 3. Push Fails

**Solutions:**
```bash
# Pull first
git pull

# Force push (careful)
git push --force

# Check remote
git remote -v
```

### Getting Help

#### 1. Check Documentation

- Read skill documentation
- Read tool documentation
- Read framework documentation

#### 2. Search Issues

- Search GitHub issues
- Search Stack Overflow
- Search documentation

#### 3. Ask for Help

- Ask in community forums
- Ask in team channels
- Create GitHub issue

### Prevention Strategies

#### 1. Regular Updates

- Update dependencies regularly
- Update tools regularly
- Update documentation regularly

#### 2. Monitoring

- Monitor build status
- Monitor test results
- Monitor dev server health

#### 3. Testing

- Test changes thoroughly
- Test in isolation
- Test in integration

### Troubleshooting Checklist

When encountering issues:

- [ ] Check error messages
- [ ] Check logs
- [ ] Check configuration
- [ ] Check dependencies
- [ ] Check environment
- [ ] Check version compatibility
- [ ] Try manual resolution
- [ ] Enable verbose logging
- [ ] Isolate the issue
- [ ] Document the issue
- [ ] Search for solutions
- [ ] Ask for help if needed

### Next Steps

- อ่าน [Best Practices](best-practices.md) สำหรับแนวทางปฏิบัติที่ดีที่สุด
- อ่าน [Performance](performance.md) สำหรับประสิทธิภาพ
- อ่าน [Security](security.md) สำหรับความปลอดภัย
