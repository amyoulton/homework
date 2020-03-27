class Turtle {
    
    constructor(x, y){
        this.turtle = '*'
        this.turtleLog = [[x, y]]
        this.x = x;
        this.y = y;
        this.direction = 'east'
    }
    
    forward(n){
      if(this.direction === 'east'){
            for(let i = 1 ; i <= n; i++){
            this.turtleLog.push([this.x + i, this.y])
            }
            this.x += n
        } else if(this.direction === 'south'){
            for(let i = 1; i <= n; i++){
            this.turtleLog.push([this.x, this.y + i])
            }
            this.y += n
        } else if(this.direction === 'west'){
            for(let i = 1; i <= n; i++){
            this.turtleLog.push([this.x - i, this.y])
            }
            this.x -= n
        } else if(this.direction === 'north'){
            for(let i = 1; i <= n; i++){
            this.turtleLog.push([this.x, this.y - i])
            }
            this.y -= n
        }
      return this
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
        return this
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
        return this
    }

    allPoints(){
        return this.turtleLog
        return this
        
    }

}        