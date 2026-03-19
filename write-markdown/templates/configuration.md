---
description: 'Template สำหรับ configuration.md'
title: '{{PROJECT_NAME}}'
tags: [config, setup, '{{CATEGORY}}']
goals:
  - 'อธิบายตัวเลือกการตั้งค่า {{PROJECT_NAME}}'
  - 'ให้ผู้ใช้ปรับแต่งได้ตามต้องการ'
---

## {{PROJECT_NAME}} Configuration

> ℹ️ **Info:** {{CONFIG_DESCRIPTION}}

**{{ORG_NAME}}** / **config** / `configuration.md`

## การตั้งค่าพื้นฐาน

### Environment Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `{{ENV_VAR_1}}` | {{TYPE_1}} | {{DEFAULT_1}} | {{DESC_1}} |
| `{{ENV_VAR_2}}` | {{TYPE_2}} | {{DEFAULT_2}} | {{DESC_2}} |
| `{{ENV_VAR_3}}` | {{TYPE_3}} | {{DEFAULT_3}} | {{DESC_3}} |
| `{{ENV_VAR_4}}` | {{TYPE_4}} | {{DEFAULT_4}} | {{DESC_4}} |

### ไฟล์ Configuration

```javascript
// {{CONFIG_FILE}}
module.exports = {
  {{CONFIG_KEY_1}}: process.env.{{ENV_1}} || {{DEFAULT_VAL_1}},
  {{CONFIG_KEY_2}}: process.env.{{ENV_2}} || {{DEFAULT_VAL_2}},
  {{CONFIG_KEY_3}}: process.env.{{ENV_3}},
  {{CONFIG_SECTION}}: {
    {{NESTED_KEY_1}}: {{NESTED_VAL_1}},
    {{NESTED_KEY_2}}: {{NESTED_VAL_2}}
  }
}
```

## ตัวเลือกการตั้งค่า

### {{CATEGORY_1}} Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `{{OPT_1}}` | {{TYPE_A}} | {{DEFAULT_A}} | {{DESC_A}} |
| `{{OPT_2}}` | {{TYPE_B}} | {{DEFAULT_B}} | {{DESC_B}} |
| `{{OPT_3}}` | {{TYPE_C}} | {{DEFAULT_C}} | {{DESC_C}} |

### {{CATEGORY_2}} Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `{{OPT_4}}` | {{TYPE_D}} | {{DEFAULT_D}} | {{DESC_D}} |
| `{{OPT_5}}` | {{TYPE_E}} | {{DEFAULT_E}} | {{DESC_E}} |
| `{{OPT_6}}` | {{TYPE_F}} | {{DEFAULT_F}} | {{DESC_F}} |
| `{{OPT_7}}` | {{TYPE_G}} | {{DEFAULT_G}} | {{DESC_G}} |

## ตัวอย่างการใช้งาน

### {{EXAMPLE_1_NAME}}

```javascript
const config = {
  {{EX_1_KEY_1}}: {{EX_1_VAL_1}},
  {{EX_1_KEY_2}}: {{EX_1_VAL_2}}
}
```

### {{EXAMPLE_2_NAME}}

```javascript
const config = {
  {{EX_2_KEY_1}}: {{EX_2_VAL_1}},
  {{EX_2_KEY_2}}: {{EX_2_VAL_2}},
  {{EX_2_KEY_3}}: {{EX_2_VAL_3}},
  {{EX_2_NESTED}}: {
    {{EX_2_SUB_1}}: {{EX_2_SUB_VAL_1}}
  }
}
```

## การโหลด Configuration

```javascript
// โหลดจาก environment
require('{{DOTENV_PACKAGE}}').config()

// โหลดจากไฟล์
const config = require('{{CONFIG_PATH}}')
```

## Configuration Validation

```javascript
const {{VALIDATOR}} = require('{{VALIDATOR_PACKAGE}}')

const schema = {{VALIDATOR}}.object({
  {{VAL_KEY_1}}: {{VALIDATOR}}.{{VAL_TYPE_1}}().{{VAL_METHOD_1}}().default({{VAL_DEFAULT_1}}),
  {{VAL_KEY_2}}: {{VALIDATOR}}.{{VAL_TYPE_2}}().valid({{VAL_OPTIONS}}).default({{VAL_DEFAULT_2}})
})

const { error, value } = schema.validate({{VAL_SOURCE}})
```

## Best Practices

- {{BEST_PRACTICE_1}}
- {{BEST_PRACTICE_2}}
- {{BEST_PRACTICE_3}}
- {{BEST_PRACTICE_4}}

## Troubleshooting

| ปัญหา | สาเหตุ | แก้ไข |
|-------|--------|--------|
| {{ISSUE_1}} | {{CAUSE_1}} | {{FIX_1}} |
| {{ISSUE_2}} | {{CAUSE_2}} | {{FIX_2}} |

## References

- `README.md` - {{REF_1}}
- `INSTALL.md` - {{REF_2}}
