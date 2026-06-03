# Configuration

Configuration options สำหรับ moonrepo

## Config File

```json
{
  "moonrepo": {
    "option1": "value1",
    "option2": true,
    "option3": 123
  }
}
```

## Environment Variables

```env
MOONREPO_OPTION1=value1
MOONREPO_OPTION2=value2
```

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `projects` | array | `[]` | Project globs |
| `tasks` | object | `{}` | Task definitions |
| `extends` | string | - | Inherit from template |
| `remoteCache` | object | - | Remote cache config |


---

