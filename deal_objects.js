const { BULK_TYPE, BXGY_TYPE, BUNDLE_TYPE } = require('./constants');

const bulk_deal = {
  name: 'Bulk',
  type: BULK_TYPE,
  min_count: 0,
  bulk_price: 0
};

const bxgy_deal = {
  name: 'Buy X Get Y',
  type: BXGY_TYPE,
  buyx: 0,
  gety: 0
};

const bundle_deal = {
  name: 'Bundle',
  type: BUNDLE_TYPE,
  buy: null,
  get: null
};

module.exports = {
  bulk_deal,
  bxgy_deal,
  bundle_deal
};
