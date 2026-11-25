"use strict";

const LGPD_KEY = "hamster_rosa_lgpd_v1";
const MENSAGEM_HACKER_GATOS =
  "ALERTA DE INVASÃO: OS GATOS ANDARAM NO TECLADO, CONFISCARAM AS SEMENTES E DECRETARAM LEI MARCIAL ROSA — MIAU!";

const IMAGEM_AVISO_INFERIOR = Object.freeze({
  url: "https://i.pinimg.com/736x/36/2c/36/362c3629a3d6a6a9842d4076b9e89206.jpg",
  frase: "proibida a entrada de Gatos nesse ambiente"
});

// Os 5 primeiros itens compõem o Top 5 Mais Fofos (do #1 ao #5)
const HAMSTERS = Object.freeze([
  {
    id: "h1",
    titulo: "Hamster Rosado #1",
    categoria: "fofura",
    url: "https://i.pinimg.com/474x/18/5a/49/185a49b5069a2073aa34025ff69b923c.jpg"
  },
  {
    id: "h2",
    titulo: "Hamster Rosado #2",
    categoria: "fofura",
    url: "https://i.pinimg.com/474x/b6/2a/6c/b62a6cd76abc74602ef54c1697c740f1.jpg"
  },
  {
    id: "h3",
    titulo: "Hamster Rosado #3",
    categoria: "fofura",
    url: "https://i.pinimg.com/474x/99/78/de/9978de7a1c3527d613b4c7a0770291ad.jpg"
  },
  {
    id: "h4",
    titulo: "Hamster Rosado #4",
    categoria: "comendo",
    url: "https://i.pinimg.com/736x/66/d7/53/66d7534510296eea87692b793cb9c587.jpg"
  },
  {
    id: "h5",
    titulo: "Hamster Rosado #5",
    categoria: "fofura",
    url: "https://i.pinimg.com/736x/8e/b0/74/8eb074bfbb3b39617b0e0775ce50d31c.jpg"
  },
  {
    id: "h6",
    titulo: "Hamster Rosado #6",
    categoria: "dormindo",
    url: "https://i.pinimg.com/736x/f8/d6/c3/f8d6c31faadfbc8055312ace70fef927.jpg"
  },
  {
    id: "h7",
    titulo: "Hamster Rosado #7",
    categoria: "pose para foto ",
    url: "https://i.pinimg.com/474x/e4/7b/0a/e47b0a324356201f07a92fa041dc677b.jpg"
  },
  {
    id: "h8",
    titulo: "Hamster Rosado #8",
    categoria: "comendo",
    url: "https://i.pinimg.com/736x/06/73/fe/0673fedf2250f30c595e04e7663605fb.jpg"
  },
  {
    id: "h9",
    titulo: "Hamster Rosado #9",
    categoria: "fofura",
    url: "https://i.pinimg.com/736x/2c/bf/4b/2cbf4b2ff73265d55ac1209247487502.jpg"
  },
  {
    id: "h10",
    titulo: "Hamster Rosado #10",
    categoria: "fofura",
    url: "https://i.pinimg.com/1200x/69/ea/03/69ea0302175ed43f28c51390c19ab8f2.jpg"
  }
]);

// 10 gatos invasores que substituem os hamsters ao clicar em Executar
const GATOS_INVASORES = Object.freeze([
  {
    id: "g1",
    titulo: "Gato Invasor #1",
    categoria: "fofura",
    url: "https://i.pinimg.com/736x/90/90/1a/90901ae311a2f5742d0ffa253f85654e.jpg"
  },
  {
    id: "g2",
    titulo: "Gato Invasor #2",
    categoria: "fofura",
    url: "https://i.pinimg.com/1200x/61/fe/19/61fe195f9f0bca09f44b61c071ad8bb5.jpg"
  },
  {
    id: "g3",
    titulo: "Gato Invasor #3",
    categoria: "dormindo",
    url: "https://i.pinimg.com/736x/e7/15/9a/e7159a049a45accd2a1df0106c8104a1.jpg"
  },
  {
    id: "g4",
    titulo: "Gato Invasor #4",
    categoria: "comendo",
    url: "https://i.pinimg.com/736x/9f/23/7b/9f237b4b95d24fbfffef602d98e6afd8.jpg"
  },
  {
    id: "g5",
    titulo: "Gato Invasor #5",
    categoria: "pose para foto",
    url: "https://i.pinimg.com/736x/2d/57/12/2d5712ccf1ea0f8ad36917280350d245.jpg"
  },
  {
    id: "g6",
    titulo: "Gato Invasor #6",
    categoria: "dormindo",
    url: "https://i.pinimg.com/736x/05/bb/e9/05bbe93c49d600448c1ef496cf25615f.jpg"
  },
  {
    id: "g7",
    titulo: "Gato Invasor #7",
    categoria: "pose para foto",
    url: "https://i.pinimg.com/736x/ef/e8/0a/efe80aea0344a2c600e6e711bd6fb285.jpg"
  },
  {
    id: "g8",
    titulo: "Gato Invasor #8",
    categoria: "comendo",
    url: "https://i.pinimg.com/736x/ba/2e/9b/ba2e9bed52bd5fa212f71345b9883c38.jpg"
  },
  {
    id: "g9",
    titulo: "Gato Invasor #9",
    categoria: "fofura",
    url: "https://i.pinimg.com/736x/69/e6/f3/69e6f3927933bbbcd7428801ab7193ad.jpg"
  },
  {
    id: "g10",
    titulo: "Gato Invasor #10",
    categoria: "fofura",
    url: "https://i.pinimg.com/736x/0f/62/5c/0f625c60af47bdf754ecef3328ac7dc9.jpg"
  }
]);

