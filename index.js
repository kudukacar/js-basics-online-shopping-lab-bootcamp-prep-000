var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 var itemObject = {itemName: item, itemPrice: price};
 cart.push(itemObject);
 return item + " has been added to your cart.";
}

function viewCart() {
  if cart.length === 0 
  for (i = 0; i < cart.length; i++) {
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
