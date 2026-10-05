class Product {
 constructor(name, price, category) {
     this.name = name;
     this.price = price;
     this.category = category;
 }  
  changePrice (newPrice) {
    this.price = newPrice
  }
  applyDiscount (percentage) {
    const discount = (percentage / 100 )* this.price;
    this.price = this.price - discount;
  }
  getDetails () {
    return `${this.name} - ₦${this.price} - ${this.category}`
  }
}

const product1 = new Product ("Noor Twinset", 25000, "Modest Wear");
const product2 = new Product ("Aduke", 30000, "Bubu" );

product1.changePrice(28000);
product1.applyDiscount(10);
product2.applyDiscount(20)

console.log(product1.getDetails())
console.log(product2.getDetails());