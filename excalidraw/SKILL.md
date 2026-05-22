---
name: excalidraw
description: Virtual whiteboard for sketching hand-drawn like diagrams. Use for creating diagrams, wireframes, and illustrations with a hand-drawn aesthetic.
goal: Use Excalidraw following best practices
outcome: Beautiful hand-drawn style diagrams and illustrations
---

# Excalidraw Library

## When to Use

Use this library when:

- Creating architecture diagrams
- Sketching wireframes and UI mockups
- Drawing system diagrams
- Need collaborative whiteboarding
- Want hand-drawn aesthetic for presentations
- Embedding diagrams in documentation

## Quick Start

1. Visit excalidraw.com or use npm package
2. Install library: `npm install @excalidraw/excalidraw`
3. Import and use React component
4. Export diagrams as PNG/SVG or shareable links

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Excalidraw fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Diagram patterns | Effective diagrams |
| **Rules** | [Setup](rules/1-setup.md) | Library integration | React projects |
| **Rules** | [Library Mode](rules/2-library-mode.md) | Using @excalidraw/excalidraw | Embedded editor |
| **Rules** | [Export](rules/3-export.md) | PNG, SVG, JSON exports | Sharing diagrams |
| **Rules** | [Collaboration](rules/4-collaboration.md) | Real-time collaboration | Team whiteboarding |
| **Rules** | [Libraries](rules/5-libraries.md) | Custom shape libraries | Extended components |

## Core Features

- **Hand-Drawn Style**: Rough, sketch-like appearance
- **End-to-End Encryption**: Secure collaborative sessions
- **Export Options**: PNG, SVG, clipboard, JSON
- **Library System**: Custom component libraries
- **Offline Support**: Works without internet
- **Open Source**: Self-hostable

## Quick Reference

```bash
# Install React component
npm install @excalidraw/excalidraw

# Basic usage
import { Excalidraw } from '@excalidraw/excalidraw'

function App() {
  return (
    <div style={{ height: '600px' }}>
      <Excalidraw />
    </div>
  )
}
```

## Verification

1. Check library installation
2. Verify component rendering
3. Test drawing functionality
4. Validate export options
5. Check collaboration features
6. Ensure custom libraries work

## References

- [Excalidraw Website](https://excalidraw.com/)
- [GitHub Repository](https://github.com/excalidraw/excalidraw)
- [npm Package](https://www.npmjs.com/package/@excalidraw/excalidraw)
