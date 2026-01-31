# VSCode Extensions Development

Develop VSCode extensions using reactive patterns and Composition API.

## Features

- **Easy to use**: Familiar Vue Reactivity API
- **Feature rich**: Most of the VSCode APIs included
- **Fully tree shakeable**: Only take what you want
- **VueUse Integration**: Collection of Vue composition utilities

## When to Use

Use this skill when:
- Developing VSCode extensions
- Need reactive state management in extensions
- Want to simplify event handling and subscriptions
- Migrating from traditional VSCode API to reactive patterns

## Getting Started

1. Install reactive-vscode
2. Use Composition API with composables like `useActiveTextEditor`, `useEditorDecorations`
3. Define configuration with `defineConfig`
4. Create extension with `defineExtension`

## Best Practices

- Use reactive composables instead of manual event subscriptions
- Leverage VueUse utilities when needed
- Keep code tree-shakeable by importing only what you need
- Use `defineConfig` for configuration management
