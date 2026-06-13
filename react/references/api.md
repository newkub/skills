# React API Reference

## React

### Components

#### Function Components

```javascript
function MyComponent({ prop }) {
  return <div>{prop}</div>;
}
```

#### Class Components

```javascript
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.prop}</div>;
  }
}
```

### Hooks

#### useState

```javascript
const [state, setState] = useState(initialValue);
```

#### useEffect

```javascript
useEffect(() => {
  // Effect logic
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

#### useContext

```javascript
const value = useContext(MyContext);
```

#### useReducer

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

#### useCallback

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

#### useMemo

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

#### useRef

```javascript
const ref = useRef(initialValue);
```

#### useImperativeHandle

```javascript
useImperativeHandle(ref, () => ({
  customMethod: () => {}
}), [dependencies]);
```

#### useLayoutEffect

```javascript
useLayoutEffect(() => {
  // Effect logic
}, [dependencies]);
```

#### useDebugValue

```javascript
useDebugValue(value);
```

#### useTransition

```javascript
const [isPending, startTransition] = useTransition();
```

#### useDeferredValue

```javascript
const deferredValue = useDeferredValue(value);
```

## ReactDOM

### render (Legacy)

```javascript
ReactDOM.render(element, container);
```

### createRoot

```javascript
const root = createRoot(container);
root.render(element);
```

### hydrateRoot

```javascript
const root = hydrateRoot(container, element);
```

## Events

### Synthetic Events

React ใช้ synthetic events สำหรับ cross-browser compatibility

```javascript
function handleClick(event) {
  event.preventDefault();
  console.log(event.target);
}
```

### Event Handlers

```javascript
<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />
<form onSubmit={handleSubmit} />
```

## Other APIs

### Fragment

```javascript
<Fragment>
  <ChildA />
  <ChildB />
</Fragment>

// Short syntax
<>
  <ChildA />
  <ChildB />
</>
```

### Suspense

```javascript
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

### Profiler

```javascript
<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
```

### StrictMode

```javascript
<StrictMode>
  <App />
</StrictMode>
```
