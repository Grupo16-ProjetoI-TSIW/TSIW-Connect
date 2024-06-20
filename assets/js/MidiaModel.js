const MidiaModel = {
    getMidia() {
        return JSON.parse(localStorage.getItem("midia")) || [];
    },

    saveMidias(midias) {
        localStorage.setItem("midia", JSON.stringify(midias));
    },

    getMidiaById(id) {
        const midias = this.getMidia();
        return midias.find(midia => midia.id === id);
    },

    addMidia(midia) {
        const midias = this.getMidia();
        midias.push(midia);
        this.saveMidias(midias);
    },

    deleteMidia(id) {
        let midias = this.getMidia();
        midias = midias.filter(midia => midia.id !== id);
        this.saveMidias(midias);
    },

    editMidia(editedMidia) {
        let midias = this.getMidia();
        const index = midias.findIndex(midia => midia.id === parseInt(editedMidia.id));
        
        if (index !== -1) {
            midias[index] = {
                id: parseInt(editedMidia.id),
                nome: editedMidia.nome,
                data: editedMidia.data,
                link: editedMidia.link,
                descrição: editedMidia.descrição,
                midia: editedMidia.midia,
            };

            this.saveMidias(midias);
        } else {
            console.error(`Mídia com ID ${editedMidia.id} não encontrada para edição.`);
        }
    },
};
