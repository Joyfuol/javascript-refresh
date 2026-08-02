// What is reduce()?: reduce() takes many values and combines them into one final value.
// For example:

// [10, 20, 30, 40]

// ↓

// 100

// or

// ["HTML", "CSS", "JS"]

// ↓

// "HTML, CSS, JS"

// or

// Products

// ↓

// Total Price


// Syntax
// const result = array.reduce((accumulator, currentValue) => {
//     // return updated accumulator
// }, initialValue);

// Example 1 — Sum Numbers

const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);

// Example 2 — Multiply Numbers

const newNumbers = [2, 3, 4];

const product = newNumbers.reduce((total, number) => {
    return total * number;
}, 1);

console.log(product);

// Example 3 — Sum Object Values:

const products = [
    {
        name: "Laptop",
        price: 500000
    },
    {
        name: "Mouse",
        price: 5000
    },
    {
        name: "Keyboard",
        price: 20000
    }
];

const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(totalPrice);

// Assignment 1: Use reduce() to calculate the total of all ages. 

const ages = [20, 25, 30, 35];

const totalAges = ages.reduce((total, age ) => {
    return total + age}, 0
       
);

console.log(totalAges);

// Assignment 2: Find the total price.

const prices = [2000, 5000, 3500];

const totalPrices = prices.reduce((total, price) =>{
    return total + price}, 

);

console.log(totalPrices)

// Assignment 3: Use reduce() to calculate the total cost of the cart

const cart = [
    {
        product: "Phone",
        price: 350000
    },
    {
        product: "Laptop",
        price: 900000
    },
    {
        product: "Mouse",
        price: 10000
    }
];

const sumPrices = cart.reduce((total, cart) =>{
    return total + cart.price}, 0
);

console.log(sumPrices);

// Assignment 4: Calculate the total years of experience.

const developers = [
    {
        name: "Maryam",
        experience: 2
    },
    {
        name: "John",
        experience: 5
    },
    {
        name: "Aisha",
        experience: 1
    },
    {
        name: "David",
        experience: 7
    }
];

const totalYears = developers.reduce((sum, developer)=>{
    return sum + developer.experience}, 0
);

console.log(totalYears);