const CURIOSIDADES_HAMSTERS = Object.freeze([
  {
    tema: "Bochechas",
    titulo: "Mochilas naturais nas bochechas",
    texto: "Os hamsters possuem bolsas elásticas nas bochechas que se estendem até os ombros, permitindo transportar comida equivalente a cerca de 20% do próprio peso."
  },
  {
    tema: "Dentes",
    titulo: "Dentes que nunca param de crescer",
    texto: "Os dentes incisivos dos hamsters crescem continuamente durante toda a vida, por isso eles precisam roer madeira segura, sementes e brinquedos próprios para desgastá-los."
  },
  {
    tema: "Origem",
    titulo: "O nome vem do alemão 'hamstern'",
    texto: "A palavra hamster deriva do verbo alemão 'hamstern', que significa 'estocar' ou 'acumular', em referência ao hábito de guardar comida na toca."
  },
  {
    tema: "Visão",
    titulo: "Eles são míopes e enxergam poucas cores",
    texto: "Hamsters enxergam bem apenas a poucos centímetros de distância e distinguem tons suaves, compensando isso com um olfato e uma audição extremamente apurados."
  },
  {
    tema: "Sentidos",
    titulo: "Bigodes que funcionam como radar",
    texto: "As vibrissas (bigodes) são hipersensíveis e detectam correntes de ar, obstáculos e o tamanho de túneis mesmo na escuridão total."
  },
  {
    tema: "Hábitos",
    titulo: "Ativos ao entardecer e à noite",
    texto: "São animais crepusculares e noturnos: dormem durante a maior parte do dia e ficam cheios de energia ao anoitecer para explorar e correr."
  },
  {
    tema: "Energia",
    titulo: "Maratonistas na rodinha",
    texto: "Em uma única noite, um hamster pode percorrer entre 5 km e 9 km na rodinha de exercícios ou em busca de alimento na natureza."
  },
  {
    tema: "Comportamento",
    titulo: "Muitas espécies preferem viver sozinhas",
    texto: "O hamster-sírio é estritamente territorial e solitário na fase adulta, devendo morar sozinho para evitar brigas."
  },
  {
    tema: "Espécies",
    titulo: "Existem cerca de 20 espécies no mundo",
    texto: "Entre os mais conhecidos estão o hamster-sírio (ou dourado), o anão-russo Winter White, o anão-russo Campbell, o Roborovski e o hamster-chinês."
  },
  {
    tema: "Velocidade",
    titulo: "O Roborovski é o menor e mais rápido",
    texto: "Com cerca de 4 a 5 centímetros de comprimento, o hamster Roborovski é o menor de todos e corre em disparada com patas traseiras super ágeis."
  },
  {
    tema: "Natureza",
    titulo: "Engenheiros de túneis subterrâneos",
    texto: "Na natureza, cavam tocas profundas com cômodos separados para dormir, armazenar grãos e até um canto específico usado como banheiro."
  },
  {
    tema: "Higiene",
    titulo: "Banhos de areia em vez de água",
    texto: "Hamsters não devem tomar banho com água, pois isso remove a oleosidade natural da pele; eles se limpam lambendo os pelos e rolando em areia fina própria para roedores."
  },
  {
    tema: "Memória",
    titulo: "Reconhecem vozes e cheiros familiares",
    texto: "Apesar de terem um cérebro pequeno, reconhecem o cheiro e o tom de voz do tutor, aprendendo rapidamente horários de comida e caminhos em labirintos."
  },
  {
    tema: "Corpo",
    titulo: "Correm até de marcha à ré",
    texto: "Por causa do corpo flexível e do rabo curtinho, conseguem andar de costas com facilidade para sair de túneis estreitos sem precisar dar meia-volta."
  },
  {
    tema: "Filhotes",
    titulo: "Gestação curtíssima de 16 dias",
    texto: "O hamster-sírio tem uma das gestações mais curtas entre os mamíferos, durando apenas cerca de 16 dias, e os filhotes nascem sem pelos e de olhos fechados."
  },
  {
    tema: "Clima",
    titulo: "Torpor em temperaturas muito baixas",
    texto: "Se o ambiente ficar frio demais (abaixo de 10 °C), alguns hamsters podem entrar em estado de torpor profundo, reduzindo os batimentos cardíacos para poupar energia."
  },
  {
    tema: "Comunicação",
    titulo: "Sons ultrassônicos e estalos de dente",
    texto: "Além de pequenos guinchos audíveis quando assustados, hamsters emitem sons ultrassônicos inaudíveis para humanos e estalam os dentes quando estão alerta ou irritados."
  },
  {
    tema: "Alimentação",
    titulo: "São onívoros na natureza",
    texto: "Embora adorem sementes, grãos e vegetais crocantes, na natureza também comem pequenos insetos para obter proteínas."
  }
]);

