const user = {
    name: "Joyful",
    email: "dwisemaryam@gmail.com",
    role: "Frontend Engineer",

};

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name);

 localStorage.removeItem("user");
 console.log(localStorage.getItem("user"));
// console.log(removeUser);
// console.log(user)
