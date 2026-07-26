# JavaScript Data Types

## What is a Data Type?

A **data type** defines the kind of value a variable can hold and what operations can be performed on it. JavaScript is **dynamically typed** — variables can hold any type and can change type at runtime.

---

## The 8 Data Types in JavaScript (ES2023+)

JavaScript has two categories: **Primitive** (immutable) and **Non-Primitive** (Reference).

### Primitive Data Types (Immutable)

| # | Data Type | typeof Return | Example | Description |
|---|---|---|---|---|
| 1 | **String** | `"string"` | `"hello"`, `'world'`, `` `hi` `` | Text — single, double, or backtick quotes |
| 2 | **Number** | `"number"` | `42`, `3.14`, `-10`, `Infinity`, `NaN` | Integers and floats (IEEE 754 64-bit) |
| 3 | **BigInt** | `"bigint"` | `42n`, `9007199254740991n` | Arbitrary precision integers |
| 4 | **Boolean** | `"boolean"` | `true`, `false` | Logical true/false |
| 5 | **undefined** | `"undefined"` | `undefined` | Declared but not assigned |
| 6 | **Null** | `"object"` (quirk) | `null` | Intentional absence of value |
| 7 | **Symbol** (ES6) | `"symbol"` | `Symbol("id")` | Unique, immutable identifier |

### Non-Primitive (Reference) Data Type

| # | Data Type | typeof Return | Example | Description |
|---|---|---|---|---|
| 8 | **Object** | `"object"` | `{a: 1}`, `[1,2]`, `/regex/`, `new Date()` | Collections of key-value pairs |

---

## Deep Dive into Each Type

### 1. String

```javascript
let single = 'Hello';
let double = "World";
let template = `Hi, ${name}!`;   // Template literal with interpolation

typeof "hello";  // "string"
```

- **Immutable** — once created, cannot be changed (operations return a new string)
- Can use quotes inside by escaping or alternating: `"he's"`, `'she said "hi"'`
- Template literals (backticks) support multiline and interpolation

### 2. Number

```javascript
let int = 42;
let float = 3.14;
let neg = -10;
let exp = 2e5;       // 200000
let hex = 0xFF;      // 255
let bin = 0b1010;    // 10
let oct = 0o12;      // 10
let inf = Infinity;
let notNum = NaN;    // Not a Number

typeof 42;    // "number"
typeof NaN;   // "number" (NaN is still a number type!)
typeof Infinity; // "number"
```

- **64-bit floating point** (IEEE 754) — no separate integer type
- Special values: `Infinity`, `-Infinity`, `NaN`
- `NaN` is the only value not equal to itself: `NaN === NaN` → `false`

### 3. BigInt

```javascript
let big = 9007199254740991n;   // n suffix
let hexBig = 0xFFFFFFFFFFFFFFFn;

typeof 42n;  // "bigint"
```

- For numbers beyond `Number.MAX_SAFE_INTEGER` (2^53 - 1)
- Cannot mix with regular Number: `42n + 10` → throws `TypeError`
- Use `BigInt()` to convert: `BigInt(42)` → `42n`

### 4. Boolean

```javascript
let isTrue = true;
let isFalse = false;

typeof true;   // "boolean"
```

- Only two values: `true` or `false`
- Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- Truthy values: everything else

### 5. Undefined

```javascript
let x;
console.log(x);   // undefined

let y = undefined;

typeof undefined; // "undefined"
```

- A variable that has been **declared but not assigned a value**
- A function that returns nothing returns `undefined`
- Accessing a non-existent object property returns `undefined`

### 6. Null

```javascript
let empty = null;

typeof null;  // "object" (this is a known JavaScript bug since 1996 — not fixed for backward compatibility)
```

- Represents **intentional absence** of an object value
- `null == undefined` → `true` (loose equality)
- `null === undefined` → `false` (strict equality)

### 7. Symbol (ES6)

```javascript
let sym1 = Symbol("id");
let sym2 = Symbol("id");

sym1 === sym2;  // false — each Symbol is unique

let obj = {
  [sym1]: "secret value"
};

typeof Symbol("id");  // "symbol"
```

- Always **unique** — even with the same description
- Often used as object property keys to avoid name collisions
- Not auto-converted to string: `String(Symbol("id"))` works, `Symbol("id") + ""` throws

