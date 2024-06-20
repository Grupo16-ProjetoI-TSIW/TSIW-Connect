function initdata() {
    if (!localStorage.getItem("users")) {
        const users = [
            {
                id: 1,
                tipo: 'admin',
                nickname: 'admin123',
                email: 'admin123@gmail.com',
                nome: 'Administrador',
                password: '1234',
                nivel: 1,
                pontuacao: 0,
                foto_perfil:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShN0nuLT7HIpIANuDi6wbMKpeuCgZsl2PtAA&s'
            },
            {
                id: 2,
                tipo: 'user',
                nickname: 'user456',
                email: 'user456@gmail.com',
                nome: 'User One',
                password: 'password1',
                nivel: 1,
                pontuacao: 0,
                foto_perfil:'https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'

            },
            {
                id: 3,
                tipo: 'user',
                nickname: 'user789',
                email: 'user789@gmail.com',
                nome: 'User Two',
                password: 'password2',
                nivel: 1,
                pontuacao: 0,
                foto_perfil:'https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'

            }
        ];
        localStorage.setItem("users", JSON.stringify(users));
    }
    if (!localStorage.getItem("questions")) {
        const questions = [
            {
                id_pergunta: 1,
                pergunta: "Qual das seguintes linguagens de programação é orientada a objetos?",
                opção_1: "C",
                opção_2: "Java",
                opção_3: "Assembly",
                opção_4: "HTML",
                opção_correta: "Java"
            },
            {
                id_pergunta: 2,
                pergunta: "Qual é o resultado da expressão 5 + 2 * 3 em Python?",
                opção_1: "21",
                opção_2: "15",
                opção_3: "11",
                opção_4: "7",
                opção_correta: "11"
            },
            {
                id_pergunta: 3,
                pergunta: "Qual das seguintes estruturas é usada para armazenar pares de chave e valor em Python?",
                opção_1: "List",
                opção_2: "Tuple",
                opção_3: "Set",
                opção_4: "Dictionary",
                opção_correta: "Dictionary"
            },
            {
                id_pergunta: 4,
                pergunta: "Qual é o propósito da função 'git commit' no Git?",
                opção_1: "Enviar arquivos para o servidor remoto",
                opção_2: "Adicionar arquivos ao índice",
                opção_3: "Criar um ponto de salvamento no repositório",
                opção_4: "Mesclar branches",
                opção_correta: "Criar um ponto de salvamento no repositório"
            },
            {
                id_pergunta: 5,
                pergunta: "Qual das seguintes linguagens é principalmente usada para desenvolvimento web frontend?",
                opção_1: "Java",
                opção_2: "Python",
                opção_3: "JavaScript",
                opção_4: "SQL",
                opção_correta: "JavaScript"
            },
            {
                id_pergunta: 6,
                pergunta: "Qual dos seguintes é um sistema de gerenciamento de banco de dados relacional?",
                opção_1: "MySQL",
                opção_2: "MongoDB",
                opção_3: "Cassandra",
                opção_4: "Redis",
                opção_correta: "MySQL"
            },
            {
                id_pergunta: 7,
                pergunta: "Qual é a saída do código: print('Hello, ' + 'World!') em Python?",
                opção_1: "Hello, World!",
                opção_2: "HelloWorld!",
                opção_3: "Hello, World!",
                opção_4: "Erro",
                opção_correta: "Hello, World!"
            },
            {
                id_pergunta: 8,
                pergunta: "Qual é o resultado da expressão lógica True and False?",
                opção_1: "True",
                opção_2: "False",
                opção_3: "Erro",
                opção_4: "None",
                opção_correta: "False"
            },
            {
                id_pergunta: 9,
                pergunta: "Qual é o comando para criar um novo branch no Git?",
                opção_1: "git init",
                opção_2: "git branch",
                opção_3: "git checkout",
                opção_4: "git merge",
                opção_correta: "git branch"
            },
            {
                id_pergunta: 10,
                pergunta: "Qual é a função usada para obter a entrada do utilizador no Python?",
                opção_1: "get_input()",
                opção_2: "input()",
                opção_3: "scanf()",
                opção_4: "read()",
                opção_correta: "input()"
            }
        ];
        localStorage.setItem("questions", JSON.stringify(questions));
    }
    
    if (!localStorage.getItem("words")) {
        const words = [
            {
                id_palavra: 1,
                palavra: "DataStruct"
            },
            {
                id_palavra: 2,
                palavra: "Depuração"
            },
            {
                id_palavra: 3,
                palavra: "Algoritmia"
            },
            {
                id_palavra: 4,
                palavra: "Desempenho"
            },
            {
                id_palavra: 5,
                palavra: "Framework"
            }
        ];
        localStorage.setItem("words", JSON.stringify(words));
    }
    if (!localStorage.getItem("projects")) {
        const projects = [
            {
                id: 1,
                nome: 'Projeto',
                aluno: 'Aluno',
                data: '2023',
                link: 'https://www.youtube.com/watch?v=MYfA2XtiCks',
                descrição: 'Muito bom Projeto',
                imagem: '/assets/images/projeto1.jpg',
                projeto_mes: 1
            },
            {
                id: 2,
                nome: 'Projeto',
                aluno: 'Aluno',
                data: '2023',
                link: 'https://www.youtube.com/watch?v=MYfA2XtiCks',
                descrição: 'Muito bom Projeto',
                imagem: '/assets/images/projeto1.jpg',
                projeto_mes: 0
            }
        ];
        localStorage.setItem("projects", JSON.stringify(projects));
    }
    if (!localStorage.getItem("testimonials")) {
        const testimonials = [
            {
                id: 1,
                nome: 'Testemunho',
                profissao: 'Aluno',
                data: '2023',
                foto: 'https://www.youtube.com/watch?v=MYfA2XtiCks',
                descrição: 'Muito bom Projeto'
                
            }
        ];
        localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
    if (!localStorage.getItem("midia")) {
        const testimonials = [
            {
                id: 1,
                nome: 'midia',
                data: '2023',
                link: 'https://www.youtube.com/watch?v=MYfA2XtiCks',
                descrição: 'Muito bom Projeto',
                midia: ''
            }
        ];
        localStorage.setItem("midia", JSON.stringify(midia));
    }
}

document.addEventListener('DOMContentLoaded', initdata);
