class g{
constructor(x,y,w,h){
    var ground_options ={
        isStatic: false
    }

   this.ground = Bodies.rectangle(x,y,w,h,ground_options);
    World.add(world,this.ground);
this.w=w;
this.h=h;






}

display(){
   push ()
    translate(this.ground.position.x,this.ground.position.y)

    
    rotate (this.ground.angle)
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
pop ()

}
}