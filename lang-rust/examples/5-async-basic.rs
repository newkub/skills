// Basic Async Examples
// Demonstrates fundamental async/await concepts in Rust

use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    println!("=== Basic Async Examples ===\n");
    
    // Example 1: Basic async function
    println!("1. Basic Async Function:");
    let result = hello_world().await;
    println!("{}", result);
    
    // Example 2: Sequential async operations
    println!("\n2. Sequential Async Operations:");
    sequential_operations().await;
    
    // Example 3: Concurrent async operations
    println!("\n3. Concurrent Async Operations:");
    concurrent_operations().await;
    
    // Example 4: Error handling in async
    println!("\n4. Error Handling in Async:");
    error_handling_example().await;
    
    // Example 5: Async iteration
    println!("\n5. Async Iteration:");
    async_iteration_example().await;
}

async fn hello_world() -> String {
    println!("Starting hello_world");
    sleep(Duration::from_millis(100)).await;
    println!("Finished hello_world");
    "Hello, async world!".to_string()
}

async fn operation_one() -> String {
    println!("Starting operation_one");
    sleep(Duration::from_millis(200)).await;
    println!("Finished operation_one");
    "Result from operation_one".to_string()
}

async fn operation_two() -> String {
    println!("Starting operation_two");
    sleep(Duration::from_millis(150)).await;
    println!("Finished operation_two");
    "Result from operation_two".to_string()
}

async fn sequential_operations() {
    println!("Starting sequential operations");
    
    let result1 = operation_one().await;
    let result2 = operation_two().await;
    
    println!("Results: {} and {}", result1, result2);
}

async fn concurrent_operations() {
    println!("Starting concurrent operations");
    
    let op1 = operation_one();
    let op2 = operation_two();
    
    let (result1, result2) = tokio::join!(op1, op2);
    
    println!("Concurrent results: {} and {}", result1, result2);
}

async fn fetch_data(url: &str) -> Result<String, &'static str> {
    println!("Fetching from {}", url);
    sleep(Duration::from_millis(100)).await;
    
    if url.contains("invalid") {
        Err("Invalid URL")
    } else {
        Ok(format!("Data from {}", url))
    }
}

async fn error_handling_example() {
    // Using match for error handling
    match fetch_data("https://example.com").await {
        Ok(data) => println!("Success: {}", data),
        Err(error) => println!("Error: {}", error),
    }
    
    // Using ? operator
    async fn process_data() -> Result<String, &'static str> {
        let data = fetch_data("https://example.com").await?;
        Ok(format!("Processed: {}", data))
    }
    
    match process_data().await {
        Ok(result) => println!("Processed: {}", result),
        Err(error) => println!("Processing error: {}", error),
    }
}

async fn async_iteration_example() {
    use futures::stream::{self, StreamExt};
    
    let numbers = stream::iter(1..=5);
    
    let processed = numbers
        .map(|n| async move {
            println!("Processing {}", n);
            sleep(Duration::from_millis(50)).await;
            n * 2
        })
        .buffer_unordered(3)
        .collect::<Vec<_>>()
        .await;
    
    println!("Processed numbers: {:?}", processed);
}
