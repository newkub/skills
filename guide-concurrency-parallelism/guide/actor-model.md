# Actor Model และ CSP

## Actor Model

### Core Concepts

### Actor

**Definition**: Actor is a primitive unit of computation that:
1. Encapsulates state
2. Processes messages sequentially
3. Communicates via message passing
4. Can create other actors

### Message

**Definition**: Message is immutable data sent between actors

### Mailbox

**Definition**: Queue where messages are delivered to actor

### Example (Go)

```go
type Actor struct {
    inbox chan Message
    state  int
}

type Message struct {
    Type     string
    Content  interface{}
    Response chan<- interface{}
}

func (a *Actor) Start() {
    for msg := range a.inbox {
        switch msg.Type {
        case "increment":
            a.state++
        case "get":
            msg.Response <- a.state
        case "set":
            a.state = msg.Content.(int)
        }
    }
}

func (a *Actor) Send(msg Message) {
    a.inbox <- msg
}
```

### Supervision Trees

### Supervisor

**Definition**: Actor that supervises child actors and handles failures

**Strategies**:
- **One-for-One**: Restart child on each failure
- **One-for-All**: Restart all children on any failure
- **Rest-for-One**: Restart only failed child after N failures

### Example

```go
type Supervisor struct {
    children []Actor
}

func (s *Supervisor) Start() {
    for _, child := range s.children {
        go func(a Actor) {
            defer func() {
                if r := recover(); r != nil {
                    log.Printf("Child crashed: %v, restarting", r)
                    go a.Start()  // Restart
                }
            }()
            a.Start()
        }(child)
    }
}
```

### Actor Patterns

### Worker Pool

```go
type WorkerPool struct {
    workers chan chan Actor
    jobs    chan Job
}

func (wp *WorkerPool) Submit(job Job) {
    wp.jobs <- job
}

func (wp *WorkerPool) Start() {
    for i := 0; i < cap(wp.workers); i++ {
        worker := <-wp.workers
        go func(a Actor) {
            for job := range wp.jobs {
                a.Send(job)
            }
        }(worker)
    }
}
```

### Pub/Sub

```go
type PubSub struct {
    subscribers map[string][]chan Message
    mutex      sync.RWMutex
}

func (ps *PubSub) Subscribe(topic string) chan Message {
    ps.mutex.Lock()
    defer ps.mutex.Unlock()
    
    ch := make(chan Message, 100)
    ps.subscribers[topic] = append(ps.subscribers[topic], ch)
    return ch
}

func (ps *PubSub) Publish(topic string, msg Message) {
    ps.mutex.RLock()
    defer ps.mutex.RUnlock()
    
    for _, ch := range ps.subscribers[topic] {
        ch <- msg
    }
}
```

### CSP (Communicating Sequential Processes)

### Process

**Definition**: Independent sequential process that communicates via channels

### Channel

**Definition**: Synchronous communication channel between processes

### Example (Go)

```go
func producer(out chan<- int) {
    for i := 0; i < 10; i++ {
        out <- i
    }
    close(out)
}

func consumer(in <-chan int) {
    for val := range in {
        fmt.Println(val)
    }
}

func main() {
    ch := make(chan int)
    
    go producer(ch)
    consumer(ch)
}
```

### CSP Patterns

### Pipeline

```go
func stage1(in <-chan int, out chan<- int) {
    for val := range in {
        out <- val * 2
    }
    close(out)
}

func stage2(in <-chan int, out chan<- int) {
    for val := range in {
        out <- val + 1
    }
    close(out)
}

func main() {
    in := make(chan int)
    mid := make(chan int)
    out := make(chan int)
    
    go stage1(in, mid)
    go stage2(mid, out)
    
    for i := 0; i < 10; i++ {
        in <- i
    }
    close(in)
    
    for val := range out {
        fmt.Println(val)
    }
}
```

### Fan-Out/Fan-In

```go
func worker(jobs <-chan int, results chan<- int) {
    for job := range jobs {
        results <- job * 2
    }
}

func fanOut(jobs <-chan int, workers int) []<-chan int {
    results := make([]<-chan int, workers)
    
    for i := 0; i < workers; i++ {
        ch := make(chan int)
        results = append(results, ch)
        go worker(jobs, ch)
    }
    
    return results
}

func fanIn(channels []<-chan int) <-chan int {
    out := make(chan int)
    var wg sync.WaitGroup
    
    for _, ch := range channels {
        wg.Add(1)
        go func(c <-chan int) {
            defer wg.Done()
            for val := range c {
                out <- val
            }
        }(ch)
    }
    
    go func() {
        wg.Wait()
        close(out)
    }()
    
    return out
}
```

### Multiplexer

```go
func multiplexer(inputs []<-chan int, output chan<- int) {
    var cases []reflect.SelectCase
    for _, input := range inputs {
        cases = append(cases, reflect.SelectCase{
            Dir:  reflect.SelectRecv,
            Chan: reflect.ValueOf(input),
        })
    }
    cases = append(cases, reflect.SelectCase{
        Dir:  reflect.SelectDefault,
    })
    
    for {
        chosen, val, ok := reflect.Select(cases)
        if !ok {
            break
        }
        if chosen == len(inputs) {
            // Default case
            continue
        }
        output <- val.Interface().(int)
    }
}
```

### Deadlock Detection

### CSP Benefits

CSP makes deadlocks easier to detect because:
1. Communication is synchronous
2. Deadlocks are circular dependencies
3. Can be detected statically

### Example

```go
// ❌ Deadlock
func process1(a chan<- int, b <-chan int) {
    a <- 1
    <-b
}

func process2(a <-chan int, b chan<- int) {
    <-a
    b <- 2
}

func main() {
    ch1 := make(chan int)
    ch2 := make(chan int)
    
    go process1(ch1, ch2)
    go process2(ch1, ch2)
    
    // Deadlock!
}
```

### Comparison

| Aspect | Actor Model | CSP |
|--------|-------------|-----|
| **State** | Encapsulated in actor | No shared state |
| **Communication** | Asynchronous message passing | Synchronous channels |
| **Composition** | Hierarchical supervision | Process composition |
| **Deadlocks** | Possible (need supervision) | Easier to detect |
| **Location** | Can be distributed | Typically local |

### Erlang/Elixir Example

```elixir
defmodule(counter) do
  use GenServer

  def init(_) do
    {:ok, 0}
  end

  def handle_call(:increment, _from, state) do
    {:reply, state + 1, state + 1}
  end

  def handle_call(:get, _from, state) do
    {:reply, state, state}
  end
end
```

### Akka Example (Scala)

```scala
import akka.actor.{Actor, ActorSystem, Props}

class Counter extends Actor {
  var count = 0
  
  def receive = {
    case "increment" =>
      count += 1
    case "get" =>
      sender() ! count
  }
}

val system = ActorSystem("counterSystem")
val counter = system.actorOf(Props[Counter](), "counter")
```

### Rust Actor (Actix)

```rust
use actix::prelude::*;

struct Counter {
    count: usize,
}

impl Actor for Counter {
    type Context = Context<Self>;

    fn started(&mut self, _ctx: &mut Self::Context) {
        println!("Actor started");
    }
}

fn main() {
    let system = System::new();
    let addr = system.block_on(|| {
        Counter { count: 0 }.start()
    });
}
```
