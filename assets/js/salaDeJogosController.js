class QuestionController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.questions = this.model.getQuestions();

        document.getElementById('start-button').addEventListener('click', this.startGame.bind(this));

        document.querySelectorAll('.overlay').forEach((overlay, index) => {
            overlay.clickHandler = this.handleTableClick.bind(this, index + 1, overlay);
            overlay.addEventListener('click', overlay.clickHandler);
        });

        this.view.bindOptionClick(this.handleOptionClick.bind(this));
    }

    startGame() {
        document.getElementById('initial-page').style.display = 'none';
        document.getElementById('game-page').style.display = 'block';
        this.view.startTimer();
    }

    handleTableClick(questionId, overlay, event) {
        event.preventDefault();
        this.currentQuestionId = questionId;
        this.currentOverlay = overlay;
        const question = this.model.getQuestionById(questionId);
        this.view.renderQuestion(question);
        this.view.showModal();
    }

    handleOptionClick(index) {
        const selectedOption = this.view.modalBody.querySelector(`.option-btn[data-index="${index}"]`).innerText;
        const correctOption = this.model.getQuestionById(this.currentQuestionId).opção_correta;

        if (selectedOption === correctOption) {
            alert('Correto!');
            this.view.disableOverlay(this.currentOverlay);
            const questionModal = bootstrap.Modal.getInstance(document.getElementById('questionModal'));
            questionModal.hide();
        } else {
            alert('Incorreto! Tente novamente.');
            this.view.subtractTime(60); // Subtract 60 seconds from the timer
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const model = new QuestionModel();
    const view = new QuestionView();
    const controller = new QuestionController(model, view);
});
