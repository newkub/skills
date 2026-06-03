# Features

## Functional Programming

### Immutability

```elixir
# Original list remains unchanged
list = [1, 2, 3]
new_list = Enum.map(list, &(&1 * 2))
# list = [1, 2, 3]
# new_list = [2, 4, 6]
```

### First-Class Functions

```elixir
add = fn a, b -> a + b end
Enum.reduce([1, 2, 3], 0, add)

# Capture syntax
Enum.map([1, 2, 3], &(&1 * 2))
```

## Pattern Matching

### Function Clause Matching

```elixir
defmodule Math do
  def fact(0), do: 1
  def fact(n) when n > 0, do: n * fact(n - 1)
  
  def classify(number) when is_number(number) and number > 0, do: :positive
  def classify(0), do: :zero
  def classify(number) when is_number(number), do: :negative
end
```

### Guard Clauses

```elixir
defmodule User do
  def greet(%{name: name, age: age}) when age >= 18 do
    "Hello, #{name}!"
  end
  
  def greet(%{name: name, age: _}) do
    "Hi, #{name}! You're too young."
  end
end
```

## Concurrency with Processes

```elixir
# Task-based concurrency
task = Task.async(fn ->
  do_background_work()
end)
result = Task.await(task)

# GenServer for stateful processes
defmodule Counter do
  use GenServer
  
  def init(_), do: {:ok, 0}
  
  def handle_call(:next, _from, state) do
    {:reply, state, state + 1}
  end
end
```

## Comprehensions

```elixir
# List comprehension
for x <- 1..10, x > 5, do: x * 2
#=> [12, 14, 16, 18, 20]

# Multiple generators
for x <- 1..3, y <- [:a, :b], do: {x, y}
#=> [{1, :a}, {1, :b}, {2, :a}, {2, :b}, {3, :a}, {3, :b}]
```

## Structs

```elixir
defmodule User do
  defstruct [:name, :email, age: 0, role: :user]
end

%User{name: "Alice", email: "alice@example.com"}
```

## Protocols

```elixir
defprotocol Size do
  @doc "Calculate the size in bytes"
  def size(data)
end

defimpl Size, for: BitString do
  def size(data), do: byte_size(data)
end

defimpl Size, for: Map do
  def size(data), do: map_size(data)
end
```

## Metaprogramming

```elixir
# Custom DSL with macros
defmodule MyDSL do
  defmacro if(condition, do: do_clause, else: else_clause) do
    quote do
      case unquote(condition) do
        true -> unquote(do_clause)
        false -> unquote(else_clause)
      end
    end
  end
end
```

## Sigils

```elixir
~r/regex/              # Regular expression
~w(word1 word2 word3)a  # Word list (atom)
~w(word1 word2)c       # Character list
~D[2024-01-15]         # Date
~T[12:00:00]           # Time
~U[2024-01-15T12:00:00Z]  # NaiveDateTime
```