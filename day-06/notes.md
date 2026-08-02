# Day 06 - JavaScript Refresh

## map()

### What is map()?

`map()` is an array method that creates a **new array** by transforming every item in the original array.

It does **not** modify the original array.

---

## Syntax

```javascript
const newArray = array.map(item => {
    return transformedItem;
});
```

Shorter version:

```javascript
const newArray = array.map(item => transformedItem);
```

---

## Example

```javascript
const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);
```

Output:

```javascript
[2, 4, 6]
```

---

## map() with Strings

```javascript
const fruits = ["Apple", "Orange", "Banana"];

const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
```

Output:

```javascript
["APPLE", "ORANGE", "BANANA"]
```

---

## map() with Template Literals

```javascript
const names = ["Maryam", "John"];

const greetings = names.map(name => `Hello ${name}`);
```

Output:

```javascript
["Hello Maryam", "Hello John"]
```

---

## map() with Index

`map()` provides a second parameter called `index`.

```javascript
array.map((item, index) => {
    // use item and index
});
```

Example:

```javascript
const fruits = ["Apple", "Orange", "Banana"];

const numberedFruits = fruits.map(
    (fruit, index) => `${index + 1}. ${fruit}`
);
```

Output:

```javascript
[
    "1. Apple",
    "2. Orange",
    "3. Banana"
]
```

---

## map() with Objects

`map()` works very well with arrays of objects.

Example:

```javascript
const users = [
    {
        name: "Maryam",
        profession: "Frontend Engineer"
    },
    {
        name: "John",
        profession: "Backend Engineer"
    }
];

const userNames = users.map(user => user.name);

console.log(userNames);
```

Output:

```javascript
["Maryam", "John"]
```

---

## Returning Multiple Properties

```javascript
const laptops = [
    {
        brand: "Apple",
        model: "MacBook Pro"
    }
];

const laptopInfo = laptops.map(
    laptop => `${laptop.brand} - ${laptop.model}`
);
```

Output:

```javascript
["Apple - MacBook Pro"]
```

---

## Things to Remember

- `map()` always returns a new array.
- The original array is not changed.
- `map()` runs once for every item in the array.
- It is used when you want to transform data.
- It works with numbers, strings, and objects.
- You can use the `index` parameter if you need the position of each item.
- `map()` is one of the most commonly used array methods in React.

---

## Difference Between map() and forEach()

### map()

- Returns a new array.
- Used when transforming data.

### forEach()

- Returns `undefined`.
- Used when performing an action like logging or updating something without creating a new array.

Example:

```javascript
const numbers = [1, 2, 3];

numbers.forEach(number => console.log(number));
```

---

## Key Takeaways

- Use `map()` when you need a transformed version of an array.
- `map()` does not mutate the original array.
- Arrays of objects are commonly transformed using `map()`.
- `map()` is heavily used in React for rendering lists.

## filter()

- filter() creates a new array.
- It returns only items that match a condition.
- It does not modify the original array.

Example:

const passedStudents = students.filter(student => student.score >= 50);

## Method Chaining

Method chaining means calling multiple array methods one after another.

Example:

const passedNames = students
  .filter(student => student.score >= 50)
  .map(student => student.name);

Common combinations:
- filter() + map()
- map() + filter()
- filter() + map() + reduce()

## reduce()

- reduce() combines all items in an array into one final value.
- It returns a single value (number, string, object, or array).
- It does not modify the original array.

Syntax:

const result = array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);

Common initial values:
- 0 → Sum numbers
- 1 → Multiply numbers
- [] → Build a new array
- {} → Build an object
- "" → Build a string