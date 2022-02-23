var minusButton = document.querySelector("#minus-button")
var plusButton = document.querySelector("#plus-button")

var quantityInput = document.querySelector(".quantity")

var menuButton = document.querySelector(".menu-button")
var closeMenuButton = document.querySelector(".close-menu")

var navigation = document.querySelector(".navigation")

var thumb = Array.from(document.querySelectorAll(".thumbnail"))
var borders = document.querySelectorAll(".image-border")
var display = document.querySelectorAll(".image-display")

var currentIndex = 0
var currentThumbnail = thumb[currentIndex]
var currentBorder = borders[currentIndex]
var currentImage = display[currentIndex]

var previousButton = document.querySelector("#previous-button")
var nextButton = document.querySelector("#next-button")

var cartButton = document.querySelector(".cart")
var cartInfo = document.querySelector(".cart-info")
var cartFilled = document.querySelector(".cart-filled")

var emptyCart = document.querySelector(".empty-cart")

var addToCartButton = document.querySelector(".add")
var goToCartButton = document.querySelector(".go-to-cart")

currentImage.style = "display: flex"
currentThumbnail.style.opacity = "30%"
currentThumbnail.style.borderColor = "hsl(26, 100%, 55%)"
currentBorder.style.borderColor = "hsl(26, 100%, 55%)"

changeCurrentImage = function(image) {
    currentImage.style.display = "none"
    currentImage = image
    currentImage.style.display = "flex"
}

previousButton.addEventListener("click", function() {
    currentIndex = currentIndex === 0 ? 3 : currentIndex - 1
    changeCurrentImage(display[currentIndex])
})

nextButton.addEventListener("click", function() {
    currentIndex = currentIndex === 3 ? 0 : currentIndex + 1
    changeCurrentImage(display[currentIndex])
})

menuButton.addEventListener("click", function() {
    navigation.style.display = "flex"
})

closeMenuButton.addEventListener("click", function() {
    navigation.style.display = "none"
})

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

changeCurrentBorder = function(border) {
    currentBorder.style.borderColor = "transparent"
    currentBorder = border
    currentBorder.style.borderColor = "hsl(26, 100%, 55%)"
}

thumb.forEach(thumbnail => {

    thumbnail.onmouseenter = function() {
        thumbnail.style.opacity = "30%"
    }

    thumbnail.onmouseout = function() {
        thumbnail.style.opacity = thumbnail == currentThumbnail ? "30%" : "100%"
    }

    thumbnail.addEventListener("click", function() {
        currentThumbnail.style.opacity = "100%"
        currentThumbnail = thumbnail
        thumbnail.style.opacity = "30%"

        changeCurrentImage(display[thumb.indexOf(thumbnail)])
        changeCurrentBorder(borders[thumb.indexOf(thumbnail)])
    })
});