
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var engine, world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob( 10,250,20,30);
	bob2= new Bob(110,250,20,30);
	bob3= new Bob(210,250,20,30);
	bob4= new Bob(310,250,20,30);
	bob5= new Bob(410,250,20,30);
	ground= new Roof(250,100,900,50)
	rope1= new Rope(bob1.body,ground.body,10,0)
	rope2= new Rope(bob2.body,ground.body,110,0)
	rope3= new Rope(bob3.body,ground.body,210,0)
	rope4= new Rope(bob4.body,ground.body,310,0)
	rope5= new Rope(bob5.body,ground.body,410,0)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);

  background("coral");
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();bob2.display();bob3.display();bob4.display();bob5.display();
  
  ground.display();
  

  drawSprites();
  
}

function keyPressed(){
	//console.log("keyPressed")
	if(keyCode === UP_ARROW){
		//console.log("up")
		Matter.Body.applyForce (bob5.body,bob5.body.position,{x:95, y:-95})
		//paper.isStatic= false;
	}
}