# Computer Computation - Key Concepts

แนวคิดหลักและคำศัพท์สำคัญสำหรับ Computer Computation

## 1. Turing Machines

### What is a Turing Machine?

```text
┌─────────────────────────────────────────────────┐
│            Turing Machine Model                  │
├─────────────────────────────────────────────────┤
│                                                  │
│   ┌─────────────────────────────────────────┐  │
│   │              Tape (Infinite)             │  │
│   │  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┐  │  │
│   │  │ _ │ B │ 1 │ 0 │ 1 │ 1 │ _ │ _ │ _ │  │  │
│   │  └───┴───┴───┴───┴───┴───┴───┴───┴───┘  │  │
│   │       ▲                                  │  │
│   │       │                                  │  │
│   │  ┌────┴───┐                              │  │
│   │  │  Head  │                              │  │
│   │  └────────┘                              │  │
│   └─────────────────────────────────────────┘  │
│                                                  │
│   Components:                                   │
│   - Infinite tape with cells                   │
│   - Read/write head that moves                 │
│   - State register                             │
│   - Transition function (δ)                   │
│   - Finite set of states                      │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Formal Definition

```text
Turing Machine M = (Q, Σ, Γ, δ, q₀, B, F)

Where:
- Q = Finite set of states
- Σ = Input alphabet
- Γ = Tape alphabet (includes Σ)
- δ : Q × Γ → Q × Γ × {L, R}  (Transition function)
- q₀ = Initial state
- B = Blank symbol (∈ Γ but not ∈ Σ)
- F = Final/accepting states (⊆ Q)
```

### Example: Palindrome Checker

```text
Transition δ(q₀, 1) → (q₁, X, R)   // Mark 1 with X, move right
Transition δ(q₀, 0) → (q₃, X, R)   // Mark 0 with X, move right
Transition δ(q₁, 1) → (q₁, 1, R)    // Skip 1s
Transition δ(q₁, 0) → (q₁, 0, R)    // Skip 0s
Transition δ(q₁, X) → (q₁, X, R)    // Skip Xs
Transition δ(q₁, Y) → (q₁, Y, R)    // Skip Ys
Transition δ(q₁, 1) → (q₂, Y, L)    // Found 1, mark Y, go left
Transition δ(q₂, 1) → (q₂, 1, L)    // Skip 1s
Transition δ(q₂, 0) → (q₂, 0, L)    // Skip 0s
// ... more transitions ...
Accept state when head finds leftmost unmarked symbol
```

## 2. Automata Theory

### Finite Automata Types

```text
┌─────────────────────────────────────────────────┐
│            Automata Hierarchy                   │
├─────────────────────────────────────────────────┤
│                                                  │
│   Regular Languages                             │
│   ├── DFA (Deterministic Finite Automaton)      │
│   ├── NFA (Nondeterministic Finite Automaton) │
│   └── Regular Expressions                       │
│   │                                             │
│   ▼                                             │
│   Context-Free Languages                        │
│   ├── PDA (Pushdown Automaton)                  │
│   └── CFG (Context-Free Grammar)               │
│   │                                             │
│   ▼                                             │
│   Context-Sensitive Languages                   │
│   └── LBA (Linear Bounded Automaton)           │
│   │                                             │
│   ▼                                             │
│   Recursively Enumerable Languages               │
│   └── Turing Machine                            │
│                                                  │
└─────────────────────────────────────────────────┘
```

### DFA Example: Binary Divisible by 3

```text
States: q₀ (divisible), q₁ (remainder 1), q₂ (remainder 2)
Alphabet: {0, 1}
Final state: q₀

Transition Table:
         0      1
→ q₀    q₀     q₁
   q₁    q₂     q₀
* q₂    q₁     q₂

Diagram:
     ┌──────────────┐
     │              ▼
   (q₀) ──0──▶ (q₀)
     ▲           │
     │           │ 1
     │           ▼
     │         (q₁)
     │           │
     │     0     │ 1
     │     ▼     │
     │   (q₂) ◀──┘
     │     │ 0
     └─────┘
```

### NFA vs DFA

```text
DFA (Deterministic):
- Exactly one transition per state/input
- Easier to implement
- Can be converted to DFA

NFA (Nondeterministic):
- Multiple possible transitions
- Easier to design
- Can have ε-transitions
- Can be converted to DFA via powerset construction
```

## 3. Complexity Classes

### The P vs NP Problem

```text
┌─────────────────────────────────────────────────┐
│            Complexity Classes                    │
├─────────────────────────────────────────────────┤
│                                                  │
│   P (Polynomial Time)                           │
│   ├── Problems solvable in O(nᵏ) time          │
│   ├── Examples:                                 │
│   │   - Sorting (O(n log n))                    │
│   │   - Shortest path (O(V log E))              │
│   │   - Graph connectivity                      │
│   │                                           │
│   ▼                                            │
│   NP (Nondeterministic Polynomial Time)         │
│   ├── Solutions verifiable in O(nᵏ) time       │
│   ├── Examples:                                 │
│   │   - SAT (Boolean Satisfiability)           │
│   │   - Hamiltonian Path                        │
│   │   - Subset Sum                              │
│   │                                           │
│   ▼                                            │
│   NP-Complete                                   │
│   ├── Hardest problems in NP                    │
│   ├── All reduce to each other                  │
│   └── SAT, 3-SAT, TSP, Knapsack                 │
│   │                                           │
│   ▼                                            │
│   NP-Hard                                       │
│   ├── At least as hard as NP-complete          │
│   └── Can include undecidable problems         │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Common Complexity Classes

