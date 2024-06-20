class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    verifyCredentials(email, password) {
        const user = this.userModel.verifyCredentials(email, password);
        if (user) {
            sessionStorage.setItem('loggedUser', JSON.stringify(user)); // Salva a sessão do usuário
            if (user.tipo === 'admin') {
                console.log(`Usuário ${user.email} logado como administrador.`);
                window.location.href = '/pages/admin/adminDashboard.html';
            } else {
                alert('Você não tem permissão para acessar o painel de administração.');
                // Redirecionar ou realizar outra ação para usuários comuns
                // window.location.href = 'userDashboard.html';
            }
        } else {
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
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