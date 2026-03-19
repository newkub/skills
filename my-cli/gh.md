---
description: GitHub's official command line tool for repository management, issues, PRs, and more
title: cli-gh
tags: [cli, github, git, repository, workflow]
---

## Overview

`gh` เป็น GitHub CLI ที่ช่วยจัดการ repositories, issues, pull requests และ actions โดยตรงจาก terminal พร้อม authentication และ comprehensive GitHub API integration

## Installation

```powershell
scoop install gh
# หรือ
choco install gh
# หรือ
winget install GitHub.cli
```

## Authentication

```bash
# Login to GitHub
gh auth login

# Login with specific scope
gh auth login --scopes "repo,workflow,read:org"

# Check authentication status
gh auth status

# Logout
gh auth logout

# Setup git credentials
gh auth setup

# Refresh token
gh auth refresh --scopes "repo,workflow"

# Get token
gh auth token
```

## Repository Commands

### Repository Operations

```bash
# Clone repository
gh repo clone owner/repo
gh repo clone owner/repo my-folder

# Create new repository
gh repo create my-project --public
gh repo create my-project --private
gh repo create my-project --source=. --remote=origin --push

# View repository information
gh repo view
gh repo view owner/repo
gh repo view --web

# Fork repository
gh repo fork owner/repo
gh repo fork owner/repo --clone

# List repositories
gh repo list owner
gh repo list --limit 10 --public

# Delete repository
gh repo delete owner/repo
```

### Repository Settings

```bash
# Edit repository
gh repo edit --description "New description"
gh repo edit --homepage "https://example.com"

# Archive repository
gh repo archive

# Unarchive repository
gh repo unarchive

# Rename repository
gh repo rename new-name
```

## Pull Request Commands

### PR Management

```bash
# Create pull request
gh pr create --title "Fix bug" --body "Description"
gh pr create --title "Fix" --body "Fixes #123" --base main --head feature-branch
gh pr create --fill

# List pull requests
gh pr list
gh pr list --author me
gh pr list --state open
gh pr list --limit 10

# Checkout pull request
gh pr checkout 123
gh pr checkout owner/repo/123

# View pull request
gh pr view 123
gh pr view --web

# Merge pull request
gh pr merge 123
gh pr merge --squash
gh pr merge --rebase
gh pr merge --merge --delete-branch

# Close pull request
gh pr close 123

# Reopen pull request
gh pr reopen 123

# Ready for review
gh pr ready 123

# Draft pull request
gh pr draft 123
```

### PR Review

```bash
# Review pull request
gh pr review 123 --approve
gh pr review 123 --request-changes
gh pr review 123 --comment "Looks good"

# List reviews
gh pr view 123 --reviews

# Diff of pull request
gh pr diff 123
gh pr diff --name-only

# Files in pull request
gh pr view 123 --files

# Checks status
gh pr checks 123
gh pr checks --watch
```

## Issue Commands

### Issue Management

```bash
# Create issue
gh issue create --title "Bug report" --body "Description"
gh issue create --title "Feature request" --body "Details" --label "enhancement"

# List issues
gh issue list
gh issue list --author me
gh issue list --state open
gh issue list --label bug

# View issue
gh issue view 123
gh issue view --web

# Edit issue
gh issue edit 123 --title "New title"
gh issue edit 123 --add-label "priority"
gh issue edit 123 --remove-label "bug"

# Close issue
gh issue close 123

# Reopen issue
gh issue reopen 123

# Lock issue
gh issue lock 123

# Unlock issue
gh issue unlock 123

# Assign issue
gh issue edit 123 --assignee username
gh issue edit 123 --add-assignee username1,username2
```

## Workflow Commands

### Workflow Management

```bash
# List workflows
gh workflow list

# Run workflow
gh workflow run ci.yml
gh workflow run ci.yml --raw-field data=123

# View workflow
gh workflow view ci.yml
gh workflow view ci.yml --web

# View workflow runs
gh run list
gh run list --workflow ci.yml
gh run list --limit 10

# View specific run
gh run view 12345
gh run view 12345 --web

# Download artifacts
gh run download 12345
gh run download 12345 --name artifact-name

# Rerun workflow
gh run rerun 12345
gh run rerun 12345 --failed

# Cancel workflow
gh run cancel 12345

# Watch workflow
gh run watch 12345
```

## Release Commands

```bash
# Create release
gh release create v1.0.0 --title "First release" --notes "Release notes"
gh release create v1.0.0 --generate-notes

# List releases
gh release list
gh release list --limit 10

# View release
gh release view v1.0.0
gh release view v1.0.0 --web

# Download release assets
gh release download v1.0.0
gh release download v1.0.0 --pattern "*.zip"

# Delete release
gh release delete v1.0.0
```

## Project Management

```bash
# Clone with projects
gh project clone owner/project

# List projects
gh project list

# View project
gh project view 123

# Create project
gh project create --title "My Project"
```

