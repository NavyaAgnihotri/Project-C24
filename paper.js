class paper{
    constructor(x , y , radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.ellipse(x,y,radius,options);
        this.radius=radius;
        World.add(world , this.body);
     }

     display(){
         var position=this.body.position;
         var angle=this.body.angle;

         push();
         translate(position.x , position.y);
         rotate(angle);
         fill("white");
         ellipse(0,0,this.radius);
         pop();

     }
}