const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10;

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
    

    drop1 = new Drop(50,10,50,60);
    drop2 = new Drop(110,10,50,60);
    drop3 = new Drop(170,10,50,60);
    drop4 = new Drop(230,10,50,60);
    drop5 = new Drop(290,10,50,60);
    drop6 = new Drop(350,10,50,60);
    drop7 = new Drop(410,10,50,60);
    drop8 = new Drop(480,10,50,60);
    drop9 = new Drop(540,10,50,60);
    drop10 = new Drop(600,10,50,60);
}

function draw(){
    background(255);
    Engine.update(engine);
    
      drop1.display();
      drop2.display();
      drop3.display();
      drop4.display();
      drop5.display();
      drop6.display();
      drop7.display();
      drop8.display();
      drop9.display();
      drop10.display();
    
}