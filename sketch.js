
var bg;
var snowy

function preload(){
  bg=loadImage("snow3.jpg");
  snowy=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bg);  
  createSnow();
 
  drawSprites();
}

function createSnow() {
  if (World.frameCount % 60 == 0) {
  var snow = createSprite(Math.round(random(50, 650),40, 10, 10));
  snow.addImage(snowy);
  snow.scale=0.13;
  snow.velocityY = 3;
  snow.lifetime = 150;

  }
}