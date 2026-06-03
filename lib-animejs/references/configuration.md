# configuration

## index.md

# Configuration Reference

## Global Defaults

```javascript
anime.defaults = {
  duration: 800,
  easing: 'easeOutQuad',
  loop: false,
  autoplay: true,
  direction: 'normal'
};
```

## Animation Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| targets | string/Element | - | Elements to animate |
| duration | number | 800 | Duration in ms |
| delay | number | 0 | Start delay in ms |
| easing | string | 'linear' | Timing function |
| loop | boolean/number | false | Loop count |
| direction | string | 'normal' | Animation direction |

## Easing Functions

| Function | Description |
|----------|-------------|
| linear | Constant speed |
| easeInQuad | Slow start |
| easeOutQuad | Slow end |
| easeInOutQuad | Slow start and end |
| easeInCubic | Cubic start |
| easeOutCubic | Cubic end |

## Custom Easing

```javascript
anime.easings['myEase'] = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
```

---

