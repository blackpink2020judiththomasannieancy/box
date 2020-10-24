const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new h(200,390,400,60)
  box2=new g(270,203,50,50)
box3=new g (250,100,30,100)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
  box1 .display();
  box2 .display();   
  box3. display();
}