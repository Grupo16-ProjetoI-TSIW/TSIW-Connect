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
    updateQuestion(updatedQuestion, questionId) {
        let questions = this.getQuestions();
        const index = questions.findIndex(question => question.id_pergunta === questionId);
        if (index !== -1) {
            questions[index].pergunta = updatedQuestion.pergunta;
            questions[index].opção_1 = updatedQuestion.opção_1;
            questions[index].opção_2 = updatedQuestion.opção_2;
            questions[index].opção_3 = updatedQuestion.opção_3;
            questions[index].opção_4 = updatedQuestion.opção_4;
            questions[index].opção_correta = updatedQuestion.opção_correta;

            localStorage.setItem('questions', JSON.stringify(questions));
            console.log("Pergunta atualizada com sucesso:", questions[index]);
            location.reload();
            return true;
        }
        return false;
    }

    
}



