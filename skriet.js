// SOUND
let handpose;
let video;
let hands = [];
let sound;
let isPlaying = false;

function preload() {
    handpose = ml5.handPose();
    // Load your sound file here
    sound = loadSound('wilhelm-scream.wav');
}

function setup() {
    createCanvas(600, 750);
    background(140, 110, 80);


    // BACKGROUND
    field = generateField();
    generateAgents();
    frameRate();

    // SOUND
      video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    handpose.detectStart(video, getHandsData);
}

// THE SCREAM (Skriet in Swedish)

const skrietHeight = 275;

function faceSkriet() {
  push();
 
  stroke(204, 152, 105);
  strokeWeight(0.5);
fill(204, 142, 105);

// Neck
beginShape();
// Left side
vertex(width / 2 - 30, height - skrietHeight - 40); // Top left
bezierVertex(
  width / 2, height - skrietHeight - 20, // Curve outward slightly
  width / 2 - 30, height - skrietHeight,       // Curve back inward
  width / 2 - 10, height - skrietHeight + 5   // Bottom left (rounded)
);

// Bottom curve
bezierVertex(
  width / 2, height - skrietHeight + 10,
  width / 2, height - skrietHeight + 10,
  width / 2 + 10, height - skrietHeight + 5   // Bottom right (rounded)
);

// Right side
bezierVertex(
  width / 2 + 30, height - skrietHeight,       // Curve back inward
  width / 2, height - skrietHeight - 20,  // Curve outward slightly
  width / 2 + 30, height - skrietHeight - 40   // Top right
);
endShape();
  
// Face
   beginShape();

vertex(width / 2, height - skrietHeight - 120);

// Right cheek
bezierVertex(
  width / 2 + 35, height - skrietHeight - 120,  
  width / 2 + 60, height - skrietHeight - 70,   
  width / 2 + 25, height - skrietHeight - 25    
);

// Chin
bezierVertex(
  width / 2 + 10, height - skrietHeight - 5,    
  width / 2 - 10, height - skrietHeight - 5,    
  width / 2 - 25, height - skrietHeight - 25  
);

// Left cheek
bezierVertex(
  width / 2 - 60, height - skrietHeight - 70,   
  width / 2 - 35, height - skrietHeight - 120,  
  width / 2, height - skrietHeight - 120       
);

endShape(CLOSE);

// Eyes
fill(200, 130, 100);
ellipse(width / 2 - 21, height - skrietHeight - 76, 12, 14);
ellipse(width / 2 + 13, height - skrietHeight - 76, 12, 14);
fill(204, 162, 105);
ellipse(width / 2 - 22, height - skrietHeight - 75, 12, 14);
ellipse(width / 2 + 12, height - skrietHeight - 75, 12, 14);

// Pupils
fill(0);
ellipse(width / 2 - 23, height - skrietHeight - 72, 5, 5);
ellipse(width / 2 + 11, height - skrietHeight - 73, 5, 5);

// Eyebrows
stroke(30);
strokeWeight(4.5);
noFill();
beginShape();
vertex(width / 2 - 30, height - skrietHeight - 85);
bezierVertex(
  width / 2 - 20, height - skrietHeight - 95,
  width / 2 - 10, height - skrietHeight - 90,
  width / 2 - 5, height - skrietHeight - 85
);
bezierVertex(
  width / 2 + 10, height - skrietHeight - 95,
  width / 2 + 20, height - skrietHeight - 90,
  width / 2 + 25, height - skrietHeight - 85
);
endShape();

push();
translate(-2, -2);
// Nose
stroke(200, 130, 100);
strokeWeight(2);
noFill();
beginShape();
vertex(width / 2 - 8, height - skrietHeight - 65);
// Left
bezierVertex(
  width / 2 - 5, height - skrietHeight - 55,
  width / 2 - 8, height - skrietHeight - 58,
  width / 2 - 8, height - skrietHeight - 52
);
endShape();

beginShape();
vertex(width / 2 + 2, height - skrietHeight - 65);
// Right
bezierVertex(
  width / 2, height - skrietHeight - 55,
  width / 2 + 2, height - skrietHeight - 58,
  width / 2 + 4, height - skrietHeight - 52
);
endShape();

// Nostrils
fill(65);
noStroke();
ellipse(width / 2 - 6, height - skrietHeight - 52, 3, 4);
ellipse(width / 2 + 1, height - skrietHeight - 53, 2.5, 3.5);
pop();

// Mouth
noFill();
strokeWeight(3);
stroke(200, 130, 100);
ellipse(width / 2 - 2.5, height - skrietHeight - 33, 12, 22);
stroke(40);
ellipse(width / 2 - 4, height - skrietHeight - 33, 12, 22);

pop();

}

