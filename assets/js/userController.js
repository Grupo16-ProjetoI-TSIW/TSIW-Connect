
class UserController {
    constructor() {
        this.userModel = new UserModel();
        this.users = this.userModel.getUsers();
    }
    
    verifyCredentials(email, password) {
        const user = this.userModel.verifyCredentials(email, password);
        if (user) {
            sessionStorage.setItem('loggedUser', JSON.stringify(user));
            if (user.tipo === 'admin') {
                console.log(`Utilizador ${user.email} logado como administrador.`);
                window.location.href = '/pages/admin/adminDashboard.html';
            } else {
                window.location.href = '/pages/user/salaDeJogos.html';
            }
        } else {
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    }
    RegisterCredentials(email, password, nickname) {
        if (this.users.find(user => user.email === email)) {
            alert('Já existe um usuário com este email.');
            return;
        }

        if (this.users.find(user => user.nickname === nickname)) {
            alert('Já existe um usuário com este nickname.');
            return;
        }

        const newUser = { id: this.users.length + 1, email, password, nickname, tipo: 'user' };
        this.users.push(newUser);
        this.userModel.saveUsers(this.users);
        const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
        alert('Usuário registrado com sucesso!');
        registerModal.hide();
        console.log('Novo usuário registrado:', newUser);
    }
    logout() {
        sessionStorage.removeItem('loggedUser');
        window.location.href = '/public/index.html'; 
    }

    getLoggedUser() {
        return JSON.parse(sessionStorage.getItem('loggedUser'));
    }
    banUser(userId) {
        const updatedUsers = users.filter(user => user.id !== userId);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
}
const userModel = new UserModel();
const users = userModel.getUsers();
window.UserController = new UserController();