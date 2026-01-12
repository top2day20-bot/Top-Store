// جلب المنتجات من LocalStorage أو إنشاء مصفوفة جديدة
let products = JSON.parse(localStorage.getItem("products")) || [];
let list = document.getElementById("adminProducts");

// دالة عرض المنتجات
function render(){
  list.innerHTML="";
  products.forEach((p,i)=>{
    list.innerHTML+=`
    <div>
      ${p.name} - ${p.price} [${p.cat}]
      <button onclick="del(${i})">حذف</button>
    </div>`;
  });
}
render();

// إضافة منتج جديد
form.onsubmit = e =>{
  e.preventDefault();
  products.push({
    name:name.value,
    price:price.value,
    desc:desc.value,
    img:img.value,
    cat:cat.value
  });
  localStorage.setItem("products",JSON.stringify(products));
  form.reset();
  render();
  alert("تم نشر المنتج بنجاح!");
};

// حذف منتج
function del(i){
  products.splice(i,1);
  localStorage.setItem("products",JSON.stringify(products));
  render();
}