function handsSkriet() {    
  // Hands of Skriet
push();
noFill();
// Left hand and arm
translate(-48, 10);
beginShape();
vertex(width / 2, height - skrietHeight - 100); // Top

stroke(208, 150, 105);
strokeWeight(14);
bezierVertex(
  width / 2 - 10, height - skrietHeight - 50,
  width / 2, height - skrietHeight - 90,
  width / 2 + 10, height - skrietHeight - 20  // Middle
);
endShape();

beginShape();
vertex(width / 2 + 10, height - skrietHeight - 25); // Top

stroke(10);
strokeWeight(22);
bezierVertex(
  width / 2 + 10, height - skrietHeight,
  width / 2, height - skrietHeight,
  width / 2, height - skrietHeight + 60 // Bottom
);
endShape();
pop();

// Right hand and arm
push();
translate(46, 10);
beginShape();
vertex(width / 2, height - skrietHeight - 100); // Top

stroke(208, 150, 105);
strokeWeight(14);
bezierVertex(
  width / 2 + 10, height - skrietHeight - 50,
  width / 2, height - skrietHeight - 90,
  width / 2 - 10, height - skrietHeight - 20  // Middle
);
endShape();

beginShape();
vertex(width / 2 - 10, height - skrietHeight - 25); // Top

stroke(10);
strokeWeight(22);
bezierVertex(
  width / 2 - 10, height - skrietHeight,
  width / 2, height - skrietHeight,
  width / 2, height - skrietHeight + 60 // Bottom point
);
endShape();
pop();
}

function tornNecklace() {
  push();
  noFill();

  // Wound around neck
  strokeWeight(8);
  stroke(230, 130, 100);
  beginShape();
  vertex(width / 2 - 15, height - skrietHeight - 7);
  bezierVertex(
    width / 2, height - skrietHeight + 8,
    width / 2 + 10, height - skrietHeight - 5,
    width / 2 + 15, height - skrietHeight - 7
  );
  endShape();
  
  strokeCap(SQUARE);
strokeWeight(3);
stroke(94, 44, 4);

beginShape();
vertex(width / 2 - 17, height - skrietHeight - 10);
bezierVertex(
  width / 2, height - skrietHeight + 10,
  width / 2 + 20, height - skrietHeight - 10,
  width / 2 + 17, height - skrietHeight - 10
);
endShape();

// Around neck 2
beginShape();
vertex(width / 2 - 18, height - skrietHeight - 2);
bezierVertex(
  width / 2, height - skrietHeight + 10,
  width / 2 + 20, height - skrietHeight - 2,
  width / 2 + 18, height - skrietHeight - 2
);
endShape();


// Torns going down

// Lower 1
beginShape();
vertex(width / 2 - 18, height - skrietHeight - 2);
bezierVertex(
  width / 2 - 35, height - skrietHeight + 15,
  width / 2 - 20, height - skrietHeight + 20,
  width / 2 - 10, height - skrietHeight + 45
);
endShape();

// Lower 2
beginShape();
vertex(width / 2 - 8, height - skrietHeight + 2);
bezierVertex(
  width / 2, height - skrietHeight + 25,
  width / 2 - 20, height - skrietHeight + 30,
  width / 2 - 22, height - skrietHeight + 70
);
endShape();

// Lower 3
beginShape();
vertex(width / 2 + 18, height - skrietHeight - 2);
bezierVertex(
  width / 2 - 15, height - skrietHeight + 25,
  width / 2 + 50, height - skrietHeight + 20,
  width / 2 + 10, height - skrietHeight + 65
);
endShape();

// Upper 1
beginShape();
vertex(width / 2 - 17, height - skrietHeight - 10);
bezierVertex(
  width / 2, height - skrietHeight + 20,
  width / 2 - 30, height - skrietHeight + 30,
  width / 2 - 30, height - skrietHeight + 50
);
endShape();

// Upper 2
beginShape();
vertex(width / 2 - 6, height - skrietHeight - 2);
bezierVertex(
  width / 2 + 15, height - skrietHeight + 25,
  width / 2 - 15, height - skrietHeight + 20,
  width / 2 + 5, height - skrietHeight + 58
);
endShape();

// Upper 3
beginShape();
vertex(width / 2 + 10, height - skrietHeight - 3);
bezierVertex(
  width / 2, height - skrietHeight + 25,
  width / 2 + 10, height - skrietHeight + 30,
  width / 2 - 10, height - skrietHeight + 62
);
endShape();

// Upper 4
beginShape();
vertex(width / 2 + 17, height - skrietHeight - 10);
bezierVertex(
  width / 2 + 45, height - skrietHeight + 25,
  width / 2 - 20, height - skrietHeight + 20,
  width / 2 + 35, height - skrietHeight + 55
);
endShape();
pop();
}


