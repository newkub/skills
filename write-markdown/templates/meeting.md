---
description: Template สำหรับ Meeting Notes
title: '{{MEETING_TITLE}}'
tags: [meeting, '{{CATEGORY}}', notes]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## {{MEETING_TITLE}}

> 📅 **{{MEETING_TYPE}}** | {{DATE}} {{TIME}}

**{{ORG_NAME}}** / **meetings** / `{{FILENAME}}`

**Attendees:** {{ATTENDEES}}

**Location:** {{LOCATION}}

**Duration:** {{DURATION}}

## โครงสร้าง Meeting Notes

| ส่วน | รายละเอียด |
|------|-----------|
| Agenda | หัวข้อที่จะคุย |
| Discussion | บันทึกการสนทนา |
| Action Items | สิ่งที่ต้องทำ |

## Rules

### Meeting Types

| Type | Icon | Use For |
|------|------|---------|
| Standup | 🔄 | Daily team sync |
| Planning | 📋 | Sprint/Project planning |
| Review | 👀 | Retrospective/Review |
| 1:1 | 👥 | One-on-one meetings |
| Kickoff | 🚀 | Project start |

### Required Information

- **Date & Time** - เมื่อไหร่
- **Attendees** - ใครเข้าร่วม
- **Agenda** - หัวข้อที่จะคุย
- **Action Items** - สิ่งที่ต้องทำต่อ

### File Naming

Format: `YYYY-MM-DD-meeting-type.md`
Example: `2024-01-15-sprint-planning.md`

## Template

### Agenda

```markdown
## Agenda

1. {{TOPIC_1}} ({{DURATION_1}})
2. {{TOPIC_2}} ({{DURATION_2}})
3. {{TOPIC_3}} ({{DURATION_3}})
```

### Discussion Notes

```markdown
## Discussion Notes

### {{TOPIC_1}}

- {{NOTE_1}}
- {{NOTE_2}}
- **Decision:** {{DECISION_1}}

### {{TOPIC_2}}

- {{NOTE_3}}
- **Action:** {{ACTION_1}}
```

### Action Items

```markdown
## Action Items

| Task | Owner | Due Date | Status |
|------|-------|----------|--------|
| {{TASK_1}} | {{OWNER_1}} | {{DUE_1}} | ⏳ |
| {{TASK_2}} | {{OWNER_2}} | {{DUE_2}} | ⏳ |
| {{TASK_3}} | {{OWNER_3}} | {{DUE_3}} | ⏳ |
```

### Next Meeting

```markdown
## Next Meeting

- **Date:** {{NEXT_DATE}}
- **Time:** {{NEXT_TIME}}
- **Agenda Preview:**
  - {{NEXT_TOPIC_1}}
  - {{NEXT_TOPIC_2}}
```

## Example

### Example: Sprint Planning

```markdown
# Sprint 24 Planning

> 📅 **Planning** | 2024-01-15 10:00 AM

**Attendees:** Alice (PM), Bob (Dev), Carol (Dev), Dave (QA)

**Location:** Conference Room A / Zoom

**Duration:** 2 hours

## Agenda

1. Review last sprint (30 min)
2. Define sprint goal (15 min)
3. Story estimation (45 min)
4. Task breakdown (30 min)

## Discussion Notes

### Review last sprint

- Sprint 23 completed 85% of planned stories
- Performance optimization took longer than expected
- **Decision:** Add buffer time for complex tasks

### Sprint Goal

Build user authentication feature with OAuth support

### Story Estimation

- US-101: OAuth login (5 points)
- US-102: Profile page (3 points)
- US-103: Password reset (3 points)

## Action Items

| Task | Owner | Due Date | Status |
|------|-------|----------|--------|
| Setup OAuth credentials | Bob | 2024-01-16 | ⏳ |
| Create user stories | Alice | 2024-01-16 | ⏳ |
| Prepare test cases | Dave | 2024-01-17 | ⏳ |

## Next Meeting

- **Date:** 2024-01-29
- **Time:** 10:00 AM
- **Agenda Preview:**
  - Sprint 24 retrospective
  - Sprint 25 planning
```
