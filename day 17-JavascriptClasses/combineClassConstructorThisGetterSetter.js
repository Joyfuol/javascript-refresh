class Product {
    constructor(name, category, price) {
    this.name= name;
    this.category = category;
    this.price = price;
 }

   set price(value) {
    if(value < 1000) {
        console.log ("Price cannot be below 1000");
        return;
    }
    this._price = value;
   }

   get price(){
    return this._price
   }

   applyDiscount(percentage) {
       const discount = (percentage / 100) * this.price;
       this.price = this.price - discount
   }
   get displayPrice() {
    return `₦${this.price.toLocaleString()}`;
}
    getDetails() {
        return `${this.name} | ${this.category} | ${this.displayPrice}`
    }

}

const product1 = new Product(
    "Noor Twinset",
    "Modest Wear",
    25000
);

const product2 = new Product(
    "Aduke",
    "Bubu",
    30000
);


product1.applyDiscount(10);
product2.applyDiscount(20);

console.log(product1.getDetails());
console.log(product2.getDetails());