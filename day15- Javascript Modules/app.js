import { add, subtract, multiply } from "./math.js";
import sayHello from "./greet.js";
import getUserName, {  getUserEmail, getUserRole } from "./user.js";
import getProductName, {getProductPrice, getProductCategory} from "./product.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(sayHello("Joyful"));




const user = {
    name: "Joyful",
    email: "dwisemaryam@gmail.com",
    role: "Frontend engineer"
};


console.log (getUserName(user));
console.log(getUserEmail(user));
console.log(getUserRole(user));


const product = {
    name: "Noor Twinset",
    price: 25000,
    category: "Modest Wear"
};

console.log(getProductName(product));
console.log(getProductPrice(product));
console.log(getProductCategory(product));



