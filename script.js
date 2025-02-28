const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let currentPage = 1;

// Função para desenhar o painel de quadrinhos
function drawPanel(x, y, width, height, text, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + 20, y);
  ctx.lineTo(x + width - 20, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + 20);
  ctx.lineTo(x + width, y + height - 20);
  ctx.quadraticCurveTo(x + width, y + height, x + width - 20, y + height);
  ctx.lineTo(x + 20, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - 20);
  ctx.lineTo(x, y + 20);
  ctx.quadraticCurveTo(x, y, x + 20, y);
  ctx.fill();

  // Texto dentro do painel
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText(text, x + 20, y + 30);
}

// Função para desenhar o balão de fala
function drawSpeechBubble(x, y, width, height, text) {
  ctx.fillStyle = '#ffcc00';
  ctx.beginPath();
  ctx.moveTo(x + 20, y);
  ctx.lineTo(x + width - 20, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + 20);
  ctx.lineTo(x + width, y + height - 20);
  ctx.quadraticCurveTo(x + width, y + height, x + width - 20, y + height);
  ctx.lineTo(x + 20, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - 20);
  ctx.lineTo(x, y + 20);
  ctx.quadraticCurveTo(x, y, x + 20, y);
  ctx.fill();

  // Triângulo da ponta do balão
  ctx.beginPath();
  ctx.moveTo(x + 30, y + height);
  ctx.lineTo(x + 50, y + height + 20);
  ctx.lineTo(x + 70, y + height);
  ctx.fill();

  // Texto dentro do balão de fala
  ctx.fillStyle = 'black';
  ctx.font = '18px Arial';
  ctx.fillText(text, x + 30, y + 30);
}

// Função para desenhar o personagem 1
function drawCharacter1(x, y) {
  ctx.fillStyle = '#ff6347'; // Cor da cabeça (vermelho)
  ctx.beginPath();
  ctx.arc(x + 25, y + 25, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#4682b4'; // Cor do corpo (azul)
  ctx.fillRect(x + 15, y + 45, 20, 40);

  ctx.fillStyle = '#ff6347'; // Cor dos braços (vermelho)
  ctx.fillRect(x, y + 45, 10, 30); // Braço esquerdo
  ctx.fillRect(x + 30, y + 45, 10, 30); // Braço direito

  ctx.fillStyle = '#4682b4'; // Cor das pernas (azul)
  ctx.fillRect(x + 10, y + 85, 10, 30); // Perna esquerda
  ctx.fillRect(x + 20, y + 85, 10, 30); // Perna direita
}

// Função para desenhar o personagem 2
function drawCharacter2(x, y) {
  ctx.fillStyle = '#32cd32'; // Cor da cabeça (verde)
  ctx.beginPath();
  ctx.arc(x + 25, y + 25, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ff4500'; // Cor do corpo (laranja)
  ctx.fillRect(x + 15, y + 45, 20, 40);

  ctx.fillStyle = '#32cd32'; // Cor dos braços (verde)
  ctx.fillRect(x, y + 45, 10, 30); // Braço esquerdo
  ctx.fillRect(x + 30, y + 45, 10, 30); // Braço direito

  ctx.fillStyle = '#ff4500'; // Cor das pernas (laranja)
  ctx.fillRect(x + 10, y + 85, 10, 30); // Perna esquerda
  ctx.fillRect(x + 20, y + 85, 10, 30); // Perna direita
}

// Função para desenhar o fundo (simples)
function drawBackground() {
  ctx.fillStyle = '#87ceeb'; // Cor do céu
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Céu

  ctx.fillStyle = '#228b22'; // Cor do chão
  ctx.fillRect(0, 500, canvas.width, 100); // Chão

  ctx.fillStyle = '#ff0'; // Cor do sol
  ctx.beginPath();
  ctx.arc(700, 100, 50, 0, Math.PI * 2);
  ctx.fill();
}

// Função para desenhar o quadrinho
function drawComic(page) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();

  if (page === 1) {
    // Página 1
    drawPanel(50, 50, 300, 200, "Olá, eu sou o personagem 1!", '#dff0ff');
    drawPanel(400, 50, 300, 200, "E eu sou o personagem 2!", '#ffebcd');
    drawCharacter1(150, 150);
    drawCharacter2(500, 150);
    drawSpeechBubble(80, 150, 240, 50, "Oi! Eu sou o personagem 1.");
    drawSpeechBubble(420, 150, 240, 50, "E eu sou o personagem 2!");
    document.getElementById("pageTitle").innerText = "Página 1";
  }

  if (page === 2) {
    // Página 2
    drawPanel(50, 50, 300, 200, "Eu sou mais do que só um personagem!", '#f0f8ff');
    drawPanel(400, 50, 300, 200, "Eu também sou importante!", '#e6f7ff');
    drawCharacter1(150, 150);
    drawCharacter2(500, 150);
    drawSpeechBubble(80, 150, 240, 50, "Eu sou o personagem 1.");
    drawSpeechBubble(420, 150, 240, 50, "E eu sou o personagem 2!");
    document.getElementById("pageTitle").innerText = "Página 2";
  }
}

// Função para navegar entre as páginas
function changePage(direction) {
  currentPage += direction;

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > 2) {
    currentPage = 2;
  }

  drawComic(currentPage);
}

// Inicializa a primeira página
drawComic(currentPage);
