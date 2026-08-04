// // What is map(): map() is an array method that creates a new array by transforming each item in the original array.

// // Example 1:

// // const numbers = [1, 2, 3, 4];

// // const doubledNumbers = numbers.map(number => number * 2);

// // console.log(doubledNumbers);

// // Example 2:

// // const fruits = [
// //     "Apple",
// //     "Orange",
// //     "Banana"
// // ];

// // const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

// // console.log(upperCaseFruits);

// // Example 3: 

// const names = [
//     "Maryam",
//     "John",
//     "Aisha"
// ];

// const greetings = names.map(name => `Hello ${name}`);

// console.log(greetings);

// // Assignment 1: Use map() to create a new array called: updatedScores. Each score should be increased by 10.

// const scores = [50, 60, 70, 80];

// const updatedScores = scores.map (score => score + 10) ;

// console.log(updatedScores);


// // Assignment 2: Use map() to convert every city to uppercase

// const cities = [
//     "lagos",
//     "abuja",
//     "ibadan"
// ];

// const upperCaseCities = cities.map(city => city.toUpperCase());

// console.log(upperCaseCities);

// // Assignment 3

// const foods = [
//     "Rice",
//     "Beans",
//     "Yam"
// ];

// const foodMessages = foods.map(food =>  `I love ${food}`);

// console.log(foodMessages);

// // map() with the index : sometimes you need not only the item, but also its position in the array.

// // array.map((item, index) => {
//     // use both item and index
// // });

// const fruits = [
//     "Apple",
//     "Orange",
//     "Banana"
// ];

// const numberedFruits = fruits.map((fruit, index) =>
//     `${index + 1}. ${fruit}`
// );

// console.log(numberedFruits);

// // Assignment 4: 

// // const students = [
// //     "Maryam",
// //     "John",
// //     "Aisha",
// //     "David"
// // ];

// // const numberedStudents = students.map((student, index) => 
// //     `Student ${index + 1} : ${student}`

// // );

// // console.log(numberedStudents);

// // Assignment 5: 

// const colors = [
//     "Red",
//     "Blue",
//     "Green"
// ];

// const numberedColors= colors.map((color, index) =>
//     `Color ${index} ${color}` 

// );  

// console.log(numberedColors);

// // Assignment 6:

// const prices = [2000, 3500, 1500];

// const formattedPrices = prices.map(price => `₦${price}`);

// console.log(formattedPrices);

// // Assignment 7: 

// // const products = [
// //     "Laptop",
// //     "Mouse",
// //     "Keyboard"
// // ];

// // const numberedProducts = products.map ( (product, index)=>
// // `Product ${index +1}: ${product}`
// // );

// // console.log(numberedProducts);

// // Next Level: map() with Objects

// const users = [
//     {
//         name: "Maryam",
//         profession: "Frontend Engineer"
//     },
//     {
//         name: "John",
//         profession: "Backend Engineer"
//     },
//     {
//         name: "Aisha",
//         profession: "UI/UX Designer"
//     }
// ];

// const userNames = users.map(user => user.name);

// console.log(userNames);

// // Assignment 1: se map() to create a new array containing only the brand names.

// const laptops = [
//     {
//         brand: "Apple",
//         model: "MacBook Pro"
//     },
//     {
//         brand: "Dell",
//         model: "XPS 15"
//     },
//     {
//         brand: "HP",
//         model: "Spectre"
//     }
// ];

// const brandNames = laptops.map (laptops => laptops.brand);

// console.log(brandNames);

// // Assignment 2: 

// const brandModel = laptops.map ( (laptop =>
//     `${laptop.brand} - ${laptop.model}`
// )

// );

// console.log(brandModel);

// // Assignment 3 (React-style):

// const students = [
//     {
//         name: "Maryam",
//         score: 95
//     },
//     {
//         name: "John",
//         score: 80
//     },
//     {
//         name: "Aisha",
//         score: 88
//     }
// ];

//   const studentScores = students.map( (student =>
//     `${student.name} scored ${student.score}`
//   )

//   );

//   console.log(studentScores)