function skriet() {
    //The scream + Frida Kahlo
 
    // Body of Skriet
       noStroke();
    fill(0);
    rect(width / 2 - 85, height - skrietHeight, 250, skrietHeight, 120, 120, 0, 0);

push();
 translate(width / 2 + 40, height - skrietHeight - 90);
scale(2);
translate(-width / 2, -(height - skrietHeight - 55));

handsSkriet();
faceSkriet();
tornNecklace();

pop();

}


// NATURE ELEMENTS

// Leaves array
let leaves = [
  { x: 50,  y: 600, rotation: -Math.PI / 12, color: [47, 76, 57] },
  { x: 100, y: 700, rotation: Math.PI / 15, color: [60, 90, 70] },
  { x: 10,  y: 690, rotation: -Math.PI / 10, color: [40, 65, 50] },
  { x: 200, y: 700, rotation: Math.PI / 12, color: [55, 80, 60] },
  { x: 270, y: 760, rotation: -Math.PI / 15, color: [45, 70, 55] },
  { x: 300, y: 705, rotation: Math.PI / 10, color: [50, 80, 60] },
  { x: 350, y: 770, rotation: -Math.PI / 12, color: [42, 68, 52] },
  { x: 400, y: 700, rotation: Math.PI / 15, color: [58, 88, 68] },
  { x: 450, y: 750, rotation: -Math.PI / 10, color: [48, 75, 58] },
  { x: 400, y: 695, rotation: Math.PI / 12, color: [52, 82, 62] },
  { x: 600, y: 650, rotation: -Math.PI / 15, color: [44, 72, 54] },

  { x: 210, y: 450, rotation: Math.PI / 10, color: [59, 89, 69] },
  { x: -90, y: 570, rotation: -Math.PI / 12, color: [41, 67, 51] },
  { x: 200, y: 605, rotation: Math.PI / 15, color: [55, 85, 65] },
  { x: 360, y: 615, rotation: -Math.PI / 10, color: [48, 76, 58] },
  { x: 710, y: 600, rotation: Math.PI / 12, color: [52, 80, 62] },
  { x: 360, y: 620, rotation: -Math.PI / 15, color: [44, 70, 54] },
  { x: 410, y: 610, rotation: Math.PI / 10, color: [56, 84, 66] },
  { x: 460, y: 605, rotation: -Math.PI / 12, color: [46, 72, 56] },
  { x: 510, y: 615, rotation: Math.PI / 15, color: [50, 78, 60] }
];

