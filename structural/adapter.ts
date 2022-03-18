interface FruitInterface {
  isFruit(): boolean;
  eatFruit(): string;
}

class Fruit implements FruitInterface {
  isFruit() {
    return true;
  }

  eatFruit() {
    return 'Eat the fruit';
  }
}

interface VegetableInterface {
  isVegetable(): boolean;
  makeSalad(): string;
}

class Vegetable implements VegetableInterface {
  isVegetable() {
    return true;
  }

  makeSalad() {
    return 'Made vegetable salad';
  }
}

class FruitAdapter extends Vegetable {
  private fruitToAdapt: FruitInterface;

  constructor(fruitToAdapt: FruitInterface) {
    super();
    this.fruitToAdapt = fruitToAdapt;
  }

  makeSalad(): string {
    return `Did not ${this.fruitToAdapt.eatFruit()}. Made salad`
  }
}

function clientCode() {
  const fruit = new Fruit();
  const fakeVeg = new FruitAdapter(fruit);

  fakeVeg.makeSalad();
}

clientCode();

export { Fruit, Vegetable, FruitAdapter };