const openCart = document.getElementById("teste")
const closeCart = document.querySelector("#close-cart")
const cart = document.querySelector('.cart')

openCart.onclick = () => {
    cart.style.display = 'block'
}
closeCart.onclick = () => {
    cart.style.display = 'none'
} 