# configuration

## index.md

# Configuration Reference - Python

## pyproject.toml

Modern Python project configuration:

```toml
[project]
name = "myproject"
version = "1.0.0"
description = "A sample project"
requires-python = ">=3.10"
dependencies = [
    "requests>=2.28.0",
    "numpy>=1.24.0"
]

[project.optional-dependencies]
dev = ["pytest", "black", "mypy"]

[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"
```

## setup.py

Traditional setup configuration:

```python
from setuptools import setup, find_packages

setup(
    name="myproject",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "requests>=2.28.0",
    ],
    extras_require={
        "dev": ["pytest", "black"]
    }
)
```

## pytest.ini

```ini
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = -v --tb=short
```

## mypy.ini

```ini
[mypy]
python_version = 3.10
warn_return_any = True
warn_unused_configs = True
disallow_untyped_defs = True

[mypy-requests.*]
ignore_missing_imports = True
```

## .pylintrc

```ini
[MESSAGES CONTROL]
disable=C0111,C0103,R0903

[FORMAT]
max-line-length=100
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| PYTHONPATH | Additional module paths |
| PYTHONHOME | Python installation directory |
| PYTHONDONTWRITEBYTECODE | Disable .pyc files |
| PYTHONIOENCODING | Set default encoding |
| PYTHONWARNINGS | Control warnings |


---

