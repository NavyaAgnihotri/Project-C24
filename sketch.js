
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dust1 , dust2 , dust3;
var grnd;

function preload()
{
	
}

function setup() {
	createCanvas(950, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(20 , 450 ,20);
	dust1=new dustbin(750,450,220,15);
	dust2=new dustbin(635,397,15,120);
	dust3=new dustbin(865,397,15,120);
	grnd=new ground(475,465,950,10);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  dust1.display();
  dust2.display();
  dust3.display();
   grnd.display();

   

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === 32 ){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:90,y:90});

	}
}


