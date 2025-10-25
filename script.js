// --- 1. Definição das Variáveis de Pontuação e Perguntas ---
let Sumire = 0; // Golfinho (Harmonia, Paz)
let Aspen = 0;  // Águia Astuta (Estratégia, Ilusão, Engano)
let Kaen = 0;   // Dragão (Intenso, Agressivo, Superforça)
let Breeze = 0; // Águia Racional (Racional, Justiça, Eletricidade)

let currentQuestionIndex = 0;
let selectedAnimal = null; // Armazena a seleção atual
let quizCompleted = false;

// Objeto contendo todas as perguntas e a atribuição de pontuação
const questions = [
    {
        question: "Como você reage quando alguém te subestima?",
        options: [
            { text: "Mostro o erro dele no momento certo", animal: "Aspen" },
            { text: "Sorrio, o tempo mostra quem eu sou", animal: "Sumire" },
            { text: "Dou risada e sigo, não preciso provar nada", animal: "Breeze" },
            { text: "Deixo claro que comigo ninguém brinca", animal: "Kaen" }
        ]
    },
    {
        question: "Como seus amigos te descreveriam?",
        options: [
            { text: "Misterioso, reservado e sempre observando tudo", animal: "Aspen" },
            { text: "Livre, leve e impossível de prender", animal: "Breeze" },
            { text: "Empático, tranquilo e alguém que sempre escuta", animal: "Sumire" },
            { text: "Intenso, leal e cheio de energia", animal: "Kaen" }
        ]
    },
    {
        question: "Qual desses livros você prefere?",
        options: [
            { text: "Amor Teoricamente (Ali Hazelwood)", animal: "Breeze" },
            { text: "Acotar (Sarah J. Maas)", animal: "Kaen" },
            { text: "Príncipe Cruel (Holly Black)", animal: "Aspen" },
            { text: "A Seleção (Kiera Cass)", animal: "Sumire" }
        ]
    },
    {
        question: "Qual sua noite ideal?",
        options: [
            { text: "Curtindo para esquecer das minhas responsabilidades", animal: "Sumire" },
            { text: "Sozinho em casa", animal: "Aspen" },
            { text: "Qualquer lugar onde não tenha adolescentes", animal: "Kaen" },
            { text: "Um evento chique onde eu possa me destacar", animal: "Breeze" }
        ]
    },
    {
        question: "Se você pudesse ter um desses poderes, qual desses você teria?",
        options: [
            { text: "Voar, a sensação de liberdade e poder ir a qualquer lugar me agrada", animal: "Sumire" },
            { text: "Superforça, eu gosto do clássico", animal: "Kaen" },
            { text: "Eletricidade, ninguém iria mandar em mim sem levar um choque", animal: "Breeze" },
            { text: "Criar ilusões, enganar gente trouxa seria meu passatempo", animal: "Aspen" }
        ]
    },
    {
        question: "Um estranho te oferece poder em troca de algo. O que você faz?",
        options: [
            { text: "Pergunto o preço, e vejo se vale a pena", animal: "Breeze" },
            { text: "Recuso, poder não vale a minha paz", animal: "Sumire" },
            { text: "Aceito, mas mudo as regras no meio do jogo", animal: "Aspen" },
            { text: "Aceito de cabeça erguida, sabendo o risco vou atrás do meu objetivo", animal: "Kaen" }
        ]
    },
    {
        question: "Em um momento difícil/perigo, qual dessas frases você falaria?",
        options: [
            { text: "\"Já falei o que eu tinha para falar, nós ainda não acabamos.\"", animal: "Kaen" },
            { text: "\"Ninguém vai descobrir nada, até que você queira. Eu vou garantir isso!\"", animal: "Breeze" },
            { text: "\"Nunca abaixei minha cabeça antes, não começarei a fazer isso agora, não importa quantas ameaças me façam.\"", animal: "Aspen" },
            { text: "\"Isso não é uma ameaça, é um aviso. Ataque de novo e verá do que sou capaz.\"", animal: "Sumire" }
        ]
    },
    {
        question: "Diante de um desafio, sua primeira reação é...",
        options: [
            { text: "Procurar uma solução que não machuque ninguém", animal: "Sumire" },
            { text: "Seguir o instinto e improvisar", animal: "Aspen" },
            { text: "Analisar em silêncio e agir no momento certo", animal: "Breeze" },
            { text: "Encarar de frente, seja qual for o desafio eu sou foda e consigo lidar", animal: "Kaen" }
        ]
    }
];

