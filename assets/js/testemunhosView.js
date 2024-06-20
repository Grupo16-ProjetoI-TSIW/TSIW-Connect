const testemunhosView = {
    renderTestimonials(testimonials) {
        const testimonialList = document.getElementById('testimonialList');
        testimonialList.innerHTML = '';
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'col-md-4';
            testimonialCard.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${testimonial.nome}</h5>
                        <p class="card-text">${testimonial.descrição}</p>
                        <img src="${testimonial.foto}" class="img-fluid mb-3" alt="Testimonial Image">
                        <button class="btn btn-warning" onclick="testemunhosController.editTestimonial(${testimonial.id})">Editar</button>
                        <button class="btn btn-danger" onclick="testemunhosController.deleteTestimonial(${testimonial.id})">Eliminar</button>
                    </div>
                </div>
            `;
            testimonialList.appendChild(testimonialCard);
        });
    }
};
const editTestimonial = (id) => {
    const testimonial = testimonials.find(item => item.id === id);
    if (testimonial) {
        document.getElementById('editTestimonialId').value = testimonial.id;
        document.getElementById('editTestimonialName').value = testimonial.nome;
        document.getElementById('editTestimonialProfession').value = testimonial.profissao;
        document.getElementById('editTestimonialDate').value = testimonial.data;
        document.getElementById('editTestimonialPhoto').value = testimonial.foto;
        document.getElementById('editTestimonialDescription').value = testimonial.descrição;

        const modal = new bootstrap.Modal(document.getElementById('editTestimonialModal'));
        modal.show();
    } else {
        console.error(`Testemunho com ID ${id} não encontrado.`);
    }
};

document.getElementById('editTestimonialForm').addEventListener('submit', event => {
    event.preventDefault();
    
    const editedTestimonial = {
        id: document.getElementById('editTestimonialId').value,
        nome: document.getElementById('editTestimonialName').value,
        profissao: document.getElementById('editTestimonialProfession').value,
        data: document.getElementById('editTestimonialDate').value,
        foto: document.getElementById('editTestimonialPhoto').value,
        descrição: document.getElementById('editTestimonialDescription').value
    };

    const index = testimonials.findIndex(testimonial => testimonial.id === editedTestimonial.id);
    if (index !== -1) {
        testimonials[index] = editedTestimonial;
        testimonialsView.renderTestimonials(testimonials);
        
        const modal = new bootstrap.Modal(document.getElementById('editTestimonialModal'));
        modal.hide();
    } else {
        console.error(`Testemunho com ID ${editedTestimonial.id} não encontrado para edição.`);
    }
});

testimonialsView.renderTestimonials(testimonials);