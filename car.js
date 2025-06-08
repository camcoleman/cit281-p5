class Car{
    constructor(make, model, year, price = 0, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.color = color || "";
    }
    getCarInfo(){
        return `${this.year} ${this.make} ${this.year} ${this.price} ${this.color}`;
    }
    setPrice(price){
        this.price = price;
    }
    setColor(color){
        this.color = color;
    }
    getPrice(){
        return this.price;
    }
    getColor(){
        return this.color;
    }
}


let Car1 = new Car ("Toyota", "Corolla", 2020);
 Car1 = "Red 20000"

let Car2 = new Car ("Honda", "Civic", 2021);

console.log(Car1.getCarInfo());
console.log(Car2.getCarInfo());