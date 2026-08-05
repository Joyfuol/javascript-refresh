// async/await is simply a cleaner way to work with Promises.

// Example: 
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Download Complete!");
    }, 2000);
});

async function downloadFile() {
    const result = await promise;
    console.log(result);
}

downloadFile();

// Example 2
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Maryam");
        }, 1000);
    });
}

async function getUser() {
    const user = await fetchUser();
    console.log(user);
}

getUser();

// Handling Errors with try...catch

function login() {
    return new Promise((resolve, reject) => {
        reject("Wrong Password");
    });
}

async function checkLogin() {
    try {
        const result = await login();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

checkLogin();

// Assignment 1: Create an async function called: sayHello()

async function sayHello() {
    return "Hello Javascript";
}

sayHello().then (result => {
    console.log(result); 
});

// 🏆 Assignment 2: Create a Promise that resolves after 2 seconds with: Use await to print it.

const learning = new Promise( resolve => {
    setTimeout(() =>{
        resolve("Learning Async/Await");
    }, 2000);
});

async function learn() {
    const result = await learning;
    console.log(result);
}

learn ();

// Assignment 3: It should return a Promise that resolves after 1 second with:

function getCourse() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Frontend Engineering");
        }, 1000)
    });
}
async function course() {
    const course = await getCourse();
    console.log(course);

}

course();

// 🏆 Assignment 4 : Create a Promise that rejects with: Server Error

function server() {
    return new Promise ((resolve, reject) => {
        reject("Server Error");
    }); 
}

async function checkServer() {
    try {
        const result = await server();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

checkServer();