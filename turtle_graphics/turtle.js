class Turtle {
    
    constructor(x, y){
        this.turtle = '*'
        this.turtleLog = []
        this.x = x;
        this.y = y;
        this.direction = 'east'
    }
    
    forward(x){
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
        if(this.direction === 'east'){
            this.direction = 'north'
        } else if(this.direction === 'north'){
            this.direction = 'west'
        } else if(this.direction === 'west'){
            this.direction = 'south'
        } else if(this.direction === 'south'){
            this.direction = 'east'
        }
    }

    allPoints(x, y){
        this.turtleLog.push([x, y])
    }

}        





















