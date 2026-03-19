---
description: 'Template สำหรับ deploy.md'
title: '{{PROJECT_NAME}}'
tags: [deployment, production, '{{CATEGORY}}']
goals:
  - 'แนะนำการ deploy {{PROJECT_NAME}}'
  - 'ให้ deployment ปลอดภัยและมีประสิทธิภาพ'
---

## {{PROJECT_NAME}} Deployment

> ℹ️ **Info:** {{DEPLOY_DESCRIPTION}}

**{{ORG_NAME}}** / **deployment** / `deploy.md`

## Deployment Options

| {{PLATFORM_HEADER}} | {{DIFFICULTY_HEADER}} | {{SUITABLE_FOR_HEADER}} |
|---------------------|----------------------|-------------------------|
| {{PLATFORM_1}} | {{DIFF_1}} | {{SUITABLE_1}} |
| {{PLATFORM_2}} | {{DIFF_2}} | {{SUITABLE_2}} |
| {{PLATFORM_3}} | {{DIFF_3}} | {{SUITABLE_3}} |
| {{PLATFORM_4}} | {{DIFF_4}} | {{SUITABLE_4}} |
| {{PLATFORM_5}} | {{DIFF_5}} | {{SUITABLE_5}} |

## Deploy with {{METHOD_1}}

### 1. {{STEP_1_TITLE}}

```bash
{{STEP_1_CMD}}
```

### 2. {{STEP_2_TITLE}}

```bash
{{STEP_2_CMD}}
```

### 3. {{STEP_3_TITLE}}

```bash
{{STEP_3_CMD}}
```

## Deploy with {{METHOD_2}}

### 1. {{METHOD_2_STEP_1}}

```bash
{{METHOD_2_CMD_1}}
```

### 2. {{METHOD_2_STEP_2}}

```bash
{{METHOD_2_CMD_2}}
```

### 3. {{METHOD_2_STEP_3}}

```bash
{{METHOD_2_CMD_3}}
```

## CI/CD Configuration

```yaml
{{CI_YAML}}
```

## Environment Variables

| {{VAR_HEADER}} | {{PROD_HEADER}} | {{STAGING_HEADER}} | {{DEV_HEADER}} |
|----------------|-----------------|-------------------|----------------|
| `{{ENV_1}}` | {{PROD_1}} | {{STAGING_1}} | {{DEV_1}} |
| `{{ENV_2}}` | {{PROD_2}} | {{STAGING_2}} | {{DEV_2}} |
| `{{ENV_3}}` | {{PROD_3}} | {{STAGING_3}} | {{DEV_3}} |

## Pre-deployment Checklist

- [ ] {{CHECK_1}}
- [ ] {{CHECK_2}}
- [ ] {{CHECK_3}}
- [ ] {{CHECK_4}}
- [ ] {{CHECK_5}}

## Rollback Strategy

```bash
{{ROLLBACK_CMD_1}}
{{ROLLBACK_CMD_2}}
```

## Monitoring

{{MONITORING_INTRO}}

- {{MONITOR_ITEM_1}}
- {{MONITOR_ITEM_2}}
- {{MONITOR_ITEM_3}}
- {{MONITOR_ITEM_4}}

## References

- `README.md` - {{REF_1}}
- `INSTALL.md` - {{REF_2}}
