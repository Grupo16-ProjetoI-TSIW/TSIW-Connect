const MidiaView = {
    renderMidias(midias) {
        const MidiaList = document.getElementById('MidiaList');
        MidiaList.innerHTML = '';
        midias.forEach(midia => {
            const midiaCard = document.createElement('div');
            midiaCard.className = 'col-md-5';
            midiaCard.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${midia.nome}</h5>
                        <p class="card-text">${midia.descrição}</p>
                        <!-- Aqui pode ser um link, vídeo, áudio, etc., dependendo do tipo de mídia -->
                        <img src="${midia.midia}" class="img-fluid mb-3" alt="Project Image">
                        <button class="btn btn-warning" onclick="MidiaController.editMidia(${midia.id})">Editar</button>
                        <button class="btn btn-danger" onclick="MidiaController.deleteMidia(${midia.id})">Eliminar</button>
                    </div>
                </div>
            `;
            MidiaList.appendChild(midiaCard);
        });
    }
};
