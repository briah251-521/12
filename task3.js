function Car1(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

function Car2(brand, model, owner) {
  this.brand = brand;
  this.model = model;
  this.owner = owner;
}

let car1 = new Car1("Toyoda", "Tacoma", 1995);
let car2 = new Car2("ford", "fusion", "dad");

let car3 = {
  ...car1,
  ...car2,
};

console.log(car1);
console.log(car2);
console.log(car3);