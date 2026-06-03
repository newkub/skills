# Quick Start - Ruby

## Hello World

```ruby
# The classic
puts "Hello, World!"

# With input
print "Enter your name: "
name = gets.chomp
puts "Hello, #{name}!"
```

## Variables

```ruby
message = "Welcome to Ruby"
count = 42
price = 19.99
is_active = true
```

## Methods

```ruby
def greet(name)
  "Hello, #{name}!"
end

def add(a, b)
  a + b
end

puts greet("World")
puts add(5, 3)
```

## Arrays

```ruby
# Create array
fruits = ["apple", "banana", "orange"]

# Iterate
fruits.each { |fruit| puts fruit }

# Transform
uppercased = fruits.map(&:upcase)

# Select
long_names = fruits.select { |f| f.length > 5 }
```

## Hashes

```ruby
# Create hash
user = { name: "Alice", age: 30 }

# Access
puts user[:name]

# Iterate
user.each { |key, value| puts "#{key}: #{value}" }
```

## Classes

```ruby
class Animal
  attr_reader :name, :sound
  
  def initialize(name, sound)
    @name = name
    @sound = sound
  end
  
  def speak
    "#{@name} says #{@sound}!"
  end
end

dog = Animal.new("Dog", "Woof!")
puts dog.speak
```

## Running Ruby

```bash
# Run script
ruby script.rb

# Interactive
irb

# One-liner
ruby -e 'puts "Hello"'
```

## Example: Todo List

```ruby
class TodoList
  def initialize
    @todos = []
  end
  
  def add(task)
    @todos << task
    puts "Added: #{task}"
  end
  
  def list
    puts "Your todos:"
    @todos.each_with_index do |todo, i|
      puts "  #{i + 1}. #{todo}"
    end
  end
end

todos = TodoList.new
todos.add("Learn Ruby")
todos.add("Build a project")
todos.list
```
