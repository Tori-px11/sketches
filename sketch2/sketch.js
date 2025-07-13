let confettiParticles = [];
let displayMode = 0; // 0 - кружок, 1 - ♥, 2 - ✿, 3 - ☀

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(0);

  // Добавляем частицу в позицию курсора
  confettiParticles.push(new Confetti(mouseX, mouseY, displayMode));

  // Обновляем и отображаем частицы
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    let p = confettiParticles[i];
    p.update();
    p.show();
    if (p.isDead()) {
      confettiParticles.splice(i, 1);
    }
  }
}

function mousePressed() {
  displayMode = (displayMode + 1) % 4; // Теперь 4 режима: 0,1,2,3
}

// Базовый класс частицы
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.ax = 0;
    this.ay = 0;
    this.lifetime = 255;
    this.r = 8;
  }

  update() {
    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
    this.lifetime -= 4;
  }

  isDead() {
    return this.lifetime < 0;
  }
}

// Наследуемый класс
class Confetti extends Particle {
  constructor(x, y, mode) {
    super(x, y);
    this.mode = mode;
  }
show() {
  noStroke();
  
  if (this.mode === 3) {
    fill(255, 204, 0, this.lifetime); // Жёлтый с прозрачностью
    text("☀", this.x, this.y);
  } else {
    fill(255, this.lifetime); // Белый с прозрачностью
    if (this.mode === 0) {
      ellipse(this.x, this.y, this.r * 2);
    } else if (this.mode === 1) {
      text("♥", this.x, this.y);
    } else if (this.mode === 2) {
      text("✿", this.x, this.y);
    }
  }
}}
