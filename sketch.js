
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new ground(width/2,50,600,40);

	bob1 = new Bob(200,600);
	bob2 = new Bob(300,600);
	bob3 = new Bob(400,600);
	bob4 = new Bob(500,600);
	bob5 = new Bob(600,600);

	rope1 = new Rope(bob1.body,roof.body,-96*2,0);
  rope2 = new Rope(bob2.body,roof.body,-46*2,0);
  rope3 = new Rope(bob3.body,roof.body,-0*2,0);
  rope4 = new Rope(bob4.body,roof.body,+46*2,0);
  rope5 = new Rope(bob5.body,roof.body,+96*2,0);




  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  roof.display();
  
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === RIGHT_ARROW){ 
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:5,y:5});
  }

  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:-5});
  }
}