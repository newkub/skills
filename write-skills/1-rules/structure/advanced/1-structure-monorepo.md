# Monorepo Structure

## โครงสร้างสำหรับ Monorepo Development ด้วย Multiple Packages

### File Structure

```
monorepo/
├── packages/                   # Application packages
│   ├── app-frontend/          # Frontend application
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   └── vite.config.ts
│   ├── app-backend/           # Backend application
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── app-mobile/            # Mobile application
│   │   ├── src/
│   │   ├── android/
│   │   ├── ios/
│   │   └── package.json
│   ├── shared-ui/             # Shared UI components
│   │   ├── src/
│   │   ├── stories/
│   │   └── package.json
│   ├── shared-utils/          # Shared utilities
│   │   ├── src/
│   │   └── package.json
│   ├── shared-types/          # Shared TypeScript types
│   │   ├── src/
│   │   └── package.json
│   └── shared-config/         # Shared configurations
│       ├── eslint/
│       ├── typescript/
│       └── package.json
├── apps/                       # Deployable applications
│   ├── web/                   # Web deployment
│   │   ├── Dockerfile
│   │   ├── nginx.conf
│   │   └── package.json
│   ├── api/                   # API deployment
│   │   ├── Dockerfile
│   │   └── package.json
│   └── mobile/                # Mobile deployment
│       ├── fastlane/
│       └── package.json
├── tools/                      # Development tools
│   ├── build-scripts/         # Build automation
│   │   ├── build-all.sh
│   │   ├── clean.sh
│   │   └── release.sh
│   ├── generators/            # Code generators
│   │   ├── component-generator.js
│   │   ├── service-generator.js
│   │   └── package-generator.js
│   ├── linters/               # Custom linters
│   │   ├── monorepo-linter.js
│   │   └── package.json
│   └── cli/                   # Custom CLI tools
│       ├── index.js
│       └── package.json
├── docs/                       # Documentation
│   ├── packages/              # Package documentation
│   ├── guides/                # Development guides
│   ├── api/                   # API documentation
│   └── README.md
├── .github/                    # GitHub workflows
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── release.yml
│   │   └── deploy.yml
│   └── ISSUE_TEMPLATE/
├── docker/                     # Docker configurations
│   ├── development/
│   ├── staging/
│   └── production/
├── k8s/                        # Kubernetes configurations
│   ├── namespaces/
│   ├── deployments/
│   └── services/
├── package.json               # Root package.json
├── pnpm-workspace.yaml        # PNPM workspace config
├── turbo.json                 # Turbo build config
├── nx.json                    # Nx workspace config
├── tsconfig.json              # Root TypeScript config
├── .eslintrc.js               # Root ESLint config
├── .prettierrc                # Prettier config
├── docker-compose.yml        # Development compose
└── README.md
```

### Package Categories Table

| Category | Packages | Purpose | Dependencies |
|----------|-----------|---------|--------------|
| **Applications** | app-frontend, app-backend, app-mobile | Main applications | Internal + shared |
| **Shared Libraries** | shared-ui, shared-utils, shared-types | Reusable code | External only |
| **Config Packages** | shared-config | Build/dev configs | Dev tools only |
| **Deployment** | apps/* | Production deployments | Built packages |

### Workspace Configuration

#### PNPM Workspace
```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'tools/*'
```

#### Turbo Configuration
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

#### Root Package Configuration
```json
{
  "name": "@my-org/monorepo",
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean && rm -rf node_modules",
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "turbo run build --filter=!@my-org/app-* && changeset publish"
  },
  "devDependencies": {
    "@changesets/cli": "^2.26.0",
    "turbo": "^1.10.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

### Package Examples

#### Frontend Package
```json
// packages/app-frontend/package.json
{
  "name": "@my-org/app-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "dependencies": {
    "@my-org/shared-ui": "workspace:*",
    "@my-org/shared-types": "workspace:*",
    "@my-org/shared-utils": "workspace:*",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@my-org/shared-config": "workspace:*",
    "vite": "^4.0.0",
    "vitest": "^0.34.0"
  }
}
```

#### Shared UI Package
```json
// packages/shared-ui/package.json
{
  "name": "@my-org/shared-ui",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "vite build",
    "dev": "vite build --watch",
    "test": "vitest",
    "storybook": "storybook dev -p 6006"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "dependencies": {
    "@my-org/shared-types": "workspace:*",
    "@my-org/shared-utils": "workspace:*"
  }
}
```

### Build Scripts

#### Build All Script
```bash
#!/bin/bash
# tools/build-scripts/build-all.sh

echo "Building all packages..."

# Clean previous builds
turbo run clean

# Install dependencies
pnpm install

# Build shared packages first
pnpm --filter "@my-org/shared-*" build

# Build applications
pnpm --filter "@my-org/app-*" build

echo "Build completed!"
```

#### Release Script
```bash
#!/bin/bash
# tools/build-scripts/release.sh

echo "Starting release process..."

# Run tests
pnpm test

# Build all packages
pnpm build

# Version packages with changesets
pnpm changeset version

# Publish packages
pnpm release

echo "Release completed!"
```

### CI/CD Configuration

#### GitHub Actions
```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm test
      - run: pnpm build

  release:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm build
      - run: pnpm release
        env:
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Development Workflow

#### Local Development
```bash
# Install all dependencies
pnpm install

# Start development servers
pnpm dev

# Start specific app
pnpm --filter "@my-org/app-frontend" dev

# Run tests for specific package
pnpm --filter "@my-org/shared-ui" test

# Build specific package
pnpm --filter "@my-org/shared-ui" build
```

#### Adding New Package
```bash
# Create new package directory
mkdir packages/new-package
cd packages/new-package

# Initialize package
pnpm init

# Add to workspace
echo "packages/new-package" >> ../../pnpm-workspace.yaml

# Install dependencies
pnpm install
```

### Best Practices

1. **Dependency Management** - ใช้ workspace dependencies สำหรับ internal packages
2. **Build Optimization** - ใช้ incremental builds ด้วย Turbo/Nx
3. **Version Management** - ใช้ Changesets สำหรับ versioning
4. **Testing Strategy** - รัน tests ใน CI/CD pipeline
5. **Code Sharing** - แยก shared code ออกเป็น packages
6. **Documentation** - มี docs สำหรับแต่ละ package
7. **Release Process** - ใช้ automated releases
