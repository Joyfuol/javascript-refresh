# JavaScript Modules

JavaScript Modules allow us to split our code into separate files and reuse functions, variables, and other code across those files.

Modules help keep our code:

* Organized
* Reusable
* Easier to maintain
* Easier to understand

---

## 1. Exporting from a Module

To make something available to another JavaScript file, we use `export`.

### Named Export

```js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

Each function is exported by its name.

---

## 2. Importing a Named Export

When importing a named export, we use `{ }`.

```js
import { add, subtract } from "./math.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
```

The names inside `{ }` must match the names that were exported.

### Important

This:

```js
export function add() {}
```

is imported as:

```js
import { add } from "./math.js";
```

---

## 3. Default Export

A module can have **one default export**.

```js
export default function greet(name) {
    return `Hello, ${name}`;
}
```

When importing a default export, we **do not use `{ }`**.

```js
import greet from "./greet.js";

console.log(greet("Joyful"));
```

### Default imports can be renamed

The name used during import does not have to match the original function name.

```js
import sayHello from "./greet.js";
```

This works because it is a default export.

---

## 4. Named Export vs Default Export

### Named export

```js
export function add(a, b) {
    return a + b;
}
```

Import:

```js
import { add } from "./math.js";
```

### Default export

```js
export default function greet(name) {
    return `Hello, ${name}`;
}
```

Import:

```js
import greet from "./greet.js";
```

### Easy way to remember

**Named → `{ }`**

```js
import { add } from "./math.js";
```

**Default → no `{ }`**

```js
import greet from "./greet.js";
```

---

## 5. Combining Default and Named Exports

A file can have:

* One default export
* Multiple named exports

Example:

```js
export default function getUserName(user) {
    return `Name: ${user.name}`;
}

export function getUserEmail(user) {
    return `Email: ${user.email}`;
}

export function getUserRole(user) {
    return `Role: ${user.role}`;
}
```

Import them like this:

```js
import getUserName, { getUserEmail, getUserRole } from "./user.js";
```

Notice:

```js
getUserName
```

is outside `{ }` because it is the default export.

While:

```js
{ getUserEmail, getUserRole }
```

are inside `{ }` because they are named exports.

---

## 6. Example: Product Module

### product.js

```js
export default function getProductName(product) {
    return `Product: ${product.name}`;
}

export function getProductPrice(product) {
    return `Price: ${product.price}`;
}

export function getProductCategory(product) {
    return `Category: ${product.category}`;
}
```

### app.js

```js
import getProductName, {
    getProductPrice,
    getProductCategory
} from "./product.js";

const product = {
    name: "Noor Twinset",
    price: 25000,
    category: "Modest Wear"
};

console.log(getProductName(product));
console.log(getProductPrice(product));
console.log(getProductCategory(product));
```

Output:

```text
Product: Noor Twinset
Price: 25000
Category: Modest Wear
```

---

## 7. Using Modules in the Browser

When using JavaScript modules in an HTML file, add:

```html
<script type="module" src="app.js"></script>
```

The `type="module"` tells the browser that `app.js` uses JavaScript modules.

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Modules</title>
</head>
<body>

    <script type="module" src="app.js"></script>
</body>
</html>
```

---

## 8. Module File Paths

When importing a local JavaScript file, use the correct relative path.

If the files are in the same folder:

```js
import { add } from "./math.js";
```

If the module is inside a folder:

```js
import { add } from "./utils/math.js";
```

`./` means the current folder.

---

## 9. Why Use Modules?

Without modules, a large JavaScript application can become difficult to manage because everything may be placed in one file.

Modules allow us to separate responsibilities.

For example:

```text
javascript-refresh/
│
├── app.js
├── math.js
├── user.js
├── product.js
└── greet.js
```

Each file can have a specific responsibility.

For example:

```text
math.js     → mathematical functions
user.js     → user-related functions
product.js  → product-related functions
greet.js    → greeting functions
app.js      → brings everything together
```

---

## 10. Important Rules to Remember

### Rule 1: Named exports use `{ }`

```js
export function add() {}
```

```js
import { add } from "./math.js";
```

### Rule 2: Default exports don't use `{ }`

```js
export default function greet() {}
```

```js
import greet from "./greet.js";
```

### Rule 3: One file can have only one default export

```js
export default function one() {}
```

You cannot have another:

```js
export default function two() {}
```

in the same module.

### Rule 4: A file can have multiple named exports

```js
export function one() {}
export function two() {}
export function three() {}
```

### Rule 5: Use `type="module"` in browser HTML

```html
<script type="module" src="app.js"></script>
```

---

## Key Takeaway

**JavaScript Modules allow us to split code into separate files and share code between them using `export` and `import`.**

The two main types are:

```js
// Named
export function add() {}
import { add } from "./math.js";
```

and:

```js
// Default
export default function greet() {}
import greet from "./greet.js";
```

### Remember:

**Named = `{ }`**

**Default = no `{ }`**
