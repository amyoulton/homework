class Turtle {
    
    constructor(x, y){
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
        console.log(this.turtleLog)
        return this
        
    }

    print(){
      this.newArray = this.turtleLog.concat.apply([],this.turtleLog)
      this.xCoordinates = []
      this.yCoordinates = []
      this.xMax = 0
      this.yMax = 0
      this.xMin = 0
      this.yMin = 0
      this.toPrint = []
      this.print = []
      this.turtle = ''
      for(let i = 0; i < this.newArray.length; i++){
        if(i % 2 === 0){
         this.xCoordinates.push(this.newArray[i])
        } else {
         this.yCoordinates.push(this.newArray[i])
        }
      }
    this.xMax += Math.max(...this.xCoordinates)
    this.yMax += Math.max(...this.yCoordinates)
    this.xMin += Math.min(...this.xCoordinates)
    this.yMin += Math.min(...this.yCoordinates)

    if (this.xMin > 0) this.xMin = 0;
    if (this.yMin > 0) this.yMin = 0;

  for(let y = this.yMin; y <= this.yMax; y++ ){
    for(let x = this.xMin; x <= this.xMax; x++){
       if(x === this.xMax){
    this.print.push(' - ')
    this.toPrint.push(this.print)
    this.print = []
       } else this.print.push(' - ')
        } 
    }
  
  for (let k = 0; k < this.turtleLog.length; k++) { 
   let x = this.turtleLog[k][0]
   let y = this.turtleLog[k][1]
   this.toPrint[y - this.yMin][x - this.xMin] = ' O '
  }

  for(let value of this.toPrint){
    for(let i = 0; i < value.length; i++){
     this.turtle += (value[i])
     if(i === value.length -1 ){
       this.turtle += '\n'
     }

    }
  }
    
    console.log(this.turtle)
  
    }

}        

let kiwi = new Turtle(0, 4)
kiwi.forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(5).print()