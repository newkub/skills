# Installation

## การติดตั้ง

### วิธีที่ 1: npm (แนะนำ)

```bash
# ติดตั้งเป็น dev dependency
npm install -D semantic-release

# หรือใช้ npx
npx semantic-release --version
```

### วิธีที่ 2: ผ่าน package.json

```bash
npm install -D @semantic-release/commit-analyzer
npm install -D @semantic-release/release-notes-generator
npm install -D @semantic-release/npm
npm install -D @semantic-release/github
```

## การตรวจสอบการติดตั้ง

```bash
# ตรวจสอบเวอร์ชัน
npx semantic-release --version

# ตรวจสอบ config
npx semantic-release --debug
```

## เวอร์ชันที่แนะนำ

| สิ่งที่ต้องมี | เวอร์ชัน |
|-------------|----------|
| **Node.js** | 18+ |
| **npm** | 8+ |
| **Git** | 2.7+ |

## CI Setup

### GitHub Actions

```yaml title=".github/workflows/release.yml"
on:
  push:
    branches:
      - main

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npx semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### GitLab CI

```yaml title=".gitlab-ci.yml"
release:
  stage: deploy
  script:
    - npm ci
    - npx semantic-release
  only:
    - main
  variables:
    GIT_DEPTH: 0
```
