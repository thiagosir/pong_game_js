//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Função nativa do P5 (https://p5js.org/reference/) <---
function setup() {
  createCanvas(600, 400);
}

// Função nativa do P5 (https://p5js.org/reference/) <---
function draw() {
  background(0);
  mostraBolinha();
  movimentaRaquete();
  mostraRaquete();
  colisaoBolinhaRaquete();
  movimentaBolinha();
  verificaColisaoBorda();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 6
  }
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 6
  }
}
function colisaoBolinhaRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura 
    && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}