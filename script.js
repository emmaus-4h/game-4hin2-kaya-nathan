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

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var kogelX = 600; // x-positie van kogel
var kogelY = 600; // y-positie van kogel

var vijandX = 1300; // x-positie van vijand
var vijandY = 1300;// y-positie van vijand



var arrow_up = 38;
var arrow_down = 40;
var arrow_left = 37;
var arrow_right = 39;

var speed_speler = 10;


var shoot_ground = 69;
var shoot_sky = 82;
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

if  (spelerY < 1) {
spelStatus = GAMEOVER;
};


 // vijand
  vijandX = vijandX  - 10

  if (vijandX < 0){
    vijandX = 1280
  };
   



  // kogel
 

    

  
  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (spelerX - vijandX < 50 &&
   spelerX - vijandX >-50 &&
   spelerY - vijandY < 50 &&
   spelerY - vijandY >-50)
 {
   console.log("bots");
   spelStatus = GAMEOVER;
 
}
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
 background('blue');
  
  // vijand

  fill("black");
  rect(vijandX - 25, vijandY - 25, 50, 50);

  

  
  // kogel
 


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
    text("Reload voor nieuwe game", 100, 100)

  }
};
