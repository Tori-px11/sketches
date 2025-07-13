let symbols = [];

function setup() {
  createCanvas(600, 600);
  background(0); 
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(255); 
  stroke(255); 

  // Initialize moving symbols
  for (let i = 0; i < 100; i++) {
    symbols.push({
      x: random(150, 400),
      y: random(100, 400),
      dx: random(-1, 1), 
      dy: random(-1, 1)  
    });
  }

  drawStaticElements();
}

function draw() {
  background(0); 
  drawStaticElements();

  for (let s of symbols) {
    s.x += s.dx;
    s.y += s.dy;

    if (s.x < 150 || s.x > 400) s.dx *= -1;
    if (s.y < 100 || s.y > 400) s.dy *= -1;

    if (pointInShape(s.x, s.y)) {
      text(chooseSymbol(), s.x, s.y);
    } else {
      s.x -= s.dx; 
      s.y -= s.dy;
      s.dx *= -1; 
      s.dy *= -1;
    }
  }
}

function drawStaticElements() {
  // Draw the central shape
  stroke(255); // White outline
  noFill();
  beginShape();
  vertex(200, 100); 
  vertex(300, 80);  
  vertex(400, 100); 
  vertex(450, 200); 
  vertex(400, 300); 
  vertex(350, 400); 
  vertex(250, 450); 
  vertex(150, 400); 
  vertex(100, 300); 
  vertex(150, 200); 
  endShape(CLOSE);

  textSize(10);
  fill(255); 
  text("# @", 300, 30);
  text("$ %", 450, 50); 
  text("& *", 150, 50); 
  text(")<-)-*+/ )!>|!) ", 300, 60); 

  text('~ #', 80, 150); 
  text('! 3`[`-0[-65\\{{', 80, 180); 
  text('^(*:/%*) 3`[`-0[-65', 80, 210); 
  text('//-05\\{{ $*|!#)*', 80, 240); 

  text('~ #', 520, 150); 
  text('! 3`[`-0[-65\\{{', 520, 180); 
  text('^(*:/%*) 3`[`-0[-65', 520, 210); 
  text('//-05\\{{ $*|!#)*', 520, 240); 

  text("# @", 300, 550); 
  text("$ %", 450, 530); 
  text("& *", 150, 530); 
  text(")<-)-*+/ )!>|!) ", 300, 510); 
}

function chooseSymbol() {
  const symbols = ['-', '_', '+', '=', '.', ',', "'", '"', ';', ':', '#', '@', '$', '%', '&', '*', '~', '!', '?', '^', '(', ')', '/', '\\', '<', '>', '[', ']', '{', '}', '|', '`'];
  return symbols[Math.floor(random(symbols.length))];
}

function pointInShape(x, y) {
  // Simple bounding box check for the shape
  return x > 100 && x < 450 && y > 80 && y < 450;
}