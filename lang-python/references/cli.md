# cli

## index.md

# CLI Reference - Python

## Python Interpreter

```bash
# Run script
python script.py

# Run with specific version
python3.12 script.py

# Interactive mode
python

# Execute code
python -c "print('Hello')"

# Module execution
python -m module_name

# Version
python --version
python3 --version
```

## pip Commands

```bash
# Install packages
pip install package_name
pip install package==1.0.0
pip install package>=1.0.0

# List installed packages
pip list
pip freeze

# Uninstall
pip uninstall package_name

# Show package info
pip show package_name

# Search packages
pip search "keyword"

# Check outdated
pip list --outdated
```

## venv Commands

```bash
# Create virtual environment
python -m venv venv_name

# Activate (Linux/macOS)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate

# Deactivate
deactivate
```

## Common Commands

| Command | Description |
|---------|-------------|
| `python -m venv venv` | Create venv |
| `python -m pip install pkg` | Install package |
| `python -m http.server 8000` | HTTP server |
| `python -m json.tool` | JSON formatter |
| `python -m pydoc -p 8000` | Documentation server |
| `python -m unittest` | Run tests |
| `python -m pytest` | Run pytest |

## PyInstaller

```bash
pip install pyinstaller
pyinstaller --onefile script.py
pyinstaller --windowed script.py
```

## pip-tools

```bash
pip install pip-tools
pip-compile requirements.in
pip-sync requirements.txt
```

## Black Formatter

```bash
pip install black
black script.py
black --check script.py
black --diff script.py
```


---

