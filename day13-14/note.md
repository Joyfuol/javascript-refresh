# JavaScript localStorage Practice

This lesson is part of my JavaScript refresh journey. It focuses on understanding how to use the browser's **localStorage API** to store, retrieve, and remove data.

## 📚 What I Learned

In this lesson, I learned how to:

* Store data using `localStorage.setItem()`
* Retrieve data using `localStorage.getItem()`
* Remove individual items using `localStorage.removeItem()`
* Clear all localStorage data using `localStorage.clear()`
* Understand that localStorage stores values as strings
* Convert JavaScript objects into JSON strings using `JSON.stringify()`
* Convert JSON strings back into JavaScript objects using `JSON.parse()`
* Handle missing localStorage data using `null`
* Use `if...else` to check whether stored data exists
* Understand the difference between data stored in localStorage and variables currently held in JavaScript memory

## 🧠 localStorage

`localStorage` is a browser storage mechanism that allows websites to save small amounts of data on a user's device.

Data stored in localStorage remains available even after refreshing or closing the browser, until it is manually removed or cleared.

### Storing Data

```js
localStorage.setItem("name", "Joyful");
```

### Retrieving Data

```js
const storedName = localStorage.getItem("name");

console.log(storedName);
```

### Removing One Item

```js
localStorage.removeItem("name");
```

### Clearing All Items

```js
localStorage.clear();
```

> `clear()` removes all localStorage data belonging to the current website, so it should be used carefully.

## 🔄 Working with Objects

localStorage stores data as strings, so JavaScript objects need to be converted before they can be stored.

### `JSON.stringify()`

Converts a JavaScript object into a JSON string.

```js
const user = {
  name: "Joyful",
  age: 30,
  role: "Frontend Engineer"
};

localStorage.setItem("user", JSON.stringify(user));
```

### `JSON.parse()`

Converts the stored JSON string back into a JavaScript object.

```js
const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name);
console.log(storedUser.age);
```

### The Pattern

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
       ↓
localStorage
       ↓
JSON.parse()
       ↓
JavaScript Object
```

## ⚠️ Important: localStorage Stores Strings

Even when a number or boolean is stored, localStorage stores it as a string.

```js
localStorage.setItem("age", 30);

const storedAge = localStorage.getItem("age");

console.log(typeof storedAge);
```

Output:

```text
string
```

The retrieved value is `"30"`, not the number `30`.

This is why `JSON.stringify()` and `JSON.parse()` are important when working with objects, arrays, numbers, booleans, and other structured data.

## 🛡️ Handling Missing Data

`getItem()` returns `null` when the requested key does not exist.

```js
const storedUser = localStorage.getItem("user");

if (storedUser) {
  const user = JSON.parse(storedUser);
  console.log(`Welcome, ${user.name}`);
} else {
  console.log("No user found");
}
```

This prevents the application from assuming that data exists when it doesn't.

## 🧪 Practice Exercises

During this lesson, I practiced:

### Exercise 1 — Basic Storage

* Store a name
* Retrieve the name
* Store an age
* Retrieve the age
* Check the type of the retrieved age

### Exercise 2 — Objects

* Create a user object
* Store the object in localStorage
* Retrieve and parse the object
* Access individual properties

### Exercise 3 — Removing Data

* Store a user
* Retrieve the user
* Remove the user from localStorage
* Confirm that the user no longer exists in localStorage

### Exercise 4 — Conditional Checking

* Store settings
* Retrieve the settings
* Check whether the settings exist
* Handle both existing and missing data using `if...else`

## 🛠️ Technologies

* JavaScript
* Browser localStorage API
* JSON

## 💡 Key Takeaways

The most important patterns from this lesson are:

```js
localStorage.setItem("key", value);
```

```js
localStorage.getItem("key");
```

```js
localStorage.removeItem("key");
```

```js
localStorage.clear();
```

And when working with objects:

```js
JSON.stringify(object);
```

```js
JSON.parse(string);
```

### The main lesson

> **localStorage stores strings, while JavaScript works with objects and other data types. JSON.stringify() and JSON.parse() help us move between the two.**

## What's Next?

Next in my JavaScript refresh journey:

**JavaScript Modules — `export` and `import`**

I will learn how to split JavaScript code into multiple files and share functionality between them, which is an important foundation for working with modern JavaScript applications, React, and Next.js.
