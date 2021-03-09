const openCart = document.getElementById("teste")
const closeCart = document.querySelector("#close-cart")
const cart = document.querySelector('.cart')
const fade = document.querySelector('.fade')

openCart.onclick = () => {
    cart.classList.toggle("is-active")
    fade.classList.toggle("is-active")
}
closeCart.onclick = () => {
    cart.classList.toggle("is-active")
    fade.classList.toggle("is-active")
} 
fade.onclick = () => {
    cart.classList.toggle("is-active")
    fade.classList.toggle("is-active")
} 
