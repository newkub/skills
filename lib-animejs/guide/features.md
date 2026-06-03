# All Features

## Animation Properties

| Property | Description |
|----------|-------------|
| duration | Animation duration (ms) |
| delay | Start delay (ms) |
| easing | Timing function |
| loop | Repeat count |
| direction | Animation direction |

## CSS Properties

```javascript
anime({
  targets: '.box',
  translateX: 250,
  translateY: 100,
  rotate: '45deg',
  scale: 1.5,
  opacity: 0.5,
  backgroundColor: '#f00'
});
```

## SVG Animation

```javascript
anime({
  targets: 'path',
  strokeDashoffset: [0, anime.setDashoffset],
  duration: 2000,
  easing: 'easeInOutSine'
});
```

## Keyframes

```javascript
anime({
  targets: '.box',
  keyframes: [
    { translateX: 0, scale: 1 },
    { translateX: 250, scale: 1.5 },
    { translateX: 500, scale: 1 }
  ],
  duration: 2000
});
```

## Timeline

```javascript
const tl = anime.timeline({
  easing: 'easeOutQuad'
});

tl.add({
  targets: '.box',
  translateX: 250
}).add({
  targets: '.circle',
  translateY: 200
}, '-=500')
```

## Callback Functions

| Callback | Description |
|----------|-------------|
| begin | Animation starts |
| complete | Animation ends |
| update | Animation updates |
| loopComplete | Loop iteration ends |

## Special Properties

| Property | Description |
|----------|-------------|
| loop | Enable looping |
| autoplay | Auto start |
| direction | 'forward', 'reverse', 'alternate' |