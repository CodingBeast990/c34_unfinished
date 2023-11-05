
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var berry, berryIMG;
var bird, birdIMG;

function preload(){
bg = loadImage('background.jpg');
birdIMG = loadImage('BirdImage.png');
berryIMG = loadImage('berry.png');
}
function setup() {
  createCanvas(900,550);
  engine = Engine.create();
  world = engine.world;
  Engine.update(engine);


  bird = createSprite(200,450);
  bird.scale = 0.6;
  bird.addImage(birdIMG);

 /* berry = createImg("berry.png");
  berry.position(550, 70);
  berry.size(60,60); */

}


function draw() 
{
 
 if(keyDown(37)){
  bird.x=bird.x-4;
 }

 if(keyDown(39)){
  bird.x= bird.x+4;
 }

 if (keyDown(38)){
  bird.y = bird.y-4;
 }

 if(keyDown(40)){
  bird.y = bird.y+4;
 }


 //console.log(bird.x, bird.y);
 
 image(bg,0,0,width, height);    

  spawnBerries();
  drawSprites();


}
 
function spawnBerries(){

if(frameCount % 10 === 0){
  berry = Bodies.circle(Math.round(random(800)), (Math.round(random(400))));
  berry = addImage("berry.png");
  berry.velocityY = 20;
  berry.size(60,60);
  
}

  

}