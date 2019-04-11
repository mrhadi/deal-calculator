const { BULK_TYPE, BXGY_TYPE, BUNDLE_TYPE } = require('./constants');

const bulkDeal = {
  name: 'Bulk',
  type: BULK_TYPE,
  min_count: 0,
  bulk_price: 0
};

const bxgyDeal = {
  name: 'Buy X Get Y',
  type: BXGY_TYPE,
  buyx: 0,
  gety: 0
};

const bundleDeal = {
  name: 'Bundle',
  type: BUNDLE_TYPE,
  buy: null,
  get: null
};

module.exports = {
  bulkDeal,
  bxgyDeal,
  bundleDeal
};
