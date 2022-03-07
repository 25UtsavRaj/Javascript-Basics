function One() {
    return function two(){
        return function three(){
            return function four(){
                return "Welcome to nested functions"
            }
        }
    }
}

// 1st way
var first = One()
var second = first()
var third = second()
var four = third()
console.log(four)

// 2nd way 
console.log(One()()()())

function display(){

    var hello = function(){
        console.log( "Hello")
    }

    hello()
}

display()