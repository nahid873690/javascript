const handleAddProducts = () =>{
    const productE1 = document.getElementById('product');
    const quantityE1 = document.getElementById('quantity');
    const product = productE1.value ;
    const quantity = quantityE1.value ;
    console.log('product add' , product, quantity)
    displayProduct(product,quantity)
    productE1.value = '';
    quantityE1.value = ''
}

const getCard = () => {
    let cart = {};

    const cardJSON = localStorage.getItem('cart');
    if(cartJSON){
        cart = JSON.parse(cartJSON)
    }

    return cart;
}

const addProductToCart = (product, quantity) =>{
    const cart = getCart();
    cart[product] = quantity;
    console.log( 'cart' cart)
}
const displayProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product}  : ${quantity}`

    // get the ul 
    const ul = document.getElementById('products-container');
    ul.appendChild(li);
}

/**
 * To save Object / array in the local storage
 * 1. convert the object to JSON string by using JSON. stringGify
 * 2 . localstorage.setItem()
 */

/** 
 * to get objecct / array from the local storage 
 * 1. get the from the local storage and it will be in  JSON string 
 * 2. convert the JSON string to js object by using JSON. Parse
*/