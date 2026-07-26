# JavaScript Identifier Rules

## What is an Identifier?

An **identifier** is a name given to a variable, function, class, object property, or label. It's how you refer to things in your code.

---

## The Rules

| # | Rule | Valid ✅ | Invalid ❌ |
|---|---|---|---|
| 1 | Must start with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`) | `name`, `_count`, `$price` | `1name` (starts with digit) |
| 2 | Can contain letters, digits, underscores, and dollar signs | `userName1`, `my_var`, `data$` | `my-var` (hyphen not allowed) |
| 3 | **Cannot** start with a digit | `item2`, `_3rd` | `2item`, `3rdPlace` |
| 4 | **Cannot** be a reserved keyword | `myIf`, `_class` | `if`, `class`, `return` |
| 5 | **Cannot** contain spaces | `userName`, `full_name` | `user name`, `full name` |
| 6 | **Cannot** contain special characters (`@`, `#`, `%`, `^`, `&`, `*`, `-`, etc.) | `total$`, `_data` | `first-name`, `total#`, `data@set` |
| 7 | Case-sensitive | `name` and `Name` are **different** | — |
| 8 | Unicode letters allowed (ES6+) | `café`, `π`, `你好` | — |

---

## Examples

### Valid Identifiers

```javascript
let name = "Alice";
let _private = 42;
let $ = "dollar";
let $price = 9.99;
let userName = "bob";
let firstName1 = "John";
let _ = "underscore alone";
let π = 3.14159;
let 你好 = "hello";
```

### Invalid Identifiers

```javascript
let 1name = "no";        // ❌ starts with digit
let first-name = "no";   // ❌ hyphen not allowed
let if = "no";           // ❌ reserved keyword
let class = "no";        // ❌ reserved keyword
let my var = "no";       // ❌ space not allowed
let @data = "no";        // ❌ special character
let #count = "no";       // ❌ special character
```

---

## Case Sensitivity

```javascript
let name = "Alice";
let Name = "Bob";
let NAME = "Charlie";

console.log(name); // Alice
console.log(Name); // Bob
console.log(NAME); // Charlie
// All three are different identifiers!
```

---

## Naming Conventions (Not Rules, But Best Practice)

| Convention | Example | When to Use |
|---|---|---|
| **camelCase** | `firstName`, `getUserData` | Variables, functions, methods ✅ |
| **PascalCase** | `UserProfile`, `HttpClient` | Classes, constructors, React components |
| **UPPER_SNAKE_CASE** | `MAX_VALUE`, `API_KEY` | Constants (true constants) |
| **snake_case** | `user_name`, `get_user_data` | Rare in JS, more common in Python/PHP |
| **`_` prefix** | `_privateVar` | "Private" convention (not enforced) |
| **`$` prefix** | `$element` | Often used for jQuery objects |

---

## Visual Decision Flow

```
START: Choosing an identifier
│
├── Does it start with a letter / _ / $ ?
│   ├── ❌ No → INVALID (can't start with digit/special char)
│   └── ✅ Yes →
│
├── Is it a reserved keyword?
│   ├── ✅ Yes → INVALID (can't use `if`, `class`, `return`, etc.)
│   └── ❌ No →
│
├── Contains only letters, digits, _ , $ ?
│   ├── ❌ No → INVALID (no spaces, hyphens, or special chars)
│   └── ✅ Yes → VALID ✅
│
└── Also remember: JS is case-sensitive — `user` ≠ `User` ≠ `USER`
```

## Quick Summary

```
Allowed:      a-z, A-Z, 0-9, _, $
First char:   Cannot be a digit
Spaces:       ❌
Hyphens:      ❌
Keywords:     ❌
Case:         ✅ Sensitive
Unicode:      ✅ Allowed (ES6+)
```
