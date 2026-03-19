---
description: Template สำหรับ Architecture Decision Records (ADR)
title: 'ADR-{{NUMBER}}: {{DECISION_TITLE}}'
tags: [adr, '{{CATEGORY}}', decision]
goals:
  - '{{GOAL_1}}'
  - '{{GOAL_2}}'
---

## ADR-{{NUMBER}}: {{DECISION_TITLE}}

> 🏛️ **Status:** {{STATUS}} | **Date:** {{DATE}}

**{{ORG_NAME}}** / **decisions** / `ADR-{{NUMBER}}-{{SLUG}}.md`

**Deciders:** {{DECIDERS}}

**Affected:** {{AFFECTED_COMPONENTS}}

## โครงสร้าง ADR

| Section | รายละเอียด |
|---------|-----------|
| Context | Problem/Background |
| Decision | What we decided |
| Consequences | Trade-offs |
| Alternatives | What we rejected |

## Rules

### ADR Format

ADRs ต้องมีโครงสร้างมาตรฐาน 8 ส่วน:

1. Title (ADR-XXX: Decision Name)
2. Status (Proposed, Accepted, Deprecated, Superseded)
3. Context (Problem/Background)
4. Decision (What we decided)
5. Consequences (Trade-offs)
6. Alternatives (What we rejected)
7. References

### Status Values

| Status | Meaning |
|--------|---------|
| Proposed | Under consideration |
| Accepted | Decision approved |
| Deprecated | No longer relevant |
| Superseded | Replaced by newer ADR |

### File Naming

Format: `ADR-XXX-short-descriptive-name.md`
Example: `ADR-001-use-postgresql.md`

## Template

### Context

```markdown
## Context

{{CONTEXT_DESCRIPTION}}

### Problem Statement

{{PROBLEM_STATEMENT}}

### Goals

- {{GOAL_A}}
- {{GOAL_B}}
- {{GOAL_C}}

### Constraints

- {{CONSTRAINT_1}}
- {{CONSTRAINT_2}}
```

### Decision

```markdown
## Decision

**We will {{DECISION_SUMMARY}}**

### Rationale

{{RATIONALE}}

### Implementation Details

- {{DETAIL_1}}
- {{DETAIL_2}}
```

### Consequences

```markdown
## Consequences

### Positive

- ✅ {{POSITIVE_1}}
- ✅ {{POSITIVE_2}}

### Negative

- ⚠️ {{NEGATIVE_1}}
- ⚠️ {{NEGATIVE_2}}

### Risks

- {{RISK_1}}
- {{RISK_2}}
```

### Alternatives

```markdown
## Alternatives Considered

### {{ALT_1_NAME}}

- **Pros:** {{ALT_1_PROS}}
- **Cons:** {{ALT_1_CONS}}
- **Verdict:** {{ALT_1_VERDICT}}

### {{ALT_2_NAME}}

- **Pros:** {{ALT_2_PROS}}
- **Cons:** {{ALT_2_CONS}}
- **Verdict:** {{ALT_2_VERDICT}}
```

## Example

### Example: Database Selection

```markdown
# ADR-001: Use PostgreSQL as Primary Database

> 🏛️ **Status:** Accepted | **Date:** 2024-01-15

**Deciders:** Tech Lead, Senior Engineers

**Affected:** Backend, DevOps, Data Team

## Context

We need to select a primary database for our new microservices architecture.

### Problem Statement

Current MongoDB setup doesn't support complex relational queries and ACID transactions needed for financial data.

### Goals

- Support complex relational queries
- ACID transaction support
- JSON/document storage capability
- Active community and tooling

### Constraints

- Must support horizontal scaling
- Must have managed cloud options
- Team has limited time for learning curve

## Decision

**We will use PostgreSQL as our primary database**

### Rationale

PostgreSQL offers the best balance of relational features with modern JSON support. It has excellent tooling and our team is already familiar with SQL.

### Implementation Details

- Use PostgreSQL 15+
- Enable JSONB for flexible schema areas
- Use read replicas for scaling
- Managed service: AWS RDS

## Consequences

### Positive

- ✅ Full ACID compliance
- ✅ Rich query capabilities
- ✅ Excellent ecosystem
- ✅ JSONB for semi-structured data

### Negative

- ⚠️ Learning curve for NoSQL team members
- ⚠️ Schema migrations required
- ⚠️ Vertical scaling limits

### Risks

- Migration complexity from MongoDB
- Performance tuning needed for JSONB queries

## Alternatives Considered

### MongoDB (Current)

- **Pros:** Team familiar, flexible schema
- **Cons:** No ACID transactions, limited joins
- **Verdict:** Rejected - doesn't meet transaction requirements

### MySQL

- **Pros:** Familiar, good performance
- **Cons:** Limited JSON support, fewer features
- **Verdict:** Rejected - less flexible than PostgreSQL

### DynamoDB

- **Pros:** Managed, auto-scaling
- **Cons:** No joins, complex queries expensive
- **Verdict:** Rejected - too restrictive for our use case

## References

- [PostgreSQL Documentation](https://postgresql.org/docs)
- [Migration Guide](./docs/migration-postgresql.md)
```
