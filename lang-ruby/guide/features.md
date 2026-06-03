# All Features - Ruby

## Data Types

| Type | Example |
|------|---------|
| Strings | `"hello"` |
| Numbers | `42`, `3.14` |
| Symbols | `:active` |
| Arrays | `[1, 2, 3]` |
| Hashes | `{a: 1, b: 2}` |
| Booleans | `true`, `false` |
| nil | `nil` |
| Regex | `/pattern/` |

## Operators

```ruby
# Arithmetic
+, -, *, /, %, **

# Comparison
==, !=, <, >, <=, >=, <=>, ===

# Logical
and, or, not, &&, ||, !

# Parallel assignment
a, b = 1, 2
```

## Enumerable Methods

```ruby
# Transformation
.map { |x| x * 2 }
.flat_map { |x| [x, x] }
.collect { }          # alias for map

# Filtering
.select { |x| x > 0 }
.reject { |x| x < 0 }
.compact              # remove nils

# Aggregation
.reduce(:+)          # sum
.inject(:+)          # alias
.sum
.join(", ")

# Search
.find { |x| x > 5 }
.detect { }           # alias
.any? { |x| x > 0 }
.all? { |x| x > 0 }
.none? { }
.include?(value)

# Ordering
.sort_by { |x| x.name }
.reverse!
```

## String Methods

```ruby
# Manipulation
"hello".upcase      # "HELLO"
"Hello".downcase    # "hello"
"hello".capitalize  # "Hello"
"hello".reverse     # "olleh"

# Check
"hello".empty?      # false
"hello".include?("el")  # true

# Format
"%s has %d items" % ["cart", 5]
"item: %05d" % 42   # "item: 00042"
```

## Metaprogramming

```ruby
# define_method
class User
  [:name, :age].each do |method|
    define_method(method) { instance_variable_get("@#{method}") }
  end
end

# method_missing
class HashLike
  def method_missing(name, *args)
    name = name.to_s.gsub(/=/, '')
    @data[name] = args.first
  end
end
```

## Modules and Mixins

```ruby
module Loggable
  def log(message)
    puts "[LOG] #{message}"
  end
end

class User
  include Loggable
  
  def perform_action
    log("Action performed")
  end
end
```
