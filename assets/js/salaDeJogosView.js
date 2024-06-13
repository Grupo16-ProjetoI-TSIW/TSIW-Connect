class QuestionView {
    constructor() {
        this.modal = document.getElementById('questionModal');
        this.modalTitle = document.getElementById('questionModalLabel');
        this.modalBody = this.modal.querySelector('.modal-body');
        this.Losemodal = document.getElementById('LoseModal');
        this.LosemodalTitle = document.getElementById('LoseModalLabel');
        this.LosemodalBody = this.Losemodal.querySelector('.modal-body');
        this.timerElement = document.getElementById('timer');
        this.intervalId = null;
        this.timeLeft = 5; // 10 minutes
        this.wordToGuess = '';
        this.revealedLetters = [];
    }

    renderQuestion(question) {
        this.modalTitle.innerText = 'Questão';
        this.modalBody.innerHTML = `
            <p>${question.pergunta}</p>
            <div class="d-grid gap-2">
                ${[question.opção_1, question.opção_2, question.opção_3, question.opção_4].map((option, index) => `
                    <button class="btn btn-primary option-btn" data-index="${index}">${option}</button>
                `).join('')}
            </div>
        `;
    }

    renderLetters(word, revealedLetters) {
        const lettersContainer = document.getElementById('word-container');
        lettersContainer.innerHTML = word.split('').map((letter, index) => `
            <span>${revealedLetters[index] ? letter : '_'}</span>
        `).join(' ');
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

    disableOverlay(overlay) {
        overlay.classList.add('correct');
        overlay.style.pointerEvents = 'none';
    }

    startTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.updateTimerDisplay(this.timeLeft);

        this.intervalId = setInterval(() => {
            this.timeLeft -= 1;
            if (this.timeLeft < 0) {
                clearInterval(this.intervalId);
                this.timeUp();
            } else {
                this.updateTimerDisplay(this.timeLeft);
            }
        }, 1000);
    }

    updateTimerDisplay(timeLeft) {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        this.timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    timeUp() {
        const questionModal = bootstrap.Modal.getInstance(this.modal);
        questionModal.hide();
        this.showEndGamePage();
    }

    subtractTime(seconds) {
        this.timeLeft -= seconds;
        if (this.timeLeft < 0) this.timeLeft = 0;
        this.updateTimerDisplay(this.timeLeft);
    }

    setWordToGuess(word) {
        this.wordToGuess = word;
        this.revealedLetters = Array(word.length).fill(false);
        this.renderLetters(word, this.revealedLetters);
    }

    revealLetterAtRandom() {
        const unrevealedIndices = this.revealedLetters
            .map((revealed, index) => revealed ? null : index)
            .filter(index => index !== null);

        if (unrevealedIndices.length === 0) return;

        const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
        this.revealedLetters[randomIndex] = true;
        this.renderLetters(this.wordToGuess, this.revealedLetters);
    }

    showEndGamePage() {
        var myModal = new bootstrap.Modal(this.Losemodal, {});
        myModal.show();
        document.getElementById('retry-button').addEventListener('click', () => {
            myModal.hide(); 
            this.resetGame(); 
        });
    }

    resetGame() {
        var myModal = new bootstrap.Modal(this.Losemodal, {});
        myModal.hide();
        this.timeLeft = 600; 
        document.getElementById('initial-page').style.display = 'block';
        document.getElementById('game-page').style.display = 'none';
    }
}