function leaf(x, y, rotation, leafColor) {
    //Frida Kahlo leaves
push();
rotate(rotation);
translate(x, y);
    fill(leafColor[0], leafColor[1], leafColor[2], leafColor[3], leafColor[4], leafColor[5]);

beginShape();
vertex(0, - 120); // Top point (tip of drop)

// Right side
bezierVertex(
  80, - 80,
  100, 0,
  60, + 80
);

// Bottom curve
bezierVertex(
  20, 120,
  - 20, 120,
  - 60, 80
);

// Left side
bezierVertex(
  - 100, 0,
   - 80, - 80,
  0,  - 120 // Back to top point
);

endShape(CLOSE);

stroke(20, 40, 30);
strokeWeight(1);
noFill();

// Leaf veins
beginShape();
vertex(0, - 100); // Top point (tip of drop)

// Middle vein
bezierVertex(
  10,  - 70,
  10, 0,
  0, 100
);

// Vein 1
bezierVertex(
  100,  - 30,
  50, 0,
  0, 90
);

bezierVertex(
   - 100,  - 30,
  - 50, 0,
 0, 90
);
endShape();

// Vein 2
push();
translate(5, - 40);
beginShape();
vertex(0, 100); // Top point (tip of drop)

bezierVertex(
  100,  - 30,
  50, 0,
  0, 90
);

bezierVertex(
  - 100, - 30,
   - 50, 0,
  0, 90
);
endShape();
pop();

// Vein 3
push();
translate(6, - 80);
beginShape();
vertex(0, 100); // Top point (tip of drop)

bezierVertex(
   80,  - 30,
  20, 0,
  0, 100
);

bezierVertex(
   - 80,  - 30,
   - 10, 0,
  0, 90
);
endShape();
pop();

// Vein 4
push();
translate(7, - 150);
beginShape();
vertex(0, 100); // Top point (tip of drop)

bezierVertex(
  10, 120,
  40, 0,
  0, 100
);

bezierVertex(
   - 10, 120,
  - 40, 0,
  0, 100
);
endShape();
pop();

pop();
}

function drawLeaves() {
  for (let l of leaves) {
    leaf(l.x, l.y, l.rotation, l.color);
  }
}

function butterfly() {
//Frida Kahlo butterflys
}

//blobs without stroke
let blobs = [
  {x: -60, y: -60, color: [0, 99, 166]},//blue
  {x: 0, y: 50, color: [176, 40, 59]},//Red
  {x: 350, y: 80, color: [186, 88, 61]}//orange
 
];
//blobs with strokes
let blobsSmall = [
  {x: 10, y: 200, color: [184, 103, 83]},//orange
  {x: 220, y: 20, color: [56, 133, 48]},//green
  {x: 370, y: 10, color: [106, 98, 161]}//lila
 
];

//sky circles
let circles = [
  {x: 200, y: 100, scaling: 1.5, color: [33, 182, 219]}, //blue
  {x: 40, y: 190, scaling: 1.5, color: [33, 182, 219]}, //blue
  {x: 400, y: 80, scaling: 1.5, color: [33, 182, 219]}, //blue
  {x: 540, y: 150, scaling: 1.5, color: [33, 182, 219]} //blue
];

function skyCircles(x, y, scaling, color) {
  push();
  translate(x,y);
  scale(scaling);
  fill(color);
  noStroke();
  ellipse(0, 0, 20);
  pop();
}

// YAYOI KUSAMA ELEMENTS
function skyBlobs(x, y, color) {
 //Yayoi Kusama sky blobs without stroke
push();
translate(x, y);
scale(0.8);
fill(color);
noStroke();

beginShape();
vertex(200, 150);
bezierVertex(250, 180, 270, 170, 260, 200);
bezierVertex(220, 250, 240, 200, 180, 210);
bezierVertex(160, 220, 130, 220, 120, 200);  // curves left
bezierVertex(130, 160, 150, 130, 200, 150);  // curves back to start
endShape();
//face
//Left eye
fill(0);
ellipse(160,170, 20, 10);
//right eye
fill(0);
ellipse(190,175, 20, 10);
//mouth
noFill();
stroke(0);
strokeWeight(4);
beginShape();
vertex(150, 190);
bezierVertex(150, 200, 205, 200, 200, 190); 
endShape();
pop();
}

