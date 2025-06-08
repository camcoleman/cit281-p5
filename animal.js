class Animal {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
const animal = ["Dog", "Cat", "Fish", "Bird"].map((name) => new Animal(name));
console.log(typeof animal[0]);

animals.forEach((animal)=> {
console.log()
})