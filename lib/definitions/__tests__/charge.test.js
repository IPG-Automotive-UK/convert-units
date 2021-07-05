const convert = require('../..');

test('Co to Co', () => {
  expect(convert(1).from('c').to('c')).toBe(1);
});

test('Co to mC', () => {
  expect(convert(1).from('c').to('mC')).toBe(1000);
});

test('mC to Co', () => {
  expect(convert(1).from('mC').to('c')).toBe(1 / 1000);
});

test('Co to μC', () => {
  expect(convert(1).from('c').to('μC')).toBe(1000000);
});

test('μC to Co', () => {
  expect(convert(1).from('μC').to('c')).toBe(1 / 1000000);
});

test('c to nC', () => {
  expect(convert(1).from('c').to('nC')).toBeCloseTo(1e9);
});

test('nC to Co', () => {
  expect(convert(1).from('nC').to('c')).toBe(1e-9);
});

test('Co to pC', () => {
  expect(convert(1).from('c').to('pC')).toBe(1e12);
});

test('pC to Co', () => {
  expect(convert(1).from('pC').to('c')).toBe(1e-12);
});

test('As to c', () => {
  expect(convert(1).from('As').to('c')).toBe(1);
});

test('Ah to c', () => {
  expect(convert(1).from('Ah').to('c')).toBe(3600);
});

test('Ah to As', () => {
  expect(convert(1).from('Ah').to('As')).toBe(3600);
});
