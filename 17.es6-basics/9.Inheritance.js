class Shape {
    constructor(){

    }

    draw(){
        return "I am generic shape"
    }
}

class Circle extends Shape {
    constructor(){
        super()
    }

    // draw(){
    //     return "I am Circle"
    // }
}


let circle = new Circle()

console.log(circle.draw())