class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness: 0.1, 
            length:10,
            
        }
        this.Sling = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.Sling);
    }
    display(){
        if (this.Sling.bodyA !== null){

        
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.Sling.bodyA = null;
    }
}
