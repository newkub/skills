# State Management

## Application State

```rust
use std::sync::Arc;
use tokio::sync::Mutex;

struct AppState {
    db: DatabasePool,
    cache: Arc<Mutex<LruCache>>,
    config: Config,
}

impl AppState {
    fn new(config: Config) -> Self {
        AppState {
            db: create_pool(&config),
            cache: Arc::new(Mutex::new(LruCache::new(1000))),
            config,
        }
    }
}
```

## Shared State

```rust
use std::sync::{Arc, RwLock};

struct SharedData {
    counter: RwLock<u32>,
}

let data = Arc::new(SharedData {
    counter: RwLock::new(0),
});

// Clone Arc to share
let data_clone = Arc::clone(&data);
```
