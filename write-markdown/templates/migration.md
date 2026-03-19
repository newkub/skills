---
description: 'Template สำหรับ migration.md'
title: '{{PROJECT_NAME}}'
tags: [migration, upgrade, '{{CATEGORY}}']
goals:
  - 'แนะนำการ upgrade {{PROJECT_NAME}}'
  - 'ให้ migration ราบรื่น'
---

## {{PROJECT_NAME}} Migration

> ℹ️ **Info:** {{MIGRATION_DESCRIPTION}}

**{{ORG_NAME}}** / **upgrade** / `migration.md`

## Supported Versions

| {{FROM_HEADER}} | {{TO_HEADER}} | {{DIFFICULTY_HEADER}} |
|-----------------|---------------|----------------------|
| {{VER_FROM_1}} | {{VER_TO_1}} | {{DIFF_1}} |
| {{VER_FROM_2}} | {{VER_TO_2}} | {{DIFF_2}} |
| {{VER_FROM_3}} | {{VER_TO_3}} | {{DIFF_3}} |

## Migration {{MIGRATION_PATH}}

### Breaking Changes

| {{OLD_HEADER}} | {{NEW_HEADER}} | {{CHANGE_TYPE_HEADER}} |
|----------------|----------------|------------------------|
| `{{OLD_1}}` | `{{NEW_1}}` | {{CHANGE_1}} |
| `{{OLD_2}}` | `{{NEW_2}}` | {{CHANGE_2}} |
| `{{OLD_3}}` | `{{NEW_3}}` | {{CHANGE_3}} |

### Migration Steps

1. **{{STEP_1_NAME}}**

   ```bash
   {{STEP_1_CMD}}
   ```

2. **{{STEP_2_NAME}}**

   ```bash
   {{STEP_2_CMD}}
   ```

3. **{{STEP_3_NAME}}**

   ```{{LANG_3}}
   {{BEFORE_CODE_3}}

   {{AFTER_CODE_3}}
   ```

4. **{{STEP_4_NAME}}**

   ```bash
   {{STEP_4_CMD}}
   ```

5. **{{STEP_5_NAME}}**

   ```bash
   {{STEP_5_CMD_1}}
   {{STEP_5_CMD_2}}
   ```

### Automated Migration

```bash
{{AUTO_MIGRATE_CMD_1}}
{{AUTO_MIGRATE_CMD_2}}
```

## Deprecation Timeline

| {{VERSION_HEADER}} | {{STATUS_HEADER}} | {{EOL_HEADER}} |
|--------------------|-------------------|----------------|
| {{DEP_VER_1}} | {{DEP_STATUS_1}} | {{DEP_EOL_1}} |
| {{DEP_VER_2}} | {{DEP_STATUS_2}} | {{DEP_EOL_2}} |
| {{DEP_VER_3}} | {{DEP_STATUS_3}} | {{DEP_EOL_3}} |

## Pre-migration Checklist

- [ ] {{CHECK_1}}
- [ ] {{CHECK_2}}
- [ ] {{CHECK_3}}
- [ ] {{CHECK_4}}
- [ ] {{CHECK_5}}

## Common Issues

| {{ISSUE_HEADER}} | {{CAUSE_HEADER}} | {{FIX_HEADER}} |
|------------------|------------------|----------------|
| {{ISSUE_1}} | {{CAUSE_1}} | {{FIX_1}} |
| {{ISSUE_2}} | {{CAUSE_2}} | {{FIX_2}} |
| {{ISSUE_3}} | {{CAUSE_3}} | {{FIX_3}} |

## Rollback

{{ROLLBACK_INTRO}}

```bash
{{ROLLBACK_CMD_1}}
{{ROLLBACK_CMD_2}}
{{ROLLBACK_CMD_3}}
```

## Getting Help

- {{HELP_1}}
- {{HELP_2}}
- {{HELP_3}}

## References

- `CHANGELOG.md` - {{REF_1}}
- `README.md` - {{REF_2}}
