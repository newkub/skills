# Accessibility

## Overview

แนวทางการพัฒนา web ที่ accessible สำหรับผู้ใช้ทุกคน

## WCAG Guidelines

| Level | Requirements | Target |
|-------|--------------|--------|
| **A** | Minimum | Basic accessibility |
| **AA** | Standard | Legal compliance |
| **AAA** | Enhanced | Highest accessibility |

## Core Principles (POUR)

| Principle | Description |
|-----------|-------------|
| **Perceivable** | Information presented in ways users can perceive |
| **Operable** | UI components can be operated |
| **Understandable** | Information and UI behavior are understandable |
| **Robust** | Content works with assistive technologies |

## Implementation Checklist

### 1. Semantic HTML

| Element | When to Use |
|---------|-------------|
| `<button>` | Interactive actions |
| `<nav>` | Navigation sections |
| `<main>` | Main content |
| `<header>` | Page/section header |
| `<footer>` | Page/section footer |
| `<article>` | Self-contained content |

### 2. ARIA Attributes

| Attribute | Usage |
|-----------|-------|
| `aria-label` | Accessible name for elements |
| `aria-describedby` | Reference to description |
| `aria-hidden` | Hide from assistive tech |
| `aria-expanded` | Toggle state |
| `aria-live` | Dynamic content updates |

### 3. Keyboard Navigation

| Practice | Implementation |
|----------|---------------|
| **Focus Order** | Logical tab order |
| **Focus Visible** | `:focus-visible` styles |
| **Skip Links** | Skip to main content |
| **Escape Key** | Close modals/dropdowns |
| **Arrow Keys** | Navigate menus |

### 4. Color & Contrast

| Type | Minimum Ratio |
|------|---------------|
| **Normal Text** | 4.5:1 |
| **Large Text (18px+)** | 3:1 |
| **UI Components** | 3:1 |

## Screen Reader Support

| Attribute | Screen Reader |
|-----------|---------------|
| `alt` | All images |
| `aria-label` | Buttons without text |
| `<label>` | Form inputs |
| `aria-describedby` | Instructions |

## Summary

| Aspect | Practice |
|--------|----------|
| **Principles** | POUR (Perceivable, Operable, Understandable, Robust) |
| **HTML** | Semantic elements |
| **ARIA** | Proper attributes |
| **Keyboard** | Full navigation |
| **Contrast** | 4.5:1 minimum |
