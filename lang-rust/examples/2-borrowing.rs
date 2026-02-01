// Borrowing Examples
// Demonstrates borrowing concepts in Rust

fn main() {
    println!("=== Borrowing Examples ===\n");
    
    // Example 1: Immutable borrowing
    println!("1. Immutable Borrowing:");
    let s1 = String::from("hello");
    
    let len = calculate_length(&s1); // Borrow s1
    
    println!("Length of '{}' is {}.", s1, len); // s1 is still valid
    
    // Example 2: Mutable borrowing
    println!("\n2. Mutable Borrowing:");
    let mut s = String::from("hello");
    
    change(&mut s);
    println!("Changed string: {}", s);
    
    // Example 3: Multiple immutable borrows
    println!("\n3. Multiple Immutable Borrows:");
    let s = String::from("hello");
    
    let r1 = &s;
    let r2 = &s;
    
    println!("r1: {}, r2: {}", r1, r2);
    
    // Example 4: Dangling references (prevented by compiler)
    println!("\n4. Reference Scope:");
    let s = String::from("hello");
    
    {
        let r1 = &s;
        println!("r1: {}", r1);
    } // r1 goes out of scope here
    
    let r2 = &s;
    println!("r2: {}", r2);
    
    // Example 5: Borrowing in functions
    println!("\n5. Function Borrowing:");
    let string1 = String::from("abcd");
    let string2 = "xyz";
    
    let result = longest(string1.as_str(), string2);
    println!("The longest string is {}", result);
    
    // Example 6: Struct field borrowing
    println!("\n6. Struct Field Borrowing:");
    let mut user = User {
        username: String::from("alice"),
        email: String::from("alice@example.com"),
        age: 30,
    };
    
    let username_ref = get_username(&user);
    println!("Username: {}", username_ref);
    
    update_age(&mut user, 31);
    println!("Updated age: {}", user.age);
}

fn calculate_length(s: &String) -> usize {
    s.len()
} // s goes out of scope but no ownership is dropped

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}

fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

struct User {
    username: String,
    email: String,
    age: u32,
}

fn get_username(user: &User) -> &str {
    &user.username
}

fn update_age(user: &mut User, new_age: u32) {
    user.age = new_age;
}
