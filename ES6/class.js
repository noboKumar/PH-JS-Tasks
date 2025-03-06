class car {
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

const myCar = new car("BMW", "M5", "2021", "black");
const broCar = new car("porshe", "911 GT", "2022", "white");

myCar.carDetailes();
broCar.carDetailes();
