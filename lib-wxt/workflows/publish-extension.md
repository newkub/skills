---
description: Publish extension ไปยัง stores
---

## Goal

Publish WXT extension ไปยัง Chrome Web Store และ Firefox Add-ons

## Scope

ใช้สำหรับ publish extensions ไปยัง extension stores

## Execute

### 1. Build และ Zip

ทำตาม `/build-extension` workflow ก่อน

### 2. Chrome Web Store

#### เตรียม Package

```bash
bun run zip
```

#### Upload ไปยัง Chrome Web Store

1. ไปที่ [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. เลือก "Add new item"
3. Upload ZIP file จาก `my-extension-{version}-chrome.zip`
4. เติมข้อมูล:
   - Store listing
   - Privacy policy
   - Screenshots
   - Categories
5. Submit สำหรับ review

#### Review Process

- Chrome review: 1-3 days
- ต้องมี privacy policy
- ต้องมี screenshots
- ต้องมี detailed description

### 3. Firefox Add-ons

#### เตรียม Package

```bash
bun run zip:firefox
```

Firefox zip จะรวม source code อัตโนมัติสำหรับ review

#### Upload ไปยัง Firefox Add-ons

1. ไปที่ [Firefox Add-ons Developer Hub](https://addons.mozilla.org/developers/)
2. เลือก "Submit a new Add-on"
3. Upload ZIP file จาก `my-extension-{version}-firefox.zip`
4. เติมข้อมูล:
   - Listing details
   - Privacy policy
   - Screenshots
   - Categories
5. Submit สำหรับ review

#### Review Process

- Firefox review: 1-7 days
- Source code review อัตโนมัติ
- ต้องมี privacy policy
- ต้องมี screenshots

### 4. Edge Add-ons

Edge ใช้ Chrome build:

```bash
bun run zip
```

Upload ไปยัง [Microsoft Edge Add-ons](https://partner.microsoft.com/dashboard/microsoftedge/overview)

### 5. Safari Web Extensions

Safari ต้องใช้ Xcode:

1. Build สำหรับ Safari:

```bash
wxt build --browser safari
```

2. เปิด project ใน Xcode
3. Archive และ upload ไปยัง App Store Connect

### 6. Automated Publishing

ใช้ tools สำหรับ automated publishing:

#### Chrome Web Store API

ใช้ `chrome-webstore-upload` package:

```bash
bun add -D chrome-webstore-upload
```

ตั้งค่า environment variables:

```bash
CHROME_WEBSTORE_CLIENT_ID=your_client_id
CHROME_WEBSTORE_CLIENT_SECRET=your_client_secret
CHROME_WEBSTORE_REFRESH_TOKEN=your_refresh_token
CHROME_WEBSTORE_EXTENSION_ID=your_extension_id
```

#### Firefox Add-ons API

ใช้ `web-ext` package:

```bash
bun add -D web-ext
```

ตั้งค่า environment variables:

```bash
WEB_EXT_API_KEY=your_api_key
WEB_EXT_API_SECRET=your_api_secret
```

### 7. Version Management

ใช้ semantic versioning ใน `package.json`:

```json
{
  "version": "1.0.0"
}
```

WXT จะใช้ version นี้ใน manifest และ zip filename

## Rules

### Store Requirements

- **Privacy Policy**: จำเป็นสำหรับทุก stores
- **Screenshots**: อย่างน้อย 1 screenshot, แนะนำ 5+
- **Description**: 详细的 description ที่อธิบาย features
- **Categories**: เลือก categories ที่เหมาะสม
- **Permissions**: เฉพาะ permissions ที่จำเป็น

### Review Guidelines

- อย่าใช้ permissions ที่ไม่จำเป็น
- อย่า collect data โดยไม่บอกผู้ใช้
- อย่า inject code โดยไม่จำเป็น
- ต้องมี clear privacy policy

### Version Bumping

เพิ่ม version ใน `package.json` ก่อน build:

```bash
bun version patch  # 1.0.0 -> 1.0.1
bun version minor  # 1.0.0 -> 1.1.0
bun version major  # 1.0.0 -> 2.0.0
```

## Expected Outcome

- Extension ที่ publish แล้ว
- Store listing ที่สมบูรณ์
- Version ที่ถูกต้อง
- Privacy policy ที่ชัดเจน
- Screenshots และ descriptions ที่ดี
