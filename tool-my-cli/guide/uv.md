---
description: Extremely fast Python package installer and resolver with advanced dependency management and performance optimization
title: cli-uv
tags: [cli, python, package-manager, dependency-resolution, performance]
---

## Overview

`uv` เป็น Python package manager ที่เร็วมาก (10-100x faster than pip) รองรับ pip, venv, และ virtualenv พร้อม advanced features สำหรับ dependency management และ performance optimization

## Installation

```powershell
scoop install uv
# หรือ
choco install uv
# หรือ
winget install astral-sh.uv
# หรือ
curl -LsSf https://astral.sh/uv/install.sh | sh
# หรือ
pip install uv
```

## Basic Usage

```bash
# Install package
uv pip install requests

# Install from requirements.txt
uv pip install -r requirements.txt

# Create virtual environment
uv venv

# Activate venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Linux/Mac

# Run Python with dependencies
uv run script.py

# Install specific version
uv pip install "requests>=2.0.0"
```

## Command Line Options

### Package Management

| Flag | Description |
|------|-------------|
| `install <package>` | Install packages |
| `uninstall <package>` | Uninstall packages |
| `list` | List installed packages |
| `freeze` | Export requirements |
| `show <package>` | Show package information |
| `index <url>` | Add package index |
| `compile <requirements>` | Compile requirements |

### Virtual Environment

| Flag | Description |
|------|-------------|
| `venv` | Create virtual environment |
| `venv <name>` | Create named venv |
| `--python <version>` | Specify Python version |
| `--seed` | Include seed packages |
| `--prompt <prompt>` | Custom prompt |
| `--system-site-packages` | Include system packages |

### Execution

| Flag | Description |
|------|-------------|
| `run <script>` | Run Python script |
| `--with <package>` | Add temporary dependency |
| `--python <version>` | Use specific Python version |
| `--no-project` | Ignore project dependencies |
| `--isolated` | Isolated execution |

### Configuration

| Flag | Description |
|------|-------------|
| `--cache-dir <dir>` | Cache directory |
| `--no-cache` | Disable caching |
| `--offline` | Offline mode |
| `--verbose` | Verbose output |
| `--quiet` | Quiet mode |
| `--color <when>` | Color output |

## Advanced Usage

### Package Installation

```bash
# Install with version constraints
uv pip install "requests>=2.0.0,<3.0.0"
uv pip install "numpy==1.24.0"
uv pip install "pandas~=2.0"

# Install from multiple sources
uv pip install -r requirements.txt -r dev-requirements.txt

# Install editable package
uv pip install -e .

# Install with extras
uv pip install "myproject[dev,docs]"

# Install from URL
uv pip install "git+https://github.com/user/repo.git"

# Install from local path
uv pip install ./local-package
```

### Virtual Environment Management

```bash
# Create with specific Python version
uv venv --python 3.11
uv venv --python python3.11

# Create with custom prompt
uv venv --prompt "myproject"

# Create with system packages
uv venv --system-site-packages

# Create with seed packages
uv venv --seed

# Create in specific directory
uv venv .venv --python 3.11
```

### Project Execution

```bash
# Run script with dependencies
uv run --with requests script.py

# Run with multiple dependencies
uv run --with requests --with numpy analysis.py

# Run with specific Python version
uv run --python 3.11 script.py

# Run in isolated mode
uv run --isolated script.py

# Run without project dependencies
uv run --no-project script.py
```

### Dependency Resolution

```bash
# Compile requirements with lock file
uv pip compile requirements.txt -o requirements.lock

# Install from lock file
uv pip install -r requirements.lock

# Update lock file
uv pip compile requirements.txt -o requirements.lock --upgrade

# Resolve conflicts
uv pip install package1 package2 --resolution=lowest-direct
```

## Configuration

### Configuration File

Create `~/.config/uv/uv.toml`:

