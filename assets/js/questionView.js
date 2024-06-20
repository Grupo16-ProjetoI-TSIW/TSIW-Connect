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
    
        const questionText = document.createElement('h6'); 
        questionText.classList.add('card-title', 'mb-4'); 
        questionText.textContent = question.pergunta;
    
        const option1 = document.createElement('p');
        option1.classList.add('mb-2'); 
        option1.textContent = `1. ${question.opção_1}`;
    
        const option2 = document.createElement('p');
        option2.classList.add('mb-2'); 
        option2.textContent = `2. ${question.opção_2}`;
    
        const option3 = document.createElement('p');
        option3.classList.add('mb-2'); 
        option3.textContent = `3. ${question.opção_3}`;
    
        const option4 = document.createElement('p');
        option4.classList.add('mb-2'); 
        option4.textContent = `4. ${question.opção_4}`;
    
        const correctOption = document.createElement('p');
        correctOption.classList.add('mb-2'); 
        correctOption.textContent = `Opção correta: ${question.opção_correta}`;
    
        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-primary', 'me-2');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', function() {
            openEditModal(question);
        });
    
    
        cardBody.appendChild(questionText);
        cardBody.appendChild(option1);
        cardBody.appendChild(option2);
        cardBody.appendChild(option3);
        cardBody.appendChild(option4);
        cardBody.appendChild(correctOption);
        cardBody.appendChild(editButton);
    
        card.appendChild(cardBody);
    
        return card;
    }
    function openEditModal(question) {
        const modal = new bootstrap.Modal(document.getElementById('editQuestionModal'));
        document.getElementById('editQuestionId').value = question.id_pergunta;
        document.getElementById('editQuestionText').value = question.pergunta;
        document.getElementById('editOption1').value = question.opção_1;
        document.getElementById('editOption2').value = question.opção_2;
        document.getElementById('editOption3').value = question.opção_3;
        document.getElementById('editOption4').value = question.opção_4;
    
        const correctOptionMap = {
            [question.opção_1]: 'opção_1',
            [question.opção_2]: 'opção_2',
            [question.opção_3]: 'opção_3',
            [question.opção_4]: 'opção_4',
        };
        document.getElementById('editCorrectOption').value = correctOptionMap[question.opção_correta];
    
        modal.show();
    }
    document.getElementById('editQuestionForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const questionId = parseInt(document.getElementById('editQuestionId').value);
        let opção_correta = document.getElementById('editCorrectOption').value;
    
        switch (opção_correta) {
            case 'opção_1':
                opção_correta = document.getElementById('editOption1').value;
                break;
            case 'opção_2':
                opção_correta = document.getElementById('editOption2').value;
                break;
            case 'opção_3':
                opção_correta = document.getElementById('editOption3').value;
                break;
            case 'opção_4':
                opção_correta = document.getElementById('editOption4').value;
                break;
            default:
                break;
        }
    
        const updatedQuestion = {
            id_pergunta: questionId,
            pergunta: document.getElementById('editQuestionText').value,
            opção_1: document.getElementById('editOption1').value,
            opção_2: document.getElementById('editOption2').value,
            opção_3: document.getElementById('editOption3').value,
            opção_4: document.getElementById('editOption4').value,
            opção_correta: opção_correta,
        };
    
        questionModel.updateQuestion(updatedQuestion, questionId);
        displayQuestions(questionModel.getQuestions());
    
        const modal = bootstrap.Modal.getInstance(document.getElementById('editQuestionModal'));
        modal.hide();
    });
    
    
    
    const questionModel = new QuestionModel();
    const questions = questionModel.getQuestions();
    displayQuestions(questions);
});
