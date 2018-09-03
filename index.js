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
  var firstItem = "In your cart, you have " + cart[0].item + "at " + cart[0].price;
  var lastItem = " and " + cart[cart.length-1].item + "at " + cart[cart.length-1].price + ".";
  if(cart.length === 0) {
    return "Your shopping cart is empty";
  }
  if(cart.length === 1) {
    return oneItem + "."  }
  if(cart.length === 2) {
    return oneItem 
  }
  else {
  for (i = 0; i < cart.length; i++) {
    return "In your cart, you have " 
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
