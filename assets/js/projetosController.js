const projetosController = {
    init() {
        this.loadProjects();
        document.getElementById('projectForm').addEventListener('submit', event => {
            event.preventDefault();
            this.addProject();
        });
    },

    loadProjects() {
        const projects = projetosModel.getProjects();
        projetosView.renderProjects(projects);
    },

    addProject() {
        const newProject = {
            id: Date.now(),
            nome: document.getElementById('projectName').value,
            aluno: document.getElementById('studentName').value,
            data: document.getElementById('projectDate').value,
            link: document.getElementById('projectLink').value,
            descrição: document.getElementById('projectDescription').value,
            imagem: document.getElementById('projectPoster').value,
            projeto_mes: 0
        };
        projetosModel.addProject(newProject);
        this.loadProjects();
    },

    deleteProject(id) {
        projetosModel.deleteProject(id);
        this.loadProjects();
    },

    editProject(id) {
        const projectToEdit = projetosModel.getProjectById(id);
        document.getElementById('editProjectId').value = projectToEdit.id;
        document.getElementById('editProjectName').value = projectToEdit.nome;
        document.getElementById('editProjectAluno').value = projectToEdit.aluno;
        document.getElementById('editProjectDate').value = projectToEdit.data;
        document.getElementById('editProjectLink').value = projectToEdit.link;
        document.getElementById('editProjectDescription').value = projectToEdit.descrição;
        document.getElementById('editProjectDescription').value = projectToEdit.descrição;
        document.getElementById('editProjectImage').value = projectToEdit.imagem;

        const modal = new bootstrap.Modal(document.getElementById('editProjectModal'));
        modal.show();
        
        document.getElementById('editProjectForm').addEventListener('submit', event => {
            event.preventDefault();
            
            const editedProject = {
                id: parseInt(document.getElementById('editProjectId').value),
                nome: document.getElementById('editProjectName').value,
                aluno: document.getElementById('editProjectAluno').value,
                data: document.getElementById('editProjectDate').value,
                link: document.getElementById('editProjectLink').value,
                descrição: document.getElementById('editProjectDescription').value,
                imagem: document.getElementById('editProjectImage').value,
                projeto_mes: 0
            };
            
            projetosModel.editProject(editedProject);
            modal.hide();
            this.loadProjects();
        });
    },

    setProjectOfTheMonth(id) {
        projetosModel.setProjectOfTheMonth(id);
        this.loadProjects();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    projetosController.init();
});
