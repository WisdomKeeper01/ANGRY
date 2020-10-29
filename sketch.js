const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground;



function setup(){
     createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    
   box1 = new Box(700*2,250,70,70);
   ground = new Ground(width/2,height-15,width,30)
   box2 = new Box(800*2,250,70,70);
   box3 = new Box(800*2,150,70,70);
   box4 = new Box(700*2,150,70,70);
   box5 = new Box(750*2,50,70,70);

   pig1 = new Pig(750*2, 250)
   pig2 = new Pig(750*2, 150)

   log1 = new log(750*2,200,300,PI/2)
   log2 = new log(750*2,100,300,PI/2)
   log3 = new log(720*2,15,170,PI/4)
   log4 = new log(780*2,15,170,-PI/4)  

   bird1 = new Bird(400,400)
 
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    pig1.display()
    pig2.display()
    log1.display()
    log2.display()
    log3.display()
    log4.display()
    bird1.display()
    
}