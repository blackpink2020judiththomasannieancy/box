class h{
    constructor(x,y,w,h){
        var ground_options ={
            isStatic: true
        }
    
       this.ground = Bodies.rectangle(x,y,w,h,ground_options);
        World.add(world,this.ground);
    this.w=w;
    this.h=h;
    
    
    
    
    
    
    }
    
    display(){
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
    
    
    }
    }