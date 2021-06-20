var bow, arrow, scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var pinkBalloons, redBalloons, greenBalloons, blueBalloons, arrows;

var score = 0;
var endScore
var gameState = "play";




function preload() {

  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  whiteBg = loadImage("white.png")
}



function setup() {
  createCanvas(400, 400);

  //creating background
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  score = 0;
  pinkBalloons = new Group();
  redBalloons = new Group();
  blueBalloons = new Group();
  greenBalloons = new Group();
  arrows = new Group();
}
function draw() {



  //moving bow
  
    background(0);
    bow.y = World.mouseY
    bow.x = camera.position.x + 180;


    //creating continous enemies
    var select_balloon = Math.round(random(1, 4));

    if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
        redBalloon();
      } else if (select_balloon == 2) {
        greenBalloon();
      } else if (select_balloon == 3) {
        blueBalloon();
      } else {
        pinkBalloon();
      }
    }

    

    if (redBalloons.isTouching(arrows)) {
      arrows.destroyEach();
      redBalloons.destroyEach();
      score = score + 1
    }
    if (greenBalloons.isTouching(arrows)) {
      arrows.destroyEach();
      greenBalloons.destroyEach();
      score = score + 2
    }
    if (blueBalloons.isTouching(arrows)) {
      arrows.destroyEach();
      blueBalloons.destroyEach();
      score = score + 3
    }
    if (pinkBalloons.isTouching(arrows)) {
      arrows.destroyEach();
      pinkBalloons.destroyEach();
      score = score + 4;
    }
    camera.position.x+=1;
    if(redBalloons.isTouching(bow)||
    greenBalloons.isTouching(bow)||
    blueBalloons.isTouching(bow)||
    pinkBalloons.isTouching(bow)){
      gameState="end"
    }


    if(gameState === "play"){
      drawSprites();
    
    if (keyDown("space")) {
      createArrow();
    
    }}
    console.log(gameState)
    text("Score: " + score, camera.position.x+100, 50);
    if(gameState === "end"){text('Game Over', camera.position.x-35, 200);
  }
}


function redBalloon() {
  var red = createSprite(camera.position.x - 200, Math.round(random(20, 370)), 10, 10);
  redBalloons.add(red);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 300;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(camera.position.x - 200, Math.round(random(20, 370)), 10, 10);
  blueBalloons.add(blue);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 300;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(camera.position.x - 200, Math.round(random(20, 370)), 10, 10);
  greenBalloons.add(green);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 300;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(camera.position.x - 200, Math.round(random(20, 370)), 10, 10);
  pinkBalloons.add(pink);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 300;
  pink.scale = 1
}

function createArrow() {
  var arrow = createSprite(camera.position.x+200, mouseY)
  arrows.add(arrow);
  arrow.addImage(arrowImage);
  arrow.scale = 0.4;
  arrow.velocityX = -3;
  arrow.lifetime = 300;
}