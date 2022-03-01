class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    Wall=createSprite(displayWidth-700,displayHeight-400);
    Wall.addImage(wall);
    Wall.scale=1.5
  
   
  
  
    house=createSprite(displayWidth-525,displayHeight-730);
    house.addImage(home);
    house.scale=0.2;
  
  
    
  
    line1=createSprite(displayWidth-790,displayHeight-750,370,10);
    line1.shapeColor='darkblue';
  
    line2=createSprite(displayWidth-255,displayHeight-750,420,10);
    line2.shapeColor='darkblue';
  
    line3=createSprite(displayWidth-460,displayHeight-720,10,70);
    line3.shapeColor='red';
  
    line4=createSprite(displayWidth-600,displayHeight-720,10,70);
    line4.shapeColor='red';
  
    line5=createSprite(displayWidth-590,displayHeight-680,30,10);
    line5.shapeColor='red';
  
    line6=createSprite(displayWidth-480,displayHeight-680,50,10);
    line6.shapeColor='red';
  
    line7=createSprite(displayWidth-50,displayHeight-350,10,800);
    line7.shapeColor='darkblue';
  
    line8=createSprite(displayWidth-970,displayHeight-350,10,800);
    line8.shapeColor='darkblue';
  
    line9=createSprite(displayWidth-570,displayHeight-650,10,70);
    line9.shapeColor='red';
  
    line10=createSprite(displayWidth-500,displayHeight-650,10,70);
    line10.shapeColor='red';
    
    line20=createSprite(displayWidth-750,displayHeight-40,10,140);
    line20.shapeColor='red';
  
    line21=createSprite(displayWidth-270,displayHeight-40,10,140);
    line21.shapeColor='red';
  
    line22=createSprite(displayWidth-170,displayHeight-40,10,140);
    line22.shapeColor='red';
  
    line23=createSprite(displayWidth-850,displayHeight-40,10,140);
    line23.shapeColor='red';
  
    line24=createSprite(displayWidth-170,displayHeight-100,10,140);
    line24.shapeColor='red';
  
    line25=createSprite(displayWidth-850,displayHeight-100,10,140);
    line25.shapeColor='red';
  
    line26=createSprite(displayWidth-270,displayHeight-100,10,140);
    line26.shapeColor='red';
  
    line27=createSprite(displayWidth-750,displayHeight-100,10,140);
    line27.shapeColor='red';
    line11=createSprite(displayWidth-790,displayHeight-5,370,10);
    line11.shapeColor='darkblue';
  
    line12=createSprite(displayWidth-235,displayHeight-5,370,10);
    line12.shapeColor='darkblue';
  
    line13=createSprite(displayWidth-510,displayHeight-35,10,280);
    line13.shapeColor='red';
  
    line14=createSprite(displayWidth-420,displayHeight-5,10,180);
    line14.shapeColor='red';
  
    line15=createSprite(displayWidth-600,displayHeight-5,10,180);
    line15.shapeColor='red';
  
    line16=createSprite(displayWidth-635,displayHeight-100,80,10);
    line16.shapeColor='red';
  
    line17=createSprite(displayWidth-385,displayHeight-100,80,10);
    line17.shapeColor='red';
  
    line18=createSprite(displayWidth-390,displayHeight-170,250,10);
    line18.shapeColor='red';
  
    line19=createSprite(displayWidth-630,displayHeight-170,250,10);
    line19.shapeColor='red';
  
  
   
    
    linez=createSprite(displayWidth-440,displayHeight-620,110,10);
    linez.shapeColor='red'
  
    linex=createSprite(displayWidth-620,displayHeight-620,110,10);
    linex.shapeColor='red'
  
    linec=createSprite(displayWidth-670,displayHeight-640,10,70);
    linec.shapeColor='red'
  
    linev=createSprite(displayWidth-390,displayHeight-640,10,70);
    linev.shapeColor='red'
  
    lineb=createSprite(displayWidth-740,displayHeight-680,150,10);
    lineb.shapeColor='red'
  
    linen=createSprite(displayWidth-320,displayHeight-680,150,10);
    linen.shapeColor='red'
  
  //+
    linem=createSprite(displayWidth-160,displayHeight-630,100,10);
    linem.shapeColor='white'
    lineF=createSprite(displayWidth-160,displayHeight-630,10,100);
    lineF.shapeColor='white'
    lineG=createSprite(displayWidth-160,displayHeight-630,10,100);
    lineG.shapeColor='white'
    lineH=createSprite(displayWidth-160,displayHeight-630,100,10);
    lineH.shapeColor='white'
  //+
    lineJ=createSprite(displayWidth-870,displayHeight-630,100,10);
    lineJ.shapeColor='white'
    lineK=createSprite(displayWidth-870,displayHeight-630,10,100);
    lineK.shapeColor='white'
    lineL=createSprite(displayWidth-870,displayHeight-630,10,100);
    lineL.shapeColor='white'
    lineD=createSprite(displayWidth-870,displayHeight-630,100,10);
    lineD.shapeColor='white'
  //N
    lineS=createSprite(displayWidth-850,displayHeight-400,10,150);
    lineS.shapeColor='yellow'
    lineA=createSprite(displayWidth-815,displayHeight-480,80,10);
    lineA.shapeColor='yellow'
    lineP=createSprite(displayWidth-780,displayHeight-400,10,150);
    lineP.shapeColor='yellow'
    lineO=createSprite(displayWidth-745,displayHeight-330,80,10);
    lineO.shapeColor='yellow'
    lineI=createSprite(displayWidth-710,displayHeight-400,10,150);
    lineI.shapeColor='yellow'
    lineU=createSprite(displayWidth-695,displayHeight-480,40,10);
    lineU.shapeColor='yellow'
    lineY=createSprite(displayWidth-865,displayHeight-330,40,10);
    lineY.shapeColor='yellow'
    lineT=createSprite(displayWidth-890,displayHeight-340,10,30);
    lineT.shapeColor='yellow'
    lineR=createSprite(displayWidth-670,displayHeight-470,10,30);
    lineR.shapeColor='yellow'
  //S
    lineE=createSprite(displayWidth-575,displayHeight-435,10,80);
    lineE.shapeColor='yellow'
    lineW=createSprite(displayWidth-485,displayHeight-365,10,80);
    lineW.shapeColor='yellow'
    lineQ=createSprite(displayWidth-530,displayHeight-400,100,10);
    lineQ.shapeColor='yellow'
    linel=createSprite(displayWidth-530,displayHeight-330,100,10);
    linel.shapeColor='yellow'
    linek=createSprite(displayWidth-530,displayHeight-480,100,10);
    linek.shapeColor='yellow'
    linej=createSprite(displayWidth-580,displayHeight-340,10,30);
    linej.shapeColor='yellow'
    lineh=createSprite(displayWidth-480,displayHeight-470,10,30);
    lineh.shapeColor='yellow'
  //M
    lineg=createSprite(displayWidth-355,displayHeight-330,50,10);
    lineg.shapeColor='yellow'
    linef=createSprite(displayWidth-375,displayHeight-340,10,30);
    linef.shapeColor='yellow'
    lined=createSprite(displayWidth-335,displayHeight-400,10,150);
    lined.shapeColor='yellow'
    lines=createSprite(displayWidth-315,displayHeight-480,50,10);
    lines.shapeColor='yellow'
    linea=createSprite(displayWidth-295,displayHeight-460,10,50);
    linea.shapeColor='yellow'
    linep=createSprite(displayWidth-275,displayHeight-440,50,10);
    linep.shapeColor='yellow'
    lineo=createSprite(displayWidth-255,displayHeight-460,10,50);
    lineo.shapeColor='yellow'
    linei=createSprite(displayWidth-235,displayHeight-480,50,10);
    linei.shapeColor='yellow'
    lineu=createSprite(displayWidth-215,displayHeight-400,10,150);
    lineu.shapeColor='yellow'
    liney=createSprite(displayWidth-195,displayHeight-330,50,10);
    liney.shapeColor='yellow'
    linet=createSprite(displayWidth-175,displayHeight-340,10,30);
    linet.shapeColor='yellow'
  
  //BLocks b/w name 
  
    liner=createSprite(displayWidth-410,displayHeight-400,50,10);
    liner.shapeColor='orange'
    linee=createSprite(displayWidth-640,displayHeight-400,50,10);
    linee.shapeColor='orange'
    linew=createSprite(displayWidth-905,displayHeight-250,120,10);
    linew.shapeColor='red'
  
   lineq=createSprite(displayWidth-115,displayHeight-250,120,10);
   lineq.shapeColor='red'
  
  //question
   q1=createSprite(displayWidth-650,displayHeight-30,30,30);
   q1.addImage(BlackHole);
   q1.scale=0.3;
  
   Q1=createSprite(displayWidth-910,displayHeight-30,30,30);
   Q1.addImage(BlackHole);
   Q1.scale=0.3;
  
   q2=createSprite(displayWidth-380,displayHeight-30,30,30);
   q2.addImage(BlackHole);
   q2.scale=0.3;
  
   Q2=createSprite(displayWidth-100,displayHeight-30,30,30);
   Q2.addImage(BlackHole);
   Q2.scale=0.3;
  
   //player
  
   plr2=createSprite(displayWidth-470,displayHeight-10);
    plr2.addImage(plr1F);
    plr2.scale=0.5;
    
    plr1=createSprite(displayWidth-550,displayHeight-10);
    plr1.addImage(plr1F);
    plr1.scale=0.5;
  
    //Key Instruction
  
   key1=createSprite(displayWidth-410,displayHeight-430);
   key1.addImage(Key);
   key1.scale=0.2;
  
   key2=createSprite(displayWidth-410,displayHeight-365);
   key2.addImage(Key);
   key2.scale=0.2;
  
   key3=createSprite(displayWidth-640,displayHeight-430);
   key3.addImage(Key);
   key3.scale=0.2;
  
   key4=createSprite(displayWidth-640,displayHeight-365);
   key4.addImage(Key);
   key4.scale=0.2;
  
  //hint
  
  H1=createSprite(displayWidth-610,displayHeight-650);
  H1.addImage(Hint);
  H1.scale=0.08
  
  H2=createSprite(displayWidth-460,displayHeight-650);
  H2.addImage(Hint);
  H2.scale=0.08
  
  //virus
  
  v1=createSprite(displayWidth-940,displayHeight-450);
  v1.addImage(V);
  v1.scale=0.05;
  
  v2=createSprite(displayWidth-140,displayHeight-450);
  v2.addImage(V);
  v2.scale=0.05;
    

  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        plr1[index-1].x = x;
        plr2[index-1].y = y;
       // console.log(index, player.index)

       
       
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(keyIsDown(LEFT_ARROW) && player.index !==null){
      plr1.velocityX=-2;
      plr1.velocityY=0;
      plr1.addImage(plr1L);
      plr1.update();
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !==null){
      plr1.velocityX=2;
      plr1.velocityY=0;
      plr1.addImage(plr1L);
      plr1.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !==null){
      plr1.velocityY=2;
      plr1.velocityX=0;
      plr1.addImage(plr1L);
      plr1.update();
    }

    if(keyIsDown(UP_ARROW) && player.index !==null){
      plr1.velocityY=-2;
      plr1.velocityX=0;
      plr1.addImage(plr1L);
      plr1.update();
    }
  if(plr1.isTouching(home)){
    gameState = 2;
  }
    
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
