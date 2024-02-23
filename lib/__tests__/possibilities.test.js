const convert = require('..');

test('l possibilities', () => {
  var actual = convert().from('l').possibilities(),
    expected = [
      'mm3',
      'cm3',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'm3',
      'km3',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'in3',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft3',
      'yd3',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('kg possibilities', () => {
  var actual = convert().from('kg').possibilities(),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('m possibilities', () => {
  var actual = convert().from('m').possibilities(),
    expected = [
      'mm',
      'cm',
      'm',
      'km',
      'in',
      'yd',
      'ft-us',
      'ft',
      'fathom',
      'mi',
      'nMi',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('each possibilities', () => {
  var actual = convert().possibilities('each'),
    expected = ['ea', 'dz'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('mass possibilities', () => {
  var actual = convert().possibilities('mass'),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume possibilities', () => {
  var actual = convert().possibilities('volume'),
    expected = [
      'mm3',
      'cm3',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'm3',
      'km3',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'in3',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft3',
      'yd3',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume flow rate possibilities', () => {
  var actual = convert().possibilities('volumeFlowRate'),
    expected = [
      'mm3/s',
      'cm3/s',
      'ml/s',
      'cl/s',
      'dl/s',
      'l/s',
      'l/min',
      'l/h',
      'kl/s',
      'kl/min',
      'kl/h',
      'm3/s',
      'm3/min',
      'm3/h',
      'km3/s',
      'tsp/s',
      'Tbs/s',
      'in3/s',
      'in3/min',
      'in3/h',
      'fl-oz/s',
      'fl-oz/min',
      'fl-oz/h',
      'cup/s',
      'pnt/s',
      'pnt/min',
      'pnt/h',
      'qt/s',
      'gal/s',
      'gal/min',
      'gal/h',
      'ft3/s',
      'ft3/min',
      'ft3/h',
      'yd3/s',
      'yd3/min',
      'yd3/h',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('length possibilities', () => {
  var actual = convert().possibilities('length'),
    expected = [
      'mm',
      'cm',
      'm',
      'km',
      'in',
      'yd',
      'ft-us',
      'ft',
      'fathom',
      'mi',
      'nMi',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('temperature possibilities', () => {
  var actual = convert().possibilities('temperature'),
    expected = ['C', 'K', 'F', 'R'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('time possibilities', () => {
  var actual = convert().possibilities('time'),
    expected = [
      'ns',
      'mu',
      'ms',
      's',
      'min',
      'h',
      'd',
      'week',
      'month',
      'year',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('digital possibilities', () => {
  var actual = convert().possibilities('digital'),
    expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('partsPer possibilities', () => {
  var actual = convert().possibilities('partsPer'),
    expected = ['ppm', 'ppb', 'ppt', 'ppq'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pressure possibilities', () => {
  var actual = convert().possibilities('pressure'),
    expected = ['Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('speed possibilities', () => {
  var actual = convert().possibilities('speed'),
    expected = ['m/s', 'km/h', 'mi/h', 'knot', 'ft/s'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pace possibilities', () => {
  var actual = convert().possibilities('pace'),
    expected = ['min/km', 's/m', 'min/mi', 's/ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('current possibilities', () => {
  var actual = convert().possibilities('current'),
    expected = ['A', 'mA', 'kA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('voltage possibilities', () => {
  var actual = convert().possibilities('voltage'),
    expected = ['V', 'mV', 'kV'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('power possibilities', () => {
  var actual = convert().possibilities('power'),
    expected = ['W', 'mW', 'kW', 'MW', 'GW'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive power possibilities', () => {
  var actual = convert().possibilities('reactivePower'),
    expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('apparent power possibilities', () => {
  var actual = convert().possibilities('apparentPower'),
    expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('energy possibilities', () => {
  var actual = convert().possibilities('energy'),
    expected = ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive energy possibilities', () => {
  var actual = convert().possibilities('reactiveEnergy'),
    expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('frequency possibilities', () => {
  var actual = convert().possibilities('frequency'),
    expected = [
      'mHz',
      'Hz',
      'kHz',
      'MHz',
      'GHz',
      'THz',
      'rpm',
      'deg/s',
      'rad/s',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('illuminance possibilities', () => {
  var actual = convert().possibilities('illuminance'),
    expected = ['lx', 'ft-cd'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('angle possibilities', () => {
  var actual = convert().possibilities('angle'),
    expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('charge possibilities', () => {
  var actual = convert().possibilities('charge'),
    expected = ['Ah', 'As', 'c', 'mC', 'μC', 'nC', 'pC'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('force possibilities', () => {
  var actual = convert().possibilities('force'),
    expected = ['N', 'kN', 'lbf'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('acceleration possibilities', () => {
  var actual = convert().possibilities('acceleration'),
    expected = ['g-force', 'm/s2'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('stiffness possibilities', () => {
  var actual = convert().possibilities('stiffness'),
    expected = ['N/m', 'N/mm', 'kgf/m'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('line volume possibilities', () => {
  var actual = convert().possibilities('lineVolume'),
    expected = ['Pa/m3', 'bar/cm3'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('fluid viscosity possibilities', () => {
  var actual = convert().possibilities('fluidViscosity'),
    expected = ['m2/s', 'mm2/s'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('fluid density possibilities', () => {
  var actual = convert().possibilities('fluidDensity'),
    expected = ['kg/m3', 'kg/l'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('capacitance possibilities', () => {
  var actual = convert().possibilities('capacitance'),
    expected = ['F'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('resistance possibilities', () => {
  var actual = convert().possibilities('resistance'),
    expected = ['Ohm'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('damping possibilities', () => {
  var actual = convert().possibilities('damping'),
    expected = ['Ns/m'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('torque conversion factor possibilities', () => {
  var actual = convert().possibilities('torqueConversionFactor'),
    expected = ['Nms2/rad2'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('friction ratio possibilities', () => {
  var actual = convert().possibilities('frictionRatio'),
    expected = ['N/Pa', 'N/bar'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('all possibilities', () => {
  var actual = convert().possibilities(),
    // Please keep these sorted for maintainability
    expected = [
      'A',
      'Ah',
      'As',
      'arcmin',
      'arcsec',
      'B',
      'C',
      'F',
      'F',
      'R',
      'GB',
      'Gb',
      'K',
      'KB',
      'Kb',
      'MB',
      'MPa',
      'Mb',
      'N',
      'N/Pa',
      'N/bar',
      'Nm/deg',
      'Nm/rad',
      'Nms/deg',
      'Nms/rad',
      'Nms2/rad2',
      'Ns/m',
      'N/m',
      'N/mm',
      'Nm/Pa',
      'Nm/bar',
      'Ohm',
      'Pa',
      'Pa/N',
      'Pa/m3',
      'TB',
      'Tb',
      'ac',
      'b',
      'bar',
      'bar/N',
      'bar/cm3',
      'c',
      'cl',
      'cl/s',
      'cm',
      'cm2',
      'cm3',
      'cm3/s',
      'cm3/s*bar',
      'cup',
      'cup/s',
      'd',
      'deg',
      'deg/s',
      'dl',
      'dl/s',
      'ea',
      'dz',
      'fl-oz',
      'fl-oz/h',
      'fl-oz/min',
      'fl-oz/s',
      'ft-us',
      'ft',
      'fathom',
      'ft-cd',
      'ft/s',
      'ft2',
      'ft3',
      'ft3/h',
      'ft3/min',
      'ft3/s',
      'g',
      'g-force',
      'g/kWh',
      'gal',
      'gal/h',
      'gal/min',
      'gal/s',
      'glas',
      'grad',
      'GHz',
      'GVA',
      'GVAR',
      'GVARh',
      'GW',
      'GWh',
      'h',
      'hPa',
      'ha',
      'Hz',
      'in',
      'in2',
      'in3',
      'in3/h',
      'in3/min',
      'in3/s',
      'J',
      'kA',
      'kPa',
      'kanna',
      'kg',
      'kg/Ws',
      'kg/l',
      'kg/m3',
      'kgf/m',
      'kkp',
      'kJ',
      'kN',
      'kl',
      'kl/h',
      'kl/min',
      'kl/s',
      'km',
      'km/h',
      'km2',
      'km3',
      'km3/s',
      'knot',
      'krm',
      'ksi',
      'kHz',
      'kV',
      'kVA',
      'kVAR',
      'kVARh',
      'kW',
      'kWh',
      'kWh/kg',
      'l',
      'l/h',
      'l/min',
      'l/s',
      'lb',
      'lbf',
      'lx',
      'm',
      'mi/h',
      'm/s',
      'm/s2',
      'm2',
      'm2/s',
      'm3',
      'm3/h',
      'm3/min',
      'm3/s',
      'm3/s*Pa',
      "m3/s*bar",
      'mA',
      'mC',
      'mcg',
      'mg',
      'mi',
      'mi2',
      'min',
      'min/km',
      'min/mi',
      'ml',
      'ml/s',
      'mm',
      'mm2',
      'mm2/s',
      'mm3',
      'mm3/s',
      'month',
      'ms',
      'msk',
      'mt',
      'mu',
      'nC',
      'mHz',
      'MHz',
      'mV',
      'mVA',
      'MVA',
      'mVAR',
      'MVAR',
      'mVARh',
      'MVARh',
      'mW',
      'MW',
      'mWh',
      'MWh',
      'nMi',
      'ns',
      'oz',
      'pC',
      'pnt',
      'pnt/h',
      'pnt/min',
      'pnt/s',
      'ppb',
      'ppm',
      'ppq',
      'ppt',
      'psi',
      'qt',
      'qt/s',
      'rad',
      'rad/s',
      'rpm',
      's',
      's/m',
      's/ft',
      't',
      'Tbs',
      'Tbs/s',
      'THz',
      'torr',
      'tsk',
      'tsp',
      'tsp/s',
      'V',
      'VA',
      'VAR',
      'VARh',
      'W',
      'week',
      'Wh',
      'Ws/kg',
      'yd',
      'yd2',
      'yd3',
      'yd3/h',
      'yd3/min',
      'yd3/s',
      'year',
      'μC',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

/**
 * Test that adding a new unit returns the updated list of units available
 */
describe("Unit tests for newly added m3/s*bar unit", () => {
  test('all possibilities for m3/s*Pa should now include new unit', () => {
    var actual = convert().from("m3/s*Pa").possibilities(),
      // Please keep these sorted for maintainability
      expected = [
        'm3/s*Pa', 'cm3/s*bar', 'm3/s*bar'
      ];
    expect(actual.sort()).toEqual(expected.sort());
  });
  test("This unit can be converted with the correct value", () => {
    // 1 bar = 100,000 Pa so 5 m3/s*bar should equal 500,000 m3/s*Pa
    expect(convert(5).from("m3/s*bar").to("m3/s*Pa")).toEqual(500000)
  })
})