var bg1, button, music;
var bg2, score = 0;
var gameState = 0;
var chef, chefImg;
var bg;
var knife;
var level = 1;
var sound, audio;
var mode;

//section fruits
var appleImg;
var bananaImg;
var lemonImg;
var papayaImg;
var sapotaImg;
var watermelonImg;
var fruitGroup, fruit;

var appleCutImg;
var bananaCutImg;
var lemonCutImg;
var papayaCutImg;
var watermelonCutImg; 
var sapotaCutImg;
var cockroachImg;

function preload(){
  music = loadSound("melody-of-nature-main-6672.mp3");
  bg1 = loadImage("images/bgImg1.png");
  bg2 = loadImage("images/mainBgImg3.jpg");
  chefImg = loadImage("images/chef2.png");
  appleImg = loadImage("images/appleMain1.png");
  bananaImg = loadImage("images/bananaMain1.png");
  lemonImg = loadImage("images/lemonMain1.png");
  papayaImg = loadImage("images/papayaMain1.png");
  sapotaImg = loadImage("images/sapotaMain1.png");
  watermelonImg = loadImage("images/watermelonMain1.png");

  sound = loadSound("chopSound.mp3");

  appleCutImg = loadImage("images/appleCut.png");
  bananaCutImg = loadImage("images/bananaCut.png");
  sapotaCutImg = loadImage("images/sapotaCut.png");
  watermelonCutImg = loadImage("images/watermelonCut.png");
  papayaCutImg = loadImage("images/papayaCut.png");
  lemonCutImg = loadImage("images/lemonCut.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  fruitGroup = new Group();
  if(gameState === 0){
    button = createButton("PLAY");
    button.position(width/2 + 200, height/2 + 180);
    button.size(50, 20);
}

button.mousePressed(()=>{
  gameState = 1;
  button.hide();
  Gameplay();
  music.loop();
  knife = createSprite(200, 200, 60, 20);
});

}

function draw(){

  if(level = 1){
  if(gameState === 0){
    bg = bg1;
}

  else if(gameState === 1){
    bg = bg2;
    spawnFruits();
    if(knife.isTouching(fruitGroup)){
      score = score + 1;
      sound.play();
      fruitGroup.destroyEach();
    }
  }
  background(bg);

  if(gameState === 1){
    chef.x = mouseX;
    textSize(20);
    fill(255, 0, 0);
    text("Score: " + score, 1150, 50);
    text("TARGET: 45", 1150, 100);
    knife.setCollider("rectangle", mouseX-290, 285, 20, 60, 40);
    knife.visible = true;
    knife.debug = true;
    if(score === 45){
      clear();
      fruitGroup.setVelocityYEach(0);
      chef.visible = false;
      textSize(40);
      text("WELL DONE", width/2-100, height/2);
      }
    }

  if(gameState === 0){
      bg = bg1;
      textSize(30);
      fill(0, 255, 255);
      text("INSTRUCTIONS", windowWidth/2-100, 60);
      fill(255, 0, 0);
      text("Chop the fruits and vegetables for getting more points", width/2-360, height/2+20);
      fill("black");
      text("Don't let the fruits and vegetables fall on the ground to save the life", width/2-420, height/2+60);
  }
}
      drawSprites();
}

function Gameplay(){
  chef = createSprite(width/2, height/2+180);
  chef.scale = 0.5;
  chef.addImage('chef',chefImg);
}

function spawnFruits(){
  var choice = Math.round(random(1, 7));
  if(frameCount%60 === 0){
  fruit = createSprite(random(0, 1280), -40);
  fruit.scale = 0.2;
  fruit.velocityY = (score*12)/11.5 + 2;
  fruitGroup.add(fruit);
  switch(choice){
    case 1: fruit.addImage(appleImg);
    break;

    case 2: fruit.addImage(bananaImg);
    break;

    case 3: fruit.addImage(sapotaImg);
    break;

    case 4: fruit.addImage(papayaImg);
    break;

    case 5: fruit.addImage(watermelonImg);
    break;

    case 6: fruit.addImage(lemonImg);
    break;

    case 7: fruit.addImage(cockroachImg);
    break;
  }
 }
}