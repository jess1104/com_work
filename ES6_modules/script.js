// Importing module
import { addToCart, totalPrice as price, totalQuantity } from "./shoppingCart.js";
console.log("Importing module");

addToCart("bread", 5);
console.log(price, totalQuantity);

// 一次import 全部
import * as ShopingCart from "./shoppingCart.js";

console.log(ShopingCart.totalPrice);
ShopingCart.addToCart("juice", 8);

// import default
import add from "./shoppingCart.js";
add("pizza", 2);

// commonJS
// // Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(cart);
//   console.log(`${quantity} ${product} add to cart`);
// };

// // import
// const { addToCart } = require('./shoppingCart.js');
