const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var myengine,myworld;
var ball;
function setup() {
  createCanvas(400,400);
 

 myengine = Engine.create();
 myworld = myengine.world;

var ground_options={
  isStatic: true
}
 ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(myworld,ground);

console.log(ground);
console.log(ground.position.x);

var ball_option={
  restitution:1.5
}

ball = Bodies.circle(200,100,20,ball_option);
World.add(myworld,ball);

}

function draw() {
  background("black");  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

}