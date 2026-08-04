// What is find(): find() returns the first item in an array that matches a condition. If nothing matches, it returns undefined.
// const result = array.find(item => condition);

// Example 1: Find a number

// const numbers = [10, 20, 30, 40, 50];

// const result = numbers.find(number => number > 25);

// console.log(result);

// Example 2: Find a fruit

const fruits = [
    "Apple",
    "Orange",
    "Banana",
    "Mango"
];

const fruit = fruits.find(fruit => fruit === "Banana");

console.log(fruit);

// Example 3: Find an object


// const users = [
//     {
//         id: 1,
//         name: "Maryam"
//     },
//     {
//         id: 2,
//         name: "John"
//     },
//     {
//         id: 3,
//         name: "Aisha"
//     }
// ];

// const user = users.find(user => user.id === 2);

// console.log(user);

// Example 4: If nothing is found

// const numbers = [1, 2, 3];

// const result = numbers.find(number => number > 10);

// console.log(result);

// Assignment 1: Find the first number greater than 50.

const numbers = [20, 45, 60, 80];

const result = numbers.find( number => number > 50);

console.log(result);


// Assignment 2: Find "React".

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js"
];


const skill = skills.find(skill => skill === "React");

console.log(skill);


// Assignment 3: Find the developer with 5 years of experience.

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
        name: "David",
        experience: 7
    }
];

const developer = developers.find(developer => developer.experience === 5);

console.log(developer);

// Assignment 4: Find the laptop whose brand is "Dell".

const laptops = [
    {
        brand: "Apple",
        model: "MacBook Pro"
    },
    {
        brand: "Dell",
        model: "XPS 15"
    },
    {
        brand: "HP",
        model: "Spectre"
    }
];

const laptop = laptops.find( laptop => laptop.brand === "Dell");

console.log(laptop);

// Exercise 5: Suppose an API returns: Use find() to get the user whose id is 3. Then print only the user's name.

const users = [
    {
        id: 1,
        name: "Maryam"
    },
    {
        id: 2,
        name: "John"
    },
    {
        id: 3,
        name: "Aisha"
    }
];

const user = users.find( user => user.id === 3);

console.log(user.name);