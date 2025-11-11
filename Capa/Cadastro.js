//Script dos botões e animações

const Tela1 = document.getElementById('Tela1');
const Tela2 = document.getElementById('FromCadastro');
const Tela3 = document.getElementById('Loginn');
const Tela4 = document.getElementById('carregamento');

function MostrarCads() {

    Tela1.classList.replace('visible', 'escondida');
    Tela2.classList.replace('escondida', 'visible');
    Tela3.classList.replace('visible', 'escondida');

}

function Voltar() {

    Tela2.classList.replace('visible', 'escondida');
    Tela3.classList.replace('visible', 'escondida');
    Tela1.classList.replace('escondida', 'visible');
    Tela4.classList.replace('visible', 'escondida');
}

function MostrarLog() {

    Tela1.classList.replace('visible', 'escondida');
    Tela2.classList.replace('visible', 'escondida');
    Tela3.classList.replace('escondida', 'visible');
}

//Tela de carregamento
function mostrarTelaCarregamentoERedirecionar(destino) {
    Tela1.classList.add('escondida');
    Tela2.classList.add('escondida');
    Tela3.classList.add('escondida');
    Tela4.classList.remove('escondida');
    Tela4.classList.add('visible');
    setTimeout(() => {
        window.location.href = destino;
    }, 2000);
}

//Cadastrar

function Cadastrar() {

    event.preventDefault();

    const Nome = document.getElementById("nomeCadastro").value.trim();
    const Idade = document.getElementById("idadeCadastro").value.trim();
    const Email = document.getElementById('emailCadastro').value.trim();
    const Senha = document.getElementById('senhaCadastro').value.trim();


    if (!Nome || !Idade || !Email || !Senha) {
        alert('Existem campos que não foram preenchidos!');
        return;
    }

    const usuario = {
        Nome,
        Idade,
        Email,
        Senha
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    mostrarTelaCarregamentoERedirecionar('../Main/Mind.html');
}

//Login

function Login(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nomelog").value.trim();
    const senha = document.getElementById("senhaLog").value.trim(); 

    if (!nome || !senha) {
        alert('Por favor, preencha o nome e a senha.');
        return;
    }
    
    const usuarioSalvoJSON = localStorage.getItem('usuario');

    if (!usuarioSalvoJSON) {
        alert('Nenhum usuário encontrado. Por favor, cadastre-se primeiro.');
        return;
    }

    const usuarioSalvo = JSON.parse(usuarioSalvoJSON);

    if (usuarioSalvo.Nome === nome && usuarioSalvo.Senha === senha) {
        mostrarTelaCarregamentoERedirecionar('../Main/Mind.html');
    } else {
        alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }
}

// Formulário de Login
/* document.getElementById('LogForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nomelog').value.trim();
    const senha = document.getElementById('senhaLog').value.trim();

    if (!nome || !senha) {
        alert('Existem campos que não foram preenchidos!');
        return;
    }

    mostrarTelaCarregamentoERedirecionar('../Main/Mind.html');
}); */