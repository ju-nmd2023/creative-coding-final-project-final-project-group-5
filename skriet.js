function setup() {
    createCanvas(600, 750);
    background(140, 110, 80);
    field = generateField();
    generateAgents();
    frameRate();
}

const skrietHeight = 300;

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
stroke(40);
strokeWeight(3);
ellipse(width / 2 - 4, height - skrietHeight - 33, 12, 22);

pop();

}

function handsSkriet() {    
  // Hands of Skriet
push();
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
vertex(width / 2 + 10, height - skrietHeight - 20); // Top

stroke(18);
strokeWeight(20);
bezierVertex(
  width / 2 + 10, height - skrietHeight,
  width / 2, height - skrietHeight,
  width / 2, height - skrietHeight + 40 // Bottom
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
vertex(width / 2 - 10, height - skrietHeight - 20); // Top

stroke(18);
strokeWeight(20);
bezierVertex(
  width / 2 - 10, height - skrietHeight,
  width / 2, height - skrietHeight,
  width / 2, height - skrietHeight + 40 // Bottom point
);
endShape();
pop();
}

function skriet() {
    //The scream + Frida Kahlo
 
    // Body of Skriet
       noStroke();
    fill(0);
    rect(width / 2 - 125, height - skrietHeight, 250, skrietHeight, 120, 120, 0, 0);

push();
 translate(width / 2, height - skrietHeight - 90);
scale(2);
translate(-width / 2, -(height - skrietHeight - 60));

handsSkriet();
faceSkriet();

pop();

}

function butterfly() {
//Frida Kahlo butterflys
}

function leaf() {
    //Frida Kahlo leaves
}

function skyBlobs() {
    //Yayoi Kusama sky blobs
}

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

const fieldSize = 50;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 4;
let field;
let agents = [];

function draw() {
//This is for background flow field
  for (let agent of agents) {
    const x = Math.floor(agent.position.x / fieldSize);
    const y = Math.floor(agent.position.y / fieldSize);
    const desiredDirection = field[x][y];
    agent.follow(desiredDirection);
    agent.update();
    agent.checkBorders();
    agent.draw();
  }//end of background flow field
    skriet();


}
