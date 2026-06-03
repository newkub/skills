# Configuration Reference

## Config File

Create `remotion.config.ts` in project root:

```typescript
import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
```

## Key Configuration Options

### Video Settings

```typescript
// Set default video quality
Config.setQuality(80);

// Set pixel format
Config.setPixelFormat('yuv420p');

// Set frame rate
Config.setFps(30);
```

### Output Settings

```typescript
// Set output directory
Config.setOutputDir('./out');

// Set binary directory
Config.setBundlerDefine('MY_VARIABLE', '"value"');
```

### Server Settings

```typescript
// Set port for preview server
Config.setPort(3000);

// Enable HTTPS
Config.setHttpsLocalhost({
  enabled: true,
});
```

## package.json Configuration

```json
{
  "scripts": {
    "start": "remotion studio",
    "build": "remotion render",
    "upgrade": "remotion upgrade"
  }
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `REMOTION_PUBLIC_FOLDER` | Public folder path |
| `NODE_OPTIONS` | Node.js options |

## TypeScript Configuration

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

---

For full configuration options, see [Remotion Configuration Documentation](https://www.remotion.dev/docs/configuration).