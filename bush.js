class Bush{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=loadImage("Images/BUSH.png")
        this.bush=createSprite(this.x,this.y);
    }
    display(){
        this.bush.addImage(this.image);
        this.bush.scale=0.3;
    }
}