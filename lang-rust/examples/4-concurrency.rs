// Concurrency Examples
// Demonstrates safe concurrent programming in Rust

use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;

fn main() {
    println!("=== Concurrency Examples ===\n");
    
    // Example 1: Basic thread spawning
    println!("1. Basic Thread Spawning:");
    basic_thread_example();
    
    // Example 2: Shared ownership with Arc
    println!("\n2. Shared Ownership with Arc:");
    arc_example();
    
    // Example 3: Mutex for shared mutable state
    println!("\n3. Mutex for Shared Mutable State:");
    mutex_example();
    
    // Example 4: Arc<Mutex<T>> combination
    println!("\n4. Arc<Mutex<T>> Combination:");
    arc_mutex_example();
    
    // Example 5: Message passing with channels
    println!("\n5. Message Passing with Channels:");
    channel_example();
    
    // Example 6: Atomic operations
    println!("\n6. Atomic Operations:");
    atomic_example();
}

fn basic_thread_example() {
    let handle = thread::spawn(|| {
        for i in 1..=5 {
            println!("Thread: {}", i);
            thread::sleep(Duration::from_millis(100));
        }
    });
    
    for i in 1..=3 {
        println!("Main: {}", i);
        thread::sleep(Duration::from_millis(100));
    }
    
    handle.join().unwrap();
}

fn arc_example() {
    let data = Arc::new(vec![1, 2, 3, 4, 5]);
    let mut handles = vec![];
    
    for i in 0..3 {
        let data_clone = Arc::clone(&data);
        let handle = thread::spawn(move || {
            let sum: i32 = data_clone.iter().sum();
            println!("Thread {} sum: {}", i, sum);
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
}

fn mutex_example() {
    let counter = Mutex::new(0);
    let mut handles = vec![];
    
    for _ in 0..10 {
        let handle = thread::spawn(|| {
            // This won't compile - need Arc for sharing
            // let mut num = counter.lock().unwrap();
            // *num += 1;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Counter value: {}", *counter.lock().unwrap());
}

fn arc_mutex_example() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    
    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            for _ in 0..1000 {
                let mut num = counter_clone.lock().unwrap();
                *num += 1;
            }
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Final counter value: {}", *counter.lock().unwrap());
}

fn channel_example() {
    use std::sync::mpsc;
    
    let (sender, receiver) = mpsc::channel();
    
    // Producer thread
    thread::spawn(move || {
        for i in 1..=5 {
            let message = format!("Message {}", i);
            sender.send(message).unwrap();
            thread::sleep(Duration::from_millis(100));
        }
    });
    
    // Consumer
    for received in receiver {
        println!("Received: {}", received);
    }
}

fn atomic_example() {
    use std::sync::atomic::{AtomicU64, Ordering};
    
    let counter = Arc::new(AtomicU64::new(0));
    let mut handles = vec![];
    
    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            for _ in 0..1000 {
                counter_clone.fetch_add(1, Ordering::SeqCst);
            }
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Atomic counter value: {}", counter.load(Ordering::SeqCst));
}
