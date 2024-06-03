
class QuestionModel {
    constructor() {
        this.questions = JSON.parse(localStorage.getItem('questions')) || [];
    }

    getQuestions() {
        return this.questions;
    }

    getQuestionById(id) {
        return this.questions.find(question => question.id_pergunta === id);
    }
}
