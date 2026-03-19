---
description: 'Template สำหรับ ARCHITECTURE.md'
title: '{{PROJECT_NAME}}'
tags: [architecture, design, '{{CATEGORY}}']
goals:
  - 'อธิบายสถาปัตยกรรม {{PROJECT_NAME}}'
  - 'ให้ทีมเข้าใจ design decisions'
---

## {{PROJECT_NAME}} Architecture

> ℹ️ **Info:** {{ARCHITECTURE_DESCRIPTION}}

**{{ORG_NAME}}** / **design** / `ARCHITECTURE.md`

## Overview

```text
┌─────────────────────────────────────────────────────────┐
│                    System Architecture                   │
├─────────────────────────────────────────────────────────┤
│  {{LAYER_1}}    │  {{LAYER_2}}    │  {{LAYER_3}}         │
│  ({{TECH_1}})    │  ({{TECH_2}})    │  ({{TECH_3}})        │
└─────────────────────────────────────────────────────────┘
```

## Components

### 1. {{COMPONENT_1_NAME}}

| Component | Technology | Purpose |
|-----------|------------|---------|
| {{COMP_1}} | {{TECH_A}} | {{PURPOSE_A}} |
| {{COMP_2}} | {{TECH_B}} | {{PURPOSE_B}} |
| {{COMP_3}} | {{TECH_C}} | {{PURPOSE_C}} |

### 2. {{COMPONENT_2_NAME}}

| Component | Technology | Purpose |
|-----------|------------|---------|
| {{COMP_4}} | {{TECH_D}} | {{PURPOSE_D}} |
| {{COMP_5}} | {{TECH_E}} | {{PURPOSE_E}} |

### 3. {{COMPONENT_3_NAME}}

| Type | Technology | Use Case |
|------|------------|----------|
| {{DATA_TYPE_1}} | {{DATA_TECH_1}} | {{DATA_USE_1}} |
| {{DATA_TYPE_2}} | {{DATA_TECH_2}} | {{DATA_USE_2}} |

## Data Flow

```text
{{ACTOR}} → {{LAYER_A}} → {{LAYER_B}} → {{LAYER_C}} → {{LAYER_D}}
     ↓           ↓            ↓             ↓
  {{TECH_X}}  {{TECH_Y}}   {{TECH_Z}}    {{TECH_W}}
```

## Design Patterns

| Pattern | Use Case | Implementation |
|---------|----------|----------------|
| {{PATTERN_1}} | {{USE_CASE_1}} | {{IMPL_1}} |
| {{PATTERN_2}} | {{USE_CASE_2}} | {{IMPL_2}} |
| {{PATTERN_3}} | {{USE_CASE_3}} | {{IMPL_3}} |

## API Design

### {{API_TYPE}} Endpoints

```text
{{METHOD_1}}    {{ENDPOINT_1}}        → {{DESC_1}}
{{METHOD_2}}    {{ENDPOINT_2}}        → {{DESC_2}}
{{METHOD_3}}    {{ENDPOINT_3}}        → {{DESC_3}}
{{METHOD_4}}    {{ENDPOINT_4}}        → {{DESC_4}}
{{METHOD_5}}    {{ENDPOINT_5}}        → {{DESC_5}}
```

### Authentication Flow

```text
{{AUTH_STEP_1}} → {{AUTH_STEP_2}} → {{AUTH_STEP_3}} → {{AUTH_STEP_4}} → {{AUTH_STEP_5}}
```

## Scalability

### Horizontal Scaling

- {{SCALING_ITEM_1}}
- {{SCALING_ITEM_2}}
- {{SCALING_ITEM_3}}

### Caching Strategy

| Layer | Technology | TTL |
|-------|------------|-----|
| {{CACHE_LAYER_1}} | {{CACHE_TECH_1}} | {{TTL_1}} |
| {{CACHE_LAYER_2}} | {{CACHE_TECH_2}} | {{TTL_2}} |
| {{CACHE_LAYER_3}} | {{CACHE_TECH_3}} | {{TTL_3}} |

## Security

- {{SECURITY_ITEM_1}}
- {{SECURITY_ITEM_2}}
- {{SECURITY_ITEM_3}}
- {{SECURITY_ITEM_4}}
- {{SECURITY_ITEM_5}}

## Monitoring

| Component | Tool | Metric |
|-----------|------|--------|
| {{MONITOR_COMP_1}} | {{MONITOR_TOOL_1}} | {{METRIC_1}} |
| {{MONITOR_COMP_2}} | {{MONITOR_TOOL_2}} | {{METRIC_2}} |
| {{MONITOR_COMP_3}} | {{MONITOR_TOOL_3}} | {{METRIC_3}} |

## References

- `README.md` - {{REF_DESC_1}}
- `CONTRIBUTING.md` - {{REF_DESC_2}}
