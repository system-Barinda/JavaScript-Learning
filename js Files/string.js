class Car{
    constructor(brand)
    {
        this._brand = brand;
    }
    get brand()
    {
        return this._brand;
    }
    set brand(newBrand)
    {
         this._brand = newBrand;
    }
}
let car = new Car("BMW");

console.log(car.brand);
car.brand = "suzuki";
console.log(car.brand);