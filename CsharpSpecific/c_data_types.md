# C# Data Types Cheat Sheet

| C# Type (Alias) | CLS Type  | Size (bits) | Suffix | Description                       | Range                                                      |
|-----------------|-----------|-------------|--------|-----------------------------------|------------------------------------------------------------|
| **sbyte**       | SByte     | 8           | *(none)* | Signed byte                        | -128 to 127                                                |
| **byte**        | Byte      | 8           | *(none)* | Unsigned byte                      | 0 to 255                                                   |
| **short**       | Int16     | 16          | *(none)* | Signed short integer               | -32,768 to 32,767                                          |
| **ushort**      | UInt16    | 16          | *(none)* | Unsigned short integer             | 0 to 65,535                                                |
| **int**         | Int32     | 32          | *(none)* | Integer                            | -2,147,483,648 to 2,147,483,647                            |
| **uint**        | UInt32    | 32          | **u**   | Unsigned integer                   | 0 to 4,294,967,295                                         |
| **long**        | Int64     | 64          | **l**   | Long integer                       | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807    |
| **ulong**       | UInt64    | 64          | **ul**  | Unsigned long integer             | 0 to 18,446,744,073,709,551,615                            |
| **char**        | Char      | 16          | *(none)* | Unicode character                  | `\u0000` to `\uFFFF`                                       |
| **float**       | Single    | 32          | **f**   | Floating-point number              | ±1.5e−45 to ±3.4e38                                        |
| **double**      | Double    | 64          | **d**   | Double-precision floating-point    | ±5.0e−324 to ±1.7e308                                      |
| **decimal**     | Decimal   | 128         | **m**   | Financial/monetary calculations    | Approximately ±1.0×10⁻²⁸ to ±7.9×10²⁸ (28–29 digits)        |
| **bool**        | Boolean   | *1 bit*     | *(none)* | Logical true/false                 | `true` or `false`                                          |

## Notes

1. **Suffixes**  
   - Use `f` or `F` for `float` literals (e.g., `3.14f`).
   - Use `d` or `D` for `double` literals (though `double` is the default for real numeric literals, so the suffix is often optional).
   - Use `m` or `M` for `decimal` literals (e.g., `3.14m`).
   - Use `u`, `l`, `ul` (in various capitalizations) for unsigned/long integral literals (e.g., `42U`, `42L`, `42UL`).

2. **Integer Types**  
   - `sbyte`, `byte`, `short`, `ushort`, `int`, `uint`, `long`, and `ulong` differ by their signedness and the size of the range they can hold.

3. **Floating-Point vs. Decimal**  
   - `float` and `double` are typically used for scientific or general floating-point calculations where rounding errors are acceptable.
   - `decimal` is used for financial or monetary calculations where high precision is required.

4. **Boolean Type**  
   - Although `bool` conceptually holds a single bit of information (`true`/`false`), in practice it occupies at least one byte in memory.
