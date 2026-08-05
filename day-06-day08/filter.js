
// //   Next topic: filter(): The difference is: map() transforms every item into something else. filter() removes items that don't meet a condition.

// // const passedStudents = students.filter(student => student.score >= 50);

// // const numbers = [1, 2, 3, 4, 5, 6];

// // const evenNumbers = numbers.filter(number => number % 2 === 0);

// // console.log(evenNumbers);

// // filter() creates a new array containing only the items that pass a condition. It does not modify the original array.
// // Syntax : 
// // const newArray = array.filter(item => condition);

// // Example 1:

// const numbers = [10, 15, 20, 25, 30];

// const greaterThan20 = numbers.filter(number => number > 20);

// console.log(greaterThan20);

// // Example 2:

// // const fruits = [
// //     "Apple",
// //     "Orange",
// //     "Banana",
// //     "Mango"
// // ];

// // const longNames = fruits.filter(fruit => fruit.length > 5);

// // console.log(longNames);

// // filter() with objects : Keep only students who passed.

// // const students = [
// //     {
// //         name: "Maryam",
// //         score: 95
// //     },
// //     {
// //         name: "John",
// //         score: 40
// //     },
// //     {
// //         name: "Aisha",
// //         score: 80
// //     }
// // ];

// // const passedStudents = students.filter(
// //     student => student.score >= 50
// // );

// // console.log(passedStudents);

// // Assignment 1: Use filter() to keep only ages that are 18 or older.

// const ages = [12, 18, 25, 15, 30];

// const newAges = ages.filter( age => age >= 18);

// console.log(newAges);

// // Assignment 2: Keep only countries whose names have more than 6 letters.

// const countries = [
//     "Nigeria",
//     "Ghana",
//     "Canada",
//     "Kenya"
// ];

// const longCountries = countries.filter ( country => country.length > 6 );

// console.log(longCountries);

// // Assignment 3: Keep only products costing 100000 or more.

// const products = [
//     {
//     name: "Laptop",
//     price: 500000
// },
//     {
//         name: "Mouse",
//         price: 5000
//     },
//     {
//         name: "Monitor",
//         price: 120000
//     }
// ];

// const greaterThan100000 = products.filter ( product => product.price >= 100000);

// console.log(greaterThan100000 );

// // Assignment 4: Keep only developers with 3 or more years of experience.

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
        experience: 7
//     }
// ];

// const newDevelopers = developers.filter (developer => developer.experience >= 3);

// console.log(newDevelopers);

// Method Chaining:
// Example 1:
const students = [
    {
        name: "Maryam",
        score: 95
    },
    {
        name: "John",
        score: 40
    },
    {
        name: "Aisha",
        score: 88
    }
];

const passedNames = students
    .filter(student => student.score >= 50)
    .map(student => student.name);

console.log(passedNames);

// Example 2

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
        name: "Monitor",
        price: 120000
    }
];

const expensiveProducts = products
    .filter(product => product.price >= 100000)
    .map(product => product.name);

console.log(expensiveProducts);

// Assignment 1: eturn only the names of developers with 3 or more years of experience.

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

const newDevelopers = developers
       .filter(developer => developer.experience >=3)
       .map(developer => developer.name);

       console.log(newDevelopers);

    //    🏆 Assignment 2: Keep only employees earning 100000 or more.

    const employees = [
    {
        name: "Sarah",
        salary: 200000
    },
    {
        name: "James",
        salary: 80000
    },
    {
        name: "Grace",
        salary: 300000
    }
];

const newEmployees = employees
     .filter(employee => employee.salary >= 100000)
     .map(employee => employee.name);

     console.log(newEmployees);

    //  🏆 Assignment 3: Keep only products whose quantity is 2 or more. Return only the product names.

    const cart = [
    {
        product: "Phone",
        quantity: 2
    },
    {
        product: "Laptop",
        quantity: 1
    },
    {
        product: "Mouse",
        quantity: 4
    }
];

const newCart = cart
      .filter(item => item.quantity >= 2)
      .map(item => item.product);

      console.log(newCart);

    //   Assignment 4: Return only the names of active users.

    const users = [
    {
        name: "Maryam",
        active: true
    },
    {
        name: "John",
        active: false
    },
    {
        name: "Aisha",
        active: true
    },
    {
        name: "David",
        active: false
    }
];

const activeUsers = users
      .filter( user=> user.active)
      .map(user => user.name);

      console.log(activeUsers);