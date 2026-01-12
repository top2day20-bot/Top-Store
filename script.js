let products = JSON.parse(localStorage.getItem("products")) || [];
let box = document.getElementById("products");

// ===== عرض المنتجات حسب القسم =====
function showCategory(cat){
  let filtered = (cat==="all")?products:products.filter(p=>p.cat===cat);
  box.innerHTML="";
  filtered.forEach(p=>{
    box.innerHTML += `
    <div class="product">
      <img src="images/${p.img}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <p>${p.desc}</p>
      <a class="whatsapp" href="https://wa.me/201234567890" target="_blank">واتساب</a>
    </div>`;
  });
}
showCategory("all");

// ===== البحث =====
function searchProducts(){
  let q = document.getElementById("searchBox").value.toLowerCase();
  let filtered = products.filter(p=>p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  box.innerHTML="";
  filtered.forEach(p=>{
    box.innerHTML += `
    <div class="product">
      <img src="images/${p.img}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <p>${p.desc}</p>
      <a class="whatsapp" href="https://wa.me/201060820818" target="_blank">واتساب</a>
    </div>`;
  });
}

// ===== سلايدر =====
let slides = document.querySelectorAll(".slide");
let current = 0;
setInterval(()=>{
  slides[current].classList.remove("active");
  current = (current+1)%slides.length;
  slides[current].classList.add("active");
},3000);
