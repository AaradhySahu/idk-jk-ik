var wall
var car,speed,weight
var damage
var bullet
function setup() {
  weight = Math.round(random(400,1500))
  
  bullet = createSprite(0,200,20,20)
  speed = Math.round(random(55,90))
  bullet.velocityX = speed 
  createCanvas(800,400);
  wall = createSprite(650, 200, 50, 100);
  damage = 0.5 * weight * speed * speed/22500
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (bullet.isTouching(wall))
  {
     console.log(Math.round(damage))
     if (damage > 84&&damage <134)
     {
          wall.shapeColor = "green"
          console.log(wall.shapeColor)
          bullet.velocityX = 0  
     }
     if(damage > 134)
     {
          wall.shapeColor = "red"
          console.log(wall.shapeColor)
          bullet.velocityX = 0
     }
     
  }
  
}