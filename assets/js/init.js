function initdata() {
    if (!localStorage.questions) {
        const questions = [
            {
                id_pergunta: 1,
                pergunta: "Qual das seguintes linguagens de programação é orientada a objetos?",
                opção_1: "C",
                opção_2: "Java",
                opção_3: "Assembly",
                opção_4: "HTML",
                opção_correta: "Java",
            },
            {
                id_pergunta: 2,
                pergunta: "Qual é o resultado da expressão 5 + 2 * 3 em Python?",
                opção_1: "21",
                opção_2: "15",
                opção_3: "11",
                opção_4: "7",
                opção_correta: "11",
            },
            {
                id_pergunta: 3,
                pergunta: "Qual das seguintes estruturas é usada para armazenar pares de chave e valor em Python?",
                opção_1: "List",
                opção_2: "Tuple",
                opção_3: "Set",
                opção_4: "Dictionary",
                opção_correta: "Dictionary",
            },
            {
                id_pergunta: 4,
                pergunta: "Qual é o propósito da função 'git commit' no Git?",
                opção_1: "Enviar arquivos para o servidor remoto",
                opção_2: "Adicionar arquivos ao índice",
                opção_3: "Criar um ponto de salvamento no repositório",
                opção_4: "Mesclar branches",
                opção_correta: "Criar um ponto de salvamento no repositório",
            },
            {
                id_pergunta: 5,
                pergunta: "Qual das seguintes linguagens é principalmente usada para desenvolvimento web frontend?",
                opção_1: "Java",
                opção_2: "Python",
                opção_3: "JavaScript",
                opção_4: "SQL",
                opção_correta: "JavaScript",
            },
        ];
        localStorage.setItem("questions", JSON.stringify(questions));
    }
    if (!localStorage.words) {
        const words = [
            {
                id_palavra: 1,
                palavra: "Desenvolver",
            },
            {
                id_palavra: 2,
                palavra: "Depuração",
            },
            {
                id_palavra: 3,
                palavra: "Algoritmia",
            },
            {
                id_palavra: 4,
                palavra: "Compilador",
            },
            {
                id_palavra: 5,
                palavra: "Framework",
            },
        ];
        localStorage.setItem("words", JSON.stringify(words));
    }
}

document.addEventListener('DOMContentLoaded', initdata);
