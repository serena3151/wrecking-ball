const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint 

var engine, world
var ground
var box1, box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var ball;
var rope

function setup(){
createCanvas(1200,800)
engine = Engine.create()
world = engine.world

ground = new Ground(600,790,1200,20)
box1 = new Box(800,50,70,70)
box2 = new Box(800,50,70,70)
box3 = new Box(800,50,70,70)
box4 = new Box(800,50,70,70)
box5 = new Box(800,50,70,70)
box6 = new Box(800,50,70,70)
box7 = new Box(800,50,70,70)
box8 = new Box(700,50,70,70)
box9 = new Box(700,50,70,70)
box10 = new Box(700,50,70,70)
box11 = new Box(700,50,70,70)
box12 = new Box(700,50,70,70)
box13 = new Box(600,50,70,70)
box14 = new Box(600,50,70,70)
box15 = new Box(600,50,70,70)
ball = new Ball(500,600,50)
rope = new Rope(ball.body,{x:400, y:500})
}
function draw(){
background("yellow")
Engine.update(engine)
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
ball.display();
rope.display();
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}