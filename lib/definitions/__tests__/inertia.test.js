const convert = require('../..');
test('kgm2 to kgm2', () => {
  expect(convert(1).from('kgm2').to('kgm2')).toBe(1);
});

test('kgmm2 to kgmm2', () => {
  expect(convert(1).from('kgmm2').to('kgmm2')).toBe(1);
});

test('lbffts2 to lbffts2', () => {
  expect(convert(1).from('lbffts2').to('lbffts2')).toBe(1);
});

test('lbfins2 to lbfins2', () => {
  expect(convert(1).from('lbfins2').to('lbfins2')).toBe(1);
});

test('kgm2 to kgmm2', () => {
  expect(convert(1).from('kgm2').to('kgmm2')).toBe(1000000);
});

test('kgm2 to lbffts2', () => {
  expect(convert(1).from('kgm2').to('lbffts2')).toBeCloseTo(0.737562);
});

test('kgm2 to lbfins2', () => {
  expect(convert(1).from('kgm2').to('lbfins2')).toBeCloseTo(8.85074);
});

test('kgmm2 to kgm2', () => {
  expect(convert(1).from('kgmm2').to('kgm2')).toBe(0.000001);
});

test('kgmm2 to lbffts2', () => {
  expect(convert(1).from('kgmm2').to('lbffts2')).toBeCloseTo(7.37562e-10);
});

test('kgmm2 to lbfins2', () => {
  expect(convert(1).from('kgmm2').to('lbfins2')).toBeCloseTo(8.85074e-9);
});

test('lbffts2 to kgm2', () => {
  expect(convert(1).from('lbffts2').to('kgm2')).toBeCloseTo(1.355817);
});

test('lbffts2 to kgmm2', () => {
  expect(convert(1).from('lbffts2').to('kgmm2')).toBeCloseTo(1355817.9619);
});

test('lbffts2 to lbfins2', () => {
  expect(convert(1).from('lbffts2').to('lbfins2')).toBe(12);
});

test('lbfins2 to kgm2', () => {
  expect(convert(1).from('lbfins2').to('kgm2')).toBeCloseTo(0.11298483);
});

test('lbfins2 to kgmm2', () => {
  expect(convert(1).from('lbfins2').to('kgmm2')).toBeCloseTo(112984.83);
});

test('lbfins2 to lbffts2', () => {
  expect(convert(1).from('lbfins2').to('lbffts2')).toBeCloseTo(0.0833333);
});
