const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var machine1;

function setup() {
  createCanvas(800,400);
  machine1 = new Machine(600,500,100,100)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  machine1.display();
}