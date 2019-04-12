const { products } = require('./src/products');
const { makePricingRule } = require('./src/utils/dealMaker');
const { Checkout } = require('./src/checkout');


const pricingRules = makePricingRule(products);
const checkout = new Checkout(pricingRules);

console.log(`Welcome to Deal Calculator`);
console.log(`--------------------------\n`);

console.log(`Try VGA Adapter deal, buy MacBook and get VGA Adapter for free!`);
checkout.scan('mbp');
checkout.scan('vga');
checkout.scan('ipd');
checkout.total();
checkout.reset();

console.log(`Try Apple TV deal, buy 3 and pay for 2!`);
checkout.scan('atv');
checkout.scan('atv');
checkout.scan('atv');
checkout.scan('vga');
checkout.total();
checkout.reset();

console.log(`Try iPad deal, buy more than 4 and get discount!`);
checkout.scan('atv');
checkout.scan('ipd');
checkout.scan('ipd');
checkout.scan('atv');
checkout.scan('ipd');
checkout.scan('ipd');
checkout.scan('ipd');
checkout.total();
checkout.reset();
