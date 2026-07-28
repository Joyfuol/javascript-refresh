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

