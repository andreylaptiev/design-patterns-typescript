// contains common info about objects
class Flyweight {
  brand: string;
  type: string;

  constructor(brand: string, type: string) {
    this.brand = brand;
    this.type = type;
  }
}

class Car {
  flyweight: Flyweight;
  model: string;
  color: string;

  constructor(flyweight: Flyweight, model: string, color: string) {
    this.model = model;
    this.color = color;
    this.flyweight = flyweight;
  }
}

// requires unique info about object and gets common info from flyweight
class CarFactory {
  flyweight: Flyweight;
  model: string;
  color: string;

  constructor(flyweight: Flyweight, model: string, color: string) {
    this.flyweight = flyweight;
    this.model = model;
    this.color = color;
  }

  createCar() {
    let car = new Car(this.flyweight, this.model, this.color);
    return `New car: ${car.flyweight.type}, ${car.flyweight.brand},
      ${car.model}, ${car.color}`;
  }
}

function clientCode() {
  let ferrariFlyweight = new Flyweight('Ferrari', 'sport');
  let model1 = new CarFactory(ferrariFlyweight, 'F430', 'red');
  model1.createCar();
  let model2 = new CarFactory(ferrariFlyweight, '488', 'yellow');
  model2.createCar();
}

clientCode();