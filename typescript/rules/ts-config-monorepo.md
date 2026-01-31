# Monorepo Configuration

## Rationale
In a monorepo, each package should be treated as a separate compilation unit with `"composite": true`. This allows TypeScript's build mode to intelligently rebuild only the necessary packages, significantly speeding up the development workflow.

## Good Practice

````json
// packages/ui/tsconfig.json
{
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "references": []
}

// apps/web/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "composite": true
  },
  "references": [
    { "path": "../../packages/ui" }
  ]
}
````
