function RegisterPage(){
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('LoginModal'));
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    document.getElementById('register-button').addEventListener('click', () => {
        loginModal.hide();
        registerModal.show();
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('registerForm');
    const profileIcon = document.getElementById('profile-icon');
    const loginModal = new bootstrap.Modal(document.getElementById('LoginModal'));
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

    function checkLoggedUser() {
        return JSON.parse(sessionStorage.getItem('loggedUser'));
    }

    profileIcon.addEventListener('click', function(event) {
        event.preventDefault();
        if (checkLoggedUser()) {
            window.location.href = '/pages/user/perfil.html';
        } else {
            loginModal.show();
        }
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const nickname = document.getElementById('registerNickname').value;

        window.UserController.RegisterCredentials(email, password, nickname);
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('InputEmail').value;
        const password = document.getElementById('InputPassword').value;

        window.UserController.verifyCredentials(email, password);
    });
});

