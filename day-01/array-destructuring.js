
// Array destructuring is an ES6 feature that allows you to extract values from an array and assign them to variables in a single statement. It makes the code shorter, cleaner, and easier to read.

// Practice object and array destructuring.

const foods = [
    "Rice",
    "Beans",
    "Bread",
    "Plantain"
];

const [first, second, third, fourth] = foods;

console.log("Second Food:", second);
console.log("Third Food:", third);
console.log("Fourth Food:", fourth)


// Create an array of colors:

const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White"
];

const [ firstColor, secondColor, thirdColor,  fourthColor, ] = colors;

console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Third Color:", thirdColor);
console.log("Fourth Color:", fourthColor);

// Using the same array Only extract Green White without creating variables for Red, Blue, or Black.:
const [, , greenColor, , whiteColor] = colors;

console.log("Green Color:", greenColor);
console.log("White Color:", whiteColor);

// Exercise 1: Extract only:firstFruit, secondFruit and Print both.

const fruits = [
    "Apple",
    "Orange",
    "Banana",
    "Mango",
    "Pineapple"
];

const[firstFruit, secondFruit] = fruits;

console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);

// Exercise 2: Using the same array, extract only: Banana Pineapple

const[, , thirdFruit, , fifthFruit] = fruits;

console.log("Third Fruit:", thirdFruit);
console.log("Fifth Fruit:", fifthFruit);


// Exercise 3: Extract: firstNumber, secondNumber, thirdNumber

const numbers = [10, 20, 30, 40, 50];

const [firstNumber, secondNumber, thirdNumber ] = numbers;

console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);
console.log("Third Number:", thirdNumber );

// Exercise 4 : Using the same array, extract only: 40, 50

const [, , , fourthNumber, fifthNumber] = numbers;

console.log("Fourth Number:", fourthNumber);
console.log("Fifth Number:", fifthNumber);

// Exercise 5:Extract all four names using destructuring.

const students = [
    "Maryam",
    "John",
    "Aisha",
    "David"
];

const [student1, student2, student3, student4] = students;

console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);
console.log("Student 4:", student4);


// Exercise 6:Without writing: countries[0], countries[1], countries[2] use destructuring to print only: Nigeria, Kenya, South Africa

const countries = [
    "Nigeria",
    "Ghana",
    "Kenya",
    "Egypt",
    "South Africa"
];

const [country1, , country3, , country5] = countries;

console.log("First Country:", country1);
console.log("Third Country:", country3);
console.log("Fifth Country:", country5);

// Exercise 7: what will this code print?

// const colors = [
//     "Red",
//     "Blue",
//     "Green"
// ];

// const [a, b, c] = colors;

// console.log(a);
// console.log(b);
// console.log(c);

// Red
// Blue
// Green


// Exercise 8: Extract the first three skills. Print them with labels., Extract only React and TypeScript without creating variables for the other skills.

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript"
];

const[skill1, skill2, skill3] = skills;

console.log("First Skill:", skill1);
console.log("Second Skill:", skill2);
console.log("Third Skill:", skill3);

const [ , , , skill4, , skill6] = skills;

console.log("Fourth Skill:", skill4);
console.log("Sixth Skill:", skill6);