### 8. Object (Reference Type)

```javascript
// Object literal
let person = { name: "Alice", age: 30 };

// Array
let arr = [1, 2, 3];

// Function
function greet() { return "hi"; }

// Date
let now = new Date();

// RegExp
let regex = /hello/;

typeof {a: 1};   // "object"
typeof [1, 2];   // "object"
typeof new Date(); // "object"
typeof null;     // "object" (quirk!)
```

- **Mutable** — you can change properties without creating a new object
- **Stored and copied by reference**, not by value

---

## Primitive vs Reference — Comparison

| Aspect | Primitive | Reference (Object) |
|---|---|---|
| **Storage** | Stored directly in the variable | Stored as a memory reference/pointer |
| **Copy behavior** | Copied **by value** — independent clone | Copied **by reference** — both point to same object |
| **Mutability** | **Immutable** — cannot be changed (new value = new memory) | **Mutable** — properties can be modified |
| **Comparison** | Compared **by value** | Compared **by reference** (same object in memory?) |
| **Examples** | string, number, boolean, null, undefined, symbol, bigint | object, array, function, date, regex |

### Copy Behavior Example

```javascript
// Primitive — copied by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 ✅ (unchanged)

// Reference — copied by reference
let obj1 = { x: 10 };
let obj2 = obj1;
obj2.x = 20;
console.log(obj1.x); // 20 ❌ (changed!)
```

### Comparison Example

```javascript
// Primitive — compared by value
"hello" === "hello";   // true
42 === 42;             // true

// Reference — compared by reference (same object?)
{} === {};             // false (different objects in memory)
[] === [];             // false
```

---

## Dynamic Typing

JavaScript variables can hold any type and change type freely:

```javascript
let data = "hello";     // string
data = 42;              // now number
data = true;            // now boolean
data = { key: "val" };  // now object
data = null;            // now null
```

The `typeof` operator tells you the current type:

```javascript
typeof "hello";     // "string"
typeof 42;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (quirk!)
typeof Symbol();    // "symbol"
typeof 42n;         // "bigint"
typeof {};          // "object"
typeof [];          // "object" (arrays are objects)
typeof function(){}; // "function" (special object)
```

---

## Type Conversion (Coercion)

### Implicit Coercion (JS auto-converts)

```javascript
"5" + 3;     // "53" (number → string)
"5" - 3;     // 2 (string → number)
"5" * "2";   // 10
+"3";        // 3 (unary + converts to number)
!!"hello";   // true (any non-empty string is truthy)
```

### Explicit Coercion (You manually convert)

```javascript
String(42);        // "42"
Number("42");      // 42
Boolean(0);        // false
parseInt("42px");  // 42
parseFloat("3.14"); // 3.14
```

---

## Visual Overview

```
┌────────────────────────────────────────────────────────┐
│               JAVASCRIPT DATA TYPES                    │
├──────────────────────────┬─────────────────────────────┤
│      PRIMITIVE           │        NON-PRIMITIVE        │
│     (Immutable)          │       (Reference)           │
├──────────────────────────┼─────────────────────────────┤
│  String     → "hello"    │  Object     → {a: 1}        │
│  Number     → 42, 3.14   │  Array      → [1, 2, 3]    │
│  BigInt     → 42n        │  Function   → function(){}  │
│  Boolean    → true/false │  Date       → new Date()    │
│  Undefined  → undefined  │  RegExp     → /abc/         │
│  Null       → null       │  Map, Set, ...              │
│  Symbol     → Symbol()   │                             │
└──────────────────────────┴─────────────────────────────┘
```

## Key Takeaways

| Concept | Rule |
|---|---|
| **7 primitives** + **1 reference type (Object)** | That's all JS has |
| **Dynamic typing** | Variables can hold any type; `typeof` shows current type |
| **`typeof null === "object"`** | A known bug — `null` is actually a primitive |
| **`NaN` is type `"number"`** | But `NaN === NaN` is `false` |
| **Primitives are immutable** | Any "change" creates a new value in memory |
| **Objects are mutable** | You modify them in place without creating a new object |
| **Primitives copy by value** | Changing the copy doesn't affect the original |
| **Objects copy by reference** | Changing the copy affects the original |
