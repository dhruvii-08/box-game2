class Box{
    constructor(){
        var options = {
            restitution: 1.8
          }
        
          this.body = Bodies.rectangle(200,200,20,20,options);
          World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y, 20,20);  
    }

}