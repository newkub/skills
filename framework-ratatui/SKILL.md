---
name: framework-ratatui
description: Rust TUI framework สำหรับสร้าง terminal user interfaces ที่เร็ว เบา และทรงพลัง
---

# framework-ratatui

## When to use

- เมื่อต้องการสร้าง terminal user interfaces (TUIs) ด้วย Rust
- เมื่อต้องการ performance สูงและ memory footprint ต่ำ
- เมื่อต้องการ cross-platform terminal applications
- เมื่อต้องการ rich widgets และ layouts สำหรับ CLI tools

## Skills Related

- `lang-rust` - Rust programming language

## หมวดหมู่ไฟล์

| No | File | Description |
|----|------|-------------|
| 1 | [knowledge/guide/key-concept.md](knowledge/guide/key-concept.md) | แนวคิดหลักของ Ratatui (Widget, Layout, Style, Backend) |
| 2 | [knowledge/guide/how-it-works.md](knowledge/guide/how-it-works.md) | การทำงานของ rendering pipeline และ event loop |
| 3 | [knowledge/guide/features.md](knowledge/guide/features.md) | Features ทั้งหมดของ widgets, layouts, styles |
| 4 | [knowledge/guide/installation.md](knowledge/guide/installation.md) | การติดตั้งและ feature flags |
| 5 | [knowledge/guide/configuration.md](knowledge/guide/configuration.md) | การตั้งค่า application, state, layout, theme |
| 6 | [knowledge/guide/quick-start.md](knowledge/guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| 7 | [knowledge/guide/best-practices.md](knowledge/guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| 8 | [knowledge/guide/integration.md](knowledge/guide/integration.md) | การรวมกับ tools อื่น (tokio, serde, tracing) |
| 9 | [knowledge/guide/architecture.md](knowledge/guide/architecture.md) | สถาปัตยกรรม workspace (ratatui-core, ratatui-widgets) |
| 10 | [references/website.md](references/website.md) | แหล่งข้อมูลอย่างเป็นทางการ, docs, community |
| 11 | [references/api.md](references/api.md) | Core API reference (functions, traits, types) |
| 12 | [references/api-widgets.md](references/api-widgets.md) | Widgets, layout, style, text API |
| 13 | [references/configuration.md](references/configuration.md) | Configuration & feature flags reference |

## Quick Reference

| Component | Description |
|-----------|-------------|
| `ratatui::run` | Main entry point - init + run + restore |
| `ratatui::init` | Manual terminal initialization |
| `ratatui::restore` | Manual terminal restoration |
| `Terminal` | Draws frames to a backend |
| `DefaultTerminal` | Type alias: `Terminal<CrosstermBackend<Stdout>>` |
| `Frame` | Single-frame drawing surface |
| `Backend` | Terminal backend trait |
| `Widget` | Base trait for all widgets (consumes self) |
| `StatefulWidget` | Widget with associated state |
| `Layout` | Constraint-based area splitter |

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **Widget** | Base trait - renders itself into a `Buffer` |
| **Layout** | Constraint-based positioning (Length, Min, Max, Percentage, Ratio, Fill) |
| **Backend** | Terminal I/O (crossterm default, termion, termwiz) |
| **Style** | Colors, modifiers, text styling via `Stylize` trait |
| **Block** | Border, title, padding container |
| **StatefulWidget** | Widget with external state (selection, scroll) |
| **Buffer** | 2D grid of `Cell` for diffing before flush |
| **Viewport** | Render region (Fullscreen, Inline, Fixed) |
| **Text Primitives** | `Text` (Vec<Line>), `Line` (Vec<Span>), `Span` (string+style) |
