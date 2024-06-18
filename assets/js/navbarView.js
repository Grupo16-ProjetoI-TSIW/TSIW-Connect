// navbarView.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('InputEmail').value;
        const password = document.getElementById('InputPassword').value;
        console.log(email);
        console.log(password);

        // Chama a função verifyCredentials do UserController.js
        window.UserController.verifyCredentials(email, password);
    });
});
