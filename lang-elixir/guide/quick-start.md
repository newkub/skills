# Quick Start

## Interactive Elixir (IEx)

```bash
# Start interactive shell
iex

# Compile and run module
c("my_module.ex")

# Run script
elixir script.exs

# Run in REPL with project loaded
iex -S mix
```

## Your First Module

```elixir
# hello.exs
defmodule Greeter do
  @moduledoc """
  Simple greeting module.
  """

  @doc """
  Greets a person by name.
  """
  def hello(name) do
    "Hello, #{name}!"
  end

  @doc """
  Greets with a custom message.
  """
  def greet(name, message) do
    "#{message}, #{name}!"
  end
end

# Run in IEx
# iex> c("hello.exs")
# iex> Greeter.hello("World")
# "Hello, World!"
```

## Pattern Matching

```elixir
defmodule Math do
  def add({a, b}), do: a + b
  
  def describe(%{name: name, age: age}) do
    "#{name} is #{age} years old"
  end
  
  def classify(n) when n > 0, do: :positive
  def classify(0), do: :zero
  def classify(n) when n < 0, do: :negative
end
```

## Working with Collections

```elixir
# Enum - eager evaluation
numbers = [1, 2, 3, 4, 5]

Enum.map(numbers, &(&1 * 2))           # [2, 4, 6, 8, 10]
Enum.filter(numbers, &(&1 > 2))         # [3, 4, 5]
Enum.reduce(numbers, 0, &+/2)           # 15
Enum.find(numbers, fn x -> x > 3 end)   # 4

# Stream - lazy evaluation
Stream.map(numbers, &(&1 * 2))
|> Stream.filter(&(&1 > 5))
|> Enum.take(2)                         # [6, 8]
```

## Working with Processes

```elixir
# Simple spawn
pid = spawn(fn -> 
  receive do
    :hello -> IO.puts("Received hello!")
  end
end)

send(pid, :hello)

# Task (recommended)
task = Task.async(fn ->
  :timer.sleep(1000)
  "Done!"
end)

Task.await(task)  # Blocks until complete
```

## Creating a Mix Project

```bash
# Create new project
mix new my_app

# Structure
# my_app/
# ├── lib/
# │   └── my_app.ex
# ├── test/
# │   └── my_app_test.exs
# ├── mix.exs
# └── README.md

# Run tests
mix test

# Start application
iex -S mix
```

## Phoenix Web Application

```bash
# Install Phoenix
mix archive.install hex phx_new

# Create new Phoenix project
mix phx.new my_phoenix_app

# Start server
cd my_phoenix_app
mix phx.server

# Visit http://localhost:4000
```

## Working with Data

```elixir
# Maps
user = %{name: "Alice", age: 30, email: "alice@example.com"}
Map.get(user, :name)                    # "Alice"
 %{user | age: 31}                      # Update field
 %{user | password: "secret"}           # Add field

# Structs
defmodule User do
  defstruct [:name, :email, age: 0]
end

%User{name: "Bob", email: "bob@example.com"}

# Keyword lists
options = [timeout: 5000, debug: true]
Keyword.get(options, :timeout)            # 5000
```

## Common Patterns

```elixir
# With statement for pipeline of maybes
with {:ok, user} <- fetch_user(id),
     {:ok, order} <- create_order(user),
     {:ok, _} <- send_confirmation(order) do
  {:ok, order}
else
  {:error, reason} -> {:error, reason}
end

# Case for multiple conditions
case validate_input(data) do
  {:ok, validated} -> process(validated)
  {:error, :invalid_format} -> {:error, "Invalid format"}
  {:error, :missing_field} -> {:error, "Missing required field"}
  error -> {:error, error}
end
```

## Next Steps

| Topic | File | Description |
|-------|------|-------------|
| Key Concepts | `guide/key-concept.md` | Elixir fundamentals |
| How It Works | `guide/how-it-works.md` | BEAM and OTP |
| Best Practices | `guide/best-practices.md` | Coding standards |
| Installation | `guide/installation.md` | Setup guide |