# Installation - Ruby

## Download Ruby

### RubyInstaller (Windows)

URL: https://rubyinstaller.org/

1. Download installer
2. Run installer
3. Follow wizard
4. Open command prompt

### macOS

```bash
# Using Homebrew
brew install ruby

# Using rbenv
brew install rbenv
rbenv install 3.2.0
rbenv global 3.2.0
```

### Linux

```bash
# Ubuntu/Debian
sudo apt install ruby ruby-dev

# Fedora
sudo dnf install ruby

# Arch
sudo pacman -S ruby
```

## rbenv (Recommended)

```bash
# Install rbenv
brew install rbenv ruby-build

# Add to shell
echo 'eval "$(rbenv init -)"' >> ~/.zshrc

# Install Ruby version
rbenv install 3.2.0
rbenv global 3.2.0

# Verify
ruby --version
```

## Bundler

```bash
# Update gem system
gem update --system

# Install bundler
gem install bundler

# Create Gemfile
bundle init

# Install dependencies
bundle install
```

## Rails Installation

```bash
gem install rails
rails new myapp
cd myapp
bundle install
rails server
```

## Development Tools

### VS Code Extensions

- Ruby
- Ruby LSP
- Rufo (formatter)

### IDEs

| IDE | Description |
|-----|-------------|
| RubyMine | JetBrains full IDE |
| VS Code | with Ruby extension |
| Vim/Neovim | with vim-ruby |

## Version Managers

| Tool | Description |
|------|-------------|
| rbenv | Lightweight version manager |
| rvm | Full-featured version manager |
| asdf | Multi-language version manager |
