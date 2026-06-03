# Integration

## การใช้ Git ร่วมกับ Tools อื่นๆ

### IDE Integration

| IDE | Git Integration |
|-----|-----------------|
| VS Code | Built-in Git support (Source Control panel) |
| JetBrains | Built-in Git integration |
| Vim/Neovim | fugitive.vim, lazygit |
| Emacs | Magit |

### VS Code Git Features

```bash
# Git Graph extension
code --install-extension mhutchie.git-graph

# GitLens extension
code --install-extension eamodio.gitlens

# GitHub Pull Requests extension
code --install-extension GitHub.vscode-pull-request-github
```

### CI/CD Integration

| Platform | Git Integration |
|----------|-----------------|
| GitHub Actions | `.github/workflows/` |
| GitLab CI | `.gitlab-ci.yml` |
| Jenkins | Pipeline configuration |
| CircleCI | `.circleci/config.yml` |

### GitHub Actions Example

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
```

### Git Hooks

```bash
# สร้าง pre-commit hook
mkdir -p .git/hooks
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
# Run tests before commit
npm test
EOF
chmod +x .git/hooks/pre-commit
```

### Common Hooks

| Hook | Description |
|------|-------------|
| `pre-commit` | Run before commit (lint, test) |
| `commit-msg` | Validate commit message format |
| `pre-push` | Run before push (test, build) |
| `post-commit` | Run after commit (notify, update) |
| `pre-rebase` | Run before rebase |

### Git GUI Tools

| Tool | Description |
|------|-------------|
| [lazygit](https://github.com/jesseduffield/lazygit) | Terminal UI |
| [tig](https://github.com/jonas/tig) | Text-mode interface |
| [GitHub Desktop](https://desktop.github.com/) | GitHub official GUI |
| [Sourcetree](https://www.sourcetreeapp.com/) | Free Git GUI |
| [GitKraken](https://www.gitkraken.com/) | Cross-platform GUI |

### Remote Services

| Service | Git Integration |
|---------|-----------------|
| GitHub | Full Git support + PR, Actions |
| GitLab | Full Git support + CI/CD, MR |
| Bitbucket | Full Git support + Pipelines |
| Azure DevOps | Full Git support + Pipelines |

### SSH Configuration

```bash
# สร้าง SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# เพิ่มไปยัง SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
# เพิ่มไปยัง GitHub > Settings > SSH keys
```

### Multiple Accounts

```bash
# ~/.ssh/config
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal

Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
```

### Using SSH

```bash
# Clone with specific SSH key
git clone git@github-personal:user/repo.git

# Set remote for specific account
git remote add origin git@github-work:org/repo.git
```