function skyBlobsSmall(x, y, color) {
    //Yayoi Kusama sky blobs
    //blobs in the sky with strokes
push();
translate(x,y);
scale(0.5);
fill(color);
strokeWeight(6);
stroke(217, 130, 145);

beginShape();
vertex(200, 140);  // top
  
  // Right side - wider curves
  bezierVertex(290, 120, 280, 160, 270, 200);  // top-right
  bezierVertex(280, 240, 260, 270, 200, 250);  // bottom-right
  
  // Left side - wider curves
  bezierVertex(130, 230, 120, 280, 120, 200);  // bottom-left
  bezierVertex(120, 160, 140, 120, 200, 140);  // top-left
endShape();
//face
//Left eye
fill(0);
ellipse(160,170, 20, 10);
//right eye
fill(0);
ellipse(240,175, 20, 10);
//mouth
noFill();
stroke(217, 130, 145);
strokeWeight(4);
beginShape();
vertex(180, 190);
bezierVertex(180, 200, 240, 220, 230, 190);

endShape();
pop();
}

function drawBlobs() {
  for(let blob of blobs) {
    skyBlobs(blob.x, blob.y, blob.color);
  }
}

function drawBlobsSmall() {
  for(let blobs of blobsSmall) {
    skyBlobsSmall(blobs.x, blobs.y, blobs.color);
  }
}

function drawSkyCircles() {
  for(let circle of circles) {
    skyCircles(circle.x, circle.y, circle.scaling, circle.color);
  }
}
// BACKGROUND
//Nellies code cite
const colors = [
  [171, 64, 50],//red
  [163, 132, 93],//green
  [89, 117, 89],//brunbiege
  [181, 114, 47],//orange
  [166, 83, 53],//beige
  [87, 125, 108]//blue
];



class Agent {
  constructor(x, y, maxSpeed, maxForce) {
    this.position = createVector(x, y);
    this.lastPosition = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
    this.color = random(colors);
  }

  follow(desiredDirection) {
    desiredDirection = desiredDirection.copy();
    desiredDirection.mult(this.maxSpeed);
    let steer = p5.Vector.sub(desiredDirection, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.lastPosition = this.position.copy();

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  checkBorders() {
    if (this.position.x < 0) {
      this.position.x = innerWidth;
      this.lastPosition.x = innerWidth;
    } else if (this.position.x > innerWidth) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = innerHeight;
      this.lastPosition.y = innerHeight;
    } else if (this.position.y > innerHeight) {
      this.position.y = 0;
      this.lastPosition.y = 0;
    } 
  }

  draw() {
    push();
    stroke(this.color[0], this.color[1], this.color[2]);
    strokeWeight(8);
    line(
      this.lastPosition.x,
      this.lastPosition.y,
      this.position.x,
      this.position.y
    );
    pop();
  }
}



function generateField() {
  let field = [];
  noiseSeed(Math.random() * 100);   
  for (let x = 0; x < maxCols; x++) {
    field.push([]);
    for (let y = 0; y < maxRows; y++) {
      const value = (noise(x / divider, y / divider) * 0.7) * -0.5;
      field[x].push(p5.Vector.fromAngle(value));
    }
  }
  return field;
}

const fieldSize = 50;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 4;
let field;
let agents = [];

function generateAgents() {
  for (let i = 0; i < 100; i++) {
    let agent = new Agent(
      Math.random() * innerWidth,
      Math.random() * innerHeight,
      2,
      0.1
    );
    agents.push(agent);
  }
}



function drawBackground() {
  for (let agent of agents) {
    const x = Math.floor(agent.position.x / fieldSize);
    const y = Math.floor(agent.position.y / fieldSize);
    const desiredDirection = field[x][y];
    agent.follow(desiredDirection);
    agent.update();
    agent.checkBorders();
    agent.draw();
  }
}


function draw() {

// SOUND
  // Display status text
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(12);
    text(`Hands: ${hands.length}`, width/2, height/2);
    
    // Check if two hands are detected
    if (hands.length >= 2) {
        // Play sound if not already playing
        if (!isPlaying) {
            sound.play();
            isPlaying = true;
        }
    } else {
        // Stop sound when less than two hands
        if (isPlaying) {
            sound.stop();
            isPlaying = false;
        }
    }

    // FUNCTIONS
  drawBackground();
  drawLeaves();
  drawBlobs();
  drawBlobsSmall();
  drawSkyCircles();
  skriet();
}

function getHandsData(results) {
    hands = results;
}