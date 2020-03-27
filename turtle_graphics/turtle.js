class Turtle {
    
    constructor(x, y){
        this.turtle = '*'
        this.turtleLog = [[x, y]]
        this.x = x;
        this.y = y;
        this.direction = 'east'
    }
    
    forward(x){
    }
    }

    right(){
        if(this.direction === 'east'){
            this.direction = 'south'
        } else if(this.direction === 'south'){
            this.direction = 'west'
        } else if(this.direction === 'west'){
            this.direction = 'north'
        } else if(this.direction === 'north'){
            this.direction = 'east'
        }
    }

    left(){
        this.position = 'left'
    }

    allPoints(x, y){
        this.turtleLog.push([x, y])
    }

}
const flash = new Turtle(0, 0)
flash.forward(3)
flash.left()
flash.forward(3);
    console.log(flash.turtleLog)
        





















