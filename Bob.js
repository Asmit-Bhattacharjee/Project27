class Bob {
    constructor(x, y, radius, angle) {
      var options = {
          isStatic:false,
          'restitution':1,
          'friction':0.5,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = 80;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("silver");
      strokeWeight(4);
      stroke("grey");
      circle(0, 0, this.radius);
      pop();
    }
  };