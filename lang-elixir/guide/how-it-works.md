# How It Works

## BEAM Virtual Machine

```
┌─────────────────────────────────────────────────────────┐
│                      BEAM (Erlang VM)                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │  Process 1   │  │  Process 2   │  │  Process N   │    │
│  │  (Isolated)  │  │  (Isolated)  │  │  (Isolated)  │    │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘    │
│         │                │                │            │
│  ┌──────┴────────────────┴────────────────┴──────┐    │
│  │              Mailbox (Message Queue)            │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
│  ┌────────────────────────────────────────────────┐    │
│  │          Scheduler (Preemptive)                │    │
│  │    Reduces GCs → No memory leaks → Scales      │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

## Process Model

```elixir
# Creating a new process
spawn(fn -> 
  do_something()
end)

# Send and receive messages
send(pid, {:hello, "world"})

receive do
  {:hello, msg} -> IO.puts("Got: #{msg}")
  {:goodbye, msg} -> IO.puts("Bye: #{msg}")
after
  5_000 -> IO.puts("Timeout")
end
```

## Pattern Matching

```
┌─────────────────────────────────────────────────────────┐
│                  Pattern Matching Flow                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   {ok, result} = {:ok, 42}        # Match succeeds     │
│   {error, reason} = {:ok, 42}     # Match fails         │
│                                                         │
│   case fetch_data() do                                  │
│     {:ok, data} -> process(data)    # Match pattern 1   │
│     {:error, reason} -> handle(reason)  # Match pattern 2│
│     _ -> :ignore                         # Catch all    │
│   end                                                 │
└─────────────────────────────────────────────────────────┘
```

## Recursion vs Iteration

```elixir
# Recursive approach (preferred in functional)
defmodule ListOps do
  def sum([]), do: 0
  def sum([head | tail]), do: head + sum(tail)
  
  def map([], _func), do: []
  def map([head | tail], func), do: [func.(head) | map(tail, func)]
end

# Tail-recursive (optimized to avoid stack overflow)
defmodule ListOps do
  def sum(list), do: do_sum(list, 0)
  defp do_sum([], acc), do: acc
  defp do_sum([head | tail], acc), do: do_sum(tail, acc + head)
end
```

## OTP Supervision Tree

```
                    Supervisor
                    ┌─────────┐
                    │         │
              ┌─────┼─────┐   │
              │     │     │   │
         ┌────┴┐ ┌──┴──┐ ┌──┴──┐
         │Worker│ │Supervisor│ │Worker│
         └─────┘ └─────┘ └─────┘
              │         │       │
         ┌────┴┐    ┌───┴───┐ ┌─┴───┐
         │     │    │       │ │     │
        App   App  Worker Worker Worker
```

## Elixir Compilation Pipeline

```
Source (.ex) → AST → Expansion → Compiled (.beam)
     │          │          │           │
     ▼          ▼          ▼           ▼
  quote/1   Macro.expand  Optimizations  BEAM bytecode
```

## Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                    Data Flow                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   Input ──► Enum.map/2 ──► Enum.filter/2 ──► Output    │
│              │                  │                       │
│          Transformation      Filtering                  │
│                                                         │
│   Stream ──► Lazy evaluation ──► Back-pressure          │
│              (on-demand)        (memory efficient)      │
└─────────────────────────────────────────────────────────┘
```