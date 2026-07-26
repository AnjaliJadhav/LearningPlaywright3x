# Source Code vs Byte Code vs Binary Code

## Example File: `hello.js`

```javascript
console.log("Hello, World!");
```

---

## Comparison Table

| Aspect | **Source Code** | **Byte Code** | **Binary Code (Machine Code)** |
|---|---|---|---|
| **What it is** | Human-readable instructions written in a programming language | Intermediate, platform-independent representation | Raw instructions the CPU executes directly |
| **Readable by humans?** | ✅ Yes | ❌ No (but somewhat structured) | ❌ No (raw 0s and 1s / hex) |
| **Readable by CPU?** | ❌ No | ❌ No | ✅ Yes |
| **Example (our hello.js)** | `console.log("Hello, World!");` | `get_property console` `push_string "Hello, World!"` `call_method log` | `48 8B 05 A3 1B 00 00 ...` (hex) |
| **File extension** | `.js`, `.py`, `.c`, `.java` | `.class` (Java), `.pyc` (Python), V8 bytecode (no standard ext) | `.exe`, `.bin`, `.out` |
| **How it's produced** | Written by a developer in a text editor | Compiled from source code by a **compiler** | Assembled from byte code (JIT) or from assembly (AOT) |
| **Execution method** | Passed to an interpreter or compiler | Run by a **virtual machine** (VM) which interprets or JIT-compiles it | Executed **directly** by the hardware CPU |
| **Performance** | Slowest (interpreted line-by-line) | Faster than source (pre-parsed, optimized) | **Fastest** (native CPU instructions) |
| **Portability** | Portable (needs interpreter/compiler per platform) | **Portable** — same byte code runs on any VM (e.g., JVM, V8) | **Not portable** — tied to a specific CPU architecture (x86, ARM, etc.) |
| **Security** | Full source visible to anyone | Harder to reverse-engineer than source, but decompilable | Very hard to reverse-engineer to original logic |

---

## How `hello.js` Travels Through Each Stage

### 1. Source Code — The Developer Writes This

```javascript
console.log("Hello, World!");
```

- Written in plain text.
- Any human who knows JavaScript can read and understand it.
- The computer **cannot** execute this directly.

### 2. Byte Code — The Engine Compiles This (for JavaScript)

Node.js (V8 engine) compiles `hello.js` into **V8 byte code** (not visible unless dumped):

```
// Conceptual V8 bytecode for console.log("Hello, World!")
LdaGlobal "console"          // Load the global 'console' object
Star r0                      // Store in register r0
LdaNamedProperty r0, "log"  // Load the 'log' property from console
Star r1                      // Store method in r1
LdaConstant "Hello, World!"  // Load the string constant
Star r2                      // Store argument in r2
CallProperty r1, r0, 1      // Call r1 (log) with `this` = r0, 1 argument
Return                       // Return
```

- Platform-independent — same byte code runs on Windows, Linux, macOS.
- Still **not** CPU instructions — needs further translation.
- Much faster than interpreting source line-by-line.

### 3. Binary Code — The CPU Executes This

V8's **TurboFan JIT** compiles hot byte code into **x86 machine code**:

```
; Conceptual x86-64 machine code for console.log
48 8B 05 A3 1B 00 00    mov rax, [rip+0x1BA3]    ; load console object
48 8B 40 18              mov rax, [rax+0x18]       ; load log method
48 8D 15 64 00 00 00     lea rdx, [rip+0x64]       ; load "Hello, World!" string
48 89 C1                 mov rcx, rax               ; set up call
FF 15 28 04 00 00        call [rip+0x428]           ; invoke the log function
```

- Raw bytes the CPU decodes and executes directly.
- Fastest possible execution.
- **Not portable** — x86 machine code won't run on an ARM CPU (like Apple M-series or phones).

---

## Visual Pipeline

```
┌─────────────────────────────────────────────────┐
│  SOURCE CODE  (.js)                             │
│  console.log("Hello, World!");                  │
│       │                                         │
│       ▼  Parser + Compiler (V8)                 │
│  BYTE CODE  (V8 Bytecode)                       │
│  LdaGlobal "console"                            │
│  LdaNamedProperty r0, "log"                    │
│  LdaConstant "Hello, World!"                   │
│  CallProperty r1, r0, 1                       │
│       │                                         │
│       ▼  JIT Compiler (TurboFan)                │
│  BINARY CODE  (x86 / ARM Machine Code)          │
│  48 8B 05 A3 1B 00 00 ...                      │
│       │                                         │
│       ▼                                         │
│  CPU EXECUTES                                   │
│  Output: Hello, World!                          │
└─────────────────────────────────────────────────┘
```

## Key Takeaway

| Layer | Role |
|---|---|
| **Source Code** | What **you** write — human-friendly |
| **Byte Code** | What the **engine** compiles source into — portable, semi-optimized |
| **Binary Code** | What the **CPU** actually runs — platform-specific, fastest |
