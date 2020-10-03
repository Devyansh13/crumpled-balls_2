
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ground1;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	ball1=new Paper(200,200,70);
	box1=new Box(880,520,200,20);
	//box2=new Box(800,530,20,100);
	//box3=new Box(950,520,20,100);
    ground1=new Ground(600,600,1200,100)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground1.display();
  ball1.display();
  box1.display();
  //box2.display();	
  //box3.display();
	
	//text("Crumpled Balls",200,200)

  drawSprites();
 
}
function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:275,y:-465})
}

}


