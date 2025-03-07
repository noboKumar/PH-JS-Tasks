class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving.`);
  }
}
const myVehicle = new Vehicle("honda", "xlr8");
// console.log(myVehicle);

class Car extends Vehicle {
  constructor(brand, model, color) {
    super(brand, model);
    this.color = color;
  }
  drive() {
    super.drive();
  }
}

const myCar = new Car("toyota", "lancer", "black");
myCar.drive();
console.log(myCar);
