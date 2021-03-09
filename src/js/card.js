const removeCard = document.querySelectorAll('.card .close')
const card = document.querySelectorAll('.card')
const qnt = document.getElementById('cart-qnt').setAttribute( "data-qnt", card.length)

        for (var i = 0; i < removeCard.length; i++) {
            var x =+  removeCard.length
            removeCard[i].addEventListener('click', function() {
                this.parentNode.remove()
                x=x-1
                console.log([x])
                var qntdCart = document.getElementById('cart-qnt')
                qntdCart.setAttribute( "data-qnt", x)
                CartEmpty()
            })
            
        }
    
       
    function CartEmpty() {
        var img =  '<img class="cart-empty" src="src/assets/cart-empty.png" alt="Seu carriho está vázio" title="Seu carriho está vázio">'
        if (x < 1 ) {
            document.querySelector('.cart-body').insertAdjacentHTML('afterbegin', img)
            console.log("Carrinho vázio")
        }
    }

