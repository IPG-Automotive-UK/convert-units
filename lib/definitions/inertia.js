var metric, imperial;

metric = {
  'kg*m2': {
    name: {
      singular: 'Kilogram meter squared',
      plural: 'Kilogram meters squared',
    },
    to_anchor: 1,
  },
  'kg*mm2': {
    name: {
      singular: 'Kilogram millimeter squared',
      plural: 'Kilogram millimeters squared',
    },
    to_anchor: 0.000001,
  },
};

imperial = {
  'lbf*ft*s2': {
    name: {
      singular: 'Pound foot second squared',
      plural: 'Pound feet second squared',
    },
    to_anchor: 1,
  },
  'lbf*in*s2': {
    name: {
      singular: 'Pound inch second squared',
      plural: 'Pound inches second squared',
    },
    to_anchor: 12,
  },
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'kg*m2',
      ratio: 1 / 1.3558179619,
    },
    imperial: {
      unit: 'lbf*ft*s2',
      ratio: 1.3558179619,
    },
  },
};
