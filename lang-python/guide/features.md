# All Features - Python

## Language Features

### Type System

| Type | Description |
|------|-------------|
| int/float | Numeric types |
| str | String type |
| bool | Boolean (True/False) |
| list/tuple | Sequence types |
| dict | Mapping type |
| set | Unordered unique elements |
| None | Null value |

### Operators

```python
# Arithmetic
+, -, *, /, //, %, **

# Comparison
==, !=, <, >, <=, >=

# Logical
and, or, not

# Bitwise
&, |, ^, ~, <<, >>

# Assignment
=, +=, -=, *=, /=
```

## Standard Library

### Built-in Functions

```python
len(), print(), input()
range(), enumerate(), zip()
map(), filter(), sorted()
isinstance(), type(), id()
open(), dict(), list(), set()
```

### Common Modules

```python
import os, sys, json, re
import datetime, time, math
import pathlib, argparse
import collections, itertools
```

## Collections

### NamedTuple

```python
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
pt = Point(10, 20)
```

### Dataclass

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int
```

### ChainMap

```python
from collections import ChainMap
combined = ChainMap(dict1, dict2)
```

## Async Programming

```python
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return "data"

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())
```

## Decorators

```python
from functools import wraps

def log_calls(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log_calls
def hello():
    print("Hello!")
```

## Context Managers

```python
# Using 'with' statement
with open("file.txt", "r") as f:
    content = f.read()

# Class-based
class Timer:
    def __enter__(self):
        self.start = time.time()
    
    def __exit__(self, *args):
        self.elapsed = time.time() - self.start
```

## Generators

```python
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in count_up_to(5):
    print(num)
```
