# Async Architecture

```rust
// Async main
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize tracing
    tracing_subscriber::fmt::init();

    // Create server
    let app = my_app().await?;
    
    // Run server
    let addr = SocketAddr::from(([0, 0, 0, 0], 8080));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await?;

    Ok(())
}

async fn my_app() -> Result<Router, Box<dyn std::error::Error>> {
    let state = AppState::new().await?;
    Ok(router().with_state(state))
}
```
