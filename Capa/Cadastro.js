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

    document.getElementById('ErroCadastro').textContent = '';
    document.getElementById('ErroIdade').textContent = '';
    document.getElementById('ErroEmail').textContent = '';
    document.getElementById('ErroSenha').textContent = '';

    document.getElementById('mensagemErro').textContent = '';
    document.getElementById('mensagemErroSenha').textContent = '';
}

function MostrarLog() {

    Tela1.classList.replace('visible', 'escondida');
    Tela2.classList.replace('visible', 'escondida');
    Tela3.classList.replace('escondida', 'visible');
}


//Aparecer uma mensagem caso o input não for preenchido
document.getElementById('LogForm').addEventListener('submit', function (e) {

    const input = document.getElementById('nomelog');
    const mensagemError = document.getElementById('mensagemErro');

    mensagemError.textContent = '';

    if (input.value.trim() === '') {
        e.preventDefault();
        mensagemError.textContent = 'Preencha o nome!';
        input.focus();
    }
})

document.getElementById('LogForm').addEventListener('submit', function (e) {

    const input = document.getElementById('senhaLog');
    const mensagemError = document.getElementById('mensagemErroSenha');

    mensagemError.textContent = '';

    if (input.value.trim() === '') {
        e.preventDefault();
        mensagemError.textContent = 'Coloque sua senha!';
        input.focus();
    }
})

document.getElementById('formCadastro').addEventListener('submit', function (e) {

    const input = document.getElementById('nomeCadastro');
    const ErroMensagem = document.getElementById('ErroCadastro');

    if (input.value.trim() === '') {
        e.preventDefault();
        ErroMensagem.textContent = 'Preencha esse campo!'
        input.focus();
    }
})

document.getElementById('formCadastro').addEventListener('submit', function (e) {

    const input = document.getElementById('idadeCadastro');
    const ErroMensagem = document.getElementById('ErroIdade');

    if (input.value.trim() === '') {
        e.preventDefault();
        ErroMensagem.textContent = 'Preencha esse campo!'
        input.focus();
    }
})

document.getElementById('formCadastro').addEventListener('submit', function (e) {

    const input = document.getElementById('emailCadastro');
    const ErroMensagem = document.getElementById('ErroEmail');

    if (input.value.trim() === '') {
        e.preventDefault();
        ErroMensagem.textContent = 'Preencha esse campo!'
        input.focus();
    }
})

document.getElementById('formCadastro').addEventListener('submit', function (e) {

    const input = document.getElementById('senhaCadastro');
    const ErroMensagem = document.getElementById('ErroSenha');

    if (input.value.trim() === '') {
        e.preventDefault();
        ErroMensagem.textContent = 'Preencha esse campo!'
        input.focus();
    }
})

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

// Formulário de Cadastro
document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nomeCadastro').value.trim();
    const email = document.getElementById('emailCadastro').value.trim();
    const senha = document.getElementById('senhaCadastro').value.trim();
    const idade = document.getElementById('idadeCadastro').value.trim();

    if (!nome || !email || !senha || !idade) {
        return; 
    }

    mostrarTelaCarregamentoERedirecionar('../Main/Mind.html');
});

// Formulário de Login
document.getElementById('LogForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nomelog').value.trim();
    const senha = document.getElementById('senhaLog').value.trim();

    if (!nome || !senha) {
        return; 
    }

    mostrarTelaCarregamentoERedirecionar('../Main/Mind.html');
});