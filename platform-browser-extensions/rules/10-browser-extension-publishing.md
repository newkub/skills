# Browser Extension Publishing

Publishing extensions ไปยัง browser stores

## Build for Production

```bash
# Build for all browsers
wxt build

# Build for specific browser
wxt build -b chrome
wxt build -b firefox
```

## Zip Extension

```bash
# Zip for all browsers
wxt zip

# Zip for specific browser
wxt zip -b chrome
wxt zip -b firefox
```

## Publish to Stores

### Chrome Web Store

```bash
# Set up environment variables
# .env.publish
CHROME_EXTENSION_ID="your-extension-id"
CHROME_CLIENT_ID="your-client-id"
CHROME_CLIENT_SECRET="your-client-secret"
CHROME_REFRESH_TOKEN="your-refresh-token"

# Publish
wxt publish
```

### Firefox Add-ons

```bash
# Set up environment variables
# .env.publish
FIREFOX_API_KEY="your-api-key"
FIREFOX_API_SECRET="your-api-secret"

# Publish
wxt publish
```

### Edge Add-ons

```bash
# Manual upload to Edge Add-ons
wxt zip -b edge
# Upload .output/edge-mv3-{version}.zip to Edge Add-ons
```

### Safari App Store

```bash
# Requires Xcode and Apple Developer account
wxt build -b safari
# Use Xcode to submit to App Store
```

## Version Management

Update version in `package.json`:

```json
{
  "version": "1.0.0"
}
```

WXT จะ generate `version` และ `version_name` ใน manifest:

```json
{
  "version": "1.0.0",
  "version_name": "1.0.0"
}
```

## Store Requirements

### Chrome Web Store

- Manifest V3 required for new extensions
- Privacy policy required
- Screenshots required
- Icon sizes: 16x16, 48x48, 128x128
- Content Security Policy required

### Firefox Add-ons

- Manifest V2 or V3 supported
- Code review required
- Privacy policy required
- Icon sizes: 16x16, 48x48, 128x128

### Edge Add-ons

- Manifest V3 required
- Similar requirements to Chrome

### Safari App Store

- Requires Apple Developer account
- Code review required
- App Store guidelines apply

## Best Practices

1. **Test thoroughly** ก่อน publish
2. **Follow store guidelines** อย่างเหมาะสม
3. **Provide clear description** และ screenshots
4. **Update version** อย่างเหมาะสม
5. **Monitor reviews** และ feedback
6. **Fix bugs** อย่างรวดเร็ว
