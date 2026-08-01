// Object destructuring is one of the most important ES6 features. uses property name


// const user = {
//     name: "Maryam",
//     age: 30,
//     profession: "Frontend Engineer",
//     country: "Nigeria"
// };

// const { name, profession } = user;

// console.log(name);
// console.log(profession);

// // Exercise 2 (Easy): Using the same object, extract: age and country


// const { age, country } = user;

// console.log(age);
// console.log(country);

// 🟡 Exercise 3: xtract all the properties.

const laptop = {
    brand: "Apple",
    model: "MacBook Pro M2 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    color: "Space Gray"
};

const{ brand, model, ram, storage, color} = laptop;

console.log("Brand:", brand);
console.log("Model:", model);
console.log("RAM:", ram);
console.log("Storage:", storage);
console.log("Color:", color);

// Exercise 4: Rename them while destructuring. create variables called: fullName, userAge, Then print them.

const user = {
    name: "Maryam",
    age: 30
};



const { name: fullName, age: userAge } = user;

console.log(fullName);
console.log(userAge);


// 🟡 Exercise: Extract: title, price: Rename them to: bookTitle, bookPrice. Print both.

const book = {
    title: "JavaScript Mastery",
    author: "John Doe",
    pages: 450,
    price: 5000
};






const {title: bookTitle, price: bookPrice} = book;

console.log("Title:", bookTitle);
console.log("Price:", bookPrice);

// Exercise 6: Extract only: name,rank. Rename them to: husbandName, militaryRank,Print both.

const husband = {
    name: "Ibrahim Yomi Babatunde",
    rank: "Captain",
    occupation: "Nigerian Army",
    yearsInMilitary: 6,
    married: true
};




const {name : husbandName, 
      rank: militaryRank
    } = husband;


console.log( husbandName);
console.log( militaryRank);