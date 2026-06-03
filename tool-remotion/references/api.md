# Programmatic API Reference

## Composition API

### registerRoot

Register the root component of your Remotion project:

```tsx
import { registerRoot } from 'remotion';
import { Root } from './Root';

registerRoot(Root);
```

### Composition

Define compositions with type-safe props:

```tsx
import { Composition } from 'remotion';
import { z } from 'zod';
import { MyVideo } from './MyVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComposition"
        component={MyVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={z.object({
          title: z.string(),
          color: z.string(),
        })}
        defaultProps={{
          title: 'Hello World',
          color: '#ffffff',
        }}
      />
    </>
  );
};
```

## Core Hooks

### useCurrentFrame

Get the current frame number:

```tsx
const frame = useCurrentFrame();
```

### useVideoConfig

Get video configuration:

```tsx
const { fps, durationInFrames, width, height } = useVideoConfig();
```

### useTransform

Transform values based on frame:

```tsx
const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 0]);
```

### interpolate

Interpolate values between frames:

```tsx
const scale = interpolate(frame, [0, 30, 60], [0, 1, 0], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});
```

## Audio/Video

### useAudio

Load and control audio:

```tsx
import { useAudio } from 'remotion';

const { volume } = useAudio('background.mp3');
```

### Audio

Play audio in composition:

```tsx
import { Audio } from 'remotion';

<Audio src={staticFile('music.mp3')} startFrom={0} />;
```

### Video

Embed video files:

```tsx
import { Video } from 'remotion';

<Video src={staticFile('intro.mp4')} startFrom={0} />;
```

## Static Files

### staticFile

Reference static assets:

```tsx
import { staticFile } from 'remotion';

<Img src={staticFile('logo.png')} />;
```

## Timing

### spring

Create smooth animations:

```tsx
import { spring } from 'remotion';

const animation = spring({
  frame,
  fps,
  config: {
    damping: 200,
    stiffness: 100,
  },
});
```

### interpolateColor

Interpolate between colors:

```tsx
import { interpolateColor } from 'remotion';

const color = interpolateColor(
  progress,
  [0, 1],
  ['#000000', '#ffffff']
);
```

## Sequences

### Sequence

Control timing of child components:

```tsx
import { Sequence } from 'remotion';

<Sequence from={0} durationInFrames={30}>
  <Intro />
</Sequence>;
```

## Loops

### loop

Loop content for duration:

```tsx
import { loop } from 'remotion';

const repeatedFrames = loop(frame, 30);
```

## Delay Render

### delayRender / continueRender

Handle async operations:

```tsx
const handle = delayRender('Loading data...');
fetchData().then(() => continueRender(handle));
```

## Absolute Fill

### AbsoluteFill

Fill the entire composition area:

```tsx
import { AbsoluteFill } from 'remotion';

<AbsoluteFill style={{ backgroundColor: 'red' }}>
  <h1>Content</h1>
</AbsoluteFill>;
```

## Environment

### random

Generate deterministic random values:

```tsx
import { random } from 'remotion';

const value = random('seed-string');
```

### current Corb

Get current Corb (coordinate):

```tsx
const { x, y } = useCurrentCorb();
```

---

For full API documentation, see [Remotion Docs](https://www.remotion.dev/docs).