const DOMINIOS_PERMITIDOS = Object.freeze([
  "i.pinimg.com"
]);

let invasaoAtiva = false;
let filtroAtual = "todos";
let intervaloDigitacaoHacker = null;

function obterListaAtiva() {
  if (!invasaoAtiva) return HAMSTERS;
  const gatosValidos = GATOS_INVASORES.filter((g) => Boolean(sanitizarUrlImagem(g.url)));
  return gatosValidos.length ? gatosValidos : HAMSTERS;
}

function atualizarIndicadoresInvasao() {
  const statusEl = document.getElementById("status-hacker-invasao");
  const logEl = document.getElementById("log-estado-invasao");
  const tituloTop5 = document.getElementById("titulo-top5");

  const gatosValidos = GATOS_INVASORES.filter((g) => Boolean(sanitizarUrlImagem(g.url)));

  if (statusEl) {
    statusEl.textContent = invasaoAtiva ? "INVASÃO ATIVA" : "MODO HAMSTER";
  }

  if (logEl) {
    logEl.textContent = invasaoAtiva
      ? `[100%] ${gatosValidos.length} foto(s) de gato assumiram a galeria!`
      : "[AGUARDANDO] Invasão não executada";
  }

  if (tituloTop5) {
    tituloTop5.textContent = invasaoAtiva ? "Top 5 Gatos Invasores" : "Top 5 Mais Fofos";
  }
}

function ativarInvasaoGatos() {
  const painel = document.getElementById("painel-hacker-gatos");
  invasaoAtiva = true;

  if (painel) {
    painel.hidden = false;
    painel.classList.remove("animar-ataque");
    void painel.offsetWidth;
    painel.classList.add("animar-ataque");
  }

  atualizarIndicadoresInvasao();
  renderizarTop5();
  renderizarGaleria(filtroAtual);
  animarMensagemHacker();
}

function restaurarHamsters() {
  const painel = document.getElementById("painel-hacker-gatos");
  invasaoAtiva = false;
  if (painel) {
    painel.hidden = true;
    painel.classList.remove("animar-ataque");
  }
  atualizarIndicadoresInvasao();
  renderizarTop5();
  renderizarGaleria(filtroAtual);
}

function animarMensagemHacker() {
  const destino = document.getElementById("mensagem-hacker-gatos");
  if (!destino) return;

  if (intervaloDigitacaoHacker) {
    clearInterval(intervaloDigitacaoHacker);
    intervaloDigitacaoHacker = null;
  }

  destino.textContent = "";
  let indice = 0;

  intervaloDigitacaoHacker = setInterval(() => {
    destino.textContent += MENSAGEM_HACKER_GATOS.charAt(indice);
    indice += 1;
    if (indice >= MENSAGEM_HACKER_GATOS.length) {
      clearInterval(intervaloDigitacaoHacker);
      intervaloDigitacaoHacker = null;
    }
  }, 24);
}

