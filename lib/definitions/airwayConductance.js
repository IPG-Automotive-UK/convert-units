var airwayConductance = {
  'm3/s*Pa': {
    name: {
      singular: 'Cubic meter per second per pascal',
      plural: 'Cubic meters per second per pascal',
    },
    to_anchor: 1,
  },
  'cm3/s*bar': {
    name: {
      singular: 'Cubic centimeter per second per bar',
      plural: 'Cubic centimeters per second per bar',
    },
    to_anchor: 1e-11,
  },
  'm3/s*bar': {
    name: {
      singular: 'Cubic meter per second per bar',
      plural: 'Cubic meters per second per bar',
    },
    to_anchor: 1e+5,
  },
};

module.exports = {
  metric: airwayConductance,
  _anchors: {
    metric: {
      unit: 'm3/s*Pa',
      ratio: 1,
    },
  },
};
