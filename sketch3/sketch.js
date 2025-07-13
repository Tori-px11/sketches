let colors = []; 
let currentColorIndex = 0; 

function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(1); 

  
  colors = [color("#E3156F"), color("#000000"), color("#BC005A"), color("#4A4A4A")]; // 
}

function draw() {
  background(255); 

  let gridSize = width / 8; 
  let currentBaseColor = colors[currentColorIndex];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let x = i * gridSize;
      let y = j * gridSize;

     
      let bgColor = (i + j) % 2 === 0 ? currentBaseColor : color(240); 
      fill(bgColor);
      rect(x, y, gridSize, gridSize);

      if (random(1) < 0.5) {
        
        fill(lerpColor(currentBaseColor, color(0), 0.3)); 
        rect(x + gridSize * 0.2, y + gridSize * 0.2, gridSize * 0.6, gridSize * 0.6);
      } else {
        fill(lerpColor(currentBaseColor, color(255), 0.3));
        if (random(1) < 0.5) {
          rect(x + gridSize * 0.3, y + gridSize * 0.1, gridSize * 0.4, gridSize * 0.8); 
        } else {
          rect(x + gridSize * 0.1, y + gridSize * 0.3, gridSize * 0.8, gridSize * 0.4); 
        }
      }
    }
  }

  currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through the colors
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  
}