class Car {
    constructor(brand, factory) {
        this.brand = brand
        this.factory = factory
        this.sound = 'honk'

    }

    present() {
        console.log(`Mobilku berbunyi ${this.sound}`);

    }
}



const inov = new Car('inova', 'toyota')

console.log(inov);