function configurarPainelHacker() {
  const painel = document.getElementById("painel-hacker-gatos");
  const btnRepetir = document.getElementById("btn-repetir-hacker");
  const btnRestaurar = document.getElementById("btn-restaurar-hamsters");
  const btnMinimizar = document.getElementById("btn-minimizar-hacker");

  if (btnRepetir) {
    btnRepetir.addEventListener("click", ativarInvasaoGatos);
  }

  if (btnRestaurar) {
    btnRestaurar.addEventListener("click", restaurarHamsters);
  }

  if (btnMinimizar && painel) {
    btnMinimizar.addEventListener("click", () => {
      painel.hidden = true;
    });
  }
}

function normalizarCategoria(valor) {
  if (typeof valor !== "string") return "";
  return valor.replace(/[\u0000-\u001F\u007F]/g, "").trim().toLowerCase();
}

function sanitizarUrlImagem(url) {
  if (typeof url !== "string") return "";
  try {
    const parsed = new URL(url.trim());
    if (parsed.protocol !== "https:") return "";
    const hostOk = DOMINIOS_PERMITIDOS.some(
      (dominio) => parsed.hostname === dominio || parsed.hostname.endsWith(`.${dominio}`)
    );
    return hostOk ? parsed.href : "";
  } catch {
    return "";
  }
}

function sanitizarTexto(valor, limite = 260) {
  if (typeof valor !== "string") return "";
  return valor.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, limite);
}

function configurarAvisoInferior() {
  const imgEl = document.getElementById("img-proibido-gatos");
  const textoEl = document.querySelector(".aviso-ambiente-texto");
  if (!imgEl || !textoEl) return;

  const urlSegura = sanitizarUrlImagem(IMAGEM_AVISO_INFERIOR.url);
  const fraseLimpa = sanitizarTexto(IMAGEM_AVISO_INFERIOR.frase, 100);

  if (urlSegura) {
    imgEl.src = urlSegura;
    imgEl.alt = fraseLimpa;
  }
  if (fraseLimpa) {
    textoEl.textContent = fraseLimpa;
  }

  imgEl.addEventListener("error", () => {
    const card = imgEl.closest(".aviso-ambiente-card");
    if (card) card.style.display = "none";
  });
}

function criarCartaoHamster(item, posicaoTop5 = null) {
  const urlSegura = sanitizarUrlImagem(item.url);
  if (!urlSegura) return null;

  const tituloLimpo = sanitizarTexto(item.titulo, 60) || "Hamster Fofo";
  const categoriaLimpa = sanitizarTexto(item.categoria, 24) || "fofura";

  const artigo = document.createElement("article");
  artigo.className = posicaoTop5 ? "card-top5" : "card-hamster";

  if (posicaoTop5) {
    const medalha = document.createElement("span");
    medalha.className = "medalha-top5";
    medalha.textContent = `#${posicaoTop5}`;
    artigo.appendChild(medalha);
  }

  const botaoImg = document.createElement("button");
  botaoImg.type = "button";
  botaoImg.className = "foto-botao";
  botaoImg.setAttribute("aria-label", `Ampliar imagem: ${tituloLimpo}`);

  const img = document.createElement("img");
  img.src = urlSegura;
  img.alt = tituloLimpo;
  img.loading = "lazy";

  img.addEventListener("error", () => {
    artigo.remove();
  });

  botaoImg.addEventListener("click", () => abrirModal(urlSegura, tituloLimpo));
  botaoImg.appendChild(img);

  const corpo = document.createElement("div");
  corpo.className = "card-corpo";

  const tituloEl = document.createElement("h2");
  tituloEl.className = "card-titulo";
  tituloEl.textContent = tituloLimpo;

  const tagEl = document.createElement("span");
  tagEl.className = "tag-rosa";
  tagEl.textContent = categoriaLimpa;

  corpo.append(tituloEl, tagEl);
  artigo.append(botaoImg, corpo);
  return artigo;
}

function renderizarTop5() {
  const gridTop5 = document.getElementById("grid-top-5");
  if (!gridTop5) return;

  gridTop5.textContent = "";
  const fragmento = document.createDocumentFragment();
  const baseAtual = obterListaAtiva();

  baseAtual.slice(0, 5).forEach((item, indice) => {
    const card = criarCartaoHamster(item, indice + 1);
    if (card) fragmento.appendChild(card);
  });

  gridTop5.appendChild(fragmento);
}