| Class | Description | Example |
|-------|-------------|---------|
| P | Polynomial time | Sorting |
| NP | Verifiable in poly time | SAT |
| NP-Complete | Hardest in NP | 3-SAT, TSP |
| PSPACE | Polynomial space | QBF |
| EXPTIME | Exponential time | Chess |
| UNDECIDABLE | No algorithm | Halting problem |

## 4. Formal Languages

### Chomsky Hierarchy

```text
┌─────────────────────────────────────────────────┐
│           Chomsky Hierarchy                      │
├─────────────────────────────────────────────────┤
│                                                  │
│   Type 3: Regular Languages                     │
│   ├── Regex: (a|b)*abb                          │
│   ├── DFA/NFA recognizible                      │
│   └── Applications: Lexing, regex               │
│                                                  │
│   Type 2: Context-Free Languages (CFL)         │
│   ├── Grammar: S → aSb | ε                      │
│   ├── PDA recognizible                          │
│   └── Applications: Parsing, programming lang  │
│                                                  │
│   Type 1: Context-Sensitive Languages (CSL)    │
│   ├── Grammar: αAβ → αγβ                        │
│   ├── LBA recognizible                           │
│   └── Applications: Natural language            │
│                                                  │
│   Type 0: Recursively Enumerable (RE)           │
│   ├── Grammar: No restrictions                  │
│   ├── Turing Machine recognizible              │
│   └── Applications: Any computable language     │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Regular Expression Examples

```text
Email pattern:
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

Binary numbers divisible by 3:
^(0|(1(01*0)*1))*$

Phone number:
^\+?[1-9]\d{1,14}$
```

## 5. Computability

### Decidability

```text
┌─────────────────────────────────────────────────┐
│            Decidability                         │
├─────────────────────────────────────────────────┤
│                                                  │
│   Decidable Problems (Recursive)                 │
│   ├── Halting problem for Turing machines       │
│   │   └── Actually: UNDECIDABLE for general case │
│   ├── Emptiness of CFL                          │
│   ├── Equivalence of regular expressions        │
│   └── Membership in regular languages           │
│                                                  │
│   Undecidable Problems                          │
│   ├── Halting Problem                           │
│   ├── PCP (Post Correspondence Problem)          │
│   ├── Ambiguity of CFGs                        │
│   └── Equivalence of CFGs                      │
│                                                  │
│   Semidecidable (RE-complete)                   │
│   ├── Membership in any RE language              │
│   ├── Finiteness of CFL                        │
│   └── Whether TM accepts any input              │
│                                                  │
└─────────────────────────────────────────────────┘
```

### The Halting Problem

```text
Proof by Diagonalization:

Assume Halt(P) exists that decides if program P halts.

Construct:
  function Diagonal(P):
    if Halt(P) == halts:
      loop forever
    else:
      halt

Call Diagonal(Diagonal):
  - If halts → Halt(Diagonal) says loops → CONTRADICTION
  - If loops → Halt(Diagonal) says halts → CONTRADICTION

Therefore, Halt cannot exist.
```

## 6. Church-Turing Thesis

### Thesis Statement

```text
┌─────────────────────────────────────────────────┐
│            Church-Turing Thesis                  │
├─────────────────────────────────────────────────┤
│                                                  │
│   "Any computable function can be computed       │
│    by a Turing machine."                        │
│                                                  │
│   Equivalences:                                  │
│   - λ-calculus (Church)                        │
│   - μ-recursive functions                       │
│   - Standard register machines                  │
│   - Any reasonable programming language          │
│                                                  │
│   Implication:                                  │
│   - All models of computation are equivalent    │
│   - "Computable" = "Turing-computable"          │
│   - Limits of Turing machine = limits of        │
│     any computer                                │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Lambda Calculus Basics

```text
Variables: x, y, z
Abstraction: λx.M (function with parameter x)
Application: (M N) (apply M to N)

Examples:
- Identity: λx.x
- Constant: λx.λy.x
- Application: (λx.x) y → y
- Church numerals:
  - 0: λf.λx.x
  - 1: λf.λx.f x
  - 2: λf.λx.f (f x)
```

## สรุป

- Turing Machine เป็น universal model ของ computation
- Automata มีหลายประเภทตาม Chomsky hierarchy
- Complexity classes จำแนกปัญหาตามความยาก
- Formal languages มี grammar ตาม type
- Halting problem เป็นตัวอย่างของ undecidable
- Church-Turing thesis บอกว่า TM เทียบเท่ากับทุก model