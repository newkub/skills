# Best Practices - Python

## PEP 8 Style Guide

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Variables | snake_case | `user_name` |
| Functions | snake_case | `get_user()` |
| Classes | PascalCase | `UserAccount` |
| Constants | UPPER_SNAKE | `MAX_SIZE` |
| Modules | short_lowercase | `utils.py` |

### Code Layout

```python
# Imports: standard → third-party → local
import os
import sys
from collections import defaultdict

import requests
from mylib import utils

# No blank lines within functions
# 2 blank lines between top-level definitions
```

## Virtual Environments

```bash
# Create and activate
python -m venv venv
source venv/bin/activate  # Linux/macOS
.\venv\Scripts\activate   # Windows

# Install packages
pip install package_name
pip freeze > requirements.txt
pip install -r requirements.txt
```

## Type Hints

```python
# Function with type hints
def process_data(data: list[dict]) -> dict:
    return {"count": len(data)}

# Complex types
from typing import Optional, Union, List, Dict
def find_user(users: List[User], id: str) -> Optional[User]:
    return next((u for u in users if u.id == id), None)
```

## Error Handling

```python
# Specific exceptions
try:
    result = risky_operation()
except ValueError as e:
    print(f"Invalid value: {e}")
except (ConnectionError, TimeoutError) as e:
    print(f"Network error: {e}")
except Exception as e:
    raise  # Re-raise unknown exceptions
finally:
    cleanup()
```

## Documentation

```python
def calculate_area(radius: float) -> float:
    """Calculate the area of a circle.
    
    Args:
        radius: The circle's radius in meters.
    
    Returns:
        The area in square meters.
    
    Raises:
        ValueError: If radius is negative.
    """
    if radius < 0:
        raise ValueError("Radius cannot be negative")
    return math.pi * radius ** 2
```

## Testing

```python
import unittest

class TestMathUtils(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative(self):
        self.assertEqual(add(-1, -1), -2)

if __name__ == "__main__":
    unittest.main()
```

## Performance Tips

```python
# Use list comprehension over loops
squares = [x**2 for x in range(1000)]

# Use generators for large data
def get_squares():
    for x in range(1000000):
        yield x**2

# Use local variables
def optimize():
    local_len = len  # Cache lookup
    for item in items:
        local_len(item)
```
