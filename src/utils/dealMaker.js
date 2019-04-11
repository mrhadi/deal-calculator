const { bulkDeal, bxgyDeal, bundleDeal } = require('./dealObjects');

const makeBulkDeal = (minCount, bulkPrice, deal = bulkDeal) => {
  let bulkDeal = Object.create(deal);
  bulkDeal.min_count = minCount;
  bulkDeal.bulk_price = bulkPrice;

  return bulkDeal
};

const makeBundleDeal = (buy, get, deal = bundleDeal) => {
  let bundleDeal = Object.create(deal);
  bundleDeal.buy = buy;
  bundleDeal.get = get;

  return bundleDeal;
};

const makeBxGyDeal = (buyX, getY, deal = bxgyDeal) => {
  let bxgyDeal = Object.create(deal);
  bxgyDeal.buyx = buyX;
  bxgyDeal.gety = getY;

  return bxgyDeal;
};

const makePricingRule = (products) => {
  const ipdDeal = makeBulkDeal(4, 499.99);
  const atvDeal = makeBxGyDeal(2,3);
  const vgaDeal = makeBundleDeal(products.mbp, products.vga);
  const pricingRule = Object.create(products);

  pricingRule.ipd.deal = ipdDeal;
  pricingRule.atv.deal = atvDeal;
  pricingRule.vga.deal = vgaDeal;

  return pricingRule;
};

module.exports = {
  makePricingRule
};
