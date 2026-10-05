class products  {
constructor (name, price, category) {
    this.name = name;
    this.price= price;
    this.category= category;
}
 getDetails() {
    return `Product: ${this.name} | Price:${this.price} | Category:${this.category}`
 }
}

const product1 = new products ("Noor Twinset", 25000, "Modest Wear");
const product2 = new products ("Aduke", 30000, "Bubu");

console.log(product1.getDetails());
console.log(product2.getDetails());