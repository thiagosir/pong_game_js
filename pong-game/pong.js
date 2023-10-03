//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da minha raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//variáveis placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

// Função nativa do P5 (https://p5js.org/reference/) <---
function setup() {
  createCanvas(600, 400);
}

// Função nativa do P5 (https://p5js.org/reference/) <---
function draw() {
  background(0);
  mostraBolinha();
  movimentaRaquete();
  movimentaRaqueteOponente();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  colisaoBolinhaRaquete();
  colisaoBolinhaRaqueteOponente();
  movimentaBolinha();
  verificaColisaoBorda();
  marcaPonto()
  placar();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width ||
    xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
    yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 6
  }
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 6
  }
}

// v CASO QUEIRA JOGAR COM ALGUEM DESCOMENTE A FUNÇÃO ABAIXO v

// function movimentaRaqueteOponente() {
//   if (keyIsDown(87)) {
//     yRaqueteOponente -= 6
//   }
//   if (keyIsDown(83)) {
//     yRaqueteOponente += 6
//   }
// }

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function colisaoBolinhaRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura
    && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoBolinhaRaqueteOponente() {
  if (xBolinha + raio >= xRaqueteOponente && xBolinha - raio <= xRaqueteOponente + raqueteComprimento && yBolinha + raio >= yRaqueteOponente && yBolinha - raio <= yRaqueteOponente + raqueteAltura) {
    velocidadeXBolinha *= -1;
  }
}

function placar() {
  textAlign(CENTER)
  textSize(16)
  fill(color(0, 51, 102))
  rect(150, 10, 40, 20)
  fill(255);
  text(meusPontos, 170, 26)
  fill(color(0, 51, 102))
  rect(450, 10, 40, 20)
  fill(255);
  text(pontosOponente, 470, 26)
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1
  }

  if (xBolinha < 10) {
    pontosOponente += 1
  }
}