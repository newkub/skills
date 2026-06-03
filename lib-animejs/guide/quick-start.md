# Quick Start

## Basic Animation

```javascript
import anime from 'animejs';

anime({
  targets: '.box',
  translateX: 250,
  duration: 1000
});
```

## Multiple Properties

```javascript
anime({
  targets: '.box',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#fff',
  duration: 1000
});
```

## Keyframes

```javascript
anime({
  targets: '.box',
  keyframes: [
    { translateX: 0, backgroundColor: '#f00' },
    { translateX: 250, backgroundColor: '#0f0' },
    { translateX: 0, backgroundColor: '#00f' }
  ],
  duration: 2000
});
```

## Timeline

```javascript
const timeline = anime.timeline();

timeline.add({
  targets: '.box',
  translateX: 250,
  duration: 1000
}).add({
  targets: '.circle',
  translateY: 200,
  duration: 500
});
```

## Run Example

```bash
# Open in browser
open index.html
```

## Next Steps

- [Key Concepts](key-concept.md)
- [Best Practices](best-practices.md)
- [Configuration](configuration.md)