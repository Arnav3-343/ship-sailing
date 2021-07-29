var seaImg ,shipImg1;
var sea;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
sea.addImage(seaImg); 
sea.addAnimation("sailing",shipImg1);
}

function draw() {
  background("blue");
 sea.velocityX = -2;
 if(sea.x <0){
sea.x = sea.width/2;
 }
drawSprites(); 
}