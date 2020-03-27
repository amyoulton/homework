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

    print(){
      this.newArray = this.turtleLog.sort().concat.apply([],this.turtleLog)
      this.xCoordinates = []
      this.yCoordinates = []
      this.xAxis = 0
      this.yAxis = 0
      this.path = ''
      for(let i = 0; i < this.newArray.length; i++){
        if(i % 2 === 0){
         this.xCoordinates.push(this.newArray[i])
        } else {
         this.yCoordinates.push(this.newArray[i])
        }
      }
    this.xAxis += Math.max(...this.xCoordinates)
    this.yAxis += Math.max(...this.yCoordinates)
  
    for(let y = 0; y < this.yAxis; y++){
     this.path += ' -'
      for(let x = 0; x < this.xAxis; x++){
        if(x === this.xAxis - 1){
          this.path += '\n'
        } else {
         this.path += ' -'
          }
       }
    }  
    return this.path
    }

}        

let kiwi = new Turtle(0, 4)
 console.log(kiwi.forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3).print())