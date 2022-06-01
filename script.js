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
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 360; // y-positie van speler

var kogelX = spelerX; // x-positie van kogel
var kogelY = spelerY; // y-positie van kogel

var vijandX = 1265 // x-positie van vijand
var vijandY = 200// y-positie van vijand



var arrow_up = 38;
var arrow_down = 40;
var arrow_left = 37;
var arrow_right = 39;

var speed_speler = 10;


var shoot_ground = 69;
var shoot_sky = 82;

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
    spelerX = spelerX - 10
  }
  if (keyIsDown(arrow_up)) {
    spelerY = spelerY - 10
  }
    
 /*valt naar beneden*/
  else 
  {spelerY = spelerY + 5 } 
         
  if (keyIsDown (arrow_right)) {
    spelerX = spelerX + 10
  }
  if (keyIsDown (arrow_down)) {
    spelerY = spelerY + 10
  }
  };

/*grond*/
if  (spelerY > 694) {
  spelerY = 694
};   

if  (spelerY < 0) {
spelStatus = GAMEOVER;
};


 // vijand
  vijandX = vijandX - 8

if (vijandX < 0){
  vijandX = 1280
 };

    if (vijandX < 1 )   
  { vijandY = Math.floor(Math.random() * 690.)
};



  // kogel

    kogelX= spelerX
  kogelY = spelerY
  
if (keyIsDown(20))
{kogelX = kogelX + 5
}


  niggers
  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
//if (spelerX - vijandX < 50 &&
  // spelerX - vijandX >-50 &&
//spelerY - vijandY < 50 &&
 //  spelerY - vijandY >-50)
 //{
//   console.log("bots");
//   spelStatus = GAMEOVER;
 
//};
  // botsing kogel tegen vijand

  // update punten en health

if (spelerX - vijandX < 50 &&
   spelerX - vijandX >-50 &&
   spelerY - vijandY < 50 &&
   spelerY - vijandY >-50) 
   {health = health - 1 
       spelerY = 360
  spelerX = 200
   };

  if (health === 0){
     spelStatus = GAMEOVER;
  };

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
 background(108, 108, 108);
  
  // vijand

  fill("black");
  rect(vijandX - 25, vijandY - 25, 50, 50);

  if (vijandX < 0) 
  { vijandY = Math.floor(Math.random() * 720. )
}
  

  
  // kogel
 ellipse(kogelX - 25, kogelY - 25, 25, 25);


  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);

  // punten en health

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
  background('blue');
};

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm\
    text("game over klik spatie ", 200, 360)
    textSize(100)
if (keyIsDown (32)) {
  spelStatus = SPELEN 
    spelerY = 360
  spelerX = 200
vijandX = 1265
}
  }
};


//filler dingen begin  bro
 if (spelStatus === GAMEOVER) {
    // teken game-over scherm\
    text("game over klik spatie ", 200, 360)
    textSize(100)
if (keyIsDown (32)) {
  spelStatus = SPELEN 
    spelerY = 360
  spelerX = 200
vijandX = 1265
}
  }
};
//filler dingen einde bro 