const handleAddToCart = () => {
  document.getElementById("cart-btn").addEventListener("click", () => {
    const productName = document.getElementById("product-name").value;
    const quantity = document.getElementById("quantity").value;
    document.getElementById("product-name").value = "";
    document.getElementById("quantity").value = "";
    setToLocalstorage(productName, quantity);
    displayProduct(productName, quantity);
  });
};
handleAddToCart()

const displayProduct = (productName, productQuantity) => {
  const cartContainer = document.getElementById("cart-container");
  const li = document.createElement("li");
  li.innerHTML = `
        ${productName}:${productQuantity}
        `;
  cartContainer.appendChild(li);
};

const getLocalStorage = () => {
  let cart = {};
  const getProduct = localStorage.getItem("cart");

  if (getProduct) {
    cart = JSON.parse(getProduct);
  }
  return cart;
};

const setToLocalstorage = (productName, productQuantity) => {
  const cart = getLocalStorage();
  cart[productName] = productQuantity;
  localStorage.setItem("cart", JSON.stringify(cart));
};

const displayLocalData = () => {
  const products = getLocalStorage();
  for (const product in products) {
    displayProduct(product, products[product]);
  }
};
displayLocalData();
