const { products } = require('./products');
const { makePricingRule } = require('./tools');
const { Checkout } = require('./checkout');


const pricing_rules = makePricingRule(products);
const checkout = new Checkout(pricing_rules);

console.log(`\nWelcome to ShoppingRUs\n`);

checkout.scan('mbp');
checkout.scan('vga');
checkout.scan('ipd');
checkout.total();
checkout.reset();

checkout.scan('atv');
checkout.scan('atv');
checkout.scan('atv');
checkout.scan('vga');
checkout.total();
checkout.reset();

checkout.scan('atv');
checkout.scan('ipd');
checkout.scan('ipd');
checkout.scan('atv');
checkout.scan('ipd');
checkout.scan('ipd');
checkout.scan('ipd');
checkout.total();
checkout.reset();
