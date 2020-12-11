var fixedObject
var movObject



function setup() {
  createCanvas(800,400);
  fixedObject=createSprite(400, 200, 50, 90);
  movObject=createSprite(600,100,50,90);
}

function draw() {
 background("black");  
 
 movObject.x=mouseX;
 movObject.y=mouseY;

 if(movObject.x-fixedObject.x<fixedObject.width/2+movObject.width/2 && fixedObject.x-movObject.x<fixedObject.width/2+movObject.width/2 && 
  fixedObject.y-movObject.y<fixedObject.height/2+movObject.height/2 && movObject.y-fixedObject.y<fixedObject.height/2+movObject.height/2){
   fixedObject.shapeColor="red";

 }
 else{
   fixedObject.shapeColor="blue";
 }
 
 drawSprites();

  
}