const { bulk_deal, bxgy_deal, bundle_deal } = require('./dealObjects');

const make_bulk_deal = (minCount, bulkPrice, deal = bulk_deal) => {
  let bulk_deal = Object.create(deal);
  bulk_deal.min_count = minCount;
  bulk_deal.bulk_price = bulkPrice;

  return bulk_deal
};

const make_bundle_deal = (buy, get, deal = bundle_deal) => {
  let bundle_deal = Object.create(deal);
  bundle_deal.buy = buy;
  bundle_deal.get = get;

  return bundle_deal;
};

const make_bxgy_deal = (buyX, getY, deal = bxgy_deal) => {
  let bxgy_deal = Object.create(deal);
  bxgy_deal.buyx = buyX;
  bxgy_deal.gety = getY;

  return bxgy_deal;
};

const makePricingRule = (products) => {
  const ipd_deal = make_bulk_deal(4, 499.99);
  const atv_deal = make_bxgy_deal(2,3);
  const vga_deal = make_bundle_deal(products.mbp, products.vga);
  const pricing_rule = Object.create(products);

  pricing_rule.ipd.deal = ipd_deal;
  pricing_rule.atv.deal = atv_deal;
  pricing_rule.vga.deal = vga_deal;

  return pricing_rule;
};

module.exports = {
  makePricingRule
};
