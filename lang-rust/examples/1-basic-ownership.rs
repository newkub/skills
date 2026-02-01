// Basic Ownership Examples
// Demonstrates fundamental ownership concepts in Rust

fn main() {
    println!("=== Basic Ownership Examples ===\n");
    
    // Example 1: Move semantics
    println!("1. Move Semantics:");
    let s1 = String::from("hello");
    let s2 = s1; // s1 is moved to s2
    
    println!("s2: {}", s2);
    // println!("s1: {}", s1); // This would cause a compile error
    
    // Example 2: Copy trait
    println!("\n2. Copy Trait:");
    let x = 5;
    let y = x; // x is copied to y
    
    println!("x: {}, y: {}", x, y); // Both are valid
    
    // Example 3: Function ownership transfer
    println!("\n3. Function Ownership:");
    let s = String::from("world");
    let len = calculate_length(s); // s is moved to function
    
    println!("Length: {}", len);
    // println!("s: {}", s); // This would cause a compile error
    
    // Example 4: Returning ownership
    println!("\n4. Returning Ownership:");
    let s1 = gives_ownership();
    let s2 = String::from("hello");
    let s3 = takes_and_gives_back(s2);
    
    println!("s1: {}, s3: {}", s1, s3);
    
    // Example 5: Multiple assignment
    println!("\n5. Multiple Assignment:");
    let s1 = String::from("first");
    let s2 = s1;
    let s3 = s2;
    
    println!("s3: {}", s3);
}

fn calculate_length(s: String) -> usize {
    s.len()
} // s is dropped here

fn gives_ownership() -> String {
    let some_string = String::from("yours");
    some_string // some_string is returned and moves out to the calling function
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string // a_string is returned and moves out to the calling function
}
