if(!localStorage.getItem("admin")){
  location.href="login.html";
}

let products = JSON.parse(localStorage.getItem("products")) || [];
let list = document.getElementById("adminProducts");

function render(){
  list.innerHTML="";
  products.forEach((p,i)=>{
    list.innerHTML+=`
    <div>
      ${p.name} - ${p.price}
      <button onclick="del(${i})">حذف</button>
    </div>`;
  });
}
render();

form.onsubmit = e =>{
  e.preventDefault();
  products.push({
    name:name.value,
    price:price.value,
    desc:desc.value,
    img:img.value
  });
  localStorage.setItem("products",JSON.stringify(products));
  form.reset();
  render();
};

function del(i){
  products.splice(i,1);
  localStorage.setItem("products",JSON.stringify(products));
  render();