// What is forEach()? : forEach() loops through an array and performs an action on every item.
// The biggest difference is:

// map()	forEach()
// Returns a new array	Returns nothing (undefined)
// Used when transforming data	Used when performing an action

// Think of it this way:

// map() → "Create something new."
// forEach() → "Do something."

// Example 1: Print each fruit.

// const fruits = [
//     "Apple",
//     "Orange",
//     "Banana"
// ];

// fruits.forEach(fruit => {
//     console.log(fruit);
// });


// Example 2: Print each number multiplied by 2.

const numbers = [1, 2, 3, 4];

numbers.forEach(number => {
    console.log(number * 2);
});

// Example 3 (Using the index)

const colors = [
    "Red",
    "Blue",
    "Green"
];

colors.forEach((color, index) => {
    console.log(`${index + 1}. ${color}`);
});

// Example 4 (Objects)

const developers = [
    {
        name: "Maryam",
        language: "JavaScript"
    },
    {
        name: "John",
        language: "Python"
    }
];

developers.forEach(developer => {
    console.log(`${developer.name} uses ${developer.language}`);
});

// Assignment 1: Print each city.

const cities = [
    "Lagos",
    "Abuja",
    "Ibadan"
];

cities.forEach( city => {
    console.log(city)
}

);

// Assignment 2: Print each fruit with numbering.

const fruits = [
    "Apple",
    "Orange",
    "Banana",
    "Mango"
];

fruits.forEach((  fruit, index) =>{
    console.log( `${index + 1}. ${fruit}`)
});

// Assignment 3: Print this sentence for each student.

const students = [
    "Maryam",
    "John",
    "Aisha"
];

students.forEach( student =>{
    console.log( ` Welcome ${student}`)
}

);

// Assignment 4 (Objects)

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

laptops.forEach(laptop =>{
    console.log( ` ${laptop.brand} - ${laptop.model}`)
});

// Assignment 5: Without using map(), use only forEach() to create this array: "HELLO MARYAM", "HELLO JOHN", "HELLO AISHA"

const names = [
    "Maryam",
    "John",
    "Aisha"
];



names.forEach( name =>{
    console.log( ` HELLO ${name.toUpperCase() }`)
})