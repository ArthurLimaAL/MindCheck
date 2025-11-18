//Script de esconder e mostrar a parte extra

const TelaPrincipal = document.getElementById('TelaInicial');
const TelaExtra = document.getElementById('Extras');
const TelaCarregamento = document.getElementById('carregamento');
const botaoExtra = document.getElementById('BntExtra');
const BotaoIniciar = document.getElementById('IniciarBnt');

botaoExtra.addEventListener('click', function () {

    TelaExtra.classList.toggle('escondida');
    TelaExtra.classList.toggle('visible');
    TelaCarregamento.classList('escondida')

    if (TelaExtra.classList.contains('visible')) {
        botaoExtra.innerHTML = "<b>X</b>";
    } else {
        botaoExtra.innerHTML = "<b>☰</b>";
    }
})

function FeedbackEnviar() {
    event.preventDefault();

    let feedback = document.getElementById('InputFeedback').value.trim();

    if (feedback === "") {
        alert("É necessário escrever algo no feedback!");
        return;
    }

    document.getElementById('InputFeedback').value = "";
    alert("Agradeçemos pelo seu feedback!");  // Alerta de enviado
}

//Iniciando o questionário

function IrParaQuest(destino){
    TelaPrincipal.classList.replace('visible', 'escondida');
    TelaExtra.classList.add('escondida');
    
    TelaCarregamento.classList.remove('escondida');
    TelaCarregamento.classList.add('visible');

    setTimeout(() => {
        window.location.href = destino;
    }, 2000);
}

BotaoIniciar.addEventListener('click', function(e) {
    IrParaQuest('../Questionario/Quest.html');
});