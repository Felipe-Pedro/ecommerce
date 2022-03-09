# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the site depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [ ] Open a lightbox gallery by clicking on the large product image
- [x] Switch the large product image by clicking on the small thumbnail images
- [x] Add items to the cart
- [x] View the cart and remove items from it

### Links

- Live Site URL: [You can see the site here](https://felipe-pedro.github.io/ecommerce/)

## My process

I started writing the semantic html code in a top down sequence, starting with the header part, i wrote the whole navigation section with <nav> <ul> <li> and <a> tags, than wrote the article section part using mostly the <div> <img> <button> and <p> tags, after that finalized the html part with a little footer section with a <p> which i wrote my name on. With the html done i began to write the style part using css, flexbox and css pseudo classes to make a better user experience.
After the presentation part was in place, i focused on the dinamic parts and made all with javascript, i tried to do the cart system generic enough to be used in a real marketplace.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla javascript

### What I learned

How to generate and change the document, as you can see in the createItem function in the dinamic.js file.
```javascript

  let item = document.createElement("li")
  let thumbnail = document.createElement("img")
  let div = document.createElement("div")
  ...
    
  thumbnail.classList.add("cart-product-icon")
  ...
    
  deleteButtonImage.src = "images/icon-delete.svg"
  thumbnail.src = "images/image-product-1-thumbnail.jpg"
    
  nameText = document.createTextNode(productName)
  priceText = document.createTextNode(`\$${productPrice} x ${productQuantity} \$${total}`)
    
  name.appendChild(nameText)
  price.appendChild(priceText)
    
  div.appendChild(name)
  ...
```

### Continued development

For now i will still work on this website to make the lightbox element and the mobile version, after that i will start my journey to learn React. Thanks for be interested in my project :).