```toml
# Global configuration
[pip]
# Index URLs
index-url = "https://pypi.org/simple"
extra-index-url = ["https://download.pytorch.org/whl/cpu"]

# Cache settings
cache-dir = "~/.cache/uv"
no-cache = false

# Timeout settings
timeout = 60

# Concurrent downloads
concurrent-downloads = 10

# Network settings
no-binary = false
only-binary = false
prefer-binary = false

[python]
# Default Python version
default-python = "3.11"

# Virtual environment settings
venv-path = "~/.virtualenvs"
system-site-packages = false

# Seed packages
seed-packages = ["pip", "setuptools", "wheel"]
```

### Project Configuration

Create `pyproject.toml`:

```toml
[project]
name = "myproject"
version = "0.1.0"
dependencies = [
    "requests>=2.25.0",
    "numpy>=1.20.0"
]

[project.optional-dependencies]
dev = [
    "pytest>=6.0.0",
    "black>=21.0.0",
    "flake8>=3.8.0"
]
docs = [
    "sphinx>=4.0.0",
    "sphinx-rtd-theme>=0.5.0"
]

[tool.uv]
# Project-specific uv settings
dev-dependencies = [
    "pytest",
    "black",
    "mypy"
]

# Index configuration
[[tool.uv.index]]
name = "testpypi"
url = "https://test.pypi.org/simple"
explicit = true
```

## Integration Examples

### Development Workflow

```bash
# Setup project
uv venv --python 3.11
source .venv/bin/activate

# Install dependencies
uv pip install -e .[dev]

# Run tests
uv run pytest

# Format code
uv run black .

# Type check
uv run mypy src

# Build package
uv build
```

### CI/CD Integration

```bash
# GitHub Actions
- name: Set up uv
  run: |
    curl -LsSf https://astral.sh/uv/install.sh | sh
    echo "$HOME/.local/bin" >> $GITHUB_PATH

- name: Install dependencies
  run: uv pip install -r requirements.txt

- name: Run tests
  run: uv run pytest
```

### Docker Integration

```dockerfile
FROM python:3.11-slim

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uv

# Copy project
COPY . /app
WORKDIR /app

# Install dependencies
RUN /uv pip install -r requirements.txt

# Run application
CMD ["/uv", "run", "python", "app.py"]
```

### Multi-Python Projects

```bash
# Create environments for different Python versions
uv venv --python 3.9 .venv-39
uv venv --python 3.10 .venv-310
uv venv --python 3.11 .venv-311

# Test across versions
for venv in .venv-*; do
    echo "Testing with $venv"
    source "$venv/bin/activate"
    uv run pytest
done
```

## Performance Optimization

### Caching

```bash
# Set cache directory
export UV_CACHE_DIR="$HOME/.cache/uv"

# Disable cache (for testing)
uv pip install package --no-cache

# Clear cache
uv cache clean

# Show cache info
uv cache info
```

### Parallel Operations

```bash
# Concurrent downloads
uv pip install -r requirements.txt --concurrent-downloads 20

# Parallel compilation
uv pip compile requirements.txt -o requirements.lock --concurrent-compilation
```

### Network Optimization

```bash
# Prefer binary packages
uv pip install package --prefer-binary

# Use specific index
uv pip install package --index-url https://pypi.org/simple

# Multiple indexes
uv pip install package --extra-index-url https://download.pytorch.org/whl/cpu
```

## Advanced Features

### Dependency Resolution

```bash
# Resolution strategies
uv pip install package1 package2 --resolution=lowest-direct
uv pip install package1 package2 --resolution=highest

# Force reinstall
uv pip install --force-reinstall package

# Upgrade specific package
uv pip install --upgrade package

# Upgrade all packages
uv pip install --upgrade-all
```

### Package Management

```bash
# Show package details
uv pip show requests

# List outdated packages
uv pip list --outdated

# Check for security vulnerabilities
uv pip audit

# Verify installation
uv pip verify
```

### Build and Distribution

```bash
# Build package
uv build

# Build wheel
uv build --wheel

# Build sdist
uv build --sdist

# Publish to PyPI
uv publish

# Publish to test PyPI
uv publish --publish-url https://test.pypi.org/legacy/
```

