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

// const cart = [
//     {
//         product: "Phone",
//         price: 350000
//     },
//     {
//         product: "Laptop",
//         price: 900000
//     },
//     {
//         product: "Mouse",
//         price: 10000
//     }
// ];

// const sumPrices = cart.reduce((total, cart) =>{
//     return total + cart.price}, 0
// );

// console.log(sumPrices);

// Assignment 4: Calculate the total years of experience.

// const developers = [
//     {
//         name: "Maryam",
//         experience: 2
//     },
//     {
//         name: "John",
//         experience: 5
//     },
//     {
//         name: "Aisha",
//         experience: 1
//     },
//     {
//         name: "David",
//         experience: 7
//     }
// ];

// const totalYears = developers.reduce((sum, developer)=>{
//     return sum + developer.experience}, 0
// );

// console.log(totalYears);

// Assignment 1: Using method chaining: Keep developers with 3 or more years of experience. Convert their names to uppercase.

const developers = [
    { name: "Maryam", experience: 2 },
    { name: "John", experience: 5 },
    { name: "Aisha", experience: 1 },
    { name: "David", experience: 7 }
];

const newDevelopers = developers
                     .filter (developer => developer.experience >= 3)
                     .map(developer => developer.name.toUpperCase());

                     console.log(newDevelopers);
                     
// Assignment 2: Using chaining: Keep only products costing ₦20,000 or more. Calculate the total price.

const cart = [
    { product: "Phone", price: 350000 },
    { product: "Laptop", price: 900000 },
    { product: "Mouse", price: 10000 },
    { product: "Keyboard", price: 20000 }
];

 const newCart = cart
                .filter(cart => cart.price >= 20000)
                .reduce((sum, cart)=>{
                   return sum + cart.price}, 0
                );

                console.log(newCart);

// Assignment 3: Using chaining: Keep students who passed (score ≥ 50). Convert their names to this format:

const students = [
    { name: "Maryam", score: 95 },
    { name: "John", score: 40 },
    { name: "Aisha", score: 88 },
    { name: "David", score: 52 }
];

const passedStudents = students
                      .filter(student => student.score >= 50)
                      .map (student => 
                        ` * ${student.name}`
                      );

                      console.log(passedStudents);

//    Assignment 4: Keep only active employees. Get only their salary values. Calculate the total salary.          

const employees = [
    { name: "Maryam", salary: 200000, active: true },
    { name: "John", salary: 80000, active: false },
    { name: "Aisha", salary: 300000, active: true },
    { name: "David", salary: 150000, active: true }
];

const activeEmployees = employees 
                       .filter(employee => employee.active)
                       .map(employee => employee.salary)
                       .reduce( (total, employee) =>
                       { return total + salary}, 0
                        
                    );

                       console.log(activeEmployees);