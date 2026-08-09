// // This gives us a Promise containing a response.  Part 1 — Basic Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         console.log(response);
//     });


//     // Part 2 — Fetch + .then() ...This converts the response body into usable JavaScript data. And because .json() also returns a Promise, we chain another .then().
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//         const names = users.map(user => user.name);

//         console.log(names);
//     });

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//         const emails = users.map(user => user.email);

//         console.log(emails);
//     });

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//         const usernames = users.map(user => user.username);
        
//         console.log(usernames)
//     })

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then( users => {
//         const userDetails = users.map(user =>  `${user.name} - ${user.email}`);

//         console.log(userDetails)
//     });

// //    Part 3 — Fetch + error handling
//     fetch("https://jsonplaceholder.typicode.com/incorrect")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("Something went wrong:", error);
//     });

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Failed to fetch users");
//         }

//         return response.json();
//     })
//     .then(users => {
//         console.log(users);
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then( response => {
//         if (!response.ok) {
//             throw new Error("Failed to fetch data");
//         }

//         return response.json();
//     })

//     .then(users => {
//         console.log(users);
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

//     fetch("https://jsonplaceholder.typicode.com/unknown")
//     .then( response => {
//         if(!response.ok) {
//             throw new Error("Failed to fetch data");
//         }

//         return response.json()
//     })
//     .then(users => {
//         console.log(users);
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

     

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("failed to read");
//         }

//         return response.json()
//     })
//     .then(users => {
//         const userInfo = users.map(user =>  `${user.name} - ${user.email}`);
//         console.log(userInfo)
    
//     })

//     .catch(error => {
//         console.log(error.message)
//     })

    // Part 4 — Fetch + async/await ← 

    // Example

//     async function getUsers() {
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );

//     const users = await response.json();

//     console.log(users);
// }

// getUsers();

// async function getUsers() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//             throw new Error("Failed to fetch users");
//         }

//         const users = await response.json();

//         console.log(users);

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// getUsers();

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        const usernames = users.map(user => user.username);

        console.log(usernames);

    } catch (error) {
        console.log(error.message);
    }
}

getUsers();

async function getUsers() {
    try{
        const response = await fetch( "https://jsonplaceholder.typicode.com/users"

        ) ;
        if(!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();
        const usernames = users.map(user => `${user.name} - ${user.email}`);
        console.log(usernames)
    } catch(error) {
        console.log(error.message);
    }
}

getUsers();