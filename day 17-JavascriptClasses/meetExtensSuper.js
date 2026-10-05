class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return `Name: ${this.name} | Price: ₦${this.price.toLocaleString()}`;
    }
}

class Jilbab extends Product {
    constructor(name, price, layers) {
        super(name, price);
        this.layers = layers;
    }

    getJilbabDetails() {
        return `${this.getDetails()} | Layers: ${this.layers}`;
    }
}

const outfit = new Jilbab("Sakeenah Jilbab", 35000, 2);

console.log(outfit.getDetails());
console.log(outfit.getJilbabDetails());