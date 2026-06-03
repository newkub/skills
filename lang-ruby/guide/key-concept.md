# Core Concepts - Ruby

## Variables and Types

```ruby
# Basic types
name = "Alice"
age = 30
height = 5.8
is_active = true
nothing = nil

# Type conversion
age.to_s           # "30"
"42".to_i          # 42
"3.14".to_f        # 3.14
```

## Data Structures

### Arrays

```ruby
fruits = ["apple", "banana", "orange"]
fruits << "grape"           # Append
first = fruits[0]           # Access
fruits.each { |f| puts f }   # Iterate
```

### Hashes

```ruby
user = { name: "John", age: 30 }
user[:email] = "john@example.com"
user.each { |k, v| puts "#{k}: #{v}" }
```

### Symbols

```ruby
status = :active
status = :pending
```

## Control Flow

```ruby
# If-elsif-else
if age >= 18
  puts "Adult"
elsif age >= 13
  puts "Teen"
else
  puts "Child"
end

# Unless
puts "Not ready" unless ready?

# Case
case status
when :active
  puts "Active"
when :pending
  puts "Pending"
else
  puts "Unknown"
end
```

## Methods

```ruby
# Basic method
def greet(name)
  "Hello, #{name}!"
end

# Default arguments
def greet(name, greeting = "Hello")
  "#{greeting}, #{name}!"
end

# Splat arguments
def sum(*numbers)
  numbers.sum
end

# Block parameter
def process(items)
  items.each { |item| yield(item) }
end
```

## Classes

```ruby
class User
  attr_reader :name, :age
  attr_accessor :email
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def greet
    "Hello, I'm #{@name}"
  end
  
  def adult?
    @age >= 18
  end
end

user = User.new("Alice", 30)
puts user.greet
```

## Blocks and Procs

```ruby
# Block
[1, 2, 3].map { |n| n * 2 }     # [2, 4, 6]
[1, 2, 3].map(&:to_s)             # ["1", "2", "3"]

# Proc
double = Proc.new { |n| n * 2 }
[1, 2, 3].map(&double)

# Lambda
triple = ->(n) { n * 3 }
```
