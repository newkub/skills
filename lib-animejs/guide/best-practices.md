# Best Practices

## Performance

| Practice | Description |
|----------|-------------|
| Use transform | Prefer translateX/Y over left/top |
| Avoid layout thrashing | Batch DOM reads/writes |
| Use will-change | Enable GPU acceleration |
| Limit simultaneous | Animate max 20 elements |

## Code Organization

```
src/
├── animations/
│   ├── fade-in.js
│   ├── slide-up.js
│   └── bounce.js
├── timelines/
│   └── hero-timeline.js
├── components/
│   └── button-animation.js
└── main.js
```

## Reusable Functions

```javascript
const fadeIn = (targets, duration = 500) => {
  return anime({
    targets,
    opacity: [0, 1],
    duration,
    easing: 'easeOutQuad'
  });
};

const slideUp = (targets) => {
  return anime({
    targets,
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'easeOutQuad'
  });
};
```

## Cleanup

```javascript
const animation = anime({
  targets: '.box',
  translateX: 250
});

animation.pause();
animation.seek(0);
animation.reset();
```

## Testing

```javascript
// Test animation completes
const animation = anime({
  targets: '.box',
  complete: () => {
    console.log('Animation complete');
    expect(document.querySelector('.box').style.opacity).toBe('1');
  }
});
```