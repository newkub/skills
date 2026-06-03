# Quick Start - Python

## Hello World

```python
# The classic first program
print("Hello, World!")

# With input
name = input("Enter your name: ")
print(f"Hello, {name}!")
```

## Variables and Types

```python
message = "Welcome to Python"
count = 42
price = 19.99
is_active = True

# Check types
print(type(message))  # <class 'str'>
```

## Simple Functions

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

def add(a: int, b: int) -> int:
    return a + b

print(greet("World"))
print(add(5, 3))
```

## Working with Lists

```python
# Create and use lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")

for fruit in fruits:
    print(fruit)

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]
```

## Working with Dictionaries

```python
# Create dictionary
user = {
    "name": "Alice",
    "age": 30,
    "city": "Bangkok"
}

# Access and modify
print(user["name"])
user["email"] = "alice@example.com"

# Iterate
for key, value in user.items():
    print(f"{key}: {value}")
```

## Classes

```python
class Animal:
    def __init__(self, name: str, sound: str):
        self.name = name
        self.sound = sound
    
    def speak(self) -> str:
        return f"{self.name} says {self.sound}"

dog = Animal("Dog", "Woof!")
cat = Animal("Cat", "Meow!")

print(dog.speak())
print(cat.speak())
```

## File Operations

```python
# Write to file
with open("hello.txt", "w") as f:
    f.write("Hello from Python!\n")

# Read from file
with open("hello.txt", "r") as f:
    content = f.read()
    print(content)
```

## Run Your Code

```bash
# Save as hello.py and run
python hello.py

# Or in interactive mode
python
>>> print("Hello!")
```

## Example: Todo List

```python
todos = []

def add_todo(task: str):
    todos.append(task)
    print(f"Added: {task}")

def show_todos():
    print("Your todos:")
    for i, todo in enumerate(todos, 1):
        print(f"  {i}. {todo}")

add_todo("Learn Python")
add_todo("Build a project")
show_todos()
```
