// A callback is simply a function passed into another function to be executed later.

// Example 1:

function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    callback("Maryam");
}

processUser(greet);

// Example 2:

function welcome(name) {
    console.log(`Welcome ${name}`);
}

function registerUser(callback) {
    console.log("Registering user...");
    callback("John");
}

registerUser(welcome);

// Example 3: Using an arrow function as the callback.

function process(callback) {
    callback("JavaScript");
}

process(language => {
    console.log(`Learning ${language}`);
});

// Assignment 1: Complete this code.

function greet(name) {
    console.log(`Hello ${name}`);
}

function login(callback) {
    callback("Maryam");
};

login(greet);

// Assignment 2: 

function sayGoodMorning(name) {
    console.log(`Good morning ${name}`);
}

function startDay(callback) {
    callback("John");
};

startDay(sayGoodMorning);

// Assignment 3: Use an arrow function as the callback.

function introduce(callback) {
    callback("Frontend Engineering");
}

introduce(profession => {
    console.log( `I love ${profession}`);
});

// Assignment 4: 

function calculate(callback) {
    callback(10, 20);
}

calculate((num1, num2) => {
    console.log(num1 + num2);
});