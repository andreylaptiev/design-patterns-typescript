import Singleton from '../creational/singleton'

test(('Singleton returns existing instance'), () => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();
  expect(s2).toStrictEqual(s1);
});