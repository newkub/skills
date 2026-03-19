# Developer Experience (DX)

## Rationale

Developer experience ช่วยทีมทำงานไว, reduce onboarding time, และ improve productivity

## Bad Practice

```bash
# ❌ No documentation
# ไม่มี README หรือ docs

# ❌ Complex setup
npm install
npm run build
npm run dev
# ❌ ต้อง config อีก 10 อย่าง

# ❌ No tooling
# ไม่มี linting, formatting, testing
```

## Good Practice

```bash
# ✅ Clear documentation
# README.md with setup instructions

# ✅ Simple setup
npm install
npm run dev

# ✅ Good tooling
npm run lint    # ESLint
npm run format  # Prettier
npm run test    # Vitest
npm run build   # Build
```

## DX Best Practices

### 1. Documentation

- **README**: Project overview, setup, usage
- **API docs**: Swagger/OpenAPI
- **Code comments**: Explain complex logic
- **Contributing guide**: How to contribute

### 2. Tooling

- **Linting**: ESLint, stylelint
- **Formatting**: Prettier
- **Testing**: Vitest, Playwright
- **Type checking**: TypeScript

### 3. CLI

- **Simple commands**: npm run dev, npm run build
- **Helpful output**: Clear error messages
- **Fast feedback**: Quick builds, tests

### 4. Development Environment

- **Hot reload**: See changes instantly
- **Error overlay**: Clear error messages
- **Debugging**: Source maps, breakpoints

## Onboarding

### 1. Quick Start

- **One-command setup**: npm install && npm run dev
- **Clear instructions**: Step-by-step guide
- **Working example**: Clone and run

### 2. Local Development

- **Docker**: Consistent environment
- **Seed data**: Sample data for testing
- **Development tools**: Easy debugging

### 3. Documentation

- **Architecture overview**: System design
- **Code structure**: Where things are
- **Common tasks**: How to do common things

## Productivity

### 1. Automation

- **CI/CD**: Automated testing, deployment
- **Pre-commit hooks**: Lint, format before commit
- **Code generation**: Scaffolding tools

### 2. Feedback Loops

- **Fast builds**: Incremental compilation
- **Fast tests**: Parallel execution
- **Hot reload**: Instant feedback

### 3. Debugging

- **Source maps**: Debug TypeScript
- **Logging**: Clear error messages
- **Monitoring**: Track issues

## References

- [Developer Experience Best Practices](https://developerexperience.io/)
- [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar)
