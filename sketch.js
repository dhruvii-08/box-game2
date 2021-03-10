const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ground;
var box, box2, box3;

function setup() {
  createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(800,400,1600,50,ground_options);
  World.add(world, ground);

  box = new Box();
  box2 = new Box();
  box3 = new Box();

}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1600,50);
  box.display();
  box2.display();
  box3.display();
}
