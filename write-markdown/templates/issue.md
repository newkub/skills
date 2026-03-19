---
description: Template สำหรับ Issue
title: '{{ISSUE_TITLE}}'
tags: [issue, '{{CATEGORY}}', '{{TYPE}}']
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{ISSUE_TITLE}}

> 🐛 **{{ISSUE_TYPE}}** | {{LABELS}}

**{{ORG_NAME}}** / **issues** / `#{{ISSUE_NUMBER}}`

## โครงสร้าง Issue

| ส่วน | รายละเอียด |
|------|-----------|
| Description | อธิบายปัญหาหรือ feature |
| Steps to Reproduce | ขั้นตอน reproduce (สำหรับ bug) |
| Expected Behavior | สิ่งที่ควรเกิดขึ้น |
| Environment | สภาพแวดล้อม |

## Rules

### Issue Types

| Type | Icon | Use For |
|------|------|---------|
| Bug | 🐛 | Something is broken |
| Feature | ✨ | New functionality |
| Documentation | 📚 | Docs improvements |
| Question | ❓ | Need help |
| Enhancement | 🔧 | Improve existing feature |

### Required Sections

- **Description** - อธิบายปัญหาหรือ feature
- **Steps to Reproduce** (สำหรับ bug)
- **Expected Behavior** (สำหรับ bug)
- **Environment** (สำหรับ bug)

### Labels

- `bug`, `feature`, `docs`, `question`
- `priority:high`, `priority:medium`, `priority:low`
- `status:triage`, `status:confirmed`, `status:in-progress`

## Template

### Bug Report

```markdown
## Bug Description

{{BUG_DESCRIPTION}}

## Steps to Reproduce

1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

## Expected Behavior

{{EXPECTED_BEHAVIOR}}

## Actual Behavior

{{ACTUAL_BEHAVIOR}}

## Environment

- OS: {{OS}}
- Version: {{VERSION}}
- Browser: {{BROWSER}}

## Screenshots

{{SCREENSHOTS}}

## Additional Context

{{ADDITIONAL_CONTEXT}}
```

### Feature Request

```markdown
## Feature Description

{{FEATURE_DESCRIPTION}}

## Problem

{{PROBLEM_STATEMENT}}

## Proposed Solution

{{PROPOSED_SOLUTION}}

## Alternatives Considered

{{ALTERNATIVES}}

## Additional Context

{{ADDITIONAL_CONTEXT}}
```

### Documentation Issue

```markdown
## Current Documentation

{{CURRENT_DOCS}}

## Issue

{{DOCS_ISSUE}}

## Suggested Improvement

{{SUGGESTION}}

## Location

{{DOCS_LOCATION}}
```

## Example

### Example: Bug Report

```markdown
# Login fails with special characters in password

> 🐛 **Bug** | `bug`, `priority:high`, `auth`

**acme-corp** / **issues** / `#123`

## Bug Description

Users cannot login when their password contains special characters like `@`, `#`, `$`

## Steps to Reproduce

1. Go to login page
2. Enter email: <user@example.com>
3. Enter password: MyP@ssw0rd#
4. Click Login button

## Expected Behavior

User should be logged in successfully

## Actual Behavior

Error message: "Invalid credentials"

## Environment

- OS: macOS 14.0
- Version: v2.1.0
- Browser: Chrome 120.0

## Screenshots

![Login Error](https://example.com/screenshot.png)

## Additional Context

- Works fine with alphanumeric passwords only
- Issue started after v2.0.0 update
```

### Example: Feature Request

```markdown
# Add dark mode support

> ✨ **Feature** | `feature`, `enhancement`, `ui`

**acme-corp** / **issues** / `#456`

## Feature Description

Add dark mode theme to reduce eye strain for users

## Problem

Current light theme causes eye strain during night usage

## Proposed Solution

- Add toggle switch for dark/light mode
- Store preference in localStorage
- Follow system preference by default
- Use CSS variables for theming

## Alternatives Considered

- Browser extensions (not reliable)
- OS-level dark mode (doesn't affect web app)

## Additional Context

Many modern apps support dark mode. Users have requested this feature multiple times.
```
