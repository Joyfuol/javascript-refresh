class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }
    applyDiscount(percentage) {
    const discount = (percentage / 100) * this.price;
    this.price = this.price - discount;
}
    showProduct() {
        return `${this.name} - ₦${this.price}`;
    }
    
}

const product1 = new Product("Noor Twinset", 25000);
const product2 = new Product("Aduke", 30000);

product1.changePrice(28000);
product2.changePrice(35000);
product1.applyDiscount(10);
product2.applyDiscount(5)

console.log(product1.showProduct());
console.log(product2.showProduct());

