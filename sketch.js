var sea_img;
var ship_ani;
function preload(){
ship_ani = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_img = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship.addAnimation(ship_ani);
  sea.addImage(sea_img);
  ship.createAnimation(50,200);
  sea.createImage(200,200);
}

function draw() {
  background(255);
  sea.velocityX = -2;
  if(sea < 0 ){
    sea.x = sea.width/2;
  }
  drawSprites()
} 