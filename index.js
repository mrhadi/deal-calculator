const { products } = require('./src/products');
const { makePricingRule } = require('./src/utils/dealMaker');
const { Checkout } = require('./src/checkout');


const pricing_rules = makePricingRule(products);
const checkout = new Checkout(pricing_rules);

console.log(`Welcome to Deal Calculator`);
console.log(`--------------------------\n`);

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
