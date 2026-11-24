"use strict";

const LGPD_KEY = "hamster_rosa_lgpd_v1";

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
    categoria: "dormindo",
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
    categoria: "comendo",
    url: "https://i.pinimg.com/474x/e4/7b/0a/e47b0a324356201f07a92fa041dc677b.jpg"
  },
  {
    id: "h8",
    titulo: "Hamster Rosado #8",
    categoria: "fofura",
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

  HAMSTERS.slice(0, 5).forEach((item, indice) => {
    const card = criarCartaoHamster(item, indice + 1);
    if (card) fragmento.appendChild(card);
  });

  gridTop5.appendChild(fragmento);
}

function renderizarGaleria(filtroAtivo = "todos") {
  const container = document.getElementById("galeria-hamsters");
  if (!container) return;

  container.textContent = "";

  const listaFiltrada =
    filtroAtivo === "todos"
      ? HAMSTERS
      : HAMSTERS.filter((item) => item.categoria === filtroAtivo);

  const fragmento = document.createDocumentFragment();
  listaFiltrada.forEach((item) => {
    const card = criarCartaoHamster(item);
    if (card) fragmento.appendChild(card);
  });

  if (!fragmento.childNodes.length) {
    const vazio = document.createElement("p");
    vazio.textContent = "Nenhuma imagem disponível nessa categoria no momento.";
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
  const botoes = document.querySelectorAll(".filtro-btn");
  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      botoes.forEach((b) => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      const filtro = btn.dataset.filtro || "todos";
      renderizarGaleria(filtro);
    });
  });
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
  configurarFiltros();
  configurarModal();
  configurarLgpd();
  configurarAvisoInferior();
  renderizarTop5();
  renderizarGaleria("todos");
  renderizarCuriosidades();
});
