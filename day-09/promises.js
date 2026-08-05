// A Promise is an object that represents the result of an asynchronous operation. Think of it like ordering food online. 🍔 You place your order. At that moment, you don't have your food yet. The restaurant gives you a promise: "We'll deliver it."
// const promise = new Promise((resolve, reject) => {});

// Example 1 — Success

const myPromise = new Promise((resolve, reject) => {
    resolve("Data loaded successfully!");
});

myPromise.then(result => {
    console.log(result);
});

// Example 2 — Failure

const newPromise = new Promise((resolve, reject) => {
    reject("Network Error");
});

  newPromise.catch(error => {
    console.log(error);
});

// Example 3 — Using setTimeout()

const download = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Download Complete!");
    }, 2000);

});

download.then(result => {
    console.log(result);
});

// Example 4 — Success or Failure

const login = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Login Successful");
    } else {
        reject("Wrong Password");
    }

});

login
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

    // Assignment 1: Create a Promise that immediately says:

    const greet = new Promise((resolve) =>{
        resolve("Welcome Maryam");
});

    greet.then(result => {
            console.log(result);
        });

        // Assignment 2: a Promise that immediately rejects with:

        const addPromise = new Promise((_, reject) => {
            reject("Something went wrong");
        });

        addPromise.catch(error => {
            console.log(error);
        });

        // Assignment 3: Use setTimeout() inside a Promise.

        const file = new Promise((resolve) => {
            
            setTimeout(() => {
                resolve("File Uploaded Successfully");
            },2000)
            
        });

        file.then(result => {
            console.log(result);
        });

        // Assignment 4: Create this Promise:If true: Payment Successful,Otherwise Payment Failed. Use: if, resolve(), reject(),then(), catch()
     const payment = new Promise ((resolve, reject) => {
         
        const paymentSuccessful = true;

        if (paymentSuccessful) {
            resolve( "Payment Successful");
        } else {
            reject("Payment Failed");
        }
     });

     payment
     .then(result => {
        console.log(result);
     })
     .catch(error => {
        console.log(error);
     })