let users = JSON.parse(localStorage.getItem('users')) || [];

const uimaker = () => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    users.forEach((user) => {
        let tr = document.createElement("tr");

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = user.email;

        let tdPassword = document.createElement("td");
        tdPassword.innerHTML = user.password;

        tr.append(tdEmail, tdPassword);
        tbody.append(tr);
    });
};

const handledata = (event) => {
    event.preventDefault();

    let user = {
        email: document.getElementById("Email").value.trim(),
        password: document.getElementById("Password").value.trim(),
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    uimaker();
};

window.onload = () => {
    uimaker();
};

document.getElementById("UserData").addEventListener("submit", handledata);