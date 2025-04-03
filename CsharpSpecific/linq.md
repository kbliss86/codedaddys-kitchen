# LINQ Common Methods Cheat Sheet

## Overview

LINQ (Language-Integrated Queries) is a powerful feature in C# that allows you to write queries directly in the language. It provides a collection of extension methods to work with data collections, making it easy to filter, sort, and transform data.

---

## Where()

- **Description:**  
  Returns all the elements from a collection that satisfy a given condition.
  
- **Syntax:**  
```csharp
  var result = listName.Where(x => condition);
```
### Note:
LINQ methods return a generic IEnumerable<T>, so if needed, cast the result to the specific data type.

## First()
- **Description:** 
Returns the first element in a collection that satisfies an optional condition.
Throws an exception if no element matches the condition.

- **Syntax:**  
```csharp
var result = listName.First(x => condition);
```

## FirstOrDefault()
- **Description:** 
Returns the first element that satisfies an optional condition.
If no element satisfies the condition or the collection is empty, it returns the default value (i.e., null for reference types or the default value for value types).

- **Syntax:**  
```csharp
var result = listName.FirstOrDefault(x => condition);
## Single()
```

- **Description:** 
Returns the only element in a collection that satisfies a specified condition.
Throws an exception if more than one element satisfies the condition.

- **Syntax:**  
```csharp
var result = listName.Single(x => condition);
```

## SingleOrDefault()
- **Description:** 
Returns the only element that satisfies a specified condition.
If more than one element matches or if the collection is empty, it returns the default value.

- **Syntax:**  
```csharp
var result = listName.SingleOrDefault(x => condition);
```

## Any()
- **Description:** 
Returns a boolean value indicating whether any elements in the collection satisfy a given condition.
If no condition is provided, it simply checks if the collection is non-empty.

- **Syntax:**  
```csharp
var result = listName.Any(x => condition);
```

## OrderBy()
- **Description:** 
Sorts the elements of a collection in ascending order based on a specified key.

- **Syntax:**  
```csharp
var result = listName.OrderBy(x => x.Property);
```

### Note:
To sort by additional keys, chain the ThenBy() method.

## OrderByDescending()
- **Description:** 
Sorts the elements of a collection in descending order based on a specified key.

- **Syntax:**  
```csharp
var result = listName.OrderByDescending(x => x.Property);
```

### Note:
For further sorting, chain the ThenByDescending() method.

## ToList()
- **Description:** 
Converts an IEnumerable<T> collection into a concrete List<T>.
This is useful when you need to use methods specific to the List<T> type.

- **Syntax:**  
```csharp
var list = listName.ToList();
```