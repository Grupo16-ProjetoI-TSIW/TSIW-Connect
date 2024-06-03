class QuestionController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.questions = this.model.getQuestions();
        document.getElementById('table-overlay').addEventListener('click', this.handleTableClick.bind(this));
        this.view.bindOptionClick(this.handleOptionClick.bind(this));
    }

    handleTableClick(event) {
        event.preventDefault();
        const question = this.model.getQuestionById(1);
        this.view.renderQuestion(question);
        this.view.showModal();
    }

    handleOptionClick(index) {
        const selectedOption = this.view.modalBody.querySelector(`.option-btn[data-index="${index}"]`).innerText;
        const correctOption = this.model.getQuestionById(1).opção_correta;

        if (selectedOption === correctOption) {
            alert('Correto!');
            this.view.disableOverlay();
            const questionModal = bootstrap.Modal.getInstance(document.getElementById('questionModal'));
            questionModal.hide();
        } else {
            alert('Incorreto! Tente novamente.');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const model = new QuestionModel();
    const view = new QuestionView();
    const controller = new QuestionController(model, view);
});
