class Drink {
  private maker: IDrinkMaker;

  constructor(maker: IDrinkMaker) {
    this.maker = maker;
  }

  makeDrink(): string {
    let bottle: string = this.maker.setBottleMaterial();
    let taste: string = this.maker.setTaste();
    return `${bottle}. ${taste}`;
  }
}

interface IDrinkMaker {
  setBottleMaterial(): string;
  setTaste(): string;
}

class WaterMaker implements IDrinkMaker {
  setBottleMaterial() {
    return 'Bottle material is plastic';
  }

  setTaste() {
    return 'Water taste is no taste';
  }
}

class JuiceMaker implements IDrinkMaker {
  setBottleMaterial() {
    return 'Bottle material is paper';
  }

  setTaste() {
    return 'Juice taste is orange';
  }
}

function clientCode(maker: IDrinkMaker) {
  let drink = new Drink(maker);
  drink.makeDrink();
}

clientCode(new WaterMaker());
clientCode(new JuiceMaker());

export { Drink, WaterMaker, JuiceMaker };