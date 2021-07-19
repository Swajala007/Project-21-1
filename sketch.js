const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball;

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var ball_options = {
		restitution:0.95
	 }    

	 ball = Bodies.circle(200,100,20,ball_options)
	 fill("white")
	 World.add(world,ball);
	 rectMode(CENTER);
	 ellipseMode(RADIUS);


	 ground =new Ground(300,800,1500,20);
     ground1 =new Ground(600,730,20,150);
	 ground2 =new Ground(780,730,20,150);
}


function draw() {
  background(0);




  if(keyDown("UP_ARROW")){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});
  }

  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);

  ground.show();
  ground1.show();
  ground2.show();

  
  drawSprites();
 
}



