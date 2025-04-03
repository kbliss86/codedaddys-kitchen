# C# Operators Reference

This document provides a quick reference for C# arithmetic operators, assignment operators, conditional operators, and logical operators. It includes explanations and code examples for each category to help you understand and use them effectively.

## Table of Contents
- [Arithmetic Operators](#arithmetic-operators)
- [Assignment Operators](#assignment-operators)
- [Conditional Operators](#conditional-operators)
- [Logical Operators](#logical-operators)
- [Further Reading](#further-reading)

## Arithmetic Operators

Arithmetic operators are used for mathematical operations. The main arithmetic operators in C# are:

- **Addition (`+`)**: Adds two operands.
- **Subtraction (`-`)**: Subtracts the second operand from the first.
- **Multiplication (`*`)**: Multiplies two operands.
- **Division (`/`)**: Divides the numerator by the denominator.
- **Modulus (`%`)**: Returns the remainder after division.

### Example:
```csharp
int a = 10;
int b = 3;

int sum = a + b;         // 13
int difference = a - b;  // 7
int product = a * b;     // 30
int quotient = a / b;    // 3 (integer division)
int remainder = a % b;   // 1
```

## Assignment Operators

Assignment operators are used to assign values to variables, and they can also combine an arithmetic operation with assignment.

- **Simple Assignment (`=`)**: Assigns a value to a variable.
- **Add and Assign (`+=`)**: Adds the right operand to the left operand and assigns the result.
- **Subtract and Assign (`-=`)**: Subtracts the right operand from the left operand and assigns the result.
- **Multiply and Assign (`*=`)**: Multiplies the left operand by the right operand and assigns the result.
- **Divide and Assign (`/=`)**: Divides the left operand by the right operand and assigns the result.
- **Modulus and Assign (`%=`)**: Takes the modulus (remainder) of the left operand divided by the right operand and assigns the result.
- Additionally, there are bitwise assignment operators: (`&=`, `|=`, `^=`, `<<=`, `>>=`).

### Example:
```csharp
int x = 10;
x += 5;    // x is now 15
x -= 3;    // x is now 12
x *= 2;    // x is now 24
x /= 4;    // x is now 6
x %= 4;    // x is now 2
```

## Conditional Operators

Conditional operators allow you to execute expressions based on conditions.

- **Equality (==)**: Returns true if both operands are equal
- **Inequality (!=)**: Returns true if the operands are not equal
- **Greater Than (>)**: Returns true if the left operand is greater than the right operand.
- **Less Than (<)**: Returns true if the left operand is less than the right operand.
- **Greater Than or Equal (>=)**: Returns true if the left operand is greater than or equal to the right operand.
- **Less Than or Equal (<=>)**: Returns true if the left operand is less than or equal to the right operand.
- **Ternary Operator (?:)**: A shorthand for an if-else statement that evaluates a boolean expression.
- **Null-Coalescing Operator (??)**: Returns the left-hand operand if it is not null; otherwise, returns the right-hand operand.
- **Null-conditional Operator (?.)**: Safely accesses members or elements when the operand might be null.

### Example
```csharp
int a = 10;
int b = 20;

// Ternary operator example
string result = (a > b) ? "a is greater" : "b is greater"; // "b is greater"

// Null-coalescing operator example
string possibleNull = null;
string output = possibleNull ?? "Default value"; // "Default value"
```

## Logical Operators

Logical operators are used to combine multiple conditions or to invert a boolean value, effectively acting as connectors between expressions.

- **AND (&&)**: Evaluates to true if both operands are true.
- **OR (||)**: Evaluates to true if at least one operand is true.
- **NOT (!)**: Inverts the value of a boolean expression.

### Example
```csharp
bool isWeekend = true;
bool isHoliday = false;

if (isWeekend && isHoliday)
{
    Console.WriteLine("Long weekend!");
}
else if (isWeekend || isHoliday)
{
    Console.WriteLine("Either it's the weekend or a holiday.");
}

bool isRaining = false;
if (!isRaining)
{
    Console.WriteLine("It's not raining.");
}
```

