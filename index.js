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
  var firstItem = "In your cart, you have " + cart[0].itemName + " at " + cart[0].itemPricerice;
  var lastItem = " and " + cart[cart.length-1].itemName + " at " + cart[cart.length-1].itemPrice + ".";
  if(cart.length === 0) {
    return "Your shopping cart is empty";
  }
  if(cart.length === 1) {
    return firstItem + ".";  }
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
