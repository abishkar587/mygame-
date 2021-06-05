const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Water;
var herofish;
var friendlyfish;
var shark;


function preload() {
    water = loadImage("water bg/water bg.jpg")
    herofish =loadImage("main fish/herofish.jpg")
    //herofish = loadImage("main fish/herofish2.jpg")
    shark = loadImage("shark/sharkfish.jpg")
    //shark = loadImage("shark/sharkfish2.jpg")
    friendlyfish = loadImage("friendly fish/F1.jpg")
    //friendlyfish = loadImage("friendly fish/F2.jpg")
    //friendlyfish = loadImage("friendly fish/F3.jpg")
    //friendlyfish = loadImage("friendly fish/F4.jpg")
    //friendlyfish = loadImage("friendly fish/F5.jpg")
    //friendlyfish = loadImage("friendly fish/F6.jpg")


}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
   
    herofish = new Herofish(80,20,209,150);
    shark = new Shark(130,239);
    friendlyfish = new Friendlyfish(139,201,24,12);
   

}

function draw(){
    background(water);
    Engine.update(engine);
   herofish.display();
   shark.display();
   friendlyfish.display();
}