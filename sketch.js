

var car,wall;
 


var wall, thickness;
var bullets, speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52)





	bullets=createSprite(50, 200, 50,50);   

	bullets.velocityX = speed;

	bullets.shapeColor=color(255);


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color("red")
}


function draw() {
  background(0);

   drawSprites();
   
  hasCollided();
 
  


}

function hasCollided(lbullet,lwall)
{
	bulletRightEdge= lbullet.velocityX + lbullet.width;
	wallLeftEdge.x = lwall.x
	if(bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;

}


 if(hasCollided(lbullet,lwall))
{
     lbullet.velocityX= 0;
	 var damage=0.5 * weight * speed *speed/(thickness*thickness*thickness);
		  
	 
	  if(damage>10) 
	  {
			wall.shapeColor=color(225,0,0);
	  }
		  
	  if(damage<10)
	  {
		 wall.shapeColor=color(0,225,0);
		}
		   
	   
	}