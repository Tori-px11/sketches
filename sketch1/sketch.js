let lines = []; 
let pixelColors; 

function setup() {
  createCanvas(400, 400);
  frameRate(60); 
  
  
  pixelColors = [
    color('purple'),   
    color('pink'),   
    color('blue'),  
  ];
}

function draw() {
  background(255); 

  
  if (random() < 1) {
    let isVertical = random() > 0.5;
    let x = random(width);
    let y = random(height);
    let length = 400;
    let baseColor = random(pixelColors);
    let opacity = random(50, 200); 
    let lineColor = color(red(baseColor), green(baseColor), blue(baseColor), opacity);

    if (isVertical) {
      lines.push({x1: x, y1: 0, x2: x, y2: length, isVertical: true, color: lineColor});
    } else {
      lines.push({x1: 0, y1: y, x2: length, y2: y, isVertical: false, color: lineColor});
    }
  }

  for (let i = 0; i < lines.length; i++) {
    stroke(lines[i].color); 
    strokeWeight(0.5);
    
    if (lines[i].isVertical) {
      line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
    } else {
      line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
    }
  }
}