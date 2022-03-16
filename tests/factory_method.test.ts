import { PenCreator, PencilCreator, Pen, Pencil }
  from '../creational/factory_method';

// test creation of Pen instance with PenCreator factory method
test('Create Pen instance with factory method of PenCreator', () => {
  expect(new PenCreator().createTool()).toStrictEqual(new Pen());
});

// test creation of Pencil instance with PencilCreator factory method
test('Create Pencil instance with factory method of PencilCreator', () => {
  expect(new PencilCreator().createTool()).toStrictEqual(new Pencil());
});

// test Pens instance properties and methods
test('Pens instance name is "Pen"', () => {
  expect(new Pen().name).toBe('Pen');
});

test('Draw line with pen', () => {
  expect(new Pen().drawLine()).toBe('Draw line with Pen');
});

test('Draw circle with pen', () => {
  expect(new Pen().drawCircle()).toBe('Draw circle with Pen');
});

// test Pencils instance properties and methods
test('Pencils instance name is "Pencil"', () => {
  expect(new Pencil().name).toBe('Pencil');
});

test('Draw line with pencil', () => {
  expect(new Pencil().drawLine()).toBe('Draw line with Pencil');
});

test('Draw circle with pencil', () => {
  expect(new Pencil().drawCircle()).toBe('Draw circle with Pencil');
});