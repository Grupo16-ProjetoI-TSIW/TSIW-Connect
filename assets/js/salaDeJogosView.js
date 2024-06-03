class QuestionView {
    constructor() {
        this.modal = document.getElementById('questionModal');
        this.modalTitle = document.getElementById('questionModalLabel');
        this.modalBody = this.modal.querySelector('.modal-body');
        this.overlay = document.getElementById('table-overlay');
    }

    renderQuestion(question) {
        this.modalTitle.innerText = 'Question';
        this.modalBody.innerHTML = `
            <p>${question.pergunta}</p>
            <div class="d-grid gap-2">
                ${[question.opção_1, question.opção_2, question.opção_3, question.opção_4].map((option, index) => `
                    <button class="btn btn-primary option-btn" data-index="${index}">${option}</button>
                `).join('')}
            </div>
        `;
    }

    showModal() {
        var myModal = new bootstrap.Modal(this.modal, {});
        myModal.show();
    }

    bindOptionClick(handler) {
        this.modalBody.addEventListener('click', event => {
            if (event.target.classList.contains('option-btn')) {
                const index = event.target.getAttribute('data-index');
                handler(index);
            }
        });
    }

    disableOverlay() {
        this.overlay.removeEventListener('click', this.showModal);
    }
}
