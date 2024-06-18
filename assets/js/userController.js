class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    verifyCredentials(email, password) {
        const user = this.userModel.verifyCredentials(email, password);
        if (user) {
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
}

// Anexa a instância UserController ao objeto window para estar disponível globalmente
window.UserController = new UserController();
