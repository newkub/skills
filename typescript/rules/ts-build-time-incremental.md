# Enable Incremental Builds

## Rationale
Incremental builds create a `.tsbuildinfo` file that stores information about the state of the project from the last compilation. This allows the compiler to rebuild only the files that have changed, significantly speeding up subsequent builds.

## Good Practice

Enable this feature in your `tsconfig.json`.

````json
{
  "compilerOptions": {
    "incremental": true
  }
}
````
