// Shared auth navbar updater
// Reads the logged-in username from localStorage and updates every page's header.

function updateAuthNavbar() {
    const username = localStorage.getItem("username");
    const loginBtn = document.getElementById("login");
    const registerBtn = document.getElementById("register");

    if (!loginBtn || !registerBtn) return;

    if (username) {
        loginBtn.textContent = username;
        loginBtn.href = "#";
        loginBtn.classList.add("btn-login");
        loginBtn.classList.remove("btn-register");

        registerBtn.textContent = "Logout";
        registerBtn.href = "#";
        registerBtn.classList.remove("btn-register");
        registerBtn.classList.add("btn-login");

        // Clicking the username does nothing (kept as a label)
        loginBtn.onclick = (e) => {
            e.preventDefault();
        };

        // Clicking Logout clears storage and reloads the page
        registerBtn.onclick = (e) => {
            e.preventDefault();
            localStorage.removeItem("username");
            window.location.reload();
        };
    } else {
        // Reset to default state when no user is logged in
        loginBtn.textContent = "Login";
        loginBtn.href = "../pages/login.html";
        loginBtn.classList.add("btn-login");
        loginBtn.classList.remove("btn-register");
        loginBtn.onclick = null;

        registerBtn.textContent = "Register";
        registerBtn.href = "../pages/register.html";
        registerBtn.classList.add("btn-register");
        registerBtn.classList.remove("btn-login");
        registerBtn.style.display = "";
        registerBtn.onclick = null;
    }
}

window.addEventListener("DOMContentLoaded", updateAuthNavbar);
