let gridSize = 20;
let cellSize;

function setup() {
  createCanvas(400, 400);
  cellSize = width / gridSize;
  textAlign(CENTER, CENTER);
  textSize(8);
}

function draw() {
  background(0);
  fill(255);
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = i * cellSize + cellSize / 2;
      let y = j * cellSize + cellSize / 2;
      
      let normX = i / (gridSize - 1);
      let normY = j / (gridSize - 1);
      
      let vCenterX = 0.5;
      let vTopY = 0.2;
      let vBottomY = 0.8;
      let vLeftX = 0.2;
      let vRightX = 0.8;
      
      let distToV = Infinity;
      
      let tLeft = ((normX - vCenterX) * (vLeftX - vCenterX) + (normY - vTopY) * (vBottomY - vTopY)) /
                  ((vLeftX - vCenterX) ** 2 + (vBottomY - vTopY) ** 2);
      tLeft = constrain(tLeft, 0, 1);
      let closestLeftX = lerp(vCenterX, vLeftX, tLeft);
      let closestLeftY = lerp(vTopY, vBottomY, tLeft);
      let distToLeft = dist(normX, normY, closestLeftX, closestLeftY);
      
      let tRight = ((normX - vCenterX) * (vRightX - vCenterX) + (normY - vTopY) * (vBottomY - vTopY)) /
                   ((vRightX - vCenterX) ** 2 + (vBottomY - vTopY) ** 2);
      tRight = constrain(tRight, 0, 1);
      let closestRightX = lerp(vCenterX, vRightX, tRight);
      let closestRightY = lerp(vTopY, vBottomY, tRight);
      let distToRight = dist(normX, normY, closestRightX, closestRightY);
      
      distToV = min(distToLeft, distToRight);
      
      let wave = sin(distToV * 20 - frameCount * 0.05) * 0.5;
      let angle = wave * PI / 2;
      
      push();
      translate(x, y);
      rotate(angle);
      text("ARTIST", 0, 0);
      pop();
    }
  }
}