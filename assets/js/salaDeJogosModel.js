class QuestionModel {
    getQuestions() {
        return JSON.parse(localStorage.getItem('questions'));
    }

    getQuestionById(id) {
        const questions = this.getQuestions();
        return questions.find(question => question.id_pergunta === id);
    }
}



