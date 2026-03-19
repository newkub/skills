---
description: Template สำหรับ Runbook (Operational Procedures)
title: '{{RUNBOOK_TITLE}}'
tags: [runbook, '{{CATEGORY}}', operations]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{RUNBOOK_TITLE}}

> 🚨 **{{SEVERITY}}** | {{SERVICE_NAME}}

**{{ORG_NAME}}** / **runbooks** / `{{FILENAME}}`

**Last Updated:** {{DATE}}

**Owner:** {{OWNER_TEAM}}

**Related Alerts:** {{ALERT_NAMES}}

## โครงสร้าง Runbook

| Section | รายละเอียด |
|---------|-----------|
| Overview | อธิบายสถานการณ์ |
| Prerequisites | สิ่งที่ต้องมีก่อน |
| Procedure | ขั้นตอนการแก้ไข |
| Verification | วิธีตรวจสอบ |
| Escalation | เมื่อไหร่ต้องยกระดับ |

## Rules

### Runbook Types

| Type | Icon | Use For |
|------|------|---------|
| Incident | 🔥 | Handling outages |
| Deployment | 🚀 | Release procedures |
| Maintenance | 🔧 | Regular maintenance |
| Recovery | ♻️ | Disaster recovery |
| Alert | 🔔 | Alert response |

### Required Sections

- **Overview** - อธิบายสถานการณ์
- **Prerequisites** - สิ่งที่ต้องมีก่อน
- **Procedure** - ขั้นตอนการแก้ไข
- **Verification** - วิธีตรวจสอบ
- **Escalation** - เมื่อไหร่ต้องยกระดับ

### Severity Levels

| Level | Color | Response Time |
|-------|-------|---------------|
| P1 | 🔴 Critical | 15 min |
| P2 | 🟠 High | 1 hour |
| P3 | 🟡 Medium | 4 hours |
| P4 | 🔵 Low | 24 hours |

## Template

### Overview

```markdown
## Overview

### Symptoms

- {{SYMPTOM_1}}
- {{SYMPTOM_2}}
- {{SYMPTOM_3}}

### Impact

{{IMPACT_DESCRIPTION}}

### Affected Systems

- {{SYSTEM_1}}
- {{SYSTEM_2}}
```

### Prerequisites

```markdown
## Prerequisites

### Access Required

- {{ACCESS_1}}
- {{ACCESS_2}}

### Tools Needed

- {{TOOL_1}}
- {{TOOL_2}}

### Information Needed

- {{INFO_1}}
- {{INFO_2}}
```

### Procedure

```markdown
## Procedure

### Step 1: {{STEP_1_TITLE}}

{{STEP_1_DESCRIPTION}}

```bash
{{COMMAND_1}}
```
```


```text

```text

**Expected Result:** {{EXPECTED_1}}

### Step 2: {{STEP_2_TITLE}}

{{STEP_2_DESCRIPTION}}

```bash
{{COMMAND_2}}
```

**Expected Result:** {{EXPECTED_2}}

### Step 3: {{STEP_3_TITLE}}

{{STEP_3_DESCRIPTION}}

```bash
{{COMMAND_3}}
```

**Expected Result:** {{EXPECTED_3}}

```text

### Verification

```markdown
## Verification

- [ ] {{VERIFY_1}}
- [ ] {{VERIFY_2}}
- [ ] {{VERIFY_3}}

**Monitoring:** {{MONITORING_URL}}
```

### Rollback

```markdown
## Rollback Procedure

หาก procedure ไม่ทำงาน:

1. {{ROLLBACK_STEP_1}}
2. {{ROLLBACK_STEP_2}}
3. {{ROLLBACK_STEP_3}}
```

### Escalation

```markdown
## Escalation

### When to Escalate

- {{ESCALATE_CONDITION_1}}
- {{ESCALATE_CONDITION_2}}

### Contact

- **On-call:** {{ONCALL_CONTACT}}
- **Manager:** {{MANAGER_CONTACT}}
- **Team:** {{TEAM_CONTACT}}
```

## Example

### Example: Database Connection Failure

```markdown
# Database Connection Failure

> 🚨 **P1 - Critical** | User Service Database

**Last Updated:** 2024-01-15

**Owner:** Backend Team

**Related Alerts:** database-connection-error, high-error-rate

## Overview

### Symptoms

- Users cannot login
- API returning 500 errors
- Database connection timeout errors in logs

### Impact

All user-facing features are down. Estimated 100% of users affected.

### Affected Systems

- User Service API
- Authentication Service
- User Dashboard

## Prerequisites

### Access Required

- AWS Console access (Production)
- Database admin credentials
- Slack #incidents channel access

### Tools Needed

- psql CLI
- AWS CLI
- Datadog dashboard

### Information Needed

- Database endpoint
- Last known good configuration

## Procedure

### Step 1: Check Database Status

ตรวจสอบสถานะ database instance

```bash
aws rds describe-db-instances --db-instance-identifier user-db-prod
```
```


```text

```text

**Expected Result:** Status should be "available"

### Step 2: Check Connection Pool

ตรวจสอบ connection pool status

```bash
psql -h $DB_HOST -U admin -c "SELECT count(*) FROM pg_stat_activity;"
```

**Expected Result:** Active connections < 100

### Step 3: Restart Application

Restart application services

```bash
kubectl rollout restart deployment/user-service -n production
```

**Expected Result:** Pods restart successfully, health checks pass

## Verification

- [ ] Database connections restored
- [ ] Login functionality working
- [ ] Error rate < 1%
- [ ] All health checks passing

**Monitoring:** <https://datadog.com/dashboard/production>

## Rollback Procedure

หาก restart ไม่ช่วย:

1. Scale down to 0 replicas: `kubectl scale deployment/user-service --replicas=0`
2. Notify users via status page
3. Escalate to database team immediately

## Escalation

### When to Escalate

- Database status shows "failed"
- Cannot connect after 2 restart attempts
- Error persists > 30 minutes

### Contact

- **On-call:** <pagerduty-oncall@company.com>
- **Manager:** <backend-manager@company.com>
- **Team:** #backend-team Slack channel

```text
