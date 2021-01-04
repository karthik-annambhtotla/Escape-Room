class Tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=loadImage("Images/tree.png"); 
        this.tree=createSprite(this.x,this.y);
    }
    display(){
        this.tree.addImage(this.image);
        
    }
}