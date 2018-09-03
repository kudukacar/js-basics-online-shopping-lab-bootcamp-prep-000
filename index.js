var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100) + 1;
  var itemObject = {itemName:item, itemPrice:price};
 cart.push(itemObject);
 return item + " has been added to your cart.";
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if(cart.length === 1) {
    return "In your cart, you have "  + cart[0].itemName + " at $" + cart[0].itemPrice + ".";}
  if(cart.length === 2) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice + ".";
  }
  else {
  for (let i = 1; i < cart.length-1; i++) {
    return "In your cart, you have" + cart[0].itemName + " at $" + cart[0].itemPrice + ", " + cart[i].itemName + " at $" +  cart[i].itemPrice + ", and " + cart[cart.length-1].itemName + " at $" + cart[cart.length-1].itemPrice + ".";
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
