# All Features

## Core Features

| Feature | Description |
|---------|-------------|
| Layer | Effect computation |
| Effect | Async effect |
| Ref | Mutable state |
| Context | Dependency injection |
| Scope | Resource management |

## Layer

```typescript
import { Layer } from 'effect';

const databaseLayer = Layer.effect(DB, Effect.sync(() => new DB()));
```

## Effect

```typescript
import { Effect } from 'effect';

const program = Effect.succeed(42);
const mapped = Effect.map(program, (n) => n * 2);
```

## Ref

```typescript
import { Ref } from 'effect';

const ref = Ref.make(0);
const updated = Effect.flatMap(ref, (r) => r.set(r + 1));
```

## Context

```typescript
import { Context } from 'effect';

interface Logger {
  readonly log: (message: string) => Effect.Effect<void>;
}

const Logger = Context.GenericTag<Logger>('@services/Logger');

const loggerImpl = Layer.effect(Logger, Effect.succeed({
  log: (message) => Effect.sync(() => console.log(message)),
}));
```

## Stream

```typescript
import { Stream } from 'effect';

const stream = Stream.make(1, 2, 3);
const mapped = Stream.map(stream, (n) => n * 2);
```

## Channel

```typescript
import { Channel } from 'effect';

const channel = Channel.succeed(42);
```

## Fiber

```typescript
import { Fiber } from 'effect';

const fiber = Effect.runFork(program);
Effect.runPromise(Fiber.join(fiber));
```

## Error Handling

```typescript
import { Cause } from 'effect';

Effect.catchAll(program, (error) => Effect.succeed(defaultValue));
Effect.mapError(program, (error) => new CustomError(error));
```