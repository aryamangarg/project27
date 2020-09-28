
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobimg
function preload()
{
	bobimg=loadImage("bob.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new bob (200,500)
bob1.addImage("bob.png")
	bob2=new bob(300,500)
	bob2.addImage("bob.png")
	bob3=new bob(400,500)
	bob3.addImage("bob.png")
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



