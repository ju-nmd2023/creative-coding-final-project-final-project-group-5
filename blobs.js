function setup() {
    createCanvas(600, 750);
    background(140, 110, 80);
}

function skyBlobs() {
    //Yayoi Kusama sky blobs
    //blobs in the sky
fill(0, 99, 166);
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
}

function skyBlobsSmall() {
    //Yayoi Kusama sky blobs
    //blobs in the sky
fill(186, 109, 89);
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
}

function draw() {
 skyBlobs();
 skyBlobsSmall();
}