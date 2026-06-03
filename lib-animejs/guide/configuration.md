# Configuration

## Global Config

```javascript
anime.defaults = {
  duration: 800,
  easing: 'easeOutQuad',
  begin: () => {},
  complete: () => {}
};
```

## Instance Config

```javascript
anime({
  targets: '.box',
  duration: 1000,
  easing: 'easeInOutQuad',
  begin: (anim) => console.log('Start'),
  complete: (anim) => console.log('End')
});
```

## Easing Options

| Easing | Description |
|--------|-------------|
| linear | Constant speed |
| easeInQuad | Slow start |
| easeOutQuad | Slow end |
| easeInOutQuad | Slow start and end |
| cubicBezier | Custom curve |

## Custom Easing

```javascript
const customEasing = anime.easings['myEase'] = (t) => Math.pow(t, 2);
```

## Update Callback

```javascript
anime({
  targets: '.box',
  translateX: 250,
  update: (anim) => {
    console.log(`Progress: ${anim.progress}%`);
  }
});
```

## Loop Direction

| Direction | Behavior |
|-----------|----------|
| normal | Forward only |
| reverse | Backward only |
| alternate | Forward then backward |