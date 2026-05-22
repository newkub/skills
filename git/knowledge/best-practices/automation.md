# Git Automation Best Practices

## Git Hooks

```bash
# .git/hooks/pre-commit
#!/bin/bash
npm run lint
npm run test

# .git/hooks/pre-push
#!/bin/bash
npm run build
npm run e2e
```

## Git Aliases

```bash
# สร้าง aliases สำหรับคำสั่งที่ใช้บ่อย
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit -m
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

## GitHub Actions

```yaml
# .github/workflows/git-automation.yml
name: Git Automation
on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Check commit messages
        uses: wagoid/commitlint-github-action@v4
      - name: Lint code
        run: npm run lint
      - name: Run tests
        run: npm test
```

## Automated Scripts

```bash
#!/bin/bash
# git-setup.sh - สร้าง repository ใหม่
git init
git remote add origin $1
git checkout -b main
echo "# $2" > README.md
git add README.md
git commit -m "Initial commit"
git push -u origin main
```

## Git Configuration Scripts

```bash
#!/bin/bash
# setup-git.sh
git config --global user.name "$1"
git config --global user.email "$2"
git config --global core.editor "code --wait"
git config --global init.defaultBranch main
git config --global pull.rebase false
```

## Release Automation

```bash
#!/bin/bash
# release.sh
VERSION=$1
git checkout main
git pull origin main
git tag -a v$VERSION -m "Release v$VERSION"
git push origin v$VERSION
```

## Maintenance Scripts

```bash
#!/bin/bash
# git-maintenance.sh
git gc --aggressive --prune=now
git fsck --full
git maintenance run
```
