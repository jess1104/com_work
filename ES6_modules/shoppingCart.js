// Exporting module
console.log("Exporting module");
let cart = [];
// 匯出一個
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(cart);
  console.log(`${quantity} ${product} add to cart`);
};
// 一次多個匯出
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity };

//  export default
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(cart);
  console.log(`${quantity} ${product} add to cart`);
}
