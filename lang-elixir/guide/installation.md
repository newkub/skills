# Installation

## Prerequisites

- **Operating System**: macOS, Linux, Windows (WSL recommended)
- **Erlang/OTP**: Required runtime (version 24+ recommended)

## macOS

### Using Homebrew

```bash
# Install Elixir with Erlang
brew install elixir

# Verify installation
elixir --version
```

### Using ASDF (Version Manager)

```bash
# Install asdf
brew install asdf

# Add Erlang plugin
asdf plugin add erlang

# Add Elixir plugin
asdf plugin add elixir

# Install versions
asdf install erlang 26.2
asdf install elixir 1.16.2-otp-26

# Set global versions
asdf global erlang 26.2
asdf global elixir 1.16.2-otp-26
```

## Linux

### Ubuntu/Debian

```bash
# Add Erlang Solutions repository
wget https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc
sudo apt-key add erlang_solutions.asc
echo "deb https://packages.erlang-solutions.com/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/erlang.list

# Install Erlang and Elixir
sudo apt update
sudo apt install esl-erlang elixir
```

### Arch Linux

```bash
sudo pacman -S elixir erlang
```

## Windows

### Using Scoop

```powershell
scoop install elixir
```

### Using Chocolatey

```powershell
choco install elixir
```

### WSL (Recommended)

Install Elixir in WSL2 following Linux instructions above.

## Verify Installation

```bash
# Check Elixir version
elixir --version
#=> Erlang/OTP 26 [erts-14.2] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:1] [jit:ns]
#=> Elixir 1.16.2

# Check Mix (build tool)
mix --version
#=> Mix 1.16.2

# Start IEx (interactive shell)
iex
#=> Interactive Elixir - press Ctrl+C to exit

# Run Elixir script
elixir hello.exs
```

## IDE/Editor Setup

### VS Code

| Extension | Purpose |
|-----------|---------|
| ElixirLS | Language Server (autocomplete, go-to-definition) |
| Credo | Static analysis |
| Dialyzer | Type checking |

### IntelliJ IDEA

| Plugin | Purpose |
|--------|---------|
| Elixir | Full language support |

## Additional Tools

| Tool | Purpose | Install |
|------|---------|---------|
| **Hex** | Package manager | Built-in with Mix |
| **Mix** | Build tool | Built-in with Elixir |
| **ExDoc** | Documentation | `mix local.hex --force` |
| **Credo** | Code analysis | Add to mix.exs |
| **Dialyzer** | Type analysis | `mix dialyzer` |

## Creating First Project

```bash
# Create new project
mix new my_app

# Navigate to project
cd my_app

# Run tests
mix test

# Start IEx with project loaded
iex -S mix

# Compile and run
mix run -e "MyApp.hello()"
```

## Docker

```dockerfile
FROM elixir:1.16-alpine

WORKDIR /app
COPY mix.exs mix.lock ./
RUN mix deps.get

COPY . .
RUN mix compile

CMD ["mix", "phx.server"]
```