var jetpack, rocket, coins, bg1;
var jetpackimg, rocketimg, coinsimg, bg1img;
var rocketsGroup, coinsGroup;
var Play = 1;
var End = 0;
var gameState = Play;
var score = 0;

function preload(){
jetpackimg = loadImage ("Sprites/jetpack.png.png");
coinsimg = loadImage ("Sprites/coin.png");
rocketimg = loadImage ("Sprites/rocket.png");

}

function setup() {

  createCanvas(1200,800);
  jetpack = createSprite(100,750,10,20);
  jetpack.addImage(jetpackimg);
  jetpack.scale = 0.7;
  
 /* bg1 = createSprite(600,400,1200,800);
  bg1.addImage(bg1img);
  bg1.scale = 1;*/

  
}

function draw() {
  background(220); 
  text("Score: " +score,1100,100);
  
  if(gameState===Play){

/*if(bg1.x < 0){
bg1.width = bg1.width/2;
}*/

if (keyDown ("space")){
jetpack.velocityY = -12;
}

jetpack.velocityY = jetpack.velocityY + 1;
  
  spawnCoins();
spawnRockets();
if(jetpack.isTouching(coinsGroup)){
score = score+1;


}

if(jetpack.isTouching(rocketsGroup)){
gameState = End;
text("GAME OVER !",580,400);
text("RESTART", 580,350);
}
  }
  else if(gameState===End){
jetpack.velocityY = 0;
coinsGroup.destroyEach();
rocketsGroup.destroyEach();


  }
  
  drawSprites();
}

function spawnCoins(){
  if(frameCount % 80 ===0){
coins = createSprite(800,Math.round(random(20,120)),20,20);
coins.velocityX = -5;
coins.addImage(coinsimg);
coinsGroup.add (coins);
  }
}

function spawnRockets(){
  if(frameCount % 100 ===0){
rocket = createSprite(800,Math.round(random(30,140)),20,20);
rocket.velocityX = -5;
rocket.addImage(rocketimg);
rocketsGroup.add(rocket);


  }
}