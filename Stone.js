class Stone{
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, options);
        // this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
    }
}