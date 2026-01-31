# Structured tsconfig Files

## Rationale
Separating `tsconfig` configurations for different environments (base, build, development) makes the setup cleaner, easier to manage, and less error-prone.

## Good Practice

- **`tsconfig.base.json`**: Contains common settings shared across all projects.
- **`tsconfig.build.json`**: Extends the base config with settings specific to production builds (e.g., `exclude` test files).
- **`tsconfig.json`**: Extends the base config for development, used by IDEs and local servers.

````json
// tsconfig.base.json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022"
  }
}

// tsconfig.json (for development)
{
  "extends": "./tsconfig.base.json",
  "include": ["src", "tests"]
}
````
