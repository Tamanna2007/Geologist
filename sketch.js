const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer , rubber , iron , garnet , sand1 , sand2 , sand3 , sand4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new Rubber(900,450,70);
    iron = new Iron(300,350);
    garnet = new Garnet(440,350);
    sand1=new Sand(580,450,25);
    sand2=new Sand(520,450,25);
    sand3=new Sand(540,450,25);
    sand4=new Sand(560,450,25);
  


}

function draw(){
    background("cyan");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    garnet.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();

    
 
}