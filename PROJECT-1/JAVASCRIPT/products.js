import getVal, { createTag } from "../components/Helper.js";
import navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const isExist = (id) => {
 
    let flage = false;
  cart.map((ele, i) => 
    {
    
    if (ele.id == id) 
    {
    cart[i].sQuantity = cart[i].Quantity + 1;
    flage = true;
    alert("Qty Added");
    }
  });
  return flage;
};


let products = JSON.parse(localStorage.getItem("products")) || [];
const mapper = (data) => {
  document.getElementById("productList").innerHTML = "";
  data.map((ele) => {
    let img = createTag("img", ele.img);
    let price = createTag("p", ele.price);
    let title = createTag("p", ele.title);
    let category = createTag("p", ele.category);
    let buyBtn = createTag("button", "Buy");
    buyBtn.addEventListener("click", () => handleCart(ele));
    let div = document.createElement("div");
    div.append(img, title, price, category, buyBtn);
    document.getElementById("productList").append(div);
  });
};


const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category == category);
    mapper(temp);
  };

  const handleCart = (ele) => 
    {
    if (!isExist(ele.id)) 
    {
    cart.push({ ...ele, quantity: 1 });
    alert("Added to Cart");
     }
  localStorage.setItem("cart", JSON.stringify(cart));
};

mapper(products);
const handleSort = (orderBy) => {
  if (orderBy == "lth") {
    let temp = products.sort((a, b) => a.price - b.price);
    mapper(temp);
  } else {
    let temp = products.sort((a, b) => b.price - a.price);
    mapper(temp);
  }
};

document
  .getElementById("lth")
  .addEventListener("click", () => handleSort("lth"));
document
  .getElementById("htl")
  .addEventListener("click", () => handleSort("htl"));
document
  .getElementById("men")
  .addEventListener("click", () => handleCategory("men"));
document
  .getElementById("women")
  .addEventListener("click", () => handleCategory("women"));
document
  .getElementById("kids")
  .addEventListener("click", () => handleCategory("kids"));
const search = (e) => {
  e.preventDefault();
  let searchValue = getVal("#search");
  let temp = products.filter((ele) =>
    ele.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  mapper(temp);
};

document.getElementById("search-icon").addEventListener("submit", search);
