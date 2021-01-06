const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var topBord,rightBord,leftBord,bottomBord;
var ground;

var particles= [];
var plinkos= [];
var divisions= [];

var divisionHeight=300;
var divisionsVar;

Engine.run(engine);

function setup() {
  createCanvas(480,800);

  rightBord=createSprite(width-5, height/2, 10, height);
  rightBord.shapeColor="brown";

  topBord=createSprite(width/2,5,width,10);
  topBord.shapeColor="brown";

  leftBord=createSprite(5,height/2,10,height);
  leftBord.shapeColor='brown';

  bottomBord=createSprite(width/2,height-5,width,10);
  bottomBord.shapeColor='brown';

  console.log(width);

  console.log(height);

  ground= createSprite(200,200,40,40);

  for (var j = 40; j <=width; j=j+50)
   { 

    plinkos.push(new Plinko(j,75));

   }

  for (var j = 15; j <=width-10; j=j+50) 
   { 

     plinkos.push(new Plinko(j,175));

   } 

  for (var j = 0; j < particles.length; j++) 
  {

    particles[j].display();
  
  }

  for (var k = 0; k < divisions.length; k++) 
  { 

    divisions[k].display();

  }

  for (var k = 0; k <=width; k += 80) 
  {

    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    
  }
  }

function draw() {
  background(0); 
  Engine.update(engine);


  ground.display(); 
  plinkos.display();

  drawSprites();

  for (var i = 0; i < plinkos.length; i++) { plinkos[i].display(); }
  for (var s = 0; s < divisions.length; s++) { divisions[s].display(); }
   if(frameCount%60 === 0){ particles.push(new Particle(random(width/2-30, width/2+30), 10,10));  }
    for (var j = 0; j < particles.length; j++) { particles[j].display(); } 
    for (var k = 0; k < divisions.length; k++) { divisions[k].display(); }
    ground.display();
}