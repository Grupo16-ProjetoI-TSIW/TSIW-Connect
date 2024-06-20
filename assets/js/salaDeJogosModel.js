class QuestionModel {
    getQuestions() {
        return JSON.parse(localStorage.getItem('questions'));
    }

    getQuestionById(id) {
        const questions = this.getQuestions();
        return questions.find(question => question.id_pergunta === id);
    }
    getWords() {
        return JSON.parse(localStorage.getItem('words'));
    }

    getWordById(id) {
        const words = this.getWords();
        return words.find(word => word.id_palavra === id);
    }
    editQuestion(questionId, updatedQuestion) {
        const index = this.questions.findIndex(question => question.id === questionId);
        if (index !== -1) {
            this.questions[index] = updatedQuestion;
            this.saveQuestions();
            return true;
        }
        return false;
    }
    saveQuestions() {
        localStorage.setItem('questions', JSON.stringify(this.questions));
    }
}



