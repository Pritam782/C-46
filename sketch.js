var bg,bgImg;

function preload(){
  bgImg = loadImage("backgroundImage.png");
}

function setup(){
    createCanvas(2000,800);
    bg = createSprite(700,300);
    bg.addImage(bgImg);
    bg.scale = 0.85;
    bg.velocityX =-2;
}
function draw(){
    background(0);

    

if (bg.x <500){
    bg.x = bg.width/2;
  }
    drawSprites();
}