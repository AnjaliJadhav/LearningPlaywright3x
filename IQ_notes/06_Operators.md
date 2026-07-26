# JavaScript Operators

## What is an Operator?

An **operator** is a symbol that performs an operation on one or more values (operands) and produces a result.

```javascript
let sum = 10 + 5;   // `+` is the operator, `10` and `5` are operands
```

---

## Types of Operators

### 1. Arithmetic Operators

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `5 + 2` | `7` |
| `-` | Subtraction | `5 - 2` | `3` |
| `*` | Multiplication | `5 * 2` | `10` |
| `**` | Exponentiation (ES7) | `5 ** 2` | `25` |
| `/` | Division | `5 / 2` | `2.5` |
| `%` | Modulus (Remainder) | `5 % 2` | `1` |
| `++` | Increment | `let x=1; x++` | `2` |
| `--` | Decrement | `let x=1; x--` | `0` |
| `+` (unary) | Unary plus | `+"3"` | `3` |
| `-` (unary) | Unary negation | `-x` | Flips sign |

```javascript
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

let x = 5;
console.log(++x);    // 6 (prefix — increment then return)
console.log(x++);    // 6 (postfix — return then increment)
console.log(x);      // 7
```

### 2. Assignment Operators

| Operator | Name | Example | Equivalent to |
|---|---|---|---|
| `=` | Assignment | `x = 5` | `x = 5` |
| `+=` | Add & assign | `x += 3` | `x = x + 3` |
| `-=` | Subtract & assign | `x -= 3` | `x = x - 3` |
| `*=` | Multiply & assign | `x *= 3` | `x = x * 3` |
| `/=` | Divide & assign | `x /= 3` | `x = x / 3` |
| `%=` | Modulus & assign | `x %= 3` | `x = x % 3` |
| `**=` | Exponent & assign | `x **= 3` | `x = x ** 3` |
| `&&=` | Logical AND & assign (ES2021) | `x &&= y` | `x = x && y` |
| `\|\|=` | Logical OR & assign (ES2021) | `x \|\|= y` | `x = x \|\| y` |
| `??=` | Nullish coalescing & assign (ES2021) | `x ??= y` | `x = x ?? y` |

```javascript
let x = 10;
x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 4;   // x = 6
x **= 2;  // x = 36
x %= 5;   // x = 1

// Logical assignment (ES2021)
let a = null;
a ??= "default";  // a = "default" (only if a is null/undefined)

let b = 0;
b ||= 10;         // b = 10 (because 0 is falsy)

let c = { x: 1 };
c &&= { y: 2 };   // c = { y: 2 } (only if c is truthy) — from the file's AssignmentOperator.js pattern
```

### 3. Comparison Operators

| Operator | Name | Example | Result |
|---|---|---|---|
| `==` | Loose equality | `5 == "5"` | `true` |
| `===` | Strict equality | `5 === "5"` | `false` |
| `!=` | Loose inequality | `5 != "5"` | `false` |
| `!==` | Strict inequality | `5 !== "5"` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `5 <= 3` | `false` |
| `? :` | Ternary (conditional) | `a > b ? "yes" : "no"` | — |

```javascript
// Loose vs Strict — CRITICAL difference
console.log(5 == "5");   // true  (coerces string to number)
console.log(5 === "5");  // false (different types → no coercion)
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Ternary
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";  // "Adult"
```

### 4. Logical Operators

| Operator | Name | Example | Result |
|---|---|---|---|
| `&&` | AND | `true && false` | `false` |
| `\|\|` | OR | `true \|\| false` | `true` |
| `!` | NOT | `!true` | `false` |
| `??` | Nullish Coalescing (ES2020) | `null ?? "default"` | `"default"` |

```javascript
// AND (&&) — returns first falsy value OR last truthy value
console.log(true && false);  // false
console.log(0 && 10);        // 0 (falsy short-circuits)
console.log(5 && 10);        // 10 (both truthy → last value)

// OR (||) — returns first truthy value OR last falsy value
console.log(false || true);  // true
console.log(0 || 10);        // 10
console.log(null || "fallback"); // "fallback"

// Nullish Coalescing (??) — only null/undefined trigger default
console.log(null ?? "default");    // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? "default");    // 0 (not null/undefined)
console.log("" ?? "default");   // "" (not null/undefined)

// Short-circuit evaluation
let user = null;
let name = user && user.name;  // null (safely stops at falsy)
```

### 5. String Operators

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Concatenation | `"Hello " + "World"` | `"Hello World"` |
| `+=` | Concatenation & assign | `let s="Hi"; s+=" there"` | `"Hi there"` |

```javascript
let greeting = "Hello" + " " + "World";  // "Hello World"
greeting += "!";                          // "Hello World!"
```

### 6. Bitwise Operators

| Operator | Name | Example | Binary | Result |
|---|---|---|---|---|
| `&` | AND | `5 & 3` | `101 & 011` | `1` (001) |
| `\|` | OR | `5 \| 3` | `101 \| 011` | `7` (111) |
| `^` | XOR | `5 ^ 3` | `101 ^ 011` | `6` (110) |
| `~` | NOT | `~5` | `~101` | `-6` |
| `<<` | Left shift | `5 << 1` | `101 << 1` | `10` (1010) |
| `>>` | Right shift | `5 >> 1` | `101 >> 1` | `2` (10) |
| `>>>` | Zero-fill right shift | `-5 >>> 1` | — | Large positive |

