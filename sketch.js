
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(570, 400);
  
  
  ground = createSprite(400, 350, 900, 10);
  
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
 
  score = 0;

  
  

  
}


function draw() {

  background(180);
  
text("Score: "+ score, 500,50) 
  
  if(keyDown("space") && monkey.y>=100){
     monkey.velocityY = -12;
  }   
  
  
  var survivalTime=0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : ", score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime :"+ survivalTime, 100,50); 
   
  
  
  
  
  
  
  var select_banana = Math.round(random(1));
  
  if(World.frameCount%30 == 0){
  if (select_banana == 1){
  FoodGroup();
  }
  }
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
    
  FoodGroup();
  obstacleGroup();
  
  drawSprites();

}
function FoodGroup(){

 if(World.frameCount%80===0){
  
  var  banana = createSprite(200, 200, 20, 20);
  banana.scale = 0.1;
   
   r=Math.round (random(1));
   
   if(r==1){
  banana.addImage(bananaImage)
   }
   
  banana.y = Math.round(random(50, 200));
   
 banana.velocityX = -7;
    banana.setLifetime = 100;
   
 }  
}
  
  function obstacleGroup(){
    
    if(frameCount%20===0){
    var obstacle = createSprite(600, 300, 10, 20);
    
      var rand = Math.round(random(1));
      switch (rand){
          
        case 1: obstacle.addImage(obstacleImage) ;
          break;
          
          
      }
   
    obstacle.velocityX = -8;
   obstacle.setLifetime = 50;
    obstacle.scale = 0.1;
      
      
    }
    
  }
  
  
  
  
  
  
  





