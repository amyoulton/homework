class Turtle {
    
    constructor(x, y){
        this.turtle = '*'
        this.turtleLog = []
        this.x = x;
        this.y = y;
        this.direction = 'east'
    }
    
    forward(n){
      if(this.direction === 'east'){
            this.x += n
            for(let i = 0; i <= this.x; i++){
            this.turtleLog.push([i, this.y])
            }
        } else if(this.direction === 'south'){
            this.y += n
            for(let i = 0; i <= this.y; i++){
            this.turtleLog.push([this.x, i])
            }
        } else if(this.direction === 'west'){
            this.x -= n
            for(let i = 0; i <= this.x; i++){
            this.turtleLog.push([i, this.y])
            }
        } else if(this.direction === 'north'){
            this.y -= n
            for(let i = 0; i <= this.y; i++){
            this.turtleLog.push([this.x, i])
            }
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

    allPoints(){
        return this.turtleLog
    }

}        

let kiwi = new Turtle(0, 4)
kiwi.forward(3)
kiwi.allPoints()