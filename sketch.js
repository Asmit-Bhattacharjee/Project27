
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 750);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(700, 150, 500, 50);

	Bob1 = new Bob(540, 550, 40);
	Bob2 = new Bob(620, 550, 40);
	Bob3 = new Bob(700, 550, 40);
	Bob4 = new Bob(780, 550, 40);
	Bob5 = new Bob(860, 550, 40);

	rope1 = new Rope(Bob1.body, roof1.body, -160, 0)
	rope2 = new Rope(Bob2.body, roof1.body, -80, 0)
	rope3 = new Rope(Bob3.body, roof1.body, 0, 0)
	rope4 = new Rope(Bob4.body, roof1.body, 80, 0)
	rope5 = new Rope(Bob5.body, roof1.body, 160, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  roof1.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if (keyWentDown(LEFT_ARROW)) {
	Matter.Body.applyForce(Bob1.body, Bob1.body.position, {x:-200,y:200});
}

if (keyWentDown(RIGHT_ARROW)) {
	Matter.Body.applyForce(Bob5.body, Bob5.body.position, {x:200,y:-200});
}

  drawSprites();
 
}



