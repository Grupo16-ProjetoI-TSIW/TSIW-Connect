const projetosView = {
    renderProjects(projects) {
        const projectList = document.getElementById('projectList');
        projectList.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'col-md-5';
            projectCard.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${project.nome}</h5>
                        <p class="card-text">${project.descrição}</p>
                        <img src="${project.imagem}" class="img-fluid mb-3" alt="Project Image">
                        ${project.projeto_mes === 0 ? 
                            `<button class="btn btn-primary" onclick="projetosController.setProjectOfTheMonth(${project.id})">Projeto do Mês</button>` 
                            : ''
                        }
                        <button class="btn btn-warning" onclick="projetosController.editProject(${project.id})">Editar</button>
                        <button class="btn btn-danger" onclick="projetosController.deleteProject(${project.id})">Eliminar</button>
                    </div>
                </div>
            `;
            projectList.appendChild(projectCard);
        });
    }
};
