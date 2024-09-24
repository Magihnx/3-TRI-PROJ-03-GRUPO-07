const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector (".texto-resultado");

const perguntas = [
    {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
        "Isso é assustador!",
        "Isso é maravilhoso!"
    ]
    },
{
    enunciado: "Com",
    alternativas: [
        "Utiliza",
        "Escreve"
    ]
},
{
    enunciado: "Após",
    alternativas: [
        "Defende a ideia",
        "Me preocupo"
    ]
},
{
    enunciado: "Ao final da discussão",
    alternativas: [
        "Criar uma imagem",
        "Criar uma imagem"
    ]
},
{
    enunciado: "Você tem",
    alternativas: [
        "Escrever",
        "O chat pode ser"
    ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();