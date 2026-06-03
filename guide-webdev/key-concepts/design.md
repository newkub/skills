# Design

## Overview

หลักการออกแบบ UI/UX ที่ดีสำหรับ web applications

## Design Principles

### 1. Visual Hierarchy

| Element | Purpose | Technique |
|---------|---------|-----------|
| **Size** | Primary focus | Larger = more important |
| **Color** | Attention | Primary, secondary, accent |
| **Position** | Reading order | Top-left to bottom-right |
| **Spacing** | Relationships | Group related items |

### 2. Layout Systems

| System | Description | Use Case |
|--------|-------------|----------|
| **8pt Grid** | Consistent spacing | System design |
| **12 Column Grid** | Responsive layouts | Dashboards, websites |
| **Breakpoint System** | Device adaptation | Multi-device support |

### 3. Typography Scale

| Name | Size | Usage |
|------|------|-------|
| **Display** | 48px+ | Hero headlines |
| **H1** | 32px | Page titles |
| **H2** | 24px | Section headers |
| **H3** | 20px | Subsections |
| **Body** | 16px | Paragraphs |
| **Caption** | 14px | Labels, notes |

### 4. Color System

| Role | Purpose |
|------|---------|
| **Primary** | Brand identity, CTAs |
| **Secondary** | Supporting actions |
| **Neutral** | Text, backgrounds |
| **Semantic** | Success, warning, error |
| **Accent** | Highlights, links |

## Component Design

### 1. Button States

| State | Visual Treatment |
|-------|-----------------|
| **Default** | Primary color |
| **Hover** | Darken 10% |
| **Active** | Darken 20% |
| **Disabled** | 50% opacity, no pointer |
| **Loading** | Spinner, disabled |

### 2. Input Validation

| State | Visual Treatment |
|-------|-----------------|
| **Default** | Neutral border |
| **Focus** | Primary border, shadow |
| **Error** | Red border, error message |
| **Success** | Green border, check icon |
| **Disabled** | Gray background |

### 3. Loading States

| Type | UX Impact |
|------|-----------|
| **Skeleton** | Perceived performance |
| **Spinner** | Short waits (< 3s) |
| **Progress Bar** | Long operations |
| **Skeleton + Text** | Content loading |

## Responsive Design

| Breakpoint | Width | Device |
|------------|-------|--------|
| **Mobile** | < 640px | Phones |
| **Tablet** | 640-1024px | Tablets |
| **Desktop** | 1024-1280px | Laptops |
| **Wide** | > 1280px | Desktops |

## Summary

| Aspect | Practice |
|--------|----------|
| **Hierarchy** | Size, color, position |
| **Layout** | 8pt grid, responsive |
| **Typography** | Consistent scale |
| **Color** | Semantic system |
| **Components** | State consistency |
