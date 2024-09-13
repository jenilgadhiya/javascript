import getVal from "../components/Helper.js";

let user = JSON.parse(localStorage.getItem("user")) || [];

const handleData = (e) => {
  e.preventDefault();
  
  let user = {
    email: getVal(".email"),
    password: getVal(".password"),
  };
  let isMatched = user.filter(
    (ele) => ele.email == user.email && ele.password 
    == user.password
  );
  if (isMatched.length > 0) {
    localStorage.setItem("username", isMatched[0].username);
    
    localStorage.setItem("isLogin", true);
   
    window.location.href = "./index.html";
  
    } else 
    {
    alert("Login Failed,Please try again");
    }

    };
    document.querySelector("#UserData").addEventListener("submit", handleData);