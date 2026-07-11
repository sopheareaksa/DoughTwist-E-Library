const accounts = [
    {
        id: 1,
        email: "sokchanleap@gmail.com",
        password: "12345678",
        username: "Sokchanleap"
    },
    {
        id: 2,
        email: "sopheareaksa@gmail.com",
        password: "123456",
        username: "Sopheareaksa"
    }
];

function login(event) {
    if (event) event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    const user = accounts.find(account =>
        account.email.toLowerCase() === email && account.password === password
    );

    if (user) {
        localStorage.setItem("username", user.username);
        window.location.href = "../index.html";
    } else {
        alert("Invalid email or password");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".auth-form");
    if (form) {
        form.addEventListener("submit", login);
    }
});
