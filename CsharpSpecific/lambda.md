# C# Lambda Expressions Cheat Sheet

## Overview

Lambda expressions, also known as anonymous functions, are functions without a name that are defined inline. They are typically used where a function is needed only in one place (often as a callback). In contrast, named functions have identifiers and can be invoked from anywhere in the code.

---

## Named Functions

Named functions are declared with a name, can accept parameters, return values, and are used when you need to call the same function multiple times from different locations.

### Example: Named Function with Two Parameters

```csharp
int Sum(int n1, int n2) {
    return n1 + n2;
}
```
### Example: Named Function with No Parameters
```csharp
int GiveMeAZero() {
    return 0;
}
```

## Lambda Expressions

Lambda expressions are inline, anonymous functions that can also accept parameters and return values. They are especially useful when you want to pass a function as an argument to another method (commonly known as a callback).

### Syntax Overview

- **Parameters**: Listed in parentheses.
- **Lambda Operator**: => separates the parameters from the function body.
- **Function Body**: Can be enclosed in {} if more than one statement is needed, or omitted for a single-line expression.

### Example: Lambda Expression with Two Parameters
```csharp
// Full lambda expression with a code block:
(int n1, int n2) => {
    return n1 + n2;
};

// Single-line lambda expression with braces:
(int n1, int n2) => { return n1 + n2; };

// Concise single-line lambda expression (no braces needed):
(int n1, int n2) => n1 + n2;
```

### Example: Lambda Expression with No Parameter
```csharp
// Full lambda expression with a code block:
() => {
    return 0;
};

// Concise single-line lambda expression:
() => 0;
```

## Lambda Expressions as Callback Functions

Lambda expressions are frequently used as arguments for methods that require a function to be passed in for execution during their processing. These passed functions are called callback functions. Callback functions can be either named functions or lambda expressions.