var garden,rabbit;
var gardenImg,rabbitImg;
var apples, leaves;
var applesImg, leaves1Img, leaves2Img, leaves3Img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leaves1Img = loadImage("orangeLeaf.png");
  leaves2Img = loadImage("redImage.png");
  leaves3Img = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  

  rabbit.x = mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var selectSprites = Math.round(random(1,3));

  if(frameCount % 60 == 0){
    if(selectSprites == 1){
      createApples();

    }else{
      createLeaves();
    }

  }


  drawSprites();
}


function createApples(){
apples = createSprite(random(50,350),40,10,10);
apples.addImage(applesImg);
apples.scale = 0.1;
apples.velocityY = 5;
apples.lifetime = 150;
}

function createLeaves(){
leaves = createSprite(random(50,350),40,10,10);
var r = Math.round(random(1,3));
if(r == 1){
leaves.addImage(leaves1Img);
}
if(r == 2){
  leaves.addImage(leaves2Img);
}
if(r == 3){
  leaves.addImage(leaves3Img);
}
leaves.scale = random(0.05,0.1);
leaves.velocityY = 3;
leaves.lifetime = 150;
}