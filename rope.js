class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:200,
            stiffness:1
        }
        this.body = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.body)
    }
    display(){
        var posA = this.body.bodyA.position;
        var posB = this.body.pointB;
        push();
        strokeWeight(4)
        line(posA.x,posA.y,posB.x,posB.y)
        pop();
        
        
    }
}