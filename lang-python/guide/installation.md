# Installation - Python

## Download Python

### Official Website

URL: https://python.org/downloads

### Windows Installer

1. Download installer from python.org
2. Run installer (.exe)
3. Check "Add Python to PATH"
4. Click "Install Now"

### macOS

```bash
# Using Homebrew
brew install python@3.12

# Using pyenv
brew install pyenv
pyenv install 3.12.0
```

### Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3.12 python3-pip

# Fedora
sudo dnf install python3.12

# Arch
sudo pacman -S python
```

## Package Management

### pip

```bash
# Install package
pip install requests

# Install from requirements.txt
pip install -r requirements.txt

# Freeze dependencies
pip freeze > requirements.txt

# Upgrade package
pip install --upgrade requests
```

### pipx (Isolated environments)

```bash
# Install pipx
python -m pip install pipx
pipx ensurepath

# Install tool in isolated env
pipx install black
pipx run black --version
```

### venv

```bash
# Create virtual environment
python -m venv myenv

# Activate
source myenv/bin/activate      # Linux/macOS
myenv\Scripts\activate.bat     # Windows (cmd)
myenv\Scripts\Activate.ps1     # Windows (PowerShell)
```

## Development Tools

### pip-tools

```bash
pip install pip-tools
pip-compile requirements.in
pip-sync requirements.txt
```

### Poetry

```bash
# Install Poetry
curl -sSL https://install.python-poetry.org | python3 -

# Create project
poetry new myproject
cd myproject
poetry add requests
```

### pyenv (Version Manager)

```bash
# List available versions
pyenv install --list

# Install version
pyenv install 3.12.0

# Set global/local version
pyenv global 3.12.0
pyenv local 3.12.0
```

## IDE Setup

### VS Code Extensions

- Python (Microsoft)
- Pylance
- Python Debugger

### PyCharm

Download: https://jetbrains.com/pycharm
