# JavaScript Literals

## What is a Literal?

A **literal** is a fixed value written directly into the source code. Unlike variables (which hold values you can change), a literal **is** the value itself — it's hard-coded right in your code.

```javascript
let age = 25;      // 25 is a numeric literal
let name = "Bob";  // "Bob" is a string literal
```

---

## Types of Literals in JavaScript

### 1. Numeric Literals

| Type | Example | Description |
|---|---|---|
| Integer | `42`, `-10`, `0` | Whole numbers |
| Floating-point | `3.14`, `-0.5`, `100.0` | Decimal numbers |
| Scientific (exponential) | `1.5e3` (1500), `2e-3` (0.002) | `e` = "times 10 to the power of" |
| Binary (ES6+) | `0b1010` (10) | Starts with `0b` or `0B` |
| Octal (ES6+) | `0o12` (10) | Starts with `0o` or `0O` |
| Hexadecimal | `0xFF` (255), `0xA` (10) | Starts with `0x` or `0X` |
| BigInt (ES2020+) | `9007199254740991n`, `0xFn` | Ends with `n`, arbitrary precision |
| Underscore separator (ES2021+) | `1_000_000`, `0b1010_1010` | `_` for readability (ignored at runtime) |

```javascript
let int = 42;
let float = 3.14;
let sci = 1.5e3;       // 1500
let binary = 0b1010;    // 10 in decimal
let octal = 0o12;       // 10 in decimal
let hex = 0xFF;         // 255 in decimal
let big = 123456789n;   // BigInt
let readable = 1_000_000; // 1000000
```

### 2. String Literals

| Type | Example | Description |
|---|---|---|
| Single quotes | `'Hello'` | Basic string |
| Double quotes | `"Hello"` | Basic string (no difference from single in JS) |
| Template literals (ES6+) | `` `Hello ${name}` `` | Backticks — support interpolation and multiline |

```javascript
let single = 'Hello';
let double = "World";
let template = `Hello, ${name}!`;  // interpolation with ${}
let multi = `Line 1
Line 2`;  // multiline — no \n needed
```

### 3. Boolean Literals

```javascript
let isActive = true;
let isDone = false;
```

Only two possible values: `true` or `false`.

### 4. Null Literal

```javascript
let nothing = null;
```

Represents the **intentional absence** of any object value.

### 5. Undefined Literal

```javascript
let notDefined = undefined;
```

Represents a variable that has been **declared but not assigned** a value. Also the default return of functions with no `return`.

### 6. BigInt Literal (ES2020+)

```javascript
let big = 9007199254740991n;   // n suffix
let hexBig = 0xFFFFFFFFFFFFFFFn;
```

For integers beyond `Number.MAX_SAFE_INTEGER` (2^53 - 1).

### 7. Object Literal

```javascript
let person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log("Hi!");
  }
};
```

Curly braces `{}` with key-value pairs. Shorthand methods (ES6+) allowed.

### 8. Array Literal

```javascript
let fruits = ["apple", "banana", "cherry"];
let mixed = [1, "hello", true, null];
```

Square brackets `[]` — zero or more comma-separated values.

### 9. Regular Expression Literal

```javascript
let regex = /hello/i;  // matches "hello" case-insensitive
```

Forward slashes `/pattern/flags` — no need for `new RegExp()`.

### 10. Template Literal (ES6+)

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;  // "Hello, Alice!"
let multi = `
  Line 1
  Line 2
`;
```

Backticks `` ` `` with `${expression}` interpolation and native multiline.

---

## Comparison Table

| Literal Type | Syntax | Example | typeof |
|---|---|---|---|
| Integer | Digits | `42` | `"number"` |
| Float | Digits with `.` | `3.14` | `"number"` |
| Binary | `0b` prefix | `0b1010` | `"number"` |
| Octal | `0o` prefix | `0o12` | `"number"` |
| Hex | `0x` prefix | `0xFF` | `"number"` |
| BigInt | Digits + `n` | `42n` | `"bigint"` |
| String (single) | `'...'` | `'hello'` | `"string"` |
| String (double) | `"..."` | `"hello"` | `"string"` |
| Template | `` `...` `` | `` `hello` `` | `"string"` |
| Boolean | `true` / `false` | `true` | `"boolean"` |
| Null | `null` | `null` | `"object"` (quirk) |
| Undefined | `undefined` | `undefined` | `"undefined"` |
| Object | `{ ... }` | `{a: 1}` | `"object"` |
| Array | `[ ... ]` | `[1, 2]` | `"object"` |
| RegExp | `/.../` | `/hi/` | `"object"` |

---

## Rules & Quirks

### Rule 1: No variable reference in a literal

```javascript
let x = 10;
let y = 10;        // ✅ 10 is the literal
let z = x;         // ❌ x is a reference, not a literal
```

### Rule 2: Numbers can't have leading zeros (except `0` alone)

```javascript
let a = 075;     // ❌ Legacy octal — 75 in decimal (strict mode throws)
let b = 0o75;    // ✅ ES6 octal — 61 in decimal
let c = 0.5;     // ✅
let d = 007;     // ❌ confusing — legacy octal for 7
```

### Rule 3: Template literals preserve whitespace

```javascript
let str = `
  Hello
    World
`;  // Includes leading newline and indentation
```

### Rule 4: Object literal shorthand (ES6+)

```javascript
let name = "Alice";
let age = 30;

// Old way
let o1 = { name: name, age: age };

// Shorthand (when key = variable name)
let o2 = { name, age };

// Shorthand methods
let o3 = {
  greet() { console.log("Hi"); }  // instead of greet: function() {}
};
```

### Rule 5: Computed property keys (ES6+)

```javascript
let key = "dynamicField";
let obj = {
  [key]: "value",
  [`${key}2`]: "value2"
};
// { dynamicField: "value", dynamicField2: "value2" }
```

### Rule 6: `null` vs `undefined` in literals

```javascript
let a = null;      // You explicitly set "no value"
let b;             // undefined — declared but not assigned (not a literal)
let c = undefined; // Explicitly set to undefined (rarely done)
```

---

## Visual Overview

```
┌─────────────────────────────────────────────────────┐
│                  JS LITERALS                         │
├────────────┬───────────┬──────────┬─────────────────┤
│   VALUES   │   STRING   │  OBJECT  │     SPECIAL     │
├────────────┼───────────┼──────────┼─────────────────┤
│ 42         │ 'hello'   │ {a: 1}   │ true / false    │
│ 3.14       │ "world"   │ [1, 2]   │ null            │
│ 0xFF       │ `hi ${x}` │ /abc/i   │ undefined       │
│ 0b1010     │           │          │ 42n (BigInt)    │
│ 1_000_000  │           │          │                 │
└────────────┴───────────┴──────────┴─────────────────┘
```

## Key Takeaways

- A **literal** is a hard-coded value written directly in source code
- JS has 10+ literal types — the most used are **string**, **number**, **boolean**, **object**, and **array** literals
- Template literals with backticks enable interpolation `${}` and multiline
- `null` is an explicit "nothing" — its `typeof` is `"object"` (a known legacy quirk)
- Use `_` in numeric literals (ES2021+) for readability: `1_234_567`
