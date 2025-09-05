const PRODUCT_LS_KEY = "basket";

const containerEl = document.querySelector(".js-list");
const clearBtn = document.querySelector(".js-clear");
const totalPrice = document.querySelector(".js-total-price");

const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY));
let totalCost;

if (products.length) {
  clearBtn.hidden = false;
  totalCost = products.reduce((acc, { price, qty }) => acc + price * qty, 0);
}

totalPrice.textContent = totalCost
  ? `Сума замовлення ${totalCost} грн`
  : `Корзина порожня`;

containerEl.insertAdjacentHTML("beforeend", createMarkup(products));
clearBtn.addEventListener("click", handleClear);

function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, price, qty }) => `
<li class="cart-item">
<img src="${img}" alt="${name}" class="product-img"/>
<h2>${name}</h2>
<p>Кількість: ${qty}</p>
<p>Сума: ${price * qty} грн</p>
</li>
    `
    )
    .join("");
}

function handleClear() {
  localStorage.removeItem(PRODUCT_LS_KEY);
  window.location.href = "./03-shop.html";
}
