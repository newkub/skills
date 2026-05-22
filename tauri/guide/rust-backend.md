# Tauri Rust Backend

## การสร้าง Commands

สร้าง Rust commands ใน `src-tauri/src/main.rs`:

```rust
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
```

## การลงทะเบียน Commands

ลงทะเบียน commands ใน main function:

```rust
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## Commands พร้อม Parameters

```rust
#[tauri::command]
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

## Commands พร้อม Async

```rust
#[tauri::command]
async fn fetch_data(url: String) -> Result<String, String> {
    let response = reqwest::get(&url).await.map_err(|e| e.to_string())?;
    let text = response.text().await.map_err(|e| e.to_string())?;
    Ok(text)
}
```
