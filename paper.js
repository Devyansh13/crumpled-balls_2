class Paper{
    constructor(x, y,radius) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':5.0,
            'density':1.9,
        }
        this.radius=radius;
        this.body = Bodies.circle(x, y,radius/2,options);
        
        World.add(world, this.body);
        this.image = loadImage("paper.png");
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        //ellipseMode(RADIUS);
        //fill("aqua")
        //ellipse(0,0,70);
        pop();
        
        this.body.Visibility=false;imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
      }
}