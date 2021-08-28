 var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies; 

var particle;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var gameState ="start";
var score =0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  fill("red");
  text("Score : "+score,20,40);
  textSize(25)
  text(" 100 ", 10, 560);
  text(" 100 ", 90, 560);
  text(" 100 ", 170, 560);
  text(" 100 ", 250, 560);
  text(" 500 ", 330, 560);
  text(" 500 ", 410, 560);
  text(" 500 ", 490, 560);
  text(" 200 ", 570, 560);
  text(" 200 ", 650, 560);
  text(" 200 ", 730, 560);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") { 
    textSize(100);
    text("GameOver", 150, 250);
    console.log("Game over")
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null){
       particle.display();
       console.log("particles displayed")   

        if (particle.body.position.y>760){
              if (particle.body.position.x < 300) {
                  score=score+100;   
                  console.log("100 pts!")   
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {

                    score = score + 500;
                    console.log("500 pts!")   

                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 ){
                    score = score + 200;
                    console.log("200 pts!")   

                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10);
     console.log("!Particle spawned")    
  }   
}