
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1= new Box(330,235,30,40)
  box2= new Box(360,235,30,40)
  box3= new Box(390,235,30,40)
  box4= new Box(420,235,30,40)
  box5= new Box(450,235,30,40)
  box6= new Box(360,195,30,40)
  box7= new Box(390,195,30,40)
  box8= new Box(420,195,30,40)
  box9= new Box(390,155,30,40)











  
  drawSprites();
 
}



