var metric, imperial;

metric = {
  kgm2: {
    name: {
      singular: 'Kilogram meter squared',
      plural: 'Kilogram meters squared',
    },
    to_anchor: 1,
  },
  kgmm2: {
    name: {
      singular: 'Kilogram millimeter squared',
      plural: 'Kilogram millimeters squared',
    },
    to_anchor: 0.000001,
  },
};

imperial = {
  lbffts2: {
    name: {
      singular: 'Pound foot second squared',
      plural: 'Pound feet second squared',
    },
    to_anchor: 1,
  },
  lbfins2: {
    name: {
      singular: 'Pound inch second squared',
      plural: 'Pound inches second squared',
    },
    to_anchor: 1 / 12,
  },
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'kgm2',
      ratio: 1 / 1.3558179619,
    },
    imperial: {
      unit: 'lbffts2',
      ratio: 1.3558179619,
    },
  },
};