## Troubleshooting

### Common Issues

1. **Slow installation**: Check network connection and index URLs
2. **Dependency conflicts**: Use `--resolution` flag or check requirements
3. **Cache issues**: Clear cache with `uv cache clean`
4. **Virtual environment problems**: Recreate venv with correct Python version

### Debug Mode

```bash
# Verbose output
uv pip install package --verbose

# Debug resolution
uv pip install package --verbose --resolution=lowest-direct

# Check configuration
uv pip show --verbose

# Network debugging
uv pip install package --verbose --timeout 120
```

### Cache Management

```bash
# Cache statistics
uv cache info

# Clear specific package cache
uv cache clean --package requests

# Clear all cache
uv cache clean --all

# Prune old cache entries
uv cache prune
```

## Aliases and Functions

### Common Aliases

```bash
# Basic aliases
alias uvv='uv venv'
alias uvr='uv run'
alias uvi='uv pip install'
alias uvu='uv pip uninstall'
alias uvl='uv pip list'
alias uvf='uv pip freeze'

# Development aliases
alias uvdev='uv venv --seed && source .venv/bin/activate && uv pip install -e .[dev]'
alias uvtest='uv run pytest'
alias uvfmt='uv run black .'
alias uvlint='uv run flake8 .'
```

### Custom Functions

```bash
# Quick project setup
uv-project() {
    local name=$1
    mkdir -p "$name" && cd "$name"
    uv venv --python 3.11
    echo "Project $name created with uv venv"
}

# Environment switcher
uv-env() {
    local env=$1
    if [ -d ".venv-$env" ]; then
        source ".venv-$env/bin/activate"
        echo "Activated .venv-$env"
    else
        echo "Environment .venv-$env not found"
    fi
}

# Package installer with confirmation
uv-install() {
    local package=$1
    echo "Installing $package..."
    uv pip install "$package"
    echo "$package installed successfully"
}
```

## Use Cases

### Web Development

```bash
# Setup Flask project
uv venv --python 3.11
uv pip install flask sqlalchemy psycopg2-binary
uv run flask run

# Setup Django project
uv venv --python 3.11
uv pip install django djangorestframework
uv run django-admin startproject myproject
```

### Data Science

```bash
# Setup data science environment
uv venv --python 3.11
uv pip install numpy pandas matplotlib seaborn jupyter
uv run jupyter notebook

# Install scientific packages
uv pip install scipy scikit-learn tensorflow torch
```

### Machine Learning

```bash
# Setup ML environment
uv venv --python 3.11
uv pip install scikit-learn pandas numpy matplotlib
uv run python train_model.py

# Install deep learning frameworks
uv pip install tensorflow==2.13.0 torch==2.0.0
```

## Migration from pip

### Migration Commands

```bash
# Replace pip with uv
pip install requests → uv pip install requests
pip list → uv pip list
pip freeze → uv pip freeze
pip show requests → uv pip show requests

# Migrate virtual environments
python -m venv .venv → uv venv
source .venv/bin/activate → source .venv/bin/activate
```

### Compatibility

```bash
# Use pip-compatible interface
uv pip install --use-pep517 requests
uv pip install --no-binary requests
uv pip install --only-binary requests
```

## Features

- **Extremely fast**: 10-100x faster than pip
- **Parallel downloads**: Concurrent package downloads
- **Advanced caching**: Intelligent package caching
- **Dependency resolution**: Fast conflict resolution
- **Virtual environments**: Built-in venv management
- **Project management**: Pyproject.toml support
- **Cross-platform**: Windows, macOS, Linux
- **Multiple indexes**: Support for multiple package indexes
- **Lock files**: Deterministic dependency resolution
- **Build tools**: Integrated package building
- **Security**: Package verification and auditing
- **Offline mode**: Work without internet connection
- **Configuration**: Extensive configuration options
- **Integration**: Works with existing Python tools
- **Performance monitoring**: Built-in performance metrics
- **Error handling**: Clear error messages and suggestions