```javascript
console.log(5 & 3);   // 1
console.log(5 | 3);   // 7
console.log(5 ^ 3);   // 6
console.log(~5);      // -6
console.log(5 << 1);  // 10
console.log(5 >> 1);  // 2
```

### 7. Special Operators

| Operator | Name | Example | Description |
|---|---|---|---|
| `typeof` | Type check | `typeof "hi"` → `"string"` | Returns type as a string |
| `instanceof` | Instance check | `[] instanceof Array` → `true` | Checks if object is an instance of a class |
| `delete` | Delete property | `delete obj.prop` | Removes a property from an object |
| `in` | Property exists | `"name" in obj` | Checks if property exists in object |
| `void` | Void | `void 0` → `undefined` | Evaluates expression and returns `undefined` |
| `new` | Create instance | `new Date()` | Creates a new instance of a constructor |
| `this` | Current context | `this.name` | Refers to current execution context |
| `...` | Spread/Rest (ES6) | `[...arr]`, `function(...args)` | Spreads an iterable or collects arguments |

```javascript
// typeof
typeof 42;         // "number"
typeof "hello";    // "string"
typeof undefined;  // "undefined"
typeof null;       // "object" (quirk!)
typeof [];         // "object"

// in
const user = { name: "Alice" };
console.log("name" in user);  // true
console.log("age" in user);   // false

// delete
delete user.name;
console.log(user.name);  // undefined

// Spread
let arr = [1, 2, 3];
let copy = [...arr];       // [1, 2, 3]
let merged = [...arr, 4];  // [1, 2, 3, 4]
```

---

## Operator Precedence (Highest to Lowest)

| Level | Operators | Description |
|---|---|---|
| 1 | `()` `[]` `.` `?.` | Grouping, member access, optional chaining |
| 2 | `++` `--` `!` `~` `+` `-` `typeof` `void` `delete` `await` | Unary operators |
| 3 | `**` | Exponentiation |
| 4 | `*` `/` `%` | Multiplication, division, modulus |
| 5 | `+` `-` | Addition, subtraction |
| 6 | `<<` `>>` `>>>` | Bitwise shifts |
| 7 | `<` `<=` `>` `>=` `in` `instanceof` | Relational |
| 8 | `==` `!=` `===` `!==` | Equality |
| 9 | `&` | Bitwise AND |
| 10 | `^` | Bitwise XOR |
| 11 | `\|` | Bitwise OR |
| 12 | `&&` | Logical AND |
| 13 | `\|\|` | Logical OR |
| 14 | `??` | Nullish coalescing |
| 15 | `? :` | Ternary (conditional) |
| 16 | `=` `+=` `-=` `*=` `/=` `%=` `**=` `&&=` `\|\|=` `??=` | Assignment |
| 17 | `,` | Comma (lowest) |

```javascript
// Without precedence table you'd be confused:
let result = 10 + 5 * 2;  // 20 (not 30 — * before +)
let result2 = (10 + 5) * 2;  // 30 (parentheses override)
```

---

## Comparison Table — Loose vs Strict Equality

| Expression | `==` (Loose) | `===` (Strict) |
|---|---|---|
| `5 == "5"` | `true` (coerces) | `false` |
| `0 == false` | `true` | `false` |
| `"" == false` | `true` | `false` |
| `null == undefined` | `true` | `false` |
| `[] == false` | `true` (coerces) | `false` |
| `NaN == NaN` | `false` | `false` (both!) |

**Rule:** Always prefer `===` / `!==` over `==` / `!=` to avoid unexpected type coercion bugs.

---

## Visual Overview

```
┌──────────────────────────────────────────────────────────┐
│                  JAVASCRIPT OPERATORS                    │
├──────────┬───────────┬────────────┬──────────┬──────────┤
│Arithmetic│Assignment │ Comparison │  Logical │  Special │
├──────────┼───────────┼────────────┼──────────┼──────────┤
│ +  -     │ =         │ ==  ===    │ &&  ||   │ typeof   │
│ *  /     │ +=  -=    │ !=  !==    │ !   ??   │ instanceof│
│ %  **    │ *=  /=    │ >  <       │          │ delete   │
│ ++ --    │ %=  **=   │ >=  <=     │          │ in       │
│          │ ??=  &&=  │ ? :        │          │ new      │
│          │ ||=       │            │          │ ...      │
└──────────┴───────────┴────────────┴──────────┴──────────┘
```

## Key Takeaways

- **`===` over `==`** — always use strict equality to avoid type coercion surprises
- **`??` vs `||`** — `??` only catches `null`/`undefined`; `||` catches all falsy values (`0`, `""`, `false`)
- **Short-circuiting** — `&&` stops at first falsy; `||` stops at first truthy
- **Precedence** — use `()` to make your intent clear instead of memorizing the full table
- **`typeof null === "object"`** — a known JS quirk, `null` is actually a primitive
- **Increment `x++` vs `++x`** — postfix returns old value, prefix returns new value
