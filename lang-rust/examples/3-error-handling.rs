// Error Handling Examples
// Demonstrates Result and Option types in Rust

use std::fs::File;
use std::io::{self, Read};

fn main() {
    println!("=== Error Handling Examples ===\n");
    
    // Example 1: Basic Result handling
    println!("1. Basic Result Handling:");
    match divide(10.0, 2.0) {
        Ok(result) => println!("10 / 2 = {}", result),
        Err(error) => println!("Error: {}", error),
    }
    
    match divide(10.0, 0.0) {
        Ok(result) => println!("10 / 0 = {}", result),
        Err(error) => println!("Error: {}", error),
    }
    
    // Example 2: Option handling
    println!("\n2. Option Handling:");
    let numbers = vec![1, 2, 3, 4, 5];
    
    match find_number(&numbers, 3) {
        Some(num) => println!("Found number: {}", num),
        None => println!("Number not found"),
    }
    
    match find_number(&numbers, 6) {
        Some(num) => println!("Found number: {}", num),
        None => println!("Number not found"),
    }
    
    // Example 3: Using ? operator
    println!("\n3. Using ? Operator:");
    match read_file_content("example.txt") {
        Ok(content) => println!("File content: {}", content),
        Err(error) => println!("Error reading file: {}", error),
    }
    
    // Example 4: Custom error types
    println!("\n4. Custom Error Types:");
    match process_user_input("123") {
        Ok(num) => println!("Processed number: {}", num),
        Err(error) => println!("Error: {}", error),
    }
    
    match process_user_input("") {
        Ok(num) => println!("Processed number: {}", num),
        Err(error) => println!("Error: {}", error),
    }
    
    // Example 5: Error propagation
    println!("\n5. Error Propagation:");
    match complex_operation("valid") {
        Ok(result) => println!("Complex operation result: {}", result),
        Err(error) => println!("Complex operation error: {}", error),
    }
    
    // Example 6: Option chaining
    println!("\n6. Option Chaining:");
    let user = Some(User {
        name: "Alice".to_string(),
        address: Some(Address {
            street: "123 Main St".to_string(),
            city: "New York".to_string(),
        }),
    });
    
    let city = user
        .and_then(|u| u.address)
        .map(|a| a.city);
    
    println!("City: {:?}", city);
}

fn divide(a: f64, b: f64) -> Result<f64, DivisionError> {
    if b == 0.0 {
        Err(DivisionError::DivisionByZero)
    } else {
        Ok(a / b)
    }
}

fn find_number(numbers: &[i32], target: i32) -> Option<i32> {
    numbers.iter().find(|&&n| n == target).copied()
}

fn read_file_content(filename: &str) -> Result<String, io::Error> {
    let mut file = File::open(filename)?;
    let mut content = String::new();
    file.read_to_string(&mut content)?;
    Ok(content)
}

fn process_user_input(input: &str) -> Result<i32, ProcessingError> {
    if input.is_empty() {
        return Err(ProcessingError::EmptyInput);
    }
    
    match input.parse::<i32>() {
        Ok(num) => {
            if num < 0 {
                Err(ProcessingError::NegativeNumber)
            } else {
                Ok(num)
            }
        }
        Err(_) => Err(ProcessingError::InvalidFormat),
    }
}

fn complex_operation(input: &str) -> Result<String, Box<dyn std::error::Error>> {
    let number = input.parse::<i32>()?;
    let doubled = number * 2;
    let result = format!("Doubled: {}", doubled);
    Ok(result)
}

#[derive(Debug)]
enum DivisionError {
    DivisionByZero,
}

impl std::fmt::Display for DivisionError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            DivisionError::DivisionByZero => write!(f, "Cannot divide by zero"),
        }
    }
}

impl std::error::Error for DivisionError {}

#[derive(Debug)]
enum ProcessingError {
    EmptyInput,
    InvalidFormat,
    NegativeNumber,
}

impl std::fmt::Display for ProcessingError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            ProcessingError::EmptyInput => write!(f, "Input cannot be empty"),
            ProcessingError::InvalidFormat => write!(f, "Invalid number format"),
            ProcessingError::NegativeNumber => write!(f, "Number cannot be negative"),
        }
    }
}

impl std::error::Error for ProcessingError {}

struct User {
    name: String,
    address: Option<Address>,
}

struct Address {
    street: String,
    city: String,
}
