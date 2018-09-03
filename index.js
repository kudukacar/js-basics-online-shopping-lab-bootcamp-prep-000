var cart = [];
var price = Math.floor(Math.random()* 100) + 1;
var item;
var itemObject = {itemName:item, itemPrice:price};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push(itemObject);
 return item + " has been added to your cart.";
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty";
  }
  if(cart.length === 1) {
    return "In your cart, you have "  }
  if(cart.length === 2) {
    return firstItem + "," + lastItem;
  }
  else {
  for (i = 2; i < cart.length-1; i++) {
    return firstItem + ", " + cart[i].itemName + " at " + cart[i].itemPrice + "," + lastItem;} 
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
