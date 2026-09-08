localStorage.setItem( "name","Joyful");

const storedName = localStorage.getItem("name");
console.log(storedName);

localStorage.setItem("age", 30);

const storedAge = localStorage.getItem("age");

console.log(storedAge);

console.log(typeof storedAge);

const user = {
  name: "Joyful",
  age: 30,
  role: "Frontend Developer"
};

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser);
console.log(storedUser.name);
console.log(storedUser.age);
console.log(typeof storedUser);

const settings = {
  theme: "dark",
  fontSize: 18,
  notifications: true
};

localStorage.setItem("settings", JSON.stringify(settings));

const storedSettings = JSON.parse(localStorage.getItem("settings"));

console.log(storedSettings);
console.log(storedSettings.theme);
console.log(storedSettings.fontSize);
console.log(storedSettings.notifications);
console.log(typeof storedSettings);