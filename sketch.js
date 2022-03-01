
var gameState=0;
var playerCount;
var allPlayer;
var database;

var form,player,game;

function preload(){
  BG =loadImage("Bk.png");
  
  home=loadImage("House.png");

  Start=loadImage("st.jpeg");

  plr1F=loadImage("Player1F.png");
  plr1R=loadImage("Player1R.png");
  plr1L=loadImage("Player1L.png");

  Hint=loadImage("Book.png");

  BlackHole=loadImage("BlackHole.png");

  V=loadImage("virus.png");

  Key=loadImage("key.png");

  wall=loadImage("wall.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();



//FIRST BACKGROUND

BK=createSprite(displayWidth-500,displayHeight-400);
BK.addImage(BG);
BK.scale=2;

//BLACK ROW

Row1=createSprite(displayWidth-940,displayHeight-380,20,600);
Row1.shapeColor='black';

Row2=createSprite(displayWidth-80,displayHeight-380,20,600);
Row2.shapeColor="black";

Row3=createSprite(displayWidth-510,displayHeight-70,850,20);
Row3.shapeColor='black';

Row4=createSprite(displayWidth-510,displayHeight-690,850,20);
Row4.shapeColor='black';

//GREEN BLOCK

ST=createSprite(displayWidth-500,displayHeight-380);
ST.addImage(Start);
ST.scale=0.4;

Stand1=createSprite(displayWidth-980,displayHeight-730);
Stand1.shapeColor='Green';

Stand2=createSprite(displayWidth-980,displayHeight-30);
Stand2.shapeColor='Green';

Stand3=createSprite(displayWidth-40,displayHeight-30);
Stand3.shapeColor='Green';

Stand4=createSprite(displayWidth-40,displayHeight-730);
Stand4.shapeColor='Green';



}


function draw() {
  background(BG);

createEdgeSprites();

if(playerCount === 2){
  game.update(1);
}

if(gameState === 1){
  clear();
  game.play();
}

if(gameState === 2 ){
  game.end();
}

v1.bounceOff(lineS);
v1.bounceOff(line8);
v2.bounceOff(lineu);
v2.bounceOff(line7);


if(gameState===1){

if(keyDown('space')){
  v1.velocityX=3;
  v1.velocityY=0;
  v2.velocityX=3;
  v2.velocityY=0;
  ST.visible=false;
  Stand1.visible=false;
  Stand2.visible=false;
  Stand3.visible=false;
  Stand4.visible=false;
  Row1.visible=false;
  BK.visible=false;
  Row2.visible=false;
  Row3.visible=false;
  Row4.visible=false;
}


  plr1.collide(line1);
  plr1.collide(line2);
  plr1.collide(line3);
  plr1.collide(line4);
  plr1.collide(line5);
  plr1.collide(line6);
  plr1.collide(line7);
  plr1.collide(line8);
  plr1.collide(line9);
  plr1.collide(line10);
  plr1.collide(line11);
  plr1.collide(line12);
  plr1.collide(line13);
  plr1.collide(line14);
  plr1.collide(line15);
  plr1.collide(line16);
  plr1.collide(line17);
  plr1.collide(line18);
  plr1.collide(line19);
  plr1.collide(linea);
  plr1.collide(lines);
  plr1.collide(lined);
  plr1.collide(linef);
  plr1.collide(lineg);
  plr1.collide(lineh);
  plr1.collide(linej);
  plr1.collide(linek);
  plr1.collide(linel);
  plr1.collide(linez);
  plr1.collide(linex);
  plr1.collide(linec);
  plr1.collide(linev);
  plr1.collide(lineb);
  plr1.collide(linen);
  plr1.collide(linem);
  plr1.collide(lineQ);
  plr1.collide(lineW);
  plr1.collide(lineE);
  plr1.collide(lineR);
  plr1.collide(lineT);
  plr1.collide(lineY);
  plr1.collide(lineU);
  plr1.collide(lineI);
  plr1.collide(lineO);
  plr1.collide(lineP);
  plr1.collide(lineA);
  plr1.collide(lineS);
  plr1.collide(lineD);
  plr1.collide(lineF);
  plr1.collide(lineG);
  plr1.collide(lineH);
  plr1.collide(lineJ);
  plr1.collide(lineK);
  plr1.collide(lineL);
  plr1.collide(linep);
  plr1.collide(lineo);
  plr1.collide(linei);
  plr1.collide(lineu);
  plr1.collide(liney);
  plr1.collide(linet);
  plr1.collide(liner);
  plr1.collide(linee);
  plr1.collide(linew);
  plr1.collide(line27);
  plr1.collide(line26);
  plr1.collide(line25);
  plr1.collide(line24);
  plr1.collide(line23);
  plr1.collide(line22);
  plr1.collide(line21);
  plr1.collide(line20);
 
  
if(plr1.isTouching(q1)){
  plr1.x=displayWidth-910;
  plr1.y=displayHeight-30;
  plr1.velocityX=0;
  plr1.velocityY=0;
}



if(plr1.isTouching(key1)){
  plr1.x=displayWidth-550;
  plr1.y=displayHeight-10;
}

if(plr1.isTouching(key2)){
  plr1.x=displayWidth-550;
  plr1.y=displayHeight-10;
}

if(plr1.isTouching(key4)){
  plr1.x=displayWidth-550;
  plr1.y=displayHeight-10;
}

if(plr1.isTouching(key3)){
  plr1.x=displayWidth-530;
  plr1.y=displayHeight-680;
  plr1.velocityX=0;
  plr1.velocityY=0;
}

}
  drawSprites();
   }
