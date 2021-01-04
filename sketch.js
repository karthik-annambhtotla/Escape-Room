var backImage,backLevel1;
var man,manImage;
var edges;
var realKey,realKeyImage;
var fakeKey1,fakeKey2,fakeKey3,fakeKey4,fakeKey5,fakeKeyImage;
var Mat1,Mat2,Mat3,Mat4,Mat5,Mat6,MatImage;
var vase1,vase2,vaseImage;
var score=0;
var fakeKeyGroup;
var MatGroup;
var gameState="start";
var level=2;
var real_Key2,real_Key2Image;
var fake_key1,fake_key2,fake_key3,fake_key4,fake_key2Image;
var stone1,stone2,stone3,stone4,stoneImage;


function preload(){
    backImage=loadImage("Images/1.png");
    manImage=loadImage("Images/Stickman.png");
    realKeyImage=loadImage("Images/real_Key.png");
    fakeKeyImage=loadImage("Images/fake_Key.png");
    vaseImage=loadImage("Images/vase.png");
    level_2Image=loadImage("Images/Level_2_Image.jpeg");
    real_Key2Image=loadImage("Images/real_key_2.png");
    fake_key2Image=loadImage("Images/fake_2.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    man=createSprite(width/2+100,height/2-300);
    man.addImage("man",manImage);
    man.scale=0.5;
    //man.debug=true;
    man.setCollider("rectangle",0,0,20,man.height-10)

    realKey=createSprite(width/2+50,height-140);
    realKey.addImage("realKey",realKeyImage);
    realKey.scale=0.11;

    fakeKeyGroup=new Group();

    fakeKey1=createSprite(width/2+130,height/2-200);
    fakeKey1.addImage("fakeKey1",fakeKeyImage);
    fakeKey1.scale=0.15;
    fakeKeyGroup.add(fakeKey1);
    //fakeKey1.debug=true;
    fakeKey1.setCollider("rectangle",0,0,80,20)

    fakeKey2=createSprite(width-250,height-300);
    fakeKey2.addImage("fakeKey2",fakeKeyImage);
    fakeKey2.scale=0.15;
    fakeKeyGroup.add(fakeKey2);
    fakeKey2.setCollider("rectangle",0,0,80,20)

    fakeKey3=createSprite(220,height-300);
    fakeKey3.addImage("fakeKey3",fakeKeyImage);
    fakeKey3.scale=0.15;
    fakeKeyGroup.add(fakeKey3);
    fakeKey3.setCollider("rectangle",0,0,80,20)

    fakeKey4=createSprite(100,height-100);
    fakeKey4.addImage("fakeKey4",fakeKeyImage);
    fakeKey4.scale=0.15;
    fakeKeyGroup.add(fakeKey4);
    fakeKey4.setCollider("rectangle",0,0,80,20)

    fakeKey5=createSprite(570,270);
    fakeKey5.addImage("fakeKey5",fakeKeyImage);
    fakeKey5.scale=0.15;
    fakeKeyGroup.add(fakeKey5);
    fakeKey5.setCollider("rectangle",0,0,80,20);

    Mat1=new Mat(width/2+50,height-140);
   
    Mat2=new Mat(width/2+130,height/2-200);
    
    Mat3=new Mat(width-250,height-300);
   
    Mat4=new Mat(220,height-300);
   
    Mat5=new Mat(100,height-100);
    
    Mat6=new Mat(570,270);
    

    man.depth=man.depth+13;

    vase1=createSprite(width/2+250,height/2-25);
    vase1.addImage("vase1",vaseImage);
    vase1.scale=0.04;

    vase2=createSprite(width-300,220);
    vase2.addImage("vase2",vaseImage);
    vase2.scale=0.04;

    

    edges=createEdgeSprites();

}

function draw(){
    background(backImage);
if(level===1){
    fill("red");
    textSize(30);
    stroke("black");
    text("Score: "+score,width-190,50);
    if(gameState==="start"){
        Mat1.display();
        Mat2.display();
        Mat3.display();
        Mat4.display();
        Mat5.display();
        Mat6.display();
    }

    if(man.isTouching(realKey)){
        realKey.destroy();
        score=score+100;
        gameState="end"
    }

    if(gameState==="end"){
        man.destroy();
        fakeKeyGroup.destroyEach();
        vase1.destroy();
        vase2.destroy();
        Mat1.end();
        Mat2.end();
        Mat3.end();
        Mat4.end();
        Mat5.end();
        Mat6.end();
        background(0);
        textSize(70)
        fill("orange");
        text("Congratulations! You passed Level 1.",50,100);
        text("But Level 2 won't be Easy.",50,200);
        
    }

    if(man.isTouching(fakeKeyGroup)){
        score=score-5;
    }

    if(keyDown("UP_ARROW")){
        man.y=man.y-4;
    }

    if(keyDown("DOWN_ARROW")){
        man.y=man.y+4;
    }
    if(keyDown("RIGHT_ARROW")){
        man.x=man.x+4;
    }
    if(keyDown("LEFT_ARROW")){
        man.x=man.x-4;
    }

    man.bounceOff(edges)

    

   
}

if(keyDown("RIGHT_ARROW")&&gameState==="end"){
    level=2
}

if(level===2){
    background(level_2Image);

    real_Key2=createSprite(570,650);
    real_Key2.addImage("real_Key2",real_Key2Image);
    real_Key2.scale=0.15
    real_Key2.depth=10;

    var tree1=new Tree(100,400);
    tree1.display();
    var tree2=new Tree(300,400);
    tree2.display();
    var tree3=new Tree(500,400);
    tree3.display();
    var tree4=new Tree(700,400);
    tree4.display();
    var tree5=new Tree(900,400);
    tree5.display();
    var tree6=new Tree(1100,400);
    tree6.display();
    var tree7=new Tree(1300,400);
    tree7.display();

 

    var bush1=new Bush(500,700);
    bush1.display();
    var bush2=new Bush(600,580);
    bush2.display();
    var bush3=new Bush(170,600);
    bush3.display();
    var bush4=new Bush(1000,600);
    bush4.display();
    var bush5=new Bush(1150,710);
    bush5.display();
    

    stone1=new Stone(700,800);
    stone1.display();
    
    stone2=new Stone(200,750);
    stone2.display();
    
    stone3=new Stone(1100,850);
    stone3.display();
   
    stone4=new Stone(1350,650);
    stone4.display();

    fake_key1=createSprite(700,800);
    fake_key1.addImage("fake_key1",fake_key2Image);
    fake_key1.scale=0.10;
    fake_key1.depth=10;

    fake_key2=createSprite(200,750);
    fake_key2.addImage("fake_key2",fake_key2Image);
    fake_key2.scale=0.10;
    fake_key2.depth=10;

    fake_key3=createSprite(1100,850);
    fake_key3.addImage("fake_key3",fake_key2Image);
    fake_key3.scale=0.10;    
    fake_key3.depth=10;

    fake_key4=createSprite(1350,650);
    fake_key4.addImage("fake_key4",fake_key2Image);
    fake_key4.scale=0.10;
    fake_key4.depth=10;

 

    fill("red");
    textSize(30);
    stroke("black");
    text("Score: "+score,width-190,50);

}


drawSprites();
}