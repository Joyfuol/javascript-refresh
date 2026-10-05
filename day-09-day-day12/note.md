## JavaScript Asynchronous JavaScript Notes

### 1. `setTimeout()`

`setTimeout()` is used to execute a function **after a specified amount of time**.

#### Syntax

```js
setTimeout(callback, delay);
```

* `callback` → the function to execute
* `delay` → time to wait in milliseconds
* `1000 milliseconds = 1 second`

#### Example

```js
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

The callback runs after approximately 2 seconds.

#### Important

`setTimeout()` does **not pause the entire JavaScript program**. JavaScript continues executing other code while waiting.

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Inside timeout
```

---

### 2. Callbacks

A **callback** is a function that is passed into another function as an argument and is called later.

#### Example

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Joyful", sayGoodbye);
```

Output:

```text
Hello, Joyful
Goodbye!
```

Here, `sayGoodbye` is passed into `greet()` as a callback.

Callbacks are commonly used with asynchronous operations such as:

* `setTimeout()`
* Event listeners
* Array methods such as `map()`, `filter()`, and `reduce()`
* API operations

#### Key idea

```text
Function → receives another function → calls it later
```

---

### 3. Promises

A **Promise** represents the eventual result of an asynchronous operation.

A Promise can be in three states:

```text
Pending → waiting for the operation
Fulfilled → operation succeeded
Rejected → operation failed
```

#### Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
```

#### Handling a Promise

Use `.then()` for a successful result and `.catch()` for an error.

```js
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

Output:

```text
Operation successful
```

#### Important

A Promise does not immediately give you the final result. It represents a value that will be available **later**.

---

### 4. `async/await`

`async/await` provides a cleaner way to work with Promises.

An `async` function always returns a Promise.

```js
async function greet() {
  return "Hello, Joyful";
}
```

To wait for a Promise inside an async function, use `await`.

```js
async function getMessage() {
  const message = await greet();

  console.log(message);
}

getMessage();
```

### Handling Errors

Use `try...catch` with `async/await`.

```js
async function getData() {
  try {
    const result = await somePromise;

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
```

#### Key idea

Instead of:

```js
promise
  .then(...)
  .catch(...);
```

we can often write:

```js
try {
  const result = await promise;
} catch (error) {
  console.log(error);
}
```

`async/await` makes asynchronous code easier to read and follow.

---

### 5. Fetch API

The **Fetch API** is used to make HTTP requests and communicate with APIs.

It returns a **Promise**.

#### Basic Fetch

```js
fetch("https://example.com/api/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Using Fetch with `async/await`

```js
async function getUsers() {
  try {
    const response = await fetch(
      "https://example.com/api/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getUsers();
```

### Understanding `response.json()`

`response.json()` reads the response body and converts JSON data into a JavaScript value.

It also returns a Promise, which is why we use:

```js
const data = await response.json();
```

and not:

```js
const data = response.json;
```

### Checking `response.ok`

`fetch()` does not automatically reject its Promise for HTTP errors such as:

* `404 Not Found`
* `500 Internal Server Error`

Therefore, it is useful to check:

```js
if (!response.ok) {
  throw new Error("Something went wrong");
}
```

---

## 🔗 How These Concepts Connect

These five topics are closely related:

```text
setTimeout()
     ↓
Callbacks
     ↓
Promises
     ↓
async/await
     ↓
Fetch API
```

More accurately, they are different tools and concepts that help us work with **asynchronous JavaScript**.

For example, Fetch returns a Promise:

```js
const response = await fetch(url);
```

`await` waits for that Promise to settle.

Then:

```js
const data = await response.json();
```

waits for another Promise returned by `response.json()`.

---

## 🧠 Key Takeaways

### `setTimeout()`

Used to run a function after a delay.

```js
setTimeout(callback, delay);
```

### Callback

A function passed to another function to be called later.

### Promise

Represents an asynchronous operation that can be pending, fulfilled, or rejected.

### `async/await`

A cleaner syntax for working with Promises.

### Fetch API

Used to make HTTP requests and retrieve data from APIs. It returns a Promise.

---

## 🚀 Concepts Practiced

During this part of my JavaScript refresh, I practiced:

* Delayed execution with `setTimeout()`
* Passing functions as callbacks
* Creating and consuming Promises
* `.then()` and `.catch()`
* `async/await`
* `try...catch`
* Making API requests with `fetch()`
* Checking `response.ok`
* Converting API responses with `response.json()`
* Working with asynchronous API data
