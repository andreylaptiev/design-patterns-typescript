import { Drink, WaterMaker, JuiceMaker } from "../structural/bridge";

test(('Make water'), () => {
  const water = new WaterMaker();
  const drink = new Drink(water);
  expect(drink.makeDrink()).toBe(
    'Bottle material is plastic. Water taste is no taste'
    );
});

test(('Make juice'), () => {
  const juice = new JuiceMaker();
  const drink = new Drink(juice);
  expect(drink.makeDrink()).toBe(
    'Bottle material is paper. Juice taste is orange'
    );
});