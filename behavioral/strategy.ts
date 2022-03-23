export {};

class Coffee {
  private coffeeType: CoffeeMachine;

  constructor(coffeeType: CoffeeMachine) {
    this.coffeeType = coffeeType;
  }

  setCoffeeType(coffeeType: CoffeeMachine): void {
    this.coffeeType = coffeeType;
  }

  letsMakeCoffee(): void {
    this.coffeeType.makeCoffee();
  }
}

// strategy interface
interface CoffeeMachine {
  makeCoffee(): string;
}

// concrete strategy
class Latte implements CoffeeMachine {
  makeCoffee(): string {
    console.log('Latte made');
    return 'Latte made';
  }
}

// concrete strategy
class Americano implements CoffeeMachine {
  makeCoffee(): string {
    console.log('Americano made');
    return 'Americano made';
  }
}

// concrete strategy
class Cappuccino implements CoffeeMachine {
  makeCoffee(): string {
    console.log('Cappuccino made');
    return 'Cappuccino made';
  }
}

function clientCode() {
  const latte = new Latte();
  const americano = new Americano();
  const cappuccino = new Cappuccino();

  const coffee = new Coffee(latte);
  coffee.letsMakeCoffee(); // 'Latte made'

  coffee.setCoffeeType(americano);
  coffee.letsMakeCoffee(); // 'Americano made'

  coffee.setCoffeeType(cappuccino);
  coffee.letsMakeCoffee(); // 'Cappuccino made'
}

clientCode();