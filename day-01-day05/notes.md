 # Variables

Variables store values in memory.

There are three ways to declare variables.

## let

Can be reassigned.

## const

Cannot be reassigned.

## var

Old way of declaring variables.

Avoid using var in modern JavaScript.


# Objects

An object is a collection of related data stored as key-value pairs.

Example:

```javascript
const user = {
    name: "Maryam",
    age: 30
};
```

## Accessing Properties

### Dot notation

```javascript
user.name
```

### Bracket notation

```javascript
user["name"]
```

Use bracket notation when the property name comes from a variable.

## Updating

```javascript
user.age = 31;
```

## Adding

```javascript
user.country = "Nigeria";
```

## Deleting

```javascript
delete user.country;
```

# JavaScript Arrays

## What is an Array?

An array is a data structure used to store multiple values in a single variable.

Example:

```javascript
const fruits = ["Apple", "Orange", "Banana"];
```

Instead of creating many variables, an array groups related values together.

---

## Why do we use Arrays?

Arrays help us:

- Store multiple values.
- Organize related data.
- Loop through data.
- Perform operations like adding, removing, searching, and updating items.

Real-world examples:

- A list of products.
- User notifications.
- Comments on a post.
- Student names.
- Shopping cart items.

---

## Creating an Array

```javascript
const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js"
];
```

Arrays use square brackets `[]`.

---

## Accessing Array Elements

Arrays start counting from **0**.

Example:

```javascript
const colors = ["Red", "Blue", "Green"];
```

| Index | Value |
|------:|-------|
| 0 | Red |
| 1 | Blue |
| 2 | Green |

Examples:

```javascript
console.log(colors[0]); // Red
console.log(colors[2]); // Green
```

---

## Array Length

The `.length` property tells us how many items are inside an array.

```javascript
console.log(colors.length);
```

Output:

```
3
```

---

## Getting the Last Item

Instead of writing:

```javascript
colors[2]
```

use:

```javascript
colors[colors.length - 1]
```

Why?

Because the array size can change.

This always returns the last item.

---

## Adding Items with push()

`push()` adds one or more items to the end of an array.

Example:

```javascript
const tools = [
    "VS Code",
    "Git"
];

tools.push("GitHub");

console.log(tools);
```

Output:

```
["VS Code", "Git", "GitHub"]
```

---

## Things I Learned

- Arrays store multiple values.
- Arrays use square brackets.
- Arrays start counting from index 0.
- `.length` gives the total number of items.
- `push()` adds a new item to the end.
- The last item can be accessed using:

```javascript
array[array.length - 1]
```

---

## Mistakes I Made

- I forgot that arrays start from index 0.
- I accidentally wrote `lenght` instead of `length`.
- I tried `console.log(tools.push)` instead of printing the updated array.

---

## How I Fixed Them

- I remembered that the first item is always index 0.
- I corrected the spelling of `length`.
- I learned that `push()` is a method and that I should print the array after calling it.

---

## Array Destructuring

- Uses square brackets `[]`
- Extracts values based on their position (index)
- You can skip items using commas
- Useful when working with arrays

Example:

const [first, second] = fruits;

---

## Object Destructuring

- Uses curly braces `{}`
- Extracts values based on property names
- Property names must exist in the object
- Properties can be renamed

Example:

const { name, age } = user;

Rename Example:

const { name: fullName } = user;


## Spread Operator (...)

The spread operator (`...`) expands the elements of an array or object into a new array or object.

### Common Uses

- Copy an array
- Add items to the beginning
- Add items to the end
- Merge arrays
- Create new arrays without changing the original array

### Examples

```javascript
const numbers = [2, 3, 4];

const newNumbers = [1, ...numbers, 5];
// [1, 2, 3, 4, 5]

## Rest Operator (...)

The Rest Operator (`...`) collects the remaining elements of an array or object into a new array or object.

### Array Example

```javascript
const fruits = ["Apple", "Orange", "Banana"];

const [firstFruit, ...otherFruits] = fruits;

// firstFruit = "Apple"
// otherFruits = ["Orange", "Banana"]
```

### Object Example

```javascript
const user = {
  name: "Maryam",
  age: 30,
  country: "Nigeria"
};

const { name, ...details } = user;

// name = "Maryam"
// details = { age: 30, country: "Nigeria" }
```

### Rules

- Uses the same `...` syntax as the spread operator.
- Collects the remaining elements or properties.
- In array destructuring, the rest element must be the last one.

### Spread vs Rest

Spread:
- Expands values.
- Example: `[...array]`

Rest:
- Collects remaining values.
- Example: `const [first, ...others] = array`

## Nested Objects

A nested object is an object inside another object.

Example:

```javascript
const user = {
    name: "Maryam",
    address: {
        country: "Nigeria",
        city: "Lagos"
    }
};
```

### Access nested properties

```javascript
user.address.country
```

### Update

```javascript
user.address.city = "Abuja";
```

### Add

```javascript
user.address.street = "Broad Street";
```

### Delete

```javascript
delete user.address.country;
```