# Configuration

## Mix Project Configuration

### mix.exs

```elixir
defmodule MyApp.MixProject do
  use Mix.Project

  def project do
    [
      app: :my_app,
      version: "1.0.0",
      elixir: "~> 1.16",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  defp deps do
    [
      {:phoenix, "~> 1.7"},
      {:ecto_sql, "~> 3.10"},
      {:postgrex, ">= 0.0.0"},
      {:telemetry_metrics, "~> 1.0"},
      {:telemetry_poller, "~> 1.0"},
      {:jason, "~> 1.4"},
      {:plug_cowboy, "~> 2.6"}
    ]
  end

  defp aliases do
    [
      setup: ["deps.get", "ecto.setup"],
      "ecto.setup": ["ecto.create", "ecto.migrate"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"]
    ]
  end
end
```

### config/config.exs

```elixir
import Config

# General app configuration
config :my_app,
  ecto_repos: [MyApp.Repo],
  generators: [timestamp_type: :utc_datetime]

# Import environment-specific config
import_config "#{config_env()}.exs"
```

### config/dev.exs

```elixir
import Config

config :my_app, MyApp.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "my_app_dev",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

config :my_app, MyAppWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4000],
  check_origin: false,
  code_reloader: true,
  debug_errors: true,
  secret_key_base: "dev_secret_key_base_at_least_64_chars_long"
```

### config/runtime.exs

```elixir
import Config

if config_env() == :prod do
  database_url =
    System.get_env("DATABASE_URL") ||
      raise """
      Environment variable DATABASE_URL is missing.
      """

  maybe_ipv6 = if System.get_env("ECTO_IPV6") in ~w(true 1), do: [:inet6], else: []

  config :my_app, MyApp.Repo,
    url: database_url,
    pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10"),
    socket_options: maybe_ipv6

  secret_key_base =
    System.get_env("SECRET_KEY_BASE") ||
      raise """
      Environment variable SECRET_KEY_BASE is missing.
      """

  host = System.get_env("PHX_HOST") || "example.com"
  port = String.to_integer(System.get_env("PORT") || "4000")

  config :my_app, MyAppWeb.Endpoint,
    url: [host: host, port: 443, scheme: "https"],
    http: [ip: {0, 0, 0, 0, 0, 0, 0, 0}, port: port],
    secret_key_base: secret_key_base
end
```

## Application Configuration

### config/runtime.exs Pattern

```elixir
config :my_app, MyApp.Application,
  # Timeout for graceful shutdown (milliseconds)
  shutdown: 30_000

config :my_app, :external_api,
  base_url: System.get_env("API_BASE_URL", "https://api.example.com"),
  api_key: System.get_env("API_KEY")
```

### Application.get_env

```elixir
# In application code
base_url = Application.get_env(:my_app, :external_api)[:base_url]
api_key = Application.fetch_env!(:my_app, :external_api)[:api_key]
```

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `MIX_ENV` | Current environment (dev, test, prod) | `dev` |
| `MIX_TARGET` | Cross-compilation target | `host`, `rpi3` |
| `PORT` | HTTP server port | `4000` |
| `DATABASE_URL` | Production database connection | `postgresql://...` |
| `SECRET_KEY_BASE` | Phoenix secret key | `long_random_string` |

## .formatter.exs

```elixir
[
  import_deps: [:ecto, :ecto_sql, :phoenix],
  subdirectories: ["priv/*/migrations"],
  plugins: [Phoenix.LiveView.HTMLFormatter],
  inputs: ["*.{heex,ex,exs}", "{config,lib,test}/**/*.{heex,ex,exs}"]
]
```

## .credo.exs

```elixir
%{
  configs: [
    %{
      name: "default",
      files: %{
        excluded: ["test/**"]
      },
      requires: [],
      color: true,
      checks: [
        {Credo.Check.Design.AliasUsage, priority: :low},
        {Credo.Check.Readability.MaxLineLength, priority: :low, max_line_length: 120},
        {Credo.Check.Refactor.MapInto, false},
        {Credo.Check.Refactor.PipeChainStart, false},
        {Credo.Check.Refactor.UnlessWithElse, false}
      ]
    }
  ]
}
```

## Dialyzer Configuration

```elixir
# mix.exs
def project do
  [
    # ...
    dialyzer: dialyzer()
  ]
end

defp dialyzer do
  [
    plt_file: {:no_warn, "priv/plts/dialyzer.plt"},
    ignore_warnings: ".dialyzer_ignore.exs"
  ]
end
```