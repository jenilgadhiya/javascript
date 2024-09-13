    import getval from "../COMPONENTS/help.js";
    import navbar from "../components/Navbar.js";

    document.getElementById("navbar").innerHTML = navbar();

    let isLogin = localStorage.getItem("isLogin") || false;
    
    if (isLogin == false) 
    {
    window.location.href = "/page/login";
    }

    let products = JSON.parse(localStorage.getItem("products")) || [];

    const handleSubmit = (e) => 
        {
    e.preventDefault();
  
    let product = {
    title: getval(".title"),
    price: getval(".price"),
    category: getval(".category"),
    img: getval(".img"),
    id: Date.now(),
     };
 
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    };

    document.getElementById("productData").addEventListener("submit", handleSubmit);