function renderizarGaleria(filtroAtivo = "todos") {
  const container = document.getElementById("galeria-hamsters");
  if (!container) return;

  container.textContent = "";

  const filtroNormalizado = normalizarCategoria(filtroAtivo) || "todos";
  const baseAtual = obterListaAtiva();
  const listaFiltrada =
    filtroNormalizado === "todos"
      ? baseAtual
      : baseAtual.filter((item) => normalizarCategoria(item.categoria) === filtroNormalizado);

  const fragmento = document.createDocumentFragment();
  listaFiltrada.forEach((item) => {
    const card = criarCartaoHamster(item);
    if (card) fragmento.appendChild(card);
  });

  if (!fragmento.childNodes.length) {
    const vazio = document.createElement("p");
    vazio.textContent = invasaoAtiva
      ? "Nenhuma foto de gato nessa categoria no momento."
      : "Nenhuma imagem disponível nessa categoria no momento.";
    fragmento.appendChild(vazio);
  }

  container.appendChild(fragmento);
}

function renderizarCuriosidades() {
  const container = document.getElementById("grid-curiosidades");
  if (!container) return;

  container.textContent = "";
  const fragmento = document.createDocumentFragment();

  CURIOSIDADES_HAMSTERS.forEach((item, indice) => {
    const card = document.createElement("article");
    card.className = "card-curiosidade";

    const topo = document.createElement("div");
    topo.className = "curiosidade-topo";

    const num = document.createElement("span");
    num.className = "curiosidade-numero";
    num.textContent = `#${indice + 1}`;

    const tema = document.createElement("span");
    tema.className = "curiosidade-tema";
    tema.textContent = sanitizarTexto(item.tema, 30);

    topo.append(num, tema);

    const titulo = document.createElement("h3");
    titulo.textContent = sanitizarTexto(item.titulo, 90);

    const descricao = document.createElement("p");
    descricao.textContent = sanitizarTexto(item.texto, 320);

    card.append(topo, titulo, descricao);
    fragmento.appendChild(card);
  });

  container.appendChild(fragmento);
}

function abrirModal(url, legenda) {
  const modal = document.getElementById("modal-imagem");
  const modalImg = document.getElementById("modal-img");
  const modalLegenda = document.getElementById("modal-legenda");
  if (!modal || !modalImg || !modalLegenda) return;

  modalImg.src = url;
  modalImg.alt = legenda;
  modalLegenda.textContent = legenda;
  modal.hidden = false;
}

function fecharModal() {
  const modal = document.getElementById("modal-imagem");
  const modalImg = document.getElementById("modal-img");
  if (!modal || !modalImg) return;

  modal.hidden = true;
  modalImg.src = "";
}

function configurarFiltros() {
  const botoesFiltro = document.querySelectorAll(".filtro-btn[data-filtro]");
  const btnExecutar = document.getElementById("btn-executar-invasao");

  botoesFiltro.forEach((btn) => {
    btn.addEventListener("click", () => {
      botoesFiltro.forEach((b) => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      filtroAtual = btn.dataset.filtro || "todos";
      renderizarGaleria(filtroAtual);
    });
  });

  if (btnExecutar) {
    btnExecutar.addEventListener("click", ativarInvasaoGatos);
  }
}

function configurarModal() {
  const fecharBtn = document.getElementById("fechar-modal");
  const modal = document.getElementById("modal-imagem");

  if (fecharBtn) fecharBtn.addEventListener("click", fecharModal);
  if (modal) {
    modal.addEventListener("click", (evento) => {
      if (evento.target === modal) fecharModal();
    });
  }
}

function configurarLgpd() {
  const aviso = document.getElementById("lgpd-aviso");
  const aceitarBtn = document.getElementById("aceitar-lgpd");
  if (!aviso || !aceitarBtn) return;

  let jaAceitou = false;
  try {
    jaAceitou = localStorage.getItem(LGPD_KEY) === "1";
  } catch {
    jaAceitou = false;
  }

  aviso.hidden = jaAceitou;

  aceitarBtn.addEventListener("click", () => {
    try {
      localStorage.setItem(LGPD_KEY, "1");
    } catch {
      // Ignora caso o armazenamento local esteja bloqueado
    }
    aviso.hidden = true;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  configurarPainelHacker();
  configurarFiltros();
  configurarModal();
  configurarLgpd();
  configurarAvisoInferior();
  atualizarIndicadoresInvasao();
  renderizarTop5();
  renderizarGaleria("todos");
  renderizarCuriosidades();
});
