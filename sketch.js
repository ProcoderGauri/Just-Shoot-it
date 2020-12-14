const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonimg;
var ground;
var platform1,platform2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var box1,box2,box3,box4,box5;
var box6,box7,box8;
var box9;
var polygon,string;

  function preload(){
    polygon_img=loadImage("polygon.png");
  }
  function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(400,height,1000,20);
    platform1= new Ground(398,300,250,10);
    platform2= new Ground(700,200,200,10);
   





//level 1
block1= new Block (308,275,30,40);
block2= new Block (338,275,30,40);
block3= new Block (368,275,30,40);
block4= new Block (398,275,30,40);
block5= new Block (428,275,30,40);
block6= new Block (458,275,30,40);
block7= new Block (488,275,30,40)

// level 2
block8= new Block (338,235,30,40);
block9= new Block (368,235,40,40);
block10= new Block (390,235,30,40);
block11= new Block (420,235,30,40);
block12= new Block (450,235,30,40);

//level 3
block13= new Block (360,195,30,40);
block14= new Block (390,195,30,40);
block15= new Block (420,195,30,40);

// level 4
block16= new Block (390,155,30,40);

// set 2
// level 1
box1= new Block (640,175,30,40);
box2= new Block (670,175,30,40);
box3= new Block (700,175,30,40);
box4= new Block (730,175,30,40);
box5= new Block (760,175,30,40);

//level 2
box6= new Block (670,135,30,40);
box7= new Block (700,135,30,40);
box8 = new Block(730,135,30,40);

//level 3
box9 = new Block(700,95,30,40);

polygon= Bodies.circle(50,200,20,{'restitution':0.8});
World.add(world,polygon);
string= new SlingShot(this.polygon,{x:100,y:200});


  }
function draw(){
background(56,44,44);
textSize(20);
fill("lightyellow");
text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 180,30 );
//image(polygonimg ,80,250,50,50);

ground.display();
platform1.display();
platform2.display();
imageMode(CENTER);
image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
string.display();
strokeWeight(2);
stroke(15);

fill("skyblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

fill("turquoise");
block13.display();
block14.display();
block15.display();

fill("grey");
block16.display();

fill("skyblue");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

fill("turqoise");
box6.display();
box7.display();
box8.display();

fill("pink");
box9.display();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY}); 

}

function mouseReleased(){
	string.fly();
}
function keyPressed() {
		if (keyCode === 32) {
	
		  string.attach(polygon.body);
		 
		}
	  }
   