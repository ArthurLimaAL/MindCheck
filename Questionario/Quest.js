//Doeças disponíveis no MindCheck
const doencas = {
  Ansiedade: 0,
  Depressao: 0,
  Bipolaridade: 0,
  Esquisofrenia: 0
};

//Questionário com perguntas e respostas. Há uma pontuação em cada resposta que irá influênciar no resultado final
const perguntas = [
  {
    texto: "Você anda se sentindo triste ou com falta de interesse em atividades que antes gostava?",
    doenca_foco: "Depressao",
    opcoes: [
      { texto: "Nunca", valor: 0 },
      { texto: "Às vezes", valor: 2 },
      { texto: "Na maioria dos dias", valor: 4 },
      { texto: "Quase todos os dias", valor: 5 },
    ]
  },
  {
    texto: "Você se sente excessivamente preocupado(a) ou nervoso(a) sem um motivo claro?",
    doenca_foco: "Ansiedade",
    opcoes: [
      { texto: "Nunca", valor: 0 },
      { texto: "Raramente", valor: 2 },
      { texto: "Com frequência", valor: 4 },
      { texto: "Constantemente", valor: 5 },
    ]
  },
  {
    texto: "Você tem tido períodos de humor elevado, euforia ou irritabilidade extrema, seguidos por períodos de tristeza profunda?",
    doenca_foco: "Bipolaridade",
    opcoes: [
      { texto: "Nunca", valor: 0 },
      { texto: "Uma ou duas vezes", valor: 3 },
      { texto: "Algumas vezes por ano", valor: 5 },
      { texto: "Com muita frequência", valor: 6 },
    ]
  },
  {
    texto: "Você tem percebido pensamentos incomuns, como ouvir vozes ou ter crenças que outras pessoas consideram estranhas?",
    doenca_foco: "Esquisofrenia",
    opcoes: [
      { texto: "Nunca", valor: 0 },
      { texto: "Raramente, mas me incomoda", valor: 4 },
      { texto: "Às vezes, e é difícil ignorar", valor: 6 },
      { texto: "Com frequência, e afeta minha vida", valor: 8 },
    ]
  },
  {
    texto: "Você tem problemas para dormir (insônia ou sono excessivo)?",
    doenca_foco: "Depressao",
    opcoes: [
      { texto: "Não", valor: 0 },
      { texto: "Sim, ocasionalmente", valor: 2 },
      { texto: "Sim, quase todas as noites", valor: 4 },
      { texto: "Sim, todas as noites", valor: 5 },
    ]
  },
  {
    texto: "Você tem dificuldade em se concentrar ou tomar decisões?",
    doenca_foco: "Ansiedade",
    opcoes: [
      { texto: "Não", valor: 0 },
      { texto: "Às vezes", valor: 2 },
      { texto: "Com frequência", valor: 4 },
      { texto: "Quase sempre", valor: 5 },
    ]
  },
  {
    texto: "Você se sente mais impulsivo(a) ou com energia excessiva em certos períodos?",
    doenca_foco: "Bipolaridade",
    opcoes: [
      { texto: "Não", valor: 0 },
      { texto: "Raramente", valor: 3 },
      { texto: "Em alguns períodos", valor: 5 },
      { texto: "Em muitos períodos", valor: 6 },
    ]
  },
  {
    texto: "Você tem a sensação de que as pessoas estão te observando ou falando de você, mesmo sem evidências?",
    doenca_foco: "Esquisofrenia",
    opcoes: [
      { texto: "Nunca", valor: 0 },
      { texto: "Raramente", valor: 4 },
      { texto: "Às vezes", valor: 6 },
      { texto: "Com frequência", valor: 8 },
    ]
  }
];

let indiceAtual = 0;
const elementoPergunta = document.getElementById("pergunta");
const caixaRespostas = document.getElementById("caixRespostas");
const botaoReiniciar = document.getElementById("ReinicarBtn");


