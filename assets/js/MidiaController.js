const MidiaController = {
    init() {
        this.loadMidias();
        document.getElementById('MidiaForm').addEventListener('submit', event => {
            event.preventDefault();
            this.addMidia();
        });
    },

    loadMidias() {
        const midias = MidiaModel.getMidia();
        MidiaView.renderMidias(midias);
    },

    addMidia() {
        const newMidia = {
            id: Date.now(),
            nome: document.getElementById('MidiaName').value,
            data: document.getElementById('MidiaDate').value,
            link: document.getElementById('AdditionalLinks').value,
            midia: document.getElementById('Midia').value,
            descrição: document.getElementById('MidiaDescription').value
        };
        MidiaModel.addMidia(newMidia);
        this.loadMidias();
        document.getElementById('MidiaForm').reset();
    },

    deleteMidia(id) {
        MidiaModel.deleteMidia(id);
        this.loadMidias();
    },

    editMidia(id) {
        const midiaToEdit = MidiaModel.getMidiaById(id);
        document.getElementById('editMidiaId').value = midiaToEdit.id;
        document.getElementById('editMidiaName').value = midiaToEdit.nome;
        document.getElementById('editMidiaDate').value = midiaToEdit.data;
        document.getElementById('editMidiaLink').value = midiaToEdit.link;
        document.getElementById('editMidiaType').value = midiaToEdit.midia;
        document.getElementById('editMidiaDescription').value = midiaToEdit.descrição;

        const modal = new bootstrap.Modal(document.getElementById('editMidiaModal'));
        modal.show();

        document.getElementById('editMidiaForm').addEventListener('submit', event => {
            event.preventDefault();

            const editedMidia = {
                id: parseInt(document.getElementById('editMidiaId').value),
                nome: document.getElementById('editMidiaName').value,
                data: document.getElementById('editMidiaDate').value,
                link: document.getElementById('editMidiaLink').value,
                midia: document.getElementById('editMidiaType').value,
                descrição: document.getElementById('editMidiaDescription').value
            };

            MidiaModel.editMidia(editedMidia);
            modal.hide();
            this.loadMidias();
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    MidiaController.init();
});
