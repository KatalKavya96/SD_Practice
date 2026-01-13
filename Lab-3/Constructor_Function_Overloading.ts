//Function overloading explanation

/*
========================================
Function & Class Overloading: JS vs TS
========================================

JavaScript:
-----------
- JavaScript does NOT track data types.
- Any function can receive any type of input.
- Developers must manually handle types using:
    - typeof
    - instanceof
    - custom checks
- All mistakes are found at RUNTIME.
- Every type combination and edge case must be handled manually.

Example:
function add(a, b) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  throw new Error("Invalid types");
}

------------------------------------------------

TypeScript:
-----------
- TypeScript enforces data types at COMPILE TIME.
- We can define multiple valid type combinations using overloading.
- Only allowed combinations are accepted.
- Invalid combinations are blocked before code runs.
- Provides:
    ✔ Type safety
    ✔ Autocomplete
    ✔ Clear API contracts
    ✔ Flexibility with controlled inputs

Example:
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any) {
  return a + b;
}

------------------------------------------------

Important Clarification:
------------------------
TypeScript removes the need to handle TYPE-based edge cases:
  - number + string
  - wrong argument types
  - invalid object shapes
  - null/undefined (if strict)

But TypeScript does NOT remove LOGIC-based edge cases:
  - division by zero
  - empty arrays
  - network failures
  - invalid business rules
  - user input validation

------------------------------------------------

Mental Model:
-------------

JavaScript:
"Accept anything → validate everything at runtime"

TypeScript:
"Allow only what is valid → validate logic only"

------------------------------------------------

One-line Summary:
-----------------
JavaScript relies on runtime type handling, while TypeScript enforces compile-time type contracts,
eliminating type-related edge cases and providing safety + flexibility through controlled combinations
(using overloading).

========================================
*/
