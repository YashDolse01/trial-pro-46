
var ruz;

function preload(){

  ruzImage = loadImage("poor.png");




}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ruz=createSprite(40,200,20,20);
  ruz.addImage(ruzImage);
  ruz.scale=0.7
}

function draw() {
  background("green"); 
preload();
  drawSprites();
}