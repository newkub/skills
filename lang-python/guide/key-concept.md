# Core Concepts - Python

## Variables and Types

```python
# Basic types
name: str = "Alice"
age: int = 30
height: float = 5.8
is_active: bool = True

# None
result = None

# Type hints
def greet(name: str) -> str:
    return f"Hello, {name}"
```

## Data Structures

### List

```python
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
first = fruits[0]

# List comprehension
squares = [x**2 for x in range(10)]
```

### Dictionary

```python
user = {"name": "John", "age": 30}
user["email"] = "john@example.com"

# Dictionary comprehension
quares = {x: x**2 for x in range(5)}
```

### Set

```python
unique_numbers = {1, 2, 3, 3, 3}  # {1, 2, 3}
```

### Tuple

```python
coordinates = (10, 20, 30)
x, y, z = coordinates
```

## Control Flow

```python
# If-elif-else
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")

# Match statement (Python 3.10+)
match status:
    case "active":
        print("User is active")
    case "inactive":
        print("User is inactive")
    case _:
        print("Unknown status")
```

## Functions

```python
# Basic function
def add(a: int, b: int) -> int:
    return a + b

# Default arguments
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}"

# *args and **kwargs
def func(*args, **kwargs):
    print(args, kwargs)
```

## Classes

```python
class User:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
    
    def greet(self) -> str:
        return f"Hello, I'm {self.name}"
    
    @property
    def is_adult(self) -> bool:
        return self.age >= 18
```
