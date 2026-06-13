# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Compiler Development

### Lexical Analysis Issues

### Problem: Lexer Hangs or Crashes

**Symptoms**:
- Lexer ไม่ return
- Segmentation fault
- Infinite loop

**Causes**:
1. ไม่ handle EOF อย่างถูกต้อง
2. Buffer overflow
3. ไม่ skip whitespace อย่างถูกต้อง

**Solutions**:

```c
// ✅ Good: Handle EOF properly
Token* lex(const char* input) {
    while (input[pos] != '\0') {  // Check for EOF
        // ... process tokens
    }
    
    // Always return EOF token
    tokens[token_pos].type = TOKEN_EOF;
    return tokens;
}

// ❌ Bad: No EOF handling
Token* lex(const char* input) {
    while (true) {  // Infinite loop!
        // ... process tokens
    }
}
```

### Problem: Incorrect Tokenization

**Symptoms**:
- Tokens ไม่ถูกต้อง
- Keywords ถูก treat เป็น identifiers

**Causes**:
1. Token precedence ผิด
2. ไม่ handle multi-character operators
3. ไม่ distinguish keywords จาก identifiers

**Solutions**:

```c
// ✅ Good: Check keywords before identifiers
if (is_keyword(input)) {
    tokens[token_pos].type = TOKEN_KEYWORD;
} else if (is_identifier(input)) {
    tokens[token_pos].type = TOKEN_IDENTIFIER;
}

// ❌ Bad: Check identifiers first
if (is_identifier(input)) {
    tokens[token_pos].type = TOKEN_IDENTIFIER;  // "if" becomes identifier
}
```

### Parsing Issues

### Problem: Parse Errors

**Symptoms**:
- Syntax errors ที่ไม่คาดคิด
- Parser ไม่ recognize valid syntax

**Causes**:
1. Grammar rules ผิด
2. Left recursion ไม่ถูก handle
3. Precedence ผิด

**Solutions**:

```c
// ✅ Good: Eliminate left recursion
// Before: expr → expr + term
// After:  expr → term expr'
//         expr' → + term expr' | ε

// ❌ Bad: Left recursion causes infinite loop
ASTNode* parse_expression() {
    ASTNode* left = parse_expression();  // Infinite recursion!
    // ...
}
```

### Problem: Ambiguous Grammar

**Symptoms**:
- Parser สร้าง AST ที่ผิด
- Multiple parse trees สำหรับ input เดียวกัน

**Causes**:
1. Grammar ไม่ unambiguous
2. Operator precedence ไม่ชัดเจน

**Solutions**:

```c
// ✅ Good: Define precedence explicitly
typedef struct {
    TokenType type;
    int precedence;
} OperatorInfo;

OperatorInfo operators[] = {
    {TOKEN_MULTIPLY, 2},
    {TOKEN_PLUS, 1}
};

// ❌ Bad: No precedence definition
// Parser doesn't know which operator binds tighter
```

### Semantic Analysis Issues

### Problem: Type Errors

**Symptoms**:
- Type mismatches ไม่ถูก detect
- False positive type errors

**Causes**:
1. Type inference ผิด
2. ไม่ handle implicit conversions
3. Type environment ไม่ถูกต้อง

**Solutions**:

```c
// ✅ Good: Comprehensive type checking
Type* check_binary_op(ASTNode* node) {
    Type* left = check_type(node->left);
    Type* right = check_type(node->right);
    
    if (!types_compatible(left, right)) {
        report_error(node->location, 
            "Type mismatch: %s vs %s", 
            type_name(left), type_name(right));
    }
    
    return promote_type(left, right);
}

// ❌ Bad: No type checking
Type* check_binary_op(ASTNode* node) {
    return get_int_type();  // Always returns int!
}
```

### Problem: Undefined Variables

**Symptoms**:
- Variables ที่ไม่ถูก declare ถูกใช้
- Scope violations

**Causes**:
1. Symbol table ไม่ถูกต้อง
2. Scope management ผิด
3. ไม่ check variable declarations

**Solutions**:

```c
// ✅ Good: Check variable existence
Symbol* lookup_var(SymbolTable* table, const char* name) {
    Symbol* sym = find_symbol(table, name);
    if (!sym) {
        report_error("Undefined variable: %s", name);
    }
    return sym;
}

// ❌ Bad: No checking
Symbol* lookup_var(SymbolTable* table, const char* name) {
    return find_symbol(table, name);  // Returns NULL silently
}
```

