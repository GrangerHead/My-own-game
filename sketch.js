var pacman, pacmanImg;
var frame, bgImg;

function preload(){
  bgImg = loadImage("assets/bg.jpg");
  pacmanImg =  loadAnimation("assets/opening_Pac-man.png", "assets/closing_Pac-man.png");
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  frame = createSprite(width/2,height/2,width/2-10,height/2+300);
  
  pacman = createSprite(width/2,height/2 , 25, 25);
  pacman.addAnimation("Pacman",pacmanImg);
  pacman.scale = 0.3;
}

function draw() {
  background(bgImg);

  if (keyDown("left")) {
    pacman.x -= 5;
  }
  if (keyDown("right")) {
    pacman.x += 5;
  }
  if (keyDown("up")) {
    pacman.y -= 5;
  }
  if (keyDown("down")) {
    pacman.y += 5;
  }

  drawSprites();
}