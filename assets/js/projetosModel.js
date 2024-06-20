const projetosModel = {
    getProjects() {
        return JSON.parse(localStorage.getItem("projects")) || [];
    },
    getProjectById(id){
        const projects = this.getProjects();
        return projects.find(project => project.id === id);
    },
    saveProjects(projects) {
        localStorage.setItem("projects", JSON.stringify(projects));
    },

    addProject(project) {
        const projects = this.getProjects();
        projects.push(project);
        this.saveProjects(projects);
    },

    deleteProject(id) {
        let projects = this.getProjects();
        projects = projects.filter(project => project.id !== id);
        this.saveProjects(projects);
    },

    updateProject(updatedProject) {
        let projects = this.getProjects();
        projects = projects.map(project => project.id === updatedProject.id ? updatedProject : project);
        this.saveProjects(projects);
    },

    setProjectOfTheMonth(id) {
        let projects = this.getProjects();
        projects = projects.map(project => {
            if (project.id === id) {
                project.projeto_mes = 1;
            } else {
                project.projeto_mes = 0;
            }
            return project;
        });
        this.saveProjects(projects);
    },
    saveProjects(projects) {
        localStorage.setItem("projects", JSON.stringify(projects));
    },

    editProject(editedProject) {
        let projects = this.getProjects();
        console.log(editedProject);
        const index = projects.findIndex(project => project.id === parseInt(editedProject.id));
        console.log(index);
        if (index !== -1) {
            projects[index] = {
                id: parseInt(editedProject.id),
                nome: editedProject.nome,
                aluno: editedProject.aluno,
                data: editedProject.data,
                link: editedProject.link,
                descrição: editedProject.descrição,
                imagem: editedProject.imagem,
                projeto_mes: editedProject.projeto_mes
            };

            this.saveProjects(projects);
        } else {
            console.error(`Projeto com ID ${editedProject.id} não encontrado para edição.`);
        }
    },
};