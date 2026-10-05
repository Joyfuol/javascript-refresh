class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

   set price(value) {
    if (value < 1000) {
        console.log("Price cannot be below ₦1,000");
        return;
    }

    this._price = value;
}
    get price() {
        return this._price;
    }
    get displayPrice() {
        return `₦${this._price.toLocaleString()}`
    }
}

const product = new Product("Noor Twinset", 25000);

console.log(product.price);

product.price = 500;

console.log(product.price);

product.price = 30000;

console.log(product.price);