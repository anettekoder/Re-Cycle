import { productArray } from "../constants/productList.js";

const productsContainer = document.querySelector(".products");

productArray.forEach(function (product) {
  productsContainer.innerHTML += `
    
    <div class="product">
      <h2> ${product.name}</h2>
      <div style="background-image: url(${product.image})" class="product-image"></div>
       <div class="product-price">${product.price}</div>
    <button class="product-button">Add to cart </button>
    </div>`;
});


