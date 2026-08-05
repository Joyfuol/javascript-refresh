// every() checks whether every item in an array satisfies a condition. It returns: true if all items match. false if even one item doesn't match.
// Example:

// Syntax: const result = array.every(item => condition);

const scores = [90, 85, 70];

const allPassed = scores.every(score => score >= 50);

console.log(allPassed);

// Example 1: Check if every number is greater than 5.

// const numbers = [10, 20, 30];

// const result = numbers.every(number => number > 5);

// console.log(result);

// Example 2

const numbers = [10, 20, 3];

const result = numbers.every(number => number > 5);

console.log(result);

// Example 3 (Strings): 

const skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

const allStrings = skills.every(skill => typeof skill === "string");

console.log(allStrings);

// Example 4 (Objects): 

const students = [
    {
        name: "Maryam",
        score: 90
    },
    {
        name: "John",
        score: 80
    },
    {
        name: "Aisha",
        score: 75
    }
];

const everyonePassed = students.every(
    student => student.score >= 50
);

console.log(everyonePassed);

// Assignment 1: Check if every age is at least 18.

const ages = [20, 25, 30, 18];

const age = ages.every( age => age >= 18);

console.log(age);

// Assignment 2: Check whether every country name has more than 4 letters.

const countries = [
    "Nigeria",
    "Canada",
    "Kenya"
];

const country = countries.every(country => country.length >4);

console.log(country);


// Assignment 3: Check whether every developer has at least 2 years of experience.

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

const developer = developers.every(developer => developer.experience >=2);

console.log(developer);

// Assignment 4: Check if every laptop costs at least ₦100,000.

const laptops = [
    {
        brand: "Apple",
        price: 2500000
    },
    {
        brand: "Dell",
        price: 800000
    },
    {
        brand: "HP",
        price: 95000
    }
];

const laptop = laptops.every(laptop => laptop.price >=100000);

console.log(laptop);

// Assignment 5: Without using find(), filter(), or some(), check whether every user has an id greater than 0.

const users = [
    { id: 1, name: "Maryam" },
    { id: 2, name: "John" },
    { id: 3, name: "Aisha" }
];

const user = users.every(user => user.id >0);

console.log(user);