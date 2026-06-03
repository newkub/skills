# Best Practices

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Modules | PascalCase | `MyApp.User` |
| Functions | snake_case | `create_user` |
| Variables | snake_case | `user_data` |
| Atoms | snake_case | `:user_not_found` |
| Private functions | snake_case with `_` prefix | `_helper_func` |
| Constants | SCREAMING_SNAKE | `MAX_RETRIES` |

## Module Organization

```elixir
defmodule MyApp.User do
  @moduledoc """
  User management module.
  Handles user creation, updates, and retrieval.
  """

  # Module attributes
  @default_role :member
  @max_name_length 100

  # Directives
  alias MyApp.Repo
  alias MyApp.Accounts.User

  # Public API
  def create(attrs) do
    # ...
  end

  def get!(id), do: Repo.get!(User, id)

  # Private functions (after public API)
  defp validate_name(name) do
    # ...
  end
end
```

## Pattern Matching

### Use pattern matching in function heads

```elixir
# Good
def process({:ok, data}), do: handle_success(data)
def process({:error, reason}), do: handle_error(reason)

# Avoid
def process(result) do
  case result do
    {:ok, data} -> handle_success(data)
    {:error, reason} -> handle_error(reason)
  end
end
```

### Pattern match in with statements

```elixir
# Good
with {:ok, user} <- Accounts.get_user(id),
     :ok <- Authorization.can_view?(current_user, user),
     {:ok, profile} <- build_profile(user) do
  {:ok, profile}
end
```

## Immutability

### Avoid mutation

```elixir
# Good - return new map
def add_admin_role(user) do
  %{user | roles: [:admin | user.roles]}
end

# Avoid - mutating state
def add_admin_role(user) do
  user.roles = [:admin | user.roles]
  user
end
```

### Build data through transformation

```elixir
# Good - transform data
raw_data
|> validate_input()
|> normalize_fields()
|> sanitize_text()
|> persist_to_db()
```

## Error Handling

### Use tuples for explicit errors

```elixir
# Good
{:ok, result} | {:error, reason}

# Avoid raising for expected errors
def get_user(id) do
  case Repo.get(User, id) do
    nil -> {:error, :not_found}
    user -> {:ok, user}
  end
end
```

### Use with for dependent operations

```elixir
with {:ok, user} <- create_user(params),
     {:ok, _token} <- generate_token(user),
     {:ok, _} <- send_welcome_email(user) do
  {:ok, user}
else
  {:error, :email_failed} -> # Handle email failure
  error -> error
end
```

## Structs and Maps

### Use structs for domain models

```elixir
defmodule User do
  defstruct [:id, :email, :name, role: :member, inserted_at: nil]
  
  @type t :: %__MODULE__{
    id: non_neg_integer() | nil,
    email: String.t(),
    name: String.t(),
    role: atom(),
    inserted_at: DateTime.t() | nil
  }
end
```

### Validate in constructor functions

```elixir
defmodule User do
  defstruct [:email, :name]
  
  @spec new(String.t(), String.t()) :: {:ok, t()} | {:error, atom()}
  def new(email, name) when is_binary(email) and is_binary(name) do
    with :ok <- validate_email(email),
         :ok <- validate_name(name) do
      {:ok, %__MODULE__{email: email, name: name}}
    end
  end
end
```

## Testing

### Structure tests clearly

```elixir
defmodule MyApp.UserTest do
  use MyApp.DataCase, async: true

  describe "create/1" do
    test "with valid data creates a user" do
      attrs = %{email: "test@example.com", name: "Test User"}
      assert {:ok, user} = User.create(attrs)
      assert user.email == attrs.email
    end

    test "with invalid email returns error" do
      attrs = %{email: "invalid", name: "Test"}
      assert {:error, %{errors: [email: _]}} = User.create(attrs)
    end
  end
end
```

### Use ExUnit tags

```elixir
@tag :slow
@tag :integration
test "connects to external API" do
  # Integration test
end
```

## Documentation

```elixir
defmodule MyModule do
  @moduledoc """
  `MyModule` provides functionality for...
  
  ## Examples
  
      MyModule.example()
      #=> :ok
  
  ## Configuration
  
  Configure via application environment:
  
      config :my_app, MyModule, timeout: 5000
  """

  @doc """
  Performs operation with given params.
  
  ## Arguments
  
    * `id` - unique identifier
    * `opts` - keyword list of options
    
  ## Options
  
    * `:timeout` - operation timeout in milliseconds (default: 5000)
    * `:retry` - number of retry attempts (default: 3)
  
  ## Examples
  
      iex> MyModule.perform(1, timeout: 1000)
      {:ok, result}
  """
  @spec perform(integer(), keyword()) :: {:ok, term()} | {:error, atom()}
  def perform(id, opts \\ []) do
    # ...
  end
end
```

## Process Supervision

```elixir
# Start with proper error handling
def start_link(init_args) do
  GenServer.start_link(__MODULE__, init_args, name: __MODULE__)
end

# Handle init failures gracefully
def init(_args) do
  case Database.connect() do
    {:ok, conn} ->
      {:ok, %{connection: conn}}
    {:error, reason} ->
      {:stop, {:shutdown, reason}}
  end
end
```