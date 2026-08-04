// some() checks whether at least one item matches a condition. It returns true or false.
// Syntax:  const result = array.some(item => condition);

// Example 1: 

// const numbers = [10, 20, 30, 40];

// const hasLargeNumber = numbers.some(number => number > 25);

// console.log(hasLargeNumber);

// Example 2: 

// const numbers = [5, 8, 10];

// const hasOddNumber = numbers.some(number => number % 2 !== 0);

// console.log(hasOddNumber);

// Example 3: 

const fruits = [
    "Apple",
    "Orange",
    "Banana"
];

const hasMango = fruits.some(fruit => fruit === "Mango");

console.log(hasMango);

// Example 4 (Objects)

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

const hasSeniorDeveloper = developers.some(
    developer => developer.experience >= 5
);

console.log(hasSeniorDeveloper);

// Assignment 1: Check if there is any number greater than 100.

const numbers = [20, 40, 80, 150];

const greaterThan100 = numbers.some(number => number > 100);

console.log(greaterThan100);

// Assignment 2: Check whether "React" exists.

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
]; 

const isReact = skills.some( skill => skill === "React");

console.log(isReact);

// Assignment 3 :  Check if there is any student who scored below 50.

const students = [
    {
        name: "Maryam",
        score: 95
    },
    {
        name: "John",
        score: 45
    },
    {
        name: "Aisha",
        score: 88
    }
];

const studentBelow50 = students.some(student => student.score < 50);

console.log(studentBelow50 );

// Assignment 4: Check whether any laptop is made by HP.

const laptops = [
    {
        brand: "Apple"
    },
    {
        brand: "Dell"
    },
    {
        brand: "Lenovo"
    }
];

const laptopName = laptops.some(laptop => laptop.brand === "HP");

console.log(laptopName);

// Assignment: Without using find(), check if a user with id = 3 exists.

const users = [
    { id: 1, name: "Maryam" },
    { id: 2, name: "John" },
    { id: 3, name: "Aisha" }
];

const user = users.some( user => user.id ===3);

console.log(user)