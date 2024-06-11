class QuestionView {
    constructor() {
        this.modal = document.getElementById('questionModal');
        this.modalTitle = document.getElementById('questionModalLabel');
        this.modalBody = this.modal.querySelector('.modal-body');
        this.timerElement = document.getElementById('timer');
        this.intervalId = null;
        this.timeLeft = 600; // 10 minutes in seconds
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
        alert('Time is up!');
        const questionModal = bootstrap.Modal.getInstance(this.modal);
        questionModal.hide();
    }

    subtractTime(seconds) {
        this.timeLeft -= seconds;
        if (this.timeLeft < 0) this.timeLeft = 0;
        this.updateTimerDisplay(this.timeLeft);
    }
}