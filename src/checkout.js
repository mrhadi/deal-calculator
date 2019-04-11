const { BULK_TYPE, BXGY_TYPE, BUNDLE_TYPE } = require('./utils/constants');
const { keyFinder } = require('./utils/keyFinder');

class Checkout {
  constructor(pricingRules){
    this.pricingRules = pricingRules;
    this.shoppingList = [];
    this.totalPrice = 0;
  }

  reset() {
    this.shoppingList = [];
    this.totalPrice = 0;

    console.log(`\n`);
  }

  scan(product) {
    if (this.pricingRules[product]) {
      if (this.shoppingList[product]) {
        this.shoppingList[product] += 1;
      }
      else {
        this.shoppingList[product] = 1;
      }
    }
    else {
      console.log(`Can't find '${product}' in products!`);
    }
  }

  total() {
    console.log(`Items in checkout list:`);

    for (let item in this.shoppingList) {
      let product = this.pricingRules[item];
      let count = this.shoppingList[item];
      let deal = product.deal;

      console.log(`${product.name} X ${count}`);

      if (deal) {
        if (deal.type === BULK_TYPE) {
          if (count >= deal.min_count) {
            this.totalPrice += deal.bulk_price * count;
          }
          else {
            this.totalPrice += product.price * count;
          }
        }
        else if (deal.type === BXGY_TYPE) {
          let buyx = deal.buyx;
          let gety = deal.gety;

          let i = parseInt(count / gety);
          let j = count % gety;

          this.totalPrice += (product.price * buyx * i) + (j * product.price);
        }
        else if (deal.type === BUNDLE_TYPE) {
          if (product === deal.get) {
            let get = deal.buy;
            let sku = keyFinder(this.pricingRules, get);

            if (this.shoppingList[sku]) {
              this.totalPrice += 0;
              continue;
            }
          }
          this.totalPrice += product.price * count;
        }
      }
      else {
        this.totalPrice += product.price * count;
      }
    }

    console.log(`Total: $${this.totalPrice}`);
  }
}

module.exports = {
  Checkout
};
