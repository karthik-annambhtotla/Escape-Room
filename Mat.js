class Mat{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=loadImage("Images/doormat_level_1.png"); 
        this.mat=createSprite(this.x,this.y);
    }
    end(){
        this.mat.destroy();
    }
    display(){
        
        this.mat.addImage(this.image);
        this.mat.scale=0.15;

        if(mousePressedOver(this.mat)){
            this.mat.x=mouseX;
            this.mat.y=mouseY;
        }
     }
}