// Mensagens que aparecem no resultado final
const mensagensResultado = {
  Depressao: `
      <h2>Resultado: Indícios de Depressão</h2>
      <p>Sua pontuação sugere indícios de Depressão. É importante notar que este é apenas um questionário e não um diagnóstico médico.</p>
      <p><strong>Recomendação:</strong> Procure um profissional de saúde mental (psicólogo ou psiquiatra) para uma avaliação completa.
      Conversar sobre seus sentimentos é o primeiro passo para o bem-estar.</p>
  `,
  Ansiedade: `
      <h2>Resultado: Indícios de Ansiedade</h2>
      <p>Sua pontuação indica um nível significativo de Ansiedade. Sentir-se preocupado(a) é normal, mas o excesso pode ser prejudicial.</p>
      <p><strong>Recomendação:</strong> Considere a prática de técnicas de relaxamento e mindfulness.
      Para um manejo eficaz, a consulta com um psicólogo é altamente recomendada.</p>
  `,
  Bipolaridade: `
      <h2>Resultado: Indícios de Transtorno Bipolar</h2>
      <p>Os resultados apontam para a possibilidade de Transtorno Bipolar, caracterizado por mudanças extremas de humor.</p>
      <p><strong>Recomendação:</strong> A avaliação psiquiátrica é crucial para o diagnóstico e o início de um tratamento adequado, que geralmente envolve medicação e terapia.</p>
  `,
  Esquisofrenia: `
      <h2>Resultado: Indícios de Esquizofrenia</h2>
      <p>Sua pontuação sugere a presença de sintomas que podem estar relacionados à Esquizofrenia, como alterações na percepção da realidade.</p>
      <p><strong>Recomendação:</strong> É fundamental buscar imediatamente a ajuda de um psiquiatra.
      O diagnóstico precoce e o tratamento são essenciais para uma melhor qualidade de vida.</p>
  `
};

//Função geral do formulário
function mostrarPergunta() {
  if (indiceAtual < perguntas.length) {
    const perguntaAtual = perguntas[indiceAtual];
    elementoPergunta.textContent = perguntaAtual.texto;
    caixaRespostas.innerHTML = "";

    perguntaAtual.opcoes.forEach((opcao, index) => {
      const divResposta = document.createElement("div");
      divResposta.classList.add("Resposta" + (index + 1));
      divResposta.textContent = opcao.texto;
      divResposta.addEventListener("click", () =>
        selecionarResposta(opcao.valor, perguntaAtual.doenca_foco));
      caixaRespostas.appendChild(divResposta);
    });

    botaoReiniciar.classList.add("escondida");

  } else {
    let diagnostico = "Nenhum indício significativo";
    let pontuacaoMaxima = 0;

    for (const doenca in doencas) {
      if (doencas[doenca] > pontuacaoMaxima) {
        pontuacaoMaxima = doencas[doenca];
        diagnostico = doenca;
      }
    }

    elementoPergunta.textContent = `Você concluiu o questionário!`;

    // Se a pontuação máxima for zero, ou muito baixa, o resultado será neutro
    if (pontuacaoMaxima < 5) {
      caixaRespostas.innerHTML = `
              <h2>Resultado: Baixo Risco</h2>
              <p>Sua pontuação total foi baixa. Os resultados não indicam indícios significativos de nenhuma das condições avaliadas.</p>
              <p><strong>Recomendação:</strong> Continue cuidando da sua saúde mental e procure ajuda se notar qualquer alteração no seu bem-estar.</p>
          `;
    } else {
      // Mostra a mensagem da doença que tem a maior pontuação
      caixaRespostas.innerHTML = mensagensResultado[diagnostico];
    }

    // Mostra o botão de Reiniciar
    botaoReiniciar.classList.remove("escondida");
  }
}

//Fluxo do questionário
function selecionarResposta(valor, doenca_foco) {
  doencas[doenca_foco] += valor;

  indiceAtual++;
  mostrarPergunta();
}

// Função de Reinínicar
function reiniciarQuestionario() {
  indiceAtual = 0;
  for (const doenca in doencas) {
    doencas[doenca] = 0;
  }
  botaoReiniciar.classList.add("escondida");

  caixaRespostas.classList.add("visible");
  caixaRespostas.classList.remove("escondida");

  mostrarPergunta();
}

botaoReiniciar.addEventListener("click", reiniciarQuestionario);


mostrarPergunta();