document.addEventListener('DOMContentLoaded', function() {
    const userListContainer = document.getElementById('users-container');

    function displayUsers(users) {
        userListContainer.innerHTML = '';

        users.forEach(user => {
            if (user.tipo !== 'admin') {
                const userCard = createUserCard(user);
                userListContainer.appendChild(userCard);
            }
        });
    }

    function createUserCard(user) {
        const card = document.createElement('div');
        card.classList.add('col-md-6', 'col-lg-4', 'mb-3');

        const cardInner = document.createElement('div');
        cardInner.classList.add('card', 'bg-secondary', 'text-white', 'p-3');

        const userImage = document.createElement('img');
        userImage.src = user.foto_perfil; 
        userImage.alt = `User ${user.id}`;
        userImage.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const username = document.createElement('h5');
        username.classList.add('card-title');
        username.textContent = user.nickname; 

        const profileLink = document.createElement('a');
        profileLink.href = '#'; 
        profileLink.classList.add('btn', 'btn-primary');
        profileLink.textContent = 'Ver Perfil';

        const banButton = document.createElement('button');
        banButton.classList.add('btn', 'btn-danger');
        banButton.textContent = 'Banir';
        banButton.addEventListener('click', function() {
            banUser(user.id);
        });
        cardBody.appendChild(username);
        cardBody.appendChild(profileLink);
        cardBody.appendChild(banButton);

        cardInner.appendChild(userImage);
        cardInner.appendChild(cardBody);

        card.appendChild(cardInner);

        return card;
    }
    const userModel = new UserModel();
    const users = userModel.getUsers();
    displayUsers(users);
    
    function banUser(userId) {
        if (window.UserController.banUser(userId)) {
            alert(`Utilizador com ID ${userId} foi banido com sucesso.`);
            const userModel = new UserModel();
            const users = userModel.getUsers();
            displayUsers(users);
        } else {
            alert(`Erro ao banir o usuário com ID ${userId}.`);
        }
    }
});
