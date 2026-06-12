# Key Concept

## What is Svelte?

Svelte is a compiler that transforms declarative components into efficient imperative DOM manipulation code

## Core Features

| Feature | Description |
|---------|-------------|
| Compiler | Transforms components at build time |
| Reactivity | Built-in reactive system |
| No Virtual DOM | Direct DOM updates |
| Small Bundle | Minimal runtime |
| TypeScript | Full TypeScript support |

## Key Concepts

| Concept | Description |
|---------|-------------|
| Reactive | Automatic dependency tracking |
| Compiler | Builds optimized code |
| Stores | State management |
| Slots | Content projection |
| Transitions | Animation system |

## When to Use

- High-performance applications
- SPAs and PWAs
- Interactive UIs
- Real-time applications

## Architecture

```
Svelte
├── Compiler (svelte/compiler)
├── Runtime (minimal)
├── Router (svelte-spa-router)
├── Store (svelte/store)
└── Transitions
```

## Comparison

| Feature | Svelte | React | Vue |
|---------|--------|-------|-----|
| DOM | Direct | Virtual | Virtual |
| Bundle | Small | Medium | Medium |
| Learning | Easy | Medium | Easy |
| Performance | Excellent | Excellent | Excellent |
| Ecosystem | Growing | Large | Large |