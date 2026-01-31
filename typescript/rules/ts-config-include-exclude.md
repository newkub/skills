# Use `include` and `exclude` Explicitly

## Rationale
Clearly defining which files TypeScript should and should not compile prevents accidental inclusion of unwanted files (like build outputs or tests in a production build) and improves compiler performance.

## Good Practice

````json
{
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
````
