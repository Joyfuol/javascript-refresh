// Instead of taking things out... It puts things into a box.

// Example 1: "Give me the first fruit... and put the rest into another array."

const fruits = [
    "Apple",
    "Orange",
    "Banana",
    "Mango"
];

const [firstFruit, secondFruit, ...otherFruits] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(otherFruits);

// Example2: 

const numbers = [10, 20, 30, 40, 50];

const [firstNumber, ...remainingNumbers] = numbers;

console.log(firstNumber);
console.log(remainingNumbers);

// Rest Operator with Objects

const user = {
    name: "Maryam",
    age: 30,
    profession: "Frontend Engineer",
    country: "Nigeria"
};

const { name, ...details } = user;

console.log(name);

console.log(details);

// Real React example

const props = {
    userName: "Maryam",
    age: 30,
    country: "Nigeria"
};

const { userName, ...otherProps } = props;

console.log(userName,);

console.log(otherProps);

// Assignment 1: Use the Rest Operator to create: Fitst color and remainingColors.

const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White"

];

const [firstColor, ...remainingColors] = colors;

console.log(firstColor);
console.log(remainingColors);


// Assignment 2: Using this array: Create student1 and otherStudents.

const students = [
    "Maryam",
    "John",
    "Aisha",
    "David",
    "Samuel"
];

const[student1, ...otherStudents] = students ;

console.log(student1,);
console.log(otherStudents);

// Assignment3: Using the Rest Operator, create: firstMonth, secondMonth, remainingMonths. Print all three.

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
];

const [firstMonth, secondMonth, ...remainingMonths] = months;

console.log( firstMonth);
console.log( secondMonth);
console.log( remainingMonths);

// Assignment4:  Use object destructuring with the Rest Operator to create: name, role, otherDetails

const developer = {
    newName: "Maryam",
    role: "Frontend Engineer",
    experience: "1 year",
    language: "JavaScript",
    framework: "React"
};

const { newName, role, ...otherDetails} = developer;

console.log(newName);
console.log(role);
console.log(otherDetails);