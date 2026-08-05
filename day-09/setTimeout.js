// setTimeout() waits for a specified amount of time, then runs a function.
// Syntax: setTimeout(callback, timeInMilliseconds);

// Remember:

// 1000 milliseconds = 1 second
// 2000 milliseconds = 2 seconds
// 5000 milliseconds = 5 seconds

// Example 1

// console.log("Start");

// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 2000);

// console.log("End");

// // Example 2

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 1000);

// console.log("3");

// // Example 3

// setTimeout(() => {
//     console.log("Learning JavaScript...");
// }, 3000);

// // Example 4:Using a named function.
// function greet() {
//     console.log("Hello Maryam");
// }

// setTimeout(greet, 2000);

// // Assignment 1: Predict the output before running the code, then run it to check yourself.

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// console.log("C");

// // Assignment 2: Print: Loading... Immediately. Then after 2 seconds, print: Finished loading!

// console.log("Loading...");

// setTimeout(() =>{
//     console.log("Finished Loading!")
    
// },2000);

// // Assignment 3: Create a function called:

// function sayWelcome() {
//     console.log("Welcome to Javascript")
// }

// setTimeout( sayWelcome, 3000);

// //  Assignment 4: Predict the output before running.

// console.log("Start");

// setTimeout(() => {
//     console.log("Middle");
// }, 0);

// console.log("End");

console.log("1");

setTimeout(() => {
    console.log("2");
}, 3000);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 1000);

console.log("5");