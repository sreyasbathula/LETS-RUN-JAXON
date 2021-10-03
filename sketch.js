var Runner,path,power,bomb,coin,energyDrink,leftboundary,rightboundary
var RunnerImg,pathImg,powerImg,bombImg,coinImg,energyDrinkImg
function preload(){
  //pre-load images
  RunnerImg1=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(180,100,10,10);
  path.addImage("path",pathImg);
  path.velocityY=3;

  Runner=createSprite(190,300,10,10);
  Runner.addAnimation("running",RunnerImg1);
  Runner.scale=0.06



  
}


 
    
  
  




function draw() {
   //code to reset the background
   if (path.y> 400) {
    path.y = height/8;
   }
  background(0);
drawSprites();
}
