class Ball 
{
  constructor(x, y, r, angle) 
  {
    var options =
     { 
      density: 1, 
      friction: 0.005
    }

    this.body = Bodies.circle(x, y,r, options);
    this.radius = r;
   
    World.add(world, this.body);
  }

  display() 
  {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
