var minusButton = document.querySelector("#minus-button")
var plusButton = document.querySelector("#plus-button")

var quantityInput = document.querySelector(".quantity")

var thumb = Array.from(document.querySelectorAll(".thumbnail"))
var borders = document.querySelectorAll(".image-border")
var display = document.querySelectorAll(".image-display")

var lastActiveThumbnail = thumb[0]
var lastActiveBorder = borders[0]
var lastActiveImage = display[0]

var cartButton = document.querySelector(".cart")
var cartInfo = document.querySelector(".cart-info")
var cartFilled = document.querySelector(".cart-filled")

var emptyCart = document.querySelector(".empty-cart")

var addToCartButton = document.querySelector(".add")
var goToCartButton = document.querySelector(".go-to-cart")

lastActiveImage.style = "display: flex"
lastActiveThumbnail.style.opacity = "30%"
lastActiveThumbnail.style.borderColor = "hsl(26, 100%, 55%)"
lastActiveBorder.style.borderColor = "hsl(26, 100%, 55%)"

deleteItemInCart = function(itemId) {
    Array.from(cartFilled.childNodes).some(item => {
        if(item.classList.contains(itemId)) {
            cartFilled.removeChild(item)
            return true
        }
    })
}

makeCartEmpty = function() {
    emptyCart.style.display = "flex"
    cartFilled.style.display = "none"
    goToCartButton.style.display = "none"
}

createItem = function(itemId, productName, productPrice, productQuantity, total) {

    let item = document.createElement("li")
    let thumbnail = document.createElement("img")
    let div = document.createElement("div")
    let name = document.createElement("p")
    let price = document.createElement("p")
    let deleteButton = document.createElement("button")
    let deleteButtonImage = document.createElement("img")
    
    thumbnail.classList.add("cart-product-icon")
    deleteButton.classList.add("delete-button")
    deleteButton.classList.add("pointer")
    item.classList.add(itemId)
    
    deleteButtonImage.src = "images/icon-delete.svg"
    thumbnail.src = "images/image-product-1-thumbnail.jpg"
    
    nameText = document.createTextNode(productName)
    priceText = document.createTextNode(`\$${productPrice} x ${productQuantity} \$${total}`)
    
    name.appendChild(nameText)
    price.appendChild(priceText)
    
    div.appendChild(name)
    div.appendChild(price)
    
    deleteButton.appendChild(deleteButtonImage)
    
    item.appendChild(thumbnail)
    item.appendChild(div)
    item.appendChild(deleteButton)
    
    cartFilled.appendChild(item)
    
    deleteButton.addEventListener('click', function() {
        if(item.parentNode.childElementCount == 1) {
            makeCartEmpty()
        }
        deleteItemInCart(itemId)
    })

}

checkItemInCart = function(itemId) {
    Array.from(cartFilled.childNodes).some(item => {
        console.log(item.classList.contains(itemId))
        return item.classList.contains(itemId)
    })
}

addToCartButton.addEventListener("click", function() {
    let itemId = "53453454534"
    let quantity = quantityInput.value
    let price = 125
    let finalPrice = price * quantity
    
    
    if (!isNaN(quantityInput.value) && quantityInput.value > 0) {
        emptyCart.style.display = "none"
        cartFilled.style.display = "flex"
        goToCartButton.style.display = "block"
        createItem(itemId, "Fall Limited Edition Sneakers", price, quantity, finalPrice)
    }
})

cartButton.addEventListener("click", function() {
    if (cartInfo.style.display == "flex") {
        cartInfo.style.display = "none"
    }
    else {
        cartInfo.style.display = "flex"
    }
})

checkQuantityValue = function() {
    if(isNaN(quantityInput.value) || quantityInput.value < 1)
        quantityInput.value = 0
}

minusButton.addEventListener("click", function() {
    quantityInput.value -= 1
    checkQuantityValue()
})

plusButton.addEventListener("click", function() {
    quantityInput.value = parseInt(quantityInput.value) + 1
    checkQuantityValue()
})

changeLastActiveBorder = function(thumbnail) {
    lastActiveBorder.style.borderColor = "transparent"
    lastActiveBorder = borders[thumb.indexOf(thumbnail)]
    lastActiveBorder.style.borderColor = "hsl(26, 100%, 55%)"
}

changeLastActiveImage = function(thumbnail) {
    lastActiveImage.style.display = "none"
    lastActiveImage = display[thumb.indexOf(thumbnail)]
    lastActiveImage.style.display = "flex"
}

thumb.forEach(thumbnail => {

    thumbnail.onmouseenter = function() {
        thumbnail.style.opacity = "30%"
    }

    thumbnail.onmouseout = function() {
        thumbnail.style.opacity = thumbnail == lastActiveThumbnail ? "30%" : "100%"
    }

    thumbnail.addEventListener("click", function() {
        lastActiveThumbnail.style.opacity = "100%"
        thumbnail.style.opacity = "30%"
        lastActiveThumbnail = thumbnail

        changeLastActiveImage(thumbnail)
        changeLastActiveBorder(thumbnail)
    })
});