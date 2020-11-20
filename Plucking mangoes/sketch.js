const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree_1, ground_1, stone_1, boy_1, boy_img;

var mango_1, mango_2, mango_3, band_1;

function preload() {

  boy_img = loadImage("boy.png");

}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //making objects.......

  tree_1 = new tree(500, 300, 300, 300);

  ground_1 = new ground(400, 596, 800, 20);

  stone_1 = new stoneObj(500, 300, 40, 40);

  //console.log(stone_1.body.angle);

  mango_1 = new Mango(540, 400, 40, 40);

  mango_2 = new Mango(582, 330, 30, 30);

  mango_3 = new Mango(590, 370, 40, 40);

  mango_4 = new Mango(590, 430, 30, 30);

  boy_1 = new boy(200, 438, 100, 200);

  band_1 = new Band(stone_1.body, { x: 200, y: 438 });

  // band_1 = new Band(boy_1.body,{x:200,y:100});

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  band_1.display();

  tree_1.display();

  ground_1.display();

  stone_1.display();

  boy_1.display();

  mango_1.display();

  mango_2.display();

  mango_3.display();

  mango_4.display();

  boy_1.display();

  detectollision(stone_1, mango_1);
  detectollision(stone_1, mango_2);
  detectollision(stone_1, mango_3);
  detectollision(stone_1, mango_4);


}

function detectollision(lstone, lmango) {

  var collision = Matter.SAT.collides(lstone, lmango);
  if (collision.collided) {
    console.log("collided");
    Matter.Body.setStatic(lmango, false);
  }

  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
  // console.log(lmango.r+lstone.r)
  if (distance <= lmango.r + lstone.r) {
    //console.log(distance);
    Matter.Body.setStatic(lmango.body, false);
  }
}

function mouseDragged() {

  Matter.Body.setPosition(stone_1.body, { x: mouseX, y: mouseY });


}

function mouseReleased() {

  band_1.fly();

}

function keyPressed() {

  if (keyCode === 32) {

    Matter.Body.setPosition(stone_1.body, { x: 300, y: 200 })
    band_1.attach(stone_1.body)

  }
}



