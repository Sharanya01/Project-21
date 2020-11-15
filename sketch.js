var bullet, wall;
var speed ,weight;
var thickness;
var damage;
var bulletRightEdge ;
var wallLeftEdge ;
function setup() {
createCanvas(1600,400);
  speed= Math.round(random(223,321));
  weight= Math.round(random(30,52));
  bullet = createSprite(50,200,50,5);
  wall = createSprite(1400,200,30,1000);
  wall.shapeColor = "white";
  bullet.velocityX = speed;
 thickness = Math.round(random(22,83));
}

function draw() {
  background(0); 
 if (HasCollided(bullet,wall)){ 
  bullet.velocityX = 0;
   damage  = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage < 11){
    wall.shapeColor = "green";
  }

  if(damage > 10){
    wall.shapeColor = "red";
  }
}
  drawSprites();
}
function HasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x +lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}
