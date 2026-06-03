# Configuration

## การตั้งค่า Cursor

### Settings File

เปิด settings.json ผ่าน Command Palette (`Ctrl+Shift+P`):

```json
{
  "cursor AI Model": "pro",
  "cursor.tabSize": 2,
  "cursor.fontSize": 14
}
```

### ตัวเลือกหลัก

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `cursor.AIEnabled` | `boolean` | เปิด/ปิด AI |
| `cursor.AIModel` | `string` | model ที่ใช้ (pro, fast, max) |
| `cursor.tabSize` | `number` | ขนาด tab |
| `cursor.fontSize` | `number` | ขนาด font |

## AI Settings

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `cursor.contextLevel` | `string` | ระดับ context (file, project) |
| `cursor.autocompleteEnabled` | `boolean` | เปิด autocomplete |
| `cursor.inlineAIEnabled` | `boolean` | เปิด inline AI |

## Keyboard Shortcuts

| Shortcut | Action | Default |
|----------|--------|---------|
| `Ctrl+K` | AI Command | - |
| `Ctrl+L` | AI Chat | - |
| `Ctrl+I` | Inline AI | - |
| `Ctrl+Enter` | Generate | - |

## Model Options

| Model | Speed | Quality |
|-------|-------|---------|
| **Fast** |เร็ว | ต่ำกว่า |
| **Pro** | ปานกลาง | ดี |
| **Max** | ช้า | ดีที่สุด |

## Environment Variables

```bash
# Cursor API key (if using custom model)
CURSOR_API_KEY=your_key

# Debug mode
CURSOR_DEBUG=true
```
