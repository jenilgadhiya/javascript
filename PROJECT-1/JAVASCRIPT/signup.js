    const handledata = (e) => {
    
    e.preventDefault();
    
    let user = {
        username: getValue(".username"),
        email: getValue(".email"),
        password: getValue(".password"),
        
      };
      
      users.push(user);
      localStorage.setItem("user", JSON.stringify(users));
      window.location.href = "/index.html";

    };

document.querySelector("#Usersdata").addEventListener("submit",handledata);