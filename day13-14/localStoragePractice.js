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
console.log(`Welcome, ${user.name}`);

const storedUserDetails = localStorage.getItem("user");
if(storedUserDetails) {
    const user = JSON.parse(storedUserDetails);
    console.log(`Welcome, ${user.name}`);
} else {
    console.log("No user found")
}

const settings = {
  theme: "dark",
  fontSize: 18,
  notifications: true
};

localStorage.setItem("settings", JSON.stringify(settings));

const storedSettings = (localStorage.getItem("settings"));
if(storedSettings) {
    const settings = JSON.parse(storedSettings);

    if (settings.theme === "dark") {
        console.log("Dark mode is enabled");
    }
} else {
    console.log("Settings not found");
}
