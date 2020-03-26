class Turtle {
    
    constructor(x, y){
        const turtle = '*'
        let turtleLog = []
        let position;
        this.x = x;
        this.y = y;
    }
    forward(x){
        this.x += x
        if(position === 'right'){
            this.y += 1
        }
        if(position === 'left'){
            this.y -= 1
        }
        this.allPoints(this.x, this.y)
    }

    right(){
        position = 'right'
    }

    left(){
        position = 'left'
    }

    allPoints(x, y){
        turtleLog.push(x, y)
    }

    print(){
        for(log of turtleLog){
            while(log[0] !== log[2]){

            }
        }
        }
    }

// everything below this point is closer than above but also completely wrong

class Turtle {
    
    constructor(x, y){
        this.turtle = '*'
        this.turtleLog = [[x, y]]
        this.position = ''
        this.x = x;
        this.y = y;
    }
    forward(x){
        if(this.position === 'right'){
            this.y += x
        } else if(this.position === 'left'){
            this.y -= x
        }
        for(let i = 0; i <= x; i++){
          this.y += i
          this.allPoints(i, this.y)
    }
    }

    right(){
        this.position = 'right'
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
        





















