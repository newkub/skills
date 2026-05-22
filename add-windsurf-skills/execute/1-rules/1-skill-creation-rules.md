# Skill Creation Rules

## Directory Structure Rules

1. **Required directories**:
   - SKILL.md - Main definition file (REQUIRED)
   - workflows/ - Workflow files
   - patterns/ - Design patterns
   - ules/ - Standards and conventions

2. **Naming conventions**:
   - Directory names: kebab-case
   - File names: kebab-case with .md extension
   - Frontmatter title: Title Case

## Frontmatter Standards

\\\yaml
---
title: Skill Name
description: Brief description (max 100 chars)
type: skill
version: 1.0.0
auto_execution_mode: 3
file-patterns: ["*.ts", "*.js"]
follow:
  skills: []
  workflows: []
  files: []
  mcp: []
---
\\\

## Content Organization

| Section | Purpose | Required |
|---------|---------|----------|
| Purpose | Why this skill exists | YES |
| Scope | What it covers | YES |
| Quick Reference | Table of contents | YES |
| Implementation | How to use | YES |
| Verification | Quality checklist | YES |
