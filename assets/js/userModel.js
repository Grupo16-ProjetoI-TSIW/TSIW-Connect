class UserModel {
    getUsers() {
        return JSON.parse(localStorage.getItem('users'))
    }

    getUserByEmail(email) {
        const users = this.getUsers();
        console.log( users.find(user => user.email === email));
        return users.find(user => user.email === email);
    }

    verifyCredentials(email, password) {
        const user = this.getUserByEmail(email);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }
}

// Anexa a classe UserModel ao objeto window para estar disponível globalmente
window.UserModel = UserModel;