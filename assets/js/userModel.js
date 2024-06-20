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
    deleteUser(id) {
        let users = this.getUsers();
        users = users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
    }
    saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
}

window.UserModel = UserModel;
