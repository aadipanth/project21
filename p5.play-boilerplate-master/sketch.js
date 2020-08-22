var sun,venus,earth,mars;


var dis=0;

function setup() {
  createCanvas(500,400);
 sun=createSprite(0, 200, 50, 50);
 sun.shapeColor="yellow"
 venus=createSprite(200,200,50,50);
 venus.shapeColor="green"
 earth=createSprite(300,200,50,50);
 earth.shapeColor="blue"
 mars=createSprite(400,200,50,50);
 mars.shapeColor="red"

}

function draw() {
  background(255,255,255);  
distroy(venus,sun);
distroy(earth,sun);
distroy(mars,sun);


if(frameCount%20===0){
sun.scale=sun.scale+0.3;
dis=dis+8;
}




  drawSprites();
}
function distroy(o1,o2){
if(o1.x-(o2.x+dis)<o1.width/2+o2.width/2 &&
o2.x-(o1.x+dis)<o1.width/2+o2.width/2){
o1.remove();
}
}