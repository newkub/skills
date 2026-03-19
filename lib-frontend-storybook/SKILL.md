---
name: storybook
description: Frontend workshop for building UI components and pages in isolation. Use for component documentation, testing, and visual development.
goal: Use Storybook following best practices
outcome: Well-documented, tested UI components
---

# Storybook Library

## When to Use

Use this library when:

- Building UI components in isolation
- Creating component documentation
- Testing components visually
- Sharing component library with team
- Need visual regression testing
- Developing design systems

## Quick Start

1. Install: `npx storybook@latest init`
2. Write stories for components
3. Run Storybook: `npm run storybook`
4. Add addons as needed

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | Storybook fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Documentation patterns | Building stories |
| **Rules** | Setup | Installation and configuration | New project setup |
| **Rules** | Writing Stories | CSF format and stories | Component stories |
| **Rules** | Args and Controls | Interactive props | Testing variations |
| **Rules** | Decorators | Context and providers | Wrapper setup |
| **Rules** | Addons | Actions, docs, interactions | Extending Storybook |
| **Rules** | Testing | Interaction and visual tests | Component testing |

## Core Features

- **Component Isolation**: Develop components without app context
- **Documentation**: Auto-generated docs from stories
- **Interactive Testing**: Play with props in real-time
- **Addons**: Rich ecosystem of extensions
- **Visual Testing**: Chromatic for regression testing
- **CI/CD**: Integrate with testing workflows

## Quick Reference

```bash
# Initialize
npx storybook@latest init

# Run Storybook
npm run storybook

# Build static Storybook
npm run build-storybook

# Write a story
export const Primary = {
  args: {
    label: 'Button',
    primary: true,
  },
}
```

## Verification

1. Check Storybook initialization
2. Verify story rendering
3. Test Controls and Actions
4. Validate addon functionality
5. Check documentation generation
6. Ensure build completes

## References

- [Storybook Documentation](https://storybook.js.org/)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)
- [GitHub Repository](https://github.com/storybookjs/storybook)