// As descrições que você forneceu, organizadas por animal
const animalDescriptions = {
    Sumire: {
        title: "Sumire",
        description: `Não se engane pela sua natureza doce: Sumire pode ser calma como um rio, mas se for irritada, ela se transforma em um maremoto indomável. Ela será sua melhor amiga leal e divertida, mas guarde o aviso: a paciência dela tem limites.\n
        Como sua aliada, Sumire lhe concede o poder de controlar a água: crie bolhas mágicas ou um tsunami brutal, a escolha é sua. A chave para mantê-la feliz é uma boa dose de petiscos!`,
    
        imageFile: 'sumire.png', 
    },
    Aspen: {
        title: "Aspen",
        description: `Não subestime seu humor sarcástico: Aspen é inteligente, ardiloso e letal quando preciso. Ele adora uma piada, mas é muito perigoso no campo de batalha, Aspen molda as regras a seu favor e se necessário ele mesmo as quebra. Sua lealdade é absoluta, mas seja cauteloso ao cruzar o seu caminho, ela adora pregar peças.\n\n

        Seu presente é o domínio das Sombras: um poder que permite a você não apenas camuflar, mas materializar a escuridão em armas afiadas ou armadilhas inesperadas.\n\n"

        Se quiser o conquistar, Asp ama doces, principalmente Carolinas frescas`,

        imageFile: 'aspen.png', 
    },
    Breeze: {
        title: "Breeze",
        description: `Não espere impulsividade dela. Breeze é racional, estrategista e profundamente justa. Ela é sua conselheira mais confiável, sempre calculando cada movimento para garantir o sucesso com o mínimo de risco. Sua amizade é uma aliança baseada na lógica e na lealdade. Ela espera de você o mesmo nível de seriedade e precisão.\n\n

        Seu presente é o domínio dos Ventos: um poder que permite a você não apenas voar, mas criar escudos, propelir objetos ou desviar projéteis com a precisão de um raio laser. Crie uma brisa agradável ou um tornado, ela não ira te impedir.\n\n"

        Breeze valoriza o que é prático e delicioso. E por isso sua comida favorita são uvas sem sementes.`,

        imageFile: 'breeze.png', 
    },
    Kaen: {
        title: "Kaen",
        description: `Não espere gentileza. Kaen é agressivo, e sua paciência é tão curta quanto um fósforo aceso. Ele é um fardo de fúria e poder, mas por baixo das escamas, ele é profundamente leal aos poucos que ele escolhe proteger. Ele será seu guardião, mas exigirá de você uma coragem inabalável\n\n

        Seu presente é o domínio do Fogo: um poder que permite a você não apenas incinerar, mas materializar chamas em escudos de magma, criar explosões controladas ou forjar armas incandescentes.\n\n

        Ele respeita quem não recua, mas tem uma fraqueza: salgadinhos de pernil! Mantenha esse dragão sempre com seu petisco favorito para evitar o calor de sua impaciência.`,
        
        imageFile: 'kaen.png', 
}
};


// --- 2. Funções de Lógica do Quiz ---

// Carrega a pergunta atual na tela
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = (currentQuestionIndex + 1) + ". " + q.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        // Remove a classe 'active' do botão 'Próxima Pergunta' até que uma opção seja selecionada
        document.getElementById('next-button').classList.remove('active');
        selectedAnimal = null;

        q.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.innerText = option.text;
            button.setAttribute('data-animal', option.animal);
            button.onclick = () => selectOption(button, option.animal);
            optionsContainer.appendChild(button);
        });
    } else {
        // Se todas as perguntas foram respondidas, mostra o resultado
        showResult();
    }
}

// Lógica para selecionar uma opção de resposta
function selectOption(selectedButton, animal) {
    // Desseleciona todas as outras opções
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Seleciona a opção clicada
    selectedButton.classList.add('selected');
    selectedAnimal = animal; // Armazena o animal da resposta
    document.getElementById('next-button').classList.add('active'); // Ativa o botão
}

// Lógica para avançar para a próxima pergunta e registrar o ponto
function nextQuestion() {
    if (selectedAnimal) {
        // Registra o ponto no placar correto
        switch(selectedAnimal) {
            case 'Sumire': Sumire += 1; break;
            case 'Aspen': Aspen += 1; break;
            case 'Kaen': Kaen += 1; break;
            case 'Breeze': Breeze += 1; break;
        }

        currentQuestionIndex++;
        loadQuestion();
    }
}

// Lógica para determinar e mostrar o resultado final
function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    document.getElementById('main-title').style.display = 'none';

    const scores = [
        { animal: 'Sumire', score: Sumire },
        { animal: 'Aspen', score: Aspen },
        { animal: 'Kaen', score: Kaen },
        { animal: 'Breeze', score: Breeze }
    ];

    // Encontra a maior pontuação
    let maxScore = 0;
    scores.forEach(s => {
        if (s.score > maxScore) {
            maxScore = s.score;
        }
    });

    // Filtra os animais que empataram com a pontuação máxima
    const winners = scores.filter(s => s.score === maxScore);

    let finalAnimal;
    let finalDescription;
    let finalImageFile; // <-- NOVA VARIÁVEL AQUI!

    if (winners.length === 1) {
        // Caso de um único vencedor
        finalAnimal = winners[0].animal;
        finalDescription = animalDescriptions[finalAnimal].description;
        finalImageFile = animalDescriptions[finalAnimal].imageFile; // <-- CAPTURA O ARQUIVO
        document.getElementById('result-title').innerText = `O istlyx que te escolheu se chama \n${animalDescriptions[finalAnimal].title}`;
    } else {
        // Caso de empate (mostra os empatados)
        // ... (código de empate existente) ...
        
        finalAnimal = winners[0].animal; 
        finalImageFile = animalDescriptions[finalAnimal].imageFile; // <-- CAPTURA O ARQUIVO DO PRIMEIRO EMPATADO
        // ... (resto do código de empate existente) ...
    }
    
    // **ESTAS SÃO AS LINHAS CRUCIAIS PARA EXIBIR A IMAGEM:**
    document.getElementById('pet-image').src = finalImageFile;
    document.getElementById('pet-image').alt = finalAnimal + " - Seu Aliado";

    document.getElementById('result-description').innerHTML = finalDescription.replace(/\n/g, '<br>');
    quizCompleted = true;
}

// Lógica para reiniciar o quiz
function restartQuiz() {
    // Reseta as variáveis
    Sumire = 0;
    Aspen = 0;
    Kaen = 0;
    Breeze = 0;
    currentQuestionIndex = 0;
    quizCompleted = false;

    // Alterna a exibição
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';

    document.getElementById('main-title').style.display = 'block';
    
    // Recarrega a primeira pergunta
    loadQuestion();
}

// Inicia o quiz ao carregar a página
document.addEventListener('DOMContentLoaded', loadQuestion);