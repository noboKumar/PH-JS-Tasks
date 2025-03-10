class Car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  carDetailes() {
    console.log(
      `This is your brand new ${this.brand} Model: ${this.model} which is ${this.color} from ${this.year}`
    );
  }
}

const myCar = new Car("BMW", "M5", "2021", "black");
const broCar = new Car("porshe", "911 GT", "2022", "white");

myCar.carDetailes();
broCar.carDetailes();

class Person {
  #status;
  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.#status = status;
  }
  status() {
    console.log(this.#status);
  }
}

const john = new Person("john", 22, "single");
john.status();
console.log(john);

greet(); // TypeError: greet is not a function
let greet = function() {
    console.log("Hi!");
};