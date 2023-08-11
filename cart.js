var cart__items = document.getElementById("cartItems");
cart__items.style.maxHeight = "0px";
function cartToggle() {
    if (cart__items.style.maxHeight == "0px") {
        cart__items.style.maxHeight = "170px";
    }
    else{
        cart__items.style.maxHeight = "0px";
    }
}
