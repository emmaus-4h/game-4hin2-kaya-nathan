/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.

   test
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const START = 3;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 360; // y-positie van speler

var kogelX = 1934; // x-positie van kogel
var kogelY = 5365; // y-positie van kogel
var kogelvliegt = false

var vijandX = 1265 // x-positie van vijand
var vijandY = 200// y-positie van vijand

var arrow_up = 38;
var arrow_down = 40;
var arrow_left = 37;
var arrow_right = 39;


var speed_speler = 10;

var points = 0
var health = 5



/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function draw () {
  // speler
 background('blue'); 
  {
    if (keyIsDown (arrow_left)) {
    spelerX = spelerX - 15
  }
  if (keyIsDown(arrow_up)) {
    spelerY = spelerY - 15
  }
 /*valt naar beneden*/
  else 
  {spelerY = spelerY + 5 } 

  if (keyIsDown (arrow_right)) {
    spelerX = spelerX + 15
  }
  if (keyIsDown (arrow_down)) {
    spelerY = spelerY + 15
  }
  };
/*grond*/
if  (spelerY > 694) {
  spelerY = 694
};   
/*muren*/
if  (spelerX < 25) {
  spelerX = 25
};   
if  (spelerX > 1255) {
spelerX = 1255
};   

if  (spelerY < 25) {
spelerY = 25
};
 // vijand
  vijandX = vijandX - 5

if (vijandX < 0) {
  vijandX = 1280
  vijandY = random(100,700)
  health = health - 1
 };
  // kogel
if (kogelX > 1280){
  kogelvliegt = false
kogelX = 1400;
}
  
if ( kogelvliegt === false && 
    keyIsDown(82)){
  kogelvliegt = true
  kogelX = spelerX;
  kogelY = spelerY;
}
  if (kogelvliegt === true) {
    kogelX = kogelX + 50
  }

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing kogel tegen vijand
 if (kogelX - vijandX < 50 &&
kogelX - vijandX >-50 &&
kogelY - vijandY < 50 &&
kogelY - vijandY >-50) 
{
kogelvliegt = false;
console.log("kill")
  kogelY = 7823
  vijandX = 1280
  vijandY = random(100,700)
  points = points + 1;
}
// update punten en health & botsing speler tegen vijand
if (spelerX - vijandX < 50 &&
   spelerX - vijandX >-50 &&
   spelerY - vijandY < 50 &&
   spelerY - vijandY >-50) 
   { health = health - 1 
       spelerY = 360
  spelerX = 200
   };
  if (health === 0){
     spelStatus = GAMEOVER;
  };

};

function preload() {
  img1 = loadImage('background happy.webp');
img2 = loadImage('pictures/gameover3.png');
img3 = loadImage('pictures/arrowkey.png');
img4 = loadImage('pictures/start3.png');
}

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
image (img1, 0, 0 ,1280, 720)
  // vijand
  fill("black");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  // kogel
 ellipse(kogelX - 25, kogelY - 25, 25, 25);
  // speler
    fill ("white")
  if (points >= 10){
    fill ("red")
    vijandX = vijandX - 6
  }
    if (points >= 20){
    fill ("blue")
    vijandX = vijandX - 7
  }
    if (points >= 30){
    fill ("green")
    vijandX = vijandX - 8
  }
  if (points >= 40){
    fill (51,0,102)
    vijandX = vijandX - 9
  }
    if (points >= 50){
    fill (255,255,0)
    vijandX = vijandX - 10
  }
  
  rect(spelerX - 25, spelerY - 25, 50, 50);
  // punten en health
 fill("black");
  textSize(50);
  text("points  "+points, 50,60);
   fill("black");
  textSize(50);
  text("health "+health, 1075,60);

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  
  
};

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  //startscherm
if(spelStatus ===START){
 image (img1, 0, 0 ,1280, 720)
   image (img3, 1000, 500 ,0, 0)
  image (img4, 150, 250 ,0, 0)
  if (keyIsDown (32)) {
    spelStatus = SPELEN
  }
}
//speelscherm
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
      spelstatus = START;
    }
  }
//gameover scherm
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm\
  image (img1, 0, 0 ,1280, 720)
    image (img2,450 ,150, 400, 400)
    text("press enter", 500, 200)
if (keyIsDown (13)) {
    spelerY = 360
  spelerX = 200
vijandX = 1265
  spelStatus = START;
  health = 5;
  points = 0;
}
  }
};


 
