---
description: 'Template สำหรับ testing.md'
title: '{{PROJECT_NAME}}'
tags: [testing, quality, '{{CATEGORY}}']
goals:
  - 'แนะนำการทดสอบ {{PROJECT_NAME}}'
  - 'ให้ code มีคุณภาพสูง'
---

## {{PROJECT_NAME}} Testing

> ℹ️ **Info:** {{TESTING_DESCRIPTION}}

**{{ORG_NAME}}** / **quality** / `testing.md`

## {{STRATEGY_SECTION}}

| {{TYPE_HEADER}} | {{TOOL_HEADER}} | {{COVERAGE_HEADER}} |
|-----------------|-----------------|--------------------|
| {{TEST_TYPE_1}} | {{TOOL_1}} | {{COV_1}} |
| {{TEST_TYPE_2}} | {{TOOL_2}} | {{COV_2}} |
| {{TEST_TYPE_3}} | {{TOOL_3}} | {{COV_3}} |

## {{STRUCTURE_SECTION}}

```text
{{TEST_DIR}}/
├── {{UNIT_DIR}}/              # {{UNIT_DESC}}
│   └── {{UNIT_PATTERN}}
├── {{INTEGRATION_DIR}}/       # {{INTEGRATION_DESC}}
│   └── {{INTEGRATION_PATTERN}}
└── {{E2E_DIR}}/               # {{E2E_DESC}}
    └── {{E2E_PATTERN}}
```

## {{UNIT_SECTION}}

### {{UNIT_EXAMPLE}}

```typescript
import { describe, it, expect } from '{{TEST_FRAMEWORK}}'
import { {{TEST_TARGET}} } from '{{IMPORT_PATH}}'

describe('{{DESCRIBE_NAME}}', () => {
  it('{{TEST_CASE_1}}', () => {
    expect({{EXPECT_CALL_1}}).toBe({{EXPECT_RESULT_1}})
  })

  it('{{TEST_CASE_2}}', () => {
    expect({{EXPECT_CALL_2}}).toBe({{EXPECT_RESULT_2}})
  })
})
```

### {{BEST_PRACTICES}}

- {{PRACTICE_1}}
- {{PRACTICE_2}}
- {{PRACTICE_3}}
- {{PRACTICE_4}}

## {{INTEGRATION_SECTION}}

### {{INTEGRATION_EXAMPLE}}

```typescript
import { test, expect } from '{{TEST_FRAMEWORK}}'
import { {{APP_CREATOR}} } from '{{APP_PATH}}'

test('{{INTEGRATION_TEST_NAME}}', async () => {
  const {{APP_VAR}} = {{CREATE_APP_CALL}}
  const {{RESPONSE_VAR}} = await {{REQUEST_CALL}}

  expect({{STATUS_ASSERT}}).toBe({{STATUS_CODE}})
  expect(await {{JSON_ASSERT}}).toEqual({{EXPECTED_RESULT}})
})
```

## {{E2E_SECTION}}

### {{E2E_EXAMPLE}}

```typescript
import { test, expect } from '{{E2E_FRAMEWORK}}'

test('{{E2E_TEST_NAME}}', async ({ {{PAGE_VAR}} }) => {
  await {{PAGE_VAR}}.goto('{{URL}}')
  await {{PAGE_VAR}}.fill('{{SELECTOR_1}}', '{{VALUE_1}}')
  await {{PAGE_VAR}}.fill('{{SELECTOR_2}}', '{{VALUE_2}}')
  await {{PAGE_VAR}}.click('{{SUBMIT_SELECTOR}}')

  await expect({{PAGE_VAR}}).toHaveURL('{{EXPECTED_URL}}')
})
```

## {{RUNNING_SECTION}}

```bash
# {{RUN_ALL}}
{{RUN_ALL_CMD}}

# {{RUN_COVERAGE}}
{{RUN_COVERAGE_CMD}}

# {{RUN_SPECIFIC}}
{{RUN_SPECIFIC_CMD}}

# {{RUN_WATCH}}
{{RUN_WATCH_CMD}}
```

## {{COVERAGE_SECTION}}

| {{METRIC_HEADER}} | {{TARGET_HEADER}} | {{STATUS_HEADER}} |
|-------------------|-------------------|-------------------|
| {{METRIC_1}} | {{TARGET_1}} | {{STATUS_1}} |
| {{METRIC_2}} | {{TARGET_2}} | {{STATUS_2}} |
| {{METRIC_3}} | {{TARGET_3}} | {{STATUS_3}} |
| {{METRIC_4}} | {{TARGET_4}} | {{STATUS_4}} |

## {{MOCKING_SECTION}}

```typescript
// {{MOCK_MODULE}}
{{MOCK_MODULE_CODE}}

// {{MOCK_FUNCTION}}
{{MOCK_FUNCTION_CODE}}
```

## {{CI_SECTION}}

```yaml
{{CI_YAML}}
```

## References

- `README.md` - {{REF_1}}
- `CONTRIBUTING.md` - {{REF_2}}
