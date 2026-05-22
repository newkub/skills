# Installation

## Installation Methods

### npm
```bash
npm install -g @ast-grep/cli
```

### cargo
```bash
cargo install ast-grep
```

### homebrew
```bash
brew install ast-grep
```

### pip
```bash
pip install ast-grep-cli
```

## Verification

After installation, verify the CLI is working:

```bash
# Check version
ast-grep --version

# Test basic functionality
ast-grep run -p 'console.log($ARG)' --help
```
