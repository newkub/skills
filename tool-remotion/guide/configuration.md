# Configuration

## การสร้าง Config File

สร้างไฟล์ `remotion.config.ts` ที่ root ของโปรเจกต์:

```typescript
import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
```

## ตัวเลือก Configuration หลัก

### การตั้งค่า Video

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `setQuality()` | `number` | คุณภาพ (0-100) |
| `setFps()` | `number` | จำนวน frames ต่อวินาที |
| `setPixelFormat()` | `string` | pixel format (yuv420p, etc.) |
| `setWidth()` / `setHeight()` | `number` | ขนาดวิดีโอ |

### การตั้งค่า Output

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `setOutputDir()` | `string` | โฟลเดอร์สำหรับไฟล์ output |
| `setOverwriteOutput()` | `boolean` | เขียนทับไฟล์เดิมได้หรือไม่ |
| `setCodec()` | `string` | codec สำหรับวิดีโอ (h264, vp9) |

### การตั้งค่า Server

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `setPort()` | `number` | port สำหรับ preview server |
| `setHttpsLocalhost()` | `object` | เปิดใช้งาน HTTPS localhost |

## ตัวอย่าง Config ที่สมบูรณ์

```typescript
import { Config } from '@remotion/cli/config';

// Video settings
Config.setFps(30);
Config.setWidth(1920);
Config.setHeight(1080);
Config.setQuality(90);

// Output settings
Config.setOutputDir('./out');
Config.setOverwriteOutput(true);

// Server settings
Config.setPort(3000);
```

## Environment Variables

| Variable | คำอธิบาย |
|----------|----------|
| `REMOTION_PUBLIC_FOLDER` | โฟลเดอร์ public |
| `REMOTION_AUDIO_CODEC` | codec สำหรับ audio |
| `REMOTION_VIDEO_CODEC` | codec สำหรับ video |
| `NODE_OPTIONS` | Node.js options |
