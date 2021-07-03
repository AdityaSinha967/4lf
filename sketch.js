const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage(" z5YCxOC.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  

  hero = new Hero(200,300,250);
 
  monster = new Monster(1300,550,300);

  //line 1
}

function draw() {
  background(bg);
  Engine.update(engine);
 
  hero.display();
  if(keyDown(LEFT_ARROW)){
    hero.x=hero.x-10;
  }
   if(keyDown(RIGHT_ARROW)){
    hero.x=hero.x+10;
    }
   if(keyDown(UP_ARROW)){
    hero.y=hero.y+10
  }
   if(keyDown(DOWN_ARROW)){
    hero.y=hero.y+10
  }

 
 
 
  monster.display();

 
  

  textSize(30);
  fill("black");
  text("Press SPACE for a second chance!",750,650);
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  rope.fly();
}



async function getBgImg() {

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "gamingbackground2.png";
    }
    else{
        bg = "th (1).jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
