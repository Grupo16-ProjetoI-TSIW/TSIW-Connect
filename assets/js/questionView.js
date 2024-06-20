document.addEventListener('DOMContentLoaded', function() {
    const questionsContainer = document.getElementById('question-list');

    function displayQuestions(questions) {
        questionsContainer.innerHTML = '';

        questions.forEach(question => {
            const card = createQuestionCard(question);
            questionsContainer.appendChild(card);
        });
    }

    function createQuestionCard(question) {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-5');
    
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
    
        const questionText = document.createElement('h6'); // Ajustado para h4 para um título maior
        questionText.classList.add('card-title', 'mb-4'); // Adicionado mb-4 para espaçamento
        questionText.textContent = question.pergunta;
    
        const option1 = document.createElement('p');
        option1.classList.add('mb-2'); // Ajusta a margem inferior
        option1.textContent = `1. ${question.opção_1}`;
    
        const option2 = document.createElement('p');
        option2.classList.add('mb-2'); // Ajusta a margem inferior
        option2.textContent = `2. ${question.opção_2}`;
    
        const option3 = document.createElement('p');
        option3.classList.add('mb-2'); // Ajusta a margem inferior
        option3.textContent = `3. ${question.opção_3}`;
    
        const option4 = document.createElement('p');
        option4.classList.add('mb-2'); // Ajusta a margem inferior
        option4.textContent = `4. ${question.opção_4}`;
    
        const correctOption = document.createElement('p');
        correctOption.classList.add('mb-2'); // Ajusta a margem inferior
        correctOption.textContent = `Opção correta: ${question.opção_correta}`;
    
        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-primary', 'me-2');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', function() {
            console.log('Editar pergunta:', question.id_pergunta);
        });
    
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Apagar';
        deleteButton.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja apagar esta pergunta?')) {
                questionController.deleteQuestion(question.id_pergunta);
                displayQuestions(questionController.getQuestions());
                alert('Pergunta apagada com sucesso.');
            }
        });
    
        cardBody.appendChild(questionText);
        cardBody.appendChild(option1);
        cardBody.appendChild(option2);
        cardBody.appendChild(option3);
        cardBody.appendChild(option4);
        cardBody.appendChild(correctOption);
        cardBody.appendChild(editButton);
        cardBody.appendChild(deleteButton);
    
        card.appendChild(cardBody);
    
        return card;
    }
    
    

    const questionModel = new QuestionModel();
    const questions = questionModel.getQuestions();
    displayQuestions(questions);
});
