# JavaScript Keywords

## What is a Keyword?

A **keyword** is a reserved word in JavaScript that has a special, predefined meaning to the language. Keywords **cannot** be used as identifiers (variable names, function names, or labels) because the language reserves them for its own syntax.

---

## Complete List of JavaScript Keywords (ES2023+)

### 1. Reserved Keywords — Cannot be used as identifiers

| Keyword | Category | What it does |
|---|---|---|
| `await` | Async | Pauses async function execution until a Promise settles |
| `break` | Control Flow | Exits a loop or `switch` statement |
| `case` | Control Flow | Marks a branch in a `switch` statement |
| `catch` | Error Handling | Catches exceptions from a `try` block |
| `class` | OOP | Declares a class |
| `const` | Variable Declaration | Declares a block-scoped, read-only variable |
| `continue` | Control Flow | Skips to the next iteration of a loop |
| `debugger` | Debugging | Invokes any available debugging functionality |
| `default` | Control Flow | Default branch in a `switch` statement |
| `delete` | Operator | Removes a property from an object |
| `do` | Control Flow | Starts a `do...while` loop |
| `else` | Control Flow | Alternative branch in an `if` statement |
| `enum` | Reserved | Reserved for future use (not currently used in the language) |
| `export` | Modules | Exports modules for use in other files |
| `extends` | OOP | Creates a child class from a parent class |
| `false` | Literal | Boolean false value |
| `finally` | Error Handling | Runs code after `try`/`catch` regardless of outcome |
| `for` | Control Flow | Starts a `for` loop |
| `function` | Function | Declares a function |
| `if` | Control Flow | Conditional statement |
| `import` | Modules | Imports modules from other files |
| `in` | Operator | Checks if a property exists in an object |
| `instanceof` | Operator | Checks if an object is an instance of a constructor |
| `new` | Operator | Creates an instance of a user-defined object type |
| `null` | Literal | Represents an intentional absence of any object value |
| `return` | Control Flow | Exits a function and optionally returns a value |
| `super` | OOP | Calls parent class methods |
| `switch` | Control Flow | Multi-way branch statement |
| `this` | Context | Refers to the current execution context |
| `throw` | Error Handling | Throws a user-defined exception |
| `true` | Literal | Boolean true value |
| `try` | Error Handling | Wraps code that may throw an exception |
| `typeof` | Operator | Returns a string indicating the type of a value |
| `var` | Variable Declaration | Declares a function-scoped variable |
| `void` | Operator | Evaluates an expression and returns `undefined` |
| `while` | Control Flow | Starts a `while` loop |
| `with` | Scope | Extends the scope chain for a statement (strict-mode forbidden) |
| `yield` | Generator | Pauses/resumes a generator function |

### 2. Future Reserved Keywords (Strict Mode Only)

| Keyword | Notes |
|---|---|
| `implements` | Reserved for future class-based features |
| `interface` | Reserved for future type-system features |
| `let` | Now used as a variable declaration keyword |
| `package` | Reserved for future module features |
| `private` | Reserved for future access modifiers |
| `protected` | Reserved for future access modifiers |
| `public` | Reserved for future access modifiers |
| `static` | Now used for static class members |
| `yield` | Now used as a generator keyword |

### 3. Special Identifiers (Not reserved, but have special meaning)

| Identifier | Context | What it does |
|---|---|---|
| `arguments` | Function | Array-like object of function arguments (not available in arrow functions) |
| `Infinity` | Global | Numeric infinity value |
| `NaN` | Global | Not-a-Number value |
| `undefined` | Global | Primitive value for uninitialized variables |

---

## Comparison: `var` vs `let` vs `const`

| Aspect | `var` | `let` | `const` |
|---|---|---|---|
| **Scope** | Function-scoped | Block-scoped `{}` | Block-scoped `{}` |
| **Redeclarable?** | ✅ Yes | ❌ No | ❌ No |
| **Reassignable?** | ✅ Yes | ✅ Yes | ❌ No |
| **Hoisted?** | ✅ Yes (initialized as `undefined`) | ✅ Yes (but **not** initialized — Temporal Dead Zone) | ✅ Yes (but **not** initialized — Temporal Dead Zone) |
| **Use case** | Legacy code, rarely used now | Mutable variables in modern JS | Constants, objects/arrays that shouldn't be reassigned |

### Example: TDZ (Temporal Dead Zone) with `let` and `const`

```javascript
console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 5;
```

---

## Visual Overview

```
┌─────────────────────────────────────────────────────────┐
│                    KEYWORD CATEGORIES                    │
├───────────┬───────────┬──────────┬──────────┬───────────┤
│ Variables │  Control  │ Function │  Error   │  Modules  │
│ & Data    │   Flow    │   & OOP  │ Handling │           │
├───────────┼───────────┼──────────┼──────────┼───────────┤
│ var       │ if/else   │ function │ try      │ import    │
│ let       │ switch    │ return   │ catch    │ export    │
│ const     │ for       │ class    │ finally  │           │
│ typeof    │ while     │ extends  │ throw    │           │
│ instanceof│ do        │ super    │          │           │
│ delete    │ break     │ new      │          │           │
│ void      │ continue  │ this     │          │           │
│           │           │ yield    │          │           │
└───────────┴───────────┴──────────┴──────────┴───────────┘
```

## Key Rules

1. **Cannot** use keywords as variable names: `var if = 5;` ❌
2. **Cannot** use keywords as function names: `function return() {}` ❌
3. **Can** use keywords as object property names: `obj.if = 5` ✅ (but don't — confusing)
4. `let` and `yield` were future-reserved in ES5, now full keywords in ES6+
5. `await` is only reserved inside async functions — outside, it's a valid identifier (but don't use it anyway)
