const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector (".texto-resultado");

const perguntas = [
    {
    enunciado: 
    "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
        {
        texto: "Isso é assustador!",
        afirmacao: afirmação,
        },
        { 
        texto: "Isso é maravilhoso!",
        afirmacao: afirmação,
    }
    ]
    },
{
    enunciado: 
    "Com",
    alternativas: [
        {
        texto: 
        "Utiliza",
        afirmacao: afirmação,
        },
        {
            texto: 
            "Escreve",
            afirmacao: afirmação,
        }
    ]
},
{
    enunciado: 
    "Após",
    alternativas: [
        {
        texto:
        "Defende a ideia",
        afirmacao: afirmação,
        },
        {
        texto: 
        "Me preocupo",
        afirmacao: afirmação,
        }
    ]
},
{
    enunciado: 
    "Ao final da discussão",
    alternativas: [
        {
        texto: "Criar uma imagem",
        afirmacao: afirmação,
        },
        {
        texto: "Criar uma imagem",
        afirmacao: afirmação,
        }
    ]
},
{
    enunciado: 
    "Você tem",
    alternativas: [
        {
        texto: 
        "Escrever",
        afirmacao: afirmação,
        },
        {
        texto: "O chat pode ser",
        afirmacao: afirmação,
        }
    ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button");   
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            atual++,
            mostraPergunta();
        });
        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
