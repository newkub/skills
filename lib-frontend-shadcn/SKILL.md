---
name: shadcn
description: Beautifully designed components that you can copy and paste into your apps. Accessible, customizable, open source. Use for building modern UI with Tailwind CSS.
goal: Use shadcn/ui components following best practices
outcome: Modern, accessible UI with consistent design system
---

# shadcn/ui Library

## When to Use

Use this library when:

- Building modern React/Vue/Svelte applications with Tailwind CSS
- Need accessible, customizable UI components
- Want copy-paste components (not a dependency)
- Building design systems with Radix UI primitives
- Need consistent theming and dark mode support
- Want type-safe components with TypeScript

## Quick Start

1. Initialize shadcn/ui: `npx shadcn@latest init`
2. Add components: `npx shadcn@latest add button`
3. Configure Tailwind and CSS variables
4. Import and use components in your app

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | shadcn/ui fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Recommended practices | Building maintainable UI |
| **Rules** | [Setup](rules/1-setup.md) | Project initialization | New project setup |
| **Rules** | [Theming](rules/2-theming.md) | Colors, dark mode, customization | Theming requirements |
| **Rules** | [Components](rules/3-components.md) | Using and customizing components | Component development |
| **Rules** | [CLI](rules/4-cli.md) | shadcn CLI usage | Adding/updating components |

## Core Features

- **Copy-Paste**: Components are copied to your codebase, not installed as dependency
- **Accessible**: Built on Radix UI primitives with full accessibility
- **Customizable**: Easy to modify and extend with Tailwind CSS
- **Type Safe**: Full TypeScript support
- **Dark Mode**: Built-in dark mode support with CSS variables
- **Open Source**: Free and open source with community support

## Quick Reference

```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Add components
npx shadcn@latest add button input card
npx shadcn@latest add -y

# Update components
npx shadcn@latest diff
npx shadcn@latest update
```

## Verification

1. Check shadcn/ui initialization
2. Verify Tailwind CSS configuration
3. Test component rendering
4. Validate accessibility (keyboard navigation)
5. Check dark mode switching
6. Ensure TypeScript types are correct

## References

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Component Registry](https://ui.shadcn.com/docs/components/accordion)
- [GitHub Repository](https://github.com/shadcn-ui/ui)
