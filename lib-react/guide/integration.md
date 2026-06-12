# Integration กับ Tools อื่นๆ

## ภาพรวม

React สามารถ integrate กับ tools และ libraries ต่างๆ ได้อย่างกว้างขวาง

## State Management Libraries

### Redux

```bash
bun add redux react-redux @reduxjs/toolkit
```

**ตัวอย่าง:**
```javascript
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return <button onClick={() => dispatch(counterSlice.actions.increment())}>
    {count}
  </button>;
}
```

### Zustand

```bash
bun add zustand
```

**ตัวอย่าง:**
```javascript
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}
```

### Jotai

```bash
bun add jotai
```

**ตัวอย่าง:**
```javascript
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Routing

### React Router

```bash
bun add react-router-dom
```

**ตัวอย่าง:**
```javascript
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## UI Component Libraries

### Material UI

```bash
bun add @mui/material @emotion/react @emotion/styled
```

**ตัวอย่าง:**
```javascript
import { Button, TextField } from '@mui/material';

function Form() {
  return (
    <>
      <TextField label="Name" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </>
  );
}
```

### Chakra UI

```bash
bun add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

**ตัวอย่าง:**
```javascript
import { Button, Input } from '@chakra-ui/react';

function Form() {
  return (
    <>
      <Input placeholder="Name" />
      <Button colorScheme="blue">Submit</Button>
    </>
  );
}
```

### Ant Design

```bash
bun add antd
```

**ตัวอย่าง:**
```javascript
import { Button, Input } from 'antd';

function Form() {
  return (
    <>
      <Input placeholder="Name" />
      <Button type="primary">Submit</Button>
    </>
  );
}
```

## Form Handling

### React Hook Form

```bash
bun add react-hook-form
```

**ตัวอย่าง:**
```javascript
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Formik

```bash
bun add formik yup
```

**ตัวอย่าง:**
```javascript
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required()
});

function Form() {
  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field name="name" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
```

## Data Fetching

### TanStack Query (React Query)

```bash
bun add @tanstack/react-query
```

**ตัวอย่าง:**
```javascript
import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(r => r.json())
  });
}

function App() {
  const { data, isLoading } = useUsers();
  
  if (isLoading) return <div>Loading...</div>;
  return <div>{data.map(user => <div key={user.id}>{user.name}</div>)}</div>;
}
```

### SWR

```bash
bun add swr
```

**ตัวอย่าง:**
```javascript
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(r => r.json());

function Users() {
  const { data, error } = useSWR('/api/users', fetcher);
  
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  return <div>{data.map(user => <div key={user.id}>{user.name}</div>)}</div>;
}
```

## Testing

### Jest + React Testing Library

```bash
bun add -D @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

**ตัวอย่าง:**
```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### Vitest + React Testing Library

```bash
bun add -D @testing-library/react @testing-library/jest-dom @vitest/ui jsdom
```

**ตัวอย่าง:**
```javascript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Build Tools

### Vite

```bash
bun create vite my-app --template react
```

### Next.js

```bash
bun create next-app my-app
```

### Create React App

```bash
bun create react-app my-app
```

## สรุป

React มี ecosystem ที่กว้างขวาง สามารถ integrate กับ tools ต่างๆ ได้ง่าย เลือกใช้ตามความเหมาะสมกับ project