### Code Generation Issues

### Problem: Incorrect Code Generation

**Symptoms**:
- Generated code ไม่ทำงานถูกต้อง
- Runtime errors

**Causes**:
1. IR to code mapping ผิด
2. Register allocation ผิด
3. Calling convention ไม่ถูกต้อง

**Solutions**:

```c
// ✅ Good: Verify generated code
void verify_codegen(IRNode* ir, const char* assembly) {
    // Parse generated assembly
    // Verify it matches IR semantics
    // Run tests on generated code
}

// ❌ Bad: No verification
void generate_code(IRNode* ir) {
    // Generate code without verification
}
```

### Problem: Register Spilling

**Symptoms**:
- Too many memory accesses
- Performance degradation

**Causes**:
1. Register allocation algorithm ไม่ดี
2. Live ranges ยาวเกินไป
3. ไม่มี enough registers

**Solutions**:

```c
// ✅ Good: Efficient register allocation
void allocate_registers(IRNode* ir) {
    // Use graph coloring
    // Minimize spills
    // Reuse registers aggressively
}

// ❌ Bad: Naive allocation
void allocate_registers(IRNode* ir) {
    // Allocate new register for every variable
    // Causes excessive spilling
}
```

### Optimization Issues

### Problem: Optimization Bugs

**Symptoms**:
- Optimized code ผิด
- Incorrect results after optimization

**Causes**:
1. Optimization pass ไม่ preserve semantics
2. Incorrect assumptions
3. Side effects ไม่ถูก handle

**Solutions**:

```c
// ✅ Good: Verify optimization correctness
bool verify_optimization(IRNode* before, IRNode* after) {
    // Execute both versions
    // Compare results
    // Ensure semantics preserved
}

// ❌ Bad: No verification
void apply_optimization(IRNode* ir) {
    // Apply optimization without verification
}
```

### Problem: Performance Degradation

**Symptoms**:
- Optimized code ช้ากว่า unoptimized
- Compilation time นานเกินไป

**Causes**:
1. Optimization passes ไม่ effective
2. Over-optimization
3. Poor algorithm choices

**Solutions**:

```c
// ✅ Good: Profile before optimizing
void optimize_with_profiling(IRNode* ir) {
    // Profile hot paths
    // Apply targeted optimizations
    // Measure impact
}

// ❌ Bad: Blind optimization
void optimize_all(IRNode* ir) {
    // Apply all optimizations indiscriminately
}
```

### Build System Issues

### Problem: Build Failures

**Symptoms**:
- Compilation errors
- Linker errors
- Missing dependencies

**Causes**:
1. Incorrect build configuration
2. Missing dependencies
3. Version conflicts

**Solutions**:

```bash
# Clean build
make clean
make

# Check dependencies
ldd ./mycompiler

# Verbose build
make VERBOSE=1
```

### Debugging Tips

### 1. Enable Debug Output

```c
#define DEBUG_LEXER
#ifdef DEBUG_LEXER
    printf("Token: %d\n", token.type);
#endif
```

### 2. Use Debuggers

```bash
# GDB
gdb ./mycompiler
(gdb) break lexer.c:42
(gdb) run
(gdb) print token.type

# LLDB
lldb ./mycompiler
(lldb) breakpoint set --file lexer.c --line 42
(lldb) run
(lldb) frame variable token
```

### 3. Unit Testing

```c
void test_lexer() {
    Token* tokens = lex("1 + 2");
    assert(tokens[0].type == TOKEN_NUMBER);
    assert(tokens[1].type == TOKEN_PLUS);
    assert(tokens[2].type == TOKEN_NUMBER);
}
```

### 4. Integration Testing

```bash
# Test full compilation pipeline
./mycompiler test.c -o test
./test
```

### Common Pitfalls

### 1. Memory Leaks

```c
// ✅ Good: Free all allocations
Token* tokens = lex(input);
// ... use tokens
free_tokens(tokens);

// ❌ Bad: Memory leak
Token* tokens = lex(input);
// ... use tokens
// Never freed!
```

### 2. Buffer Overflows

```c
// ✅ Good: Check bounds
if (pos < buffer_size) {
    buffer[pos++] = c;
}

// ❌ Bad: No bounds checking
buffer[pos++] = c;  // Could overflow
```

### 3. Undefined Behavior

```c
// ✅ Good: Initialize variables
int value = 0;

// ❌ Bad: Uninitialized
int value;  // Undefined value
```