## Gist Commands

```bash
# Create gist
gh gist create file.txt --desc "My gist"
gh gist create --public file1.txt file2.txt

# List gists
gh gist list
gh gist list --limit 10

# View gist
gh gist view gist-id
gh gist view --web

# Edit gist
gh gist edit gist-id --desc "New description"

# Delete gist
gh gist delete gist-id
```

## Advanced Features

### Search

```bash
# Search repositories
gh search repos "language:rust stars:>100"

# Search issues
gh search issues "repo:owner/repo is:open"

# Search users
gh search users "location:thailand followers:>100"

# Search code
gh search code "filename:package.json language:json"
```

### API Access

```bash
# Make API requests
gh api user
gh api repos/owner/repo
gh api repos/owner/repo/issues --jq '.[].title'

# GraphQL queries
gh graphql -f query='query { viewer { login } }'

# API with pagination
gh api --paginate orgs/github/members
```

### Extensions

```bash
# List extensions
gh extension list

# Install extension
gh extension install owner/extension

# Remove extension
gh extension remove owner/extension

# Create extension
gh extension create my-extension
```

## Configuration

```bash
# Set configuration
gh config set editor vim
gh config set git_protocol ssh
gh config set prompt disabled

# Get configuration
gh config get editor

# List all configuration
gh config list

# Set host
gh config set host github.enterprise.com
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GH_EDITOR` | Default editor |
| `GH_BROWSER` | Default browser |
| `GH_PAGER` | Default pager |
| `GH_FORCE_TTY` | Force TTY output |
| `GH_TOKEN` | GitHub token |
| `GH_HOST` | GitHub host |

## Aliases

```bash
# Set custom alias
gh alias set co "pr checkout"
gh alias set prc "pr create --fill"
gh alias set issues "issue list --author me"
gh alias set myrepos "repo list --limit 20"

# Use alias
gh co 123
gh prc
gh issues
gh myrepos

# List aliases
gh alias list

# Delete alias
gh alias delete co
```

## Shell Integration

### Bash/Zsh Completion

```bash
# Enable completion
eval "$(gh completion -s bash)"
eval "$(gh completion -s zsh)"

# Install completion system-wide
gh completion -s bash > /etc/bash_completion.d/gh
gh completion -s zsh > /usr/share/zsh/site-functions/_gh
```

### Fish Completion

```bash
# Enable completion
gh completion -s fish | source

# Install completion
gh completion -s fish > ~/.config/fish/completions/gh.fish
```

## Integration Examples

### Git Workflow

```bash
# Create PR from current branch
git checkout -b feature-branch
# ... make changes ...
git add .
git commit -m "Add feature"
git push -u origin feature-branch
gh pr create --fill

# Quick PR workflow
function gp() {
    git add .
    git commit -m "$1"
    git push
    gh pr create --fill
}
```

### Issue Management

```bash
# Create issue from template
gh issue create --title "Bug: $(git branch --show-current)" \
  --body "$(git log -1 --pretty=format:'%h %s')"

# Link issue to PR
gh pr create --title "Fix #123" --body "Fixes #123"
```

### Repository Setup

```bash
# Initialize repository and push to GitHub
git init
git add .
git commit -m "Initial commit"
gh repo create my-project --source=. --remote=origin --push
```

### CI/CD Integration

```bash
# Trigger workflow with parameters
gh workflow run deploy.yml --field environment=staging

# Monitor workflow
gh run watch --job build

# Get workflow logs
gh run view 12345 --log
```

## Aliases and Functions

```bash
# Common aliases
alias gco='gh pr checkout'
alias gpr='gh pr create --fill'
alias gis='gh issue list --author me'
alias grs='gh repo list --limit 20'

# Custom functions
function ghpr() {
    if [ $# -eq 0 ]; then
        gh pr list
    else
        gh pr view "$1" --web
    fi
}

function ghissue() {
    if [ $# -eq 0 ]; then
        gh issue create --title "$1" --body "$2"
    else
        gh issue view "$1" --web
    fi
}
```

## Performance Tips

1. **Cache tokens**: Use `gh auth status` to refresh cached tokens
2. **Limit results**: Use `--limit` for large lists
3. **Use filters**: Filter by state, author, labels
4. **Batch operations**: Use API for bulk operations
5. **SSH protocol**: Set `git_protocol ssh` for faster operations

## Features

- **Comprehensive**: Full GitHub API coverage
- **Interactive**: Rich interactive interfaces
- **Extensible**: Plugin/extension system
- **Cross-platform**: Windows, macOS, Linux support
- **Secure**: OAuth authentication
- **Fast**: Optimized for performance
- **Flexible**: Multiple output formats
- **Integrated**: Git workflow integration
- **Customizable**: Aliases and configuration
- **Scriptable**: JSON output for automation
