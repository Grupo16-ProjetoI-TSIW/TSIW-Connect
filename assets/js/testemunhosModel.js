const testemunhosModel = {
    getTestimonials() {
        return JSON.parse(localStorage.getItem("testimonials")) || [];
    },
    getTestimonialById(id) {
        const testimonials = this.getTestimonials();
        return testimonials.find(testimonial => testimonial.id === id);
    },
    saveTestimonials(testimonials) {
        localStorage.setItem("testimonials", JSON.stringify(testimonials));
    },

    addTestimonial(testimonial) {
        const testimonials = this.getTestimonials();
        testimonials.push(testimonial);
        this.saveTestimonials(testimonials);
    },

    deleteTestimonial(id) {
        let testimonials = this.getTestimonials();
        testimonials = testimonials.filter(testimonial => testimonial.id !== id);
        this.saveTestimonials(testimonials);
    },

    updateTestimonial(updatedTestimonial) {
        let testimonials = this.getTestimonials();
        testimonials = testimonials.map(testimonial => testimonial.id === updatedTestimonial.id ? updatedTestimonial : testimonial);
        this.saveTestimonials(testimonials);
    },
    editTestimonial(editedTestimonial) {
        let testimonials = this.getTestimonials();
        console.log(editedTestimonial);
        const index = testimonials.findIndex(testimonial => testimonial.id === parseInt(editedTestimonial.id));
        console.log(index);
        if (index !== -1) {
            projects[index] = {
                id: parseInt(editedTestimonial.id),
                nome: editedTestimonial.nome,
                profissao: editedTestimonial.aluno,
                data: editedTestimonial.data,
                foto: editedTestimonial.link,
                descrição: editedTestimonial.descrição,
                
            };

            this.saveTestimonials(testimonials);
        } else {
            console.error(`Testemunho com ID ${editedTestimonial.id} não encontrado para edição.`);
        }
    },
};