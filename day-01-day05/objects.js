// // An object stores related information together using key-value pairs.
// // Lesson 1: Creating Objects

// const user = {
//     name: "Maryam",
//     age: 30,
//     profession: "Frontend Engineer",
//     country: "Nigeria"
// };

// console.log(user);

// // Lesson 2: Accessing Properties (Dot Notation) : Use a dot (.) when you know the property name.

// console.log(user.name);
// console.log(user.age);
// console.log(user.profession);
// console.log(user.country);

// // Lesson 3: Accessing Properties (Bracket Notation). Sometimes the property name is stored in a variable.

// console.log(user["name"]);
// console.log(user["profession"]);

// // Dot vs Bracket:Most of the time you'll use:user.name



// // You'll use bracket notation when the property name is dynamic.

// // Example:

// const key = "country";

// console.log(user[key]);

// // Lesson 4: Updating Properties

// user.age = 31;

// console.log(user.age);

// // Lesson 5: Add New Properties

// user.favoriteLanguage = "JavaScript";

// console.log("Details:",  user);

// // Lesson 6: Delete Properties

// delete user.country;

// console.log(user);

// // Assignment 1: Toyota, Corolla

// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2022,
//     color: "Black"
// };

// console.log(car.brand);
// console.log(car.model);

// // Assignment 2: Using the same object, print: 2022, Black

// console.log(car["year"]);
// console.log(car["color"]);

// // Assignment 3: Update the car color to white

//  car.color = "White";

// console.log( car);

// // Assignment 4 :Add a new property: fuel: "Petrol"

// car.fuel = "Petrol";

// console.log(car)

// // Assignment 5: Delete: year

// delete car.year;

// console.log(car);



// Lesson 2: Nested Objects
// // Example 1: 

// const user = {
//     name: "Maryam",
//     age: 30,

//     address: {
//         country: "Nigeria",
//         state: "Lagos",
//         city: "Ojo"
//     }
// };

// console.log(user);

// // Accessing Nested Properties

// console.log(user.address.country);

// console.log(user.address.state);

// console.log(user.address.city);

// // Updating Nested Properties
// user.address.city = "Festac";

// console.log(user.address.city);

// // Adding a Nested Property 

// user.address.street = "23 Marine Road";

// console.log(user.address);

// // Deleting a Nested Property: 

// delete user.address.state;

// console.log(user.address);

// // Example 2: Access the nested properties:

// const product = {
//     id: 1,
//     name: "MacBook Pro",

//     price: {
//         amount: 2500000,
//         currency: "NGN"
//     },

//     seller: {
//         name: "Apple Store",
//         verified: true
//     }
// };

// console.log(product.price.amount);

// console.log(product.price.currency);

// console.log(product.seller.name);

// console.log(product.seller.verified);

// // 🏆 Assignment 1: Google, USA, California

// const company = {
//     name: "Google",

//     location: {
//         country: "USA",
//         city: "California"
//     }
// };

// console.log(company.name);
// console.log(company.location.country);
// console.log(company.location.city);

// // Assignment 2: Update: California to Mountain View

// company.location.city = "Mountain View";

// console.log(company.location.city);

// // Assignment 3: Add zipCode: "94043"

// company.location .zipCode =  "94043";

// console.log( company.location);

// // Assignment 4: Delete: country

// delete company.location.country;

// console.log(company.location);

// // Assignment 5: Print: Student name, School name, Department, Graduation year

// const student = {
//     name: "Maryam",

//     school: {
//         name: "Yaba College of Technology",
//         department: "Biochemistry",
//         graduationYear: 2019
//     }
// };

// console.log(student.name);
// console.log(student.school.name);
// console.log(student.school.department);
// console.log(student.school.graduationYear);

// Next Lesson: Object Methods

const person = {
    name: "Maryam",

    greet() {
        console.log("Hello!");
    }
};

person.greet();

// 3 methods to know: Object.keys(), Object.values(), Object.entries()

const user = {
    name: "Maryam",
    age: 30,
    country: "Nigeria"
};

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));