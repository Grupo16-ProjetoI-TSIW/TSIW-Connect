
class QuestionController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.questions = this.model.getQuestions();
        this.modal = document.getElementById('instructionsModal');
        this.modalTitle = document.getElementById('instructionsModalLabel');
        this.modalBody = this.modal.querySelector('.modal-body');
        this.Correctmodal = document.getElementById('CorrectModal');
        this.CorrectmodalTitle = document.getElementById('CorrectModalLabel');
        this.CorrectmodalBody = this.Correctmodal.querySelector('.modal-body');
        this.Incorrectmodal = document.getElementById('IncorrectModal');
        this.IncorrectmodalTitle = document.getElementById('IncorrectModalLabel');
        this.IncorrectmodalBody = this.Incorrectmodal.querySelector('.modal-body');
        this.Winmodal = document.getElementById('WinModal');
        this.WinmodalTitle = document.getElementById('WinModalLabel');
        this.WinmodalBody = this.Winmodal.querySelector('.modal-body');

        
        

        document.getElementById('start-button').addEventListener('click', this.startGame.bind(this));
        document.getElementById('instructions-button').addEventListener('click', this.InstructionsGame.bind(this));

        document.querySelectorAll('.overlay').forEach((overlay, index) => {
            overlay.clickHandler = this.handleTableClick.bind(this, index + 1, overlay);
            overlay.addEventListener('click', overlay.clickHandler);
        });

        this.view.bindOptionClick(this.handleOptionClick.bind(this));
    }
    editQuestion(questionId, updatedQuestion) {
        return this.questionModel.editQuestion(questionId, updatedQuestion);
    }
    startGame() {
        document.getElementById('initial-page').style.display = 'none';
        document.getElementById('game-page').style.display = 'block';
        this.view.startTimer();
        const word = this.model.getWordById(Math.floor(Math.random() * 5) + 1).palavra;
        this.view.setWordToGuess(word);
    }
    retryGame() {
        this.view.resetGame();
        this.view.startTimer();
    }

    InstructionsGame() {
        this.modalTitle.innerText = 'Instruções';
        this.modalBody.innerHTML = `
            <p>Neste Escape Room, terás de escapar de um ataque de um hacker, respondendo a perguntas quando se clica em objetos informáticos.</p>
            <p>Cada objeto dá direito a uma letra da palavra para fugir do quarto.</p>
            <p>A cada resposta errada irá diminuir 30 segundos ao tempo.</p>
            <p>Tens 10 minutos para concluir o desafio.</p>
            <p>BOA SORTE.</p>
        `;
        var myModal = new bootstrap.Modal(this.modal, {});
        myModal.show();
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
            this.CorrectmodalTitle.innerText = 'ACERTASTE!';
            this.CorrectmodalBody.innerHTML = `
                <p>Parabéns! Continua assim.</p>`;
            var myModal = new bootstrap.Modal(this.Correctmodal, {});
            myModal.show();            
            respostasCorretas+=1;
            console.log(respostasCorretas);
            this.view.disableOverlay(this.currentOverlay);
            const questionModal = bootstrap.Modal.getInstance(document.getElementById('questionModal'));
            questionModal.hide();
            this.view.revealLetterAtRandom();
            console.log(this.questions.length);
            if (respostasCorretas=== this.questions.length) {
                const finalScore = this.view.calculateFinalScore();
                this.view.showWinModal(finalScore);
            }
        } else {
            this.IncorrectmodalTitle.innerText = 'FALHASTE!';
            this.IncorrectmodalBody.innerHTML = `
                <p>Não desanimes! Tu Consegues.</p>`;
            var myModal = new bootstrap.Modal(this.Incorrectmodal, {});
            myModal.show();
                                    
            this.view.subtractTime(30);
        }
    }
}
let respostasCorretas=0;
document.addEventListener('DOMContentLoaded', () => {
    const model = new QuestionModel();
    const view = new QuestionView();
    const controller = new QuestionController(model, view);
});

