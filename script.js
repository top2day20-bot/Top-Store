let products = JSON.parse(localStorage.getItem("products")) || [];
let box = document.getElementById("products");

products.forEach(p=>{
  box.innerHTML += `
  <div class="product">
    <img src="images/${p.img}">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <p>${p.desc}</p>
    <a class="whatsapp" href="https://wa.me/201234567890" target="_blank">واتساب</a>
  </div>`;
