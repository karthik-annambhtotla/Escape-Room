class Stone{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=loadImage("Images/stone.png"); 
        this.stone=createSprite(this.x,this.y);
    }
    end(){
        this.stone.destroy();
    }
    display(){
        this.stone.addImage(this.image);
        this.stone.scale=0.55;
        this.stone.setCollider("rectangle",0,0,200,200);
        this.stone.debug=false;
   
         if(mousePressedOver(this.stone)){
             this.stone.x=mouseX;
             this.stone.y=mouseY;
         }
        
     }
}