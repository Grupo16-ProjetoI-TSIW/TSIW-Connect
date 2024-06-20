const testemunhosController = {
    init() {
        this.loadTestimonials();
        document.getElementById('testimonialForm').addEventListener('submit', event => {
            event.preventDefault();
            this.addTestimonial();
        });
    },

    loadTestimonials() {
        const testimonials = testemunhosModel.getTestimonials();
        testemunhosView.renderTestimonials(testimonials);
    },

    addTestimonial() {
        const newTestimonial = {
            id: Date.now(),
            nome: document.getElementById('testimonialName').value,
            profissao: document.getElementById('profession').value,
            data: document.getElementById('testimonialDate').value,
            foto: document.getElementById('testimonialPhoto').value,
            descrição: document.getElementById('testimonialDescription').value
        };
        testemunhosModel.addTestimonial(newTestimonial);
        this.loadTestimonials();
    },

    deleteTestimonial(id) {
        testemunhosModel.deleteTestimonial(id);
        this.loadTestimonials();
    },

    editTestimonial(id) {
        const testimonialToEdit = testemunhosModel.getTestimonialById(id);
        document.getElementById('editTestimonialId').value = testimonialToEdit.id;
        document.getElementById('editTestimonialName').value = testimonialToEdit.nome;
        document.getElementById('editTestimonialProfession').value = testimonialToEdit.aluno;
        document.getElementById('editTestimonialDate').value = testimonialToEdit.data;
        document.getElementById('editTestimonialPhoto').value = testimonialToEdit.foto;
        document.getElementById('editTestimonialDescription').value = testimonialToEdit.descrição;
        

        const modal = new bootstrap.Modal(document.getElementById('editTestimonialModal'));
        modal.show();
        
        document.getElementById('editTestimonialForm').addEventListener('submit', event => {
            event.preventDefault();
            
            const editedTestimonial = {
                id: parseInt(document.getElementById('editTestimonialId').value),
                nome: document.getElementById('editTestimonialName').value,
                aluno: document.getElementById('editTestimonialProfession').value,
                data: document.getElementById('editTestimonialDate').value,
                foto: document.getElementById('editTestimonialPhoto').value,
                descrição: document.getElementById('editTestimonialDescription').value,
                
            };
            
            testemunhosModel.editTestimonial(editedTestimonial);
            modal.hide();
            this.loadTestimonials();
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    testemunhosController.init();
});
