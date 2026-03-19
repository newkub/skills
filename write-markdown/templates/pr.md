---
description: Template สำหรับ Pull Request
title: '{{PR_TITLE}}'
tags: [pr, '{{CATEGORY}}', '{{TYPE}}']
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{PR_TITLE}}

> 🔀 **{{PR_TYPE}}** | Closes #{{ISSUE_NUMBER}}

**{{ORG_NAME}}** / **pull-requests** / `!{{PR_NUMBER}}`

## โครงสร้าง Pull Request

| Section | รายละเอียด |
|---------|-----------|
| Description | สรุปการเปลี่ยนแปลง |
| Changes | รายการที่แก้ไข |
| Testing | วิธีทดสอบ |
| Checklist | รายการตรวจสอบ |

## Rules

### PR Types

| Type | Icon | Use For |
|------|------|---------|
| Feature | ✨ | New functionality |
| Fix | 🐛 | Bug fixes |
| Docs | 📚 | Documentation changes |
| Refactor | 🔧 | Code restructuring |
| Test | 🧪 | Adding/updating tests |
| Chore | 🧹 | Maintenance tasks |

### Required Sections

- **Description** - สรุปการเปลี่ยนแปลง
- **Changes** - รายการที่แก้ไข
- **Testing** - วิธีทดสอบ
- **Checklist** - รายการตรวจสอบ

### PR Title Format

```text
<type>(<scope>): <description>

Examples:
feat(auth): add OAuth2 login
fix(api): resolve timeout issue
docs(readme): update installation guide
```

### Checklist Items

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] All CI checks pass

## Template

### PR Description

```markdown
## Description

{{PR_DESCRIPTION}}

## Related Issue

Closes #{{ISSUE_NUMBER}}

## Changes Made

- {{CHANGE_1}}
- {{CHANGE_2}}
- {{CHANGE_3}}

## Testing

### How to Test

1. {{TEST_STEP_1}}
2. {{TEST_STEP_2}}
3. {{TEST_STEP_3}}

### Test Results

- {{TEST_RESULT_1}}
- {{TEST_RESULT_2}}

## Screenshots / GIFs

{{SCREENSHOTS}}

## Breaking Changes

{{BREAKING_CHANGES}}

## Checklist

- [ ] {{CHECK_ITEM_1}}
- [ ] {{CHECK_ITEM_2}}
- [ ] {{CHECK_ITEM_3}}
- [ ] {{CHECK_ITEM_4}}
```

### Review Request

```markdown
## Request for Review

@{{REVIEWER_1}} @{{REVIEWER_2}}

Please review:

- {{REVIEW_FOCUS_1}}
- {{REVIEW_FOCUS_2}}

## Questions for Reviewers

1. {{QUESTION_1}}
2. {{QUESTION_2}}
```

## Example

### Example: Feature PR

```markdown
# feat(auth): add OAuth2 login support

> 🔀 **Feature** | Closes #234

**acme-corp** / **pull-requests** / `!567`

## Description

Implement OAuth2 login to support Google and GitHub authentication

## Related Issue

Closes #234

## Changes Made

- Add OAuth2 client configuration
- Implement Google OAuth flow
- Implement GitHub OAuth flow
- Add user profile sync
- Update login UI with OAuth buttons

## Testing

### How to Test

1. Set up OAuth credentials in `.env`
2. Run `npm run dev`
3. Go to login page
4. Click "Login with Google"
5. Complete OAuth flow

### Test Results

- ✅ Google OAuth works on Chrome, Firefox, Safari
- ✅ GitHub OAuth works on all browsers
- ✅ User profile synced correctly
- ✅ Token refresh works

## Screenshots / GIFs

![OAuth Login](https://example.com/oauth-login.gif)

## Breaking Changes

None

## Checklist

- [x] Code follows style guidelines
- [x] Self-review completed
- [x] Tests added (oauth.test.ts)
- [x] Documentation updated (auth.md)
- [ ] No breaking changes
- [x] All CI checks pass

## Request for Review

@senior-dev @security-lead

Please review:

- OAuth implementation security
- Error handling flow
- Token storage approach
```
