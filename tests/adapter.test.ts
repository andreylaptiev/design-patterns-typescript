import { Fruit, Vegetable, FruitAdapter }
  from '../structural/adapter'

test(('Adapt fruit methods to get vegetable method results'), () => {
  const fruit = new Fruit();
  const fakeVeg = new FruitAdapter(fruit);
  expect(fakeVeg.makeSalad()).toBe('Did not Eat the fruit. Made